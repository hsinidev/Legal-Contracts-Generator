
import React, { useState, useMemo } from 'react';
import { GoogleGenAI } from '@google/genai';
import { generateDocx } from '../services/DocxGenerator';
import { TemplateData, templateGalleryData } from '../constants/TemplateData';
import { FormData, AgreementType } from '../types';

const StepIndicator: React.FC<{ step: string; title: string }> = ({ step, title }) => (
  <div className="flex items-center">
    <div className="flex-shrink-0 bg-gray-700 text-yellow-300 rounded-full h-8 w-8 flex items-center justify-center font-bold">
      {step}
    </div>
    <div className="ml-4 text-lg font-semibold text-white">{title}</div>
  </div>
);

// FIX: Corrected an invalid type reference for the 'template' prop. The previous type `typeof templateGalleryData[0][0]` was incorrect as `templateGalleryData[0]` is an object, not an array. The type now correctly references a single template object via `typeof templateGalleryData[0]['templates'][0]`.
const TemplateCard: React.FC<{ template: typeof templateGalleryData[0]['templates'][0]; onSelect: () => void; }> = ({ template, onSelect }) => (
    <button
        onClick={onSelect}
        className="w-full text-left p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/70 hover:border-yellow-400/50 transition-all duration-300 flex items-start space-x-4"
    >
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-700 rounded-md">
            <img 
                src={template.icon} 
                alt={`${template.title} icon`} 
                className="w-8 h-8"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // prevent infinite loop
                  target.src = '/default-document.svg';
                }}
            />
        </div>
        <div className="flex-1">
            <h3 className="font-bold text-white">{template.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{template.description}</p>
        </div>
    </button>
);


const ContractForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    agreementType: AgreementType.SimpleService,
    partyAName: '',
    partyAAddress: '',
    partyBName: '',
    partyBAddress: '',
    effectiveDate: '',
    scopeOfWork: '',
    compensationAmount: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<AgreementType | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTemplates = useMemo(() => {
      if (!searchTerm) {
          return templateGalleryData;
      }
      const lowercasedFilter = searchTerm.toLowerCase();
      return templateGalleryData.map(category => ({
          ...category,
          templates: category.templates.filter(template =>
              template.title.toLowerCase().includes(lowercasedFilter) ||
              template.description.toLowerCase().includes(lowercasedFilter)
          )
      })).filter(category => category.templates.length > 0);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateWithAI = async () => {
    if (!formData.scopeOfWork) {
      setError('Please provide a brief description for the AI.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Based on this user requirement: "${formData.scopeOfWork}", generate a detailed "Scope of Work" for a legal agreement. It should be a few paragraphs long, professionally worded, and clearly outline the services, deliverables, and timelines. Do not add any preamble like "Here is the Scope of Work".`,
      });
      
      const aiText = response.text;

      if (aiText) {
        setFormData(prev => ({ ...prev, scopeOfWork: aiText.trim() }));
      } else {
        setError('The AI could not generate the scope of work. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the AI service. Please check your setup.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTemplate) return;
    const templateText = TemplateData[selectedTemplate] || '';
    if (!templateText) {
        setError(`Template for "${selectedTemplate}" not found.`);
        return;
    }
    generateDocx({ ...formData, agreementType: selectedTemplate }, templateText);
  };
  
  const selectedTemplateDetails = useMemo(() => {
    return templateGalleryData.flatMap(c => c.templates).find(t => t.title === selectedTemplate);
  }, [selectedTemplate]);

  if (!selectedTemplate) {
      return (
          <div className="w-full max-w-6xl mx-auto">
              <StepIndicator step="1" title="Select a Document Template" />
              <div className="mt-4 mb-6 relative">
                  <input
                      type="text"
                      placeholder="Search over 100 templates (e.g., 'NDA', 'Lease', 'Invoice')..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
              </div>

              <div className="space-y-8">
                  {filteredTemplates.map(category => (
                      <div key={category.category}>
                          <h2 className="text-xl font-bold text-yellow-300 border-b-2 border-yellow-500/30 pb-2 mb-4">{category.category}</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {category.templates.map(template => (
                                  <TemplateCard key={template.title} template={template} onSelect={() => setSelectedTemplate(template.title as AgreementType)} />
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      )
  }

  const hasScopeOfWork = selectedTemplateDetails?.fields?.includes('scopeOfWork');
  const hasCompensation = selectedTemplateDetails?.fields?.includes('compensation');

  return (
    <div className="w-full max-w-4xl mx-auto">
        <button onClick={() => setSelectedTemplate(null)} className="mb-6 text-yellow-300 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Template Gallery
        </button>
      <div className="bg-gray-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
          {selectedTemplate}
        </h2>
        <p className="text-center text-gray-400 mb-8">Fill in the details below to generate your document.</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div>
            <StepIndicator step="1" title="Party Information" />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 border border-gray-700 rounded-lg">
                <div className="space-y-4">
                     <input type="text" name="partyAName" placeholder="Party A Name" required onChange={handleInputChange} className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                     <input type="text" name="partyAAddress" placeholder="Party A Address" required onChange={handleInputChange} className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                 <div className="space-y-4">
                     <input type="text" name="partyBName" placeholder="Party B Name" required onChange={handleInputChange} className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                     <input type="text" name="partyBAddress" placeholder="Party B Address" required onChange={handleInputChange} className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
            </div>
          </div>
          
          <div>
            <StepIndicator step="2" title="Agreement Details" />
             <div className="mt-4 space-y-6 p-4 border border-gray-700 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="effectiveDate">Effective Date</label>
                  <input type="date" id="effectiveDate" name="effectiveDate" required onChange={handleInputChange} className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" style={{ colorScheme: 'dark' }} />
                </div>

                {hasScopeOfWork && (
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="scopeOfWork">Scope of Work</label>
                        <textarea id="scopeOfWork" name="scopeOfWork" rows={5} placeholder="Briefly describe the work or services. You can expand on this with AI." onChange={handleInputChange} value={formData.scopeOfWork} className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
                        <div className="mt-2 text-right">
                        <button type="button" onClick={handleGenerateWithAI} disabled={isLoading} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-gray-500 disabled:cursor-not-allowed">
                          {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                          )}
                          {isLoading ? 'Generating...' : 'Generate with AI'}
                        </button>
                        </div>
                    </div>
                )}
                
                {hasCompensation && (
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="compensationAmount">Compensation Amount ($)</label>
                        <input type="number" id="compensationAmount" name="compensationAmount" placeholder="e.g., 5000" onChange={handleInputChange} className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    </div>
                )}
            </div>
          </div>
          
          {error && <p className="text-red-400 text-center">{error}</p>}
          
          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500 mb-4">Disclaimer: This tool generates templates and does not provide legal advice. Consult with a qualified attorney before using any legal document.</p>
            <button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-12 rounded-lg hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Generate & Download DOCX
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractForm;