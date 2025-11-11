import React, { useState, ReactNode } from 'react';
import Modal from './Modal';
import { SeoArticleContent, TableOfContents, FaqSection } from '../constants/SeoArticle';

interface LayoutProps {
  children: ReactNode;
}

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.05 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);

  const modalLinks = ["About", "Contact", "Guide", "Privacy Policy", "Terms of Service", "DMCA"];

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
    if (modalName !== 'Guide') {
      setIsGuideExpanded(false);
    }
  };
  
  const closeModal = () => {
    setActiveModal(null);
    setIsGuideExpanded(false);
  }

  const getModalContent = (modalName: string) => {
    switch (modalName) {
      case "About":
        return {
          title: "About Legal Contracts",
          content: <p>Legal Contracts is a modern tool designed to simplify the creation of basic legal agreement templates. Our mission is to provide small businesses, freelancers, and individuals with accessible, easy-to-use documents for common situations. Please remember, our templates are for informational purposes only and do not constitute legal advice. Always consult with a qualified attorney for your specific needs.</p>
        };
      case "Contact":
        return {
          title: "Contact Us",
          content: (
            <div>
              <p>For inquiries, support, or feedback, please reach out to us:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Email: <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a></li>
                <li>Website: <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">doodax.com</a></li>
              </ul>
            </div>
          )
        };
      case "Guide":
        return {
          title: "The Ultimate Guide to Boilerplate Legal Documents",
          content: (
            <div className="prose prose-invert max-w-none prose-a:text-blue-400 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg">
              <TableOfContents />
              <div className="relative">
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isGuideExpanded ? 'max-h-[5000px]' : 'max-h-14'}`}>
                  <div dangerouslySetInnerHTML={{ __html: SeoArticleContent }} />
                  <FaqSection />
                </div>
                 {!isGuideExpanded && (
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
                )}
                <button 
                  onClick={() => setIsGuideExpanded(!isGuideExpanded)}
                  className="mt-4 text-yellow-300 font-semibold hover:underline"
                >
                  {isGuideExpanded ? 'Read Less' : 'Read More...'}
                </button>
              </div>
            </div>
          )
        };
      case "Privacy Policy":
        return {
          title: "Privacy Policy",
          content: <p>We respect your privacy. This application runs entirely on the client-side. No data you enter is ever sent to or stored on our servers. All processing and document generation happens directly in your browser, ensuring your information remains private and secure.</p>
        };
      case "Terms of Service":
        return {
          title: "Terms of Service",
          content: <p>By using this service, you agree that you understand it is not a substitute for legal advice from a licensed attorney. The templates provided are for informational purposes only. We are not liable for any issues arising from the use of these documents. You are responsible for ensuring any agreement is legally sound and appropriate for your circumstances.</p>
        };
      case "DMCA":
        return {
          title: "DMCA Policy",
          content: <p>We respect intellectual property rights. If you believe any content on this site infringes on your copyright, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a> with a valid DMCA notice, and we will address it promptly.</p>
        };
      default:
        return { title: "", content: null };
    }
  };

  const { title, content } = getModalContent(activeModal || "");

  return (
    <div className="relative min-h-screen bg-[#00001a] text-gray-200 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <style>{`
        #stars, #stars2, #stars3 {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background-repeat: repeat;
        }
        #stars {
          background-image: radial-gradient(1px 1px at 25px 5px, white, rgba(255, 255, 255, 0)),
                            radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),
                            radial-gradient(1px 1px at 125px 80px, white, rgba(255, 255, 255, 0)),
                            radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0));
          background-size: 200px 200px;
          animation: move-background 150s linear infinite;
        }
        #stars2 {
          background-image: radial-gradient(1px 1px at 75px 120px, white, rgba(255, 255, 255, 0)),
                            radial-gradient(1px 1px at 150px 95px, white, rgba(255, 255, 255, 0));
          background-size: 250px 250px;
          animation: move-background 100s linear infinite;
        }
        #stars3 {
          background-image: radial-gradient(1px 1px at 30px 30px, white, rgba(255, 255, 255, 0)),
                            radial-gradient(1.5px 1.5px at 100px 100px, white, rgba(255, 255, 255, 0));
          background-size: 150px 150px;
          animation: move-background 50s linear infinite;
        }
        @keyframes move-background {
          from { background-position: 0 0; }
          to { background-position: -1000px 1000px; }
        }
      `}</style>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-4 px-4 sm:px-8 border-b border-gray-700/50 bg-black/30 backdrop-blur-sm sticky top-0">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <StarIcon />
              <h1 className="text-2xl font-bold text-white tracking-wider">Legal Contracts</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              {modalLinks.map(link => (
                <button key={link} onClick={() => openModal(link)} className="text-gray-300 hover:text-white transition-colors duration-300">{link}</button>
              ))}
            </nav>
            <div className="md:hidden">
                <select onChange={(e) => e.target.value && openModal(e.target.value)} defaultValue="" className="bg-gray-800 border border-gray-600 rounded-md px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option value="">Menu</option>
                    {modalLinks.map(link => (
                        <option key={link} value={link}>{link}</option>
                    ))}
                </select>
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="py-6 px-4 sm:px-8 text-center border-t border-gray-700/50 bg-black/30 backdrop-blur-sm">
          <div className="text-gray-400">
            <p className="mb-2">
              <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-[#FFD700] hover:underline">
                Powered by HSINI MOHAMED
              </a>
            </p>
            <p className="text-sm">
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:underline">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:underline">hsini.web@gmail.com</a>
            </p>
          </div>
        </footer>
      </div>

      <Modal isOpen={!!activeModal} onClose={closeModal} title={title}>
        {content}
      </Modal>
    </div>
  );
};

export default Layout;