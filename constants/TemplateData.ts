// FIX: This file was regenerated to fix module loading errors. It now contains the necessary data structures and exports for the application to function correctly.
import { AgreementType } from '../types';

export const templateGalleryData = [
  {
    category: 'Startup & Corporate',
    templates: [
      { title: AgreementType.NDA, description: 'Protect sensitive information shared between parties.', icon: '/icons/corporate.svg', fields: [] },
      { title: AgreementType.FounderAgreement, description: 'Define roles, responsibilities, and equity for co-founders.', icon: '/icons/corporate.svg', fields: ['scopeOfWork'] },
      { title: AgreementType.ShareholderAgreement, description: 'Govern the relationship between a company\'s shareholders.', icon: '/icons/corporate.svg', fields: [] },
      { title: AgreementType.OperatingAgreement, description: 'Outline the functional and financial decisions for an LLC.', icon: '/icons/corporate.svg', fields: [] },
      { title: AgreementType.Bylaws, description: 'Set the rules for a corporation\'s internal management.', icon: '/icons/corporate.svg', fields: [] },
      { title: AgreementType.ArticlesOfIncorporation, description: 'The primary corporate charter document filed with the state.', icon: '/icons/corporate.svg', fields: [] },
      { title: AgreementType.BoardResolution, description: 'Document a binding decision made by the board of directors.', icon: '/icons/corporate.svg', fields: ['scopeOfWork'] },
      { title: AgreementType.AdvisoryBoardAgreement, description: 'Formalize the relationship with and compensation for advisors.', icon: '/icons/corporate.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.VestingAgreement, description: 'Define the schedule for earning stock or options over time.', icon: '/icons/corporate.svg', fields: ['compensation'] },
      { title: AgreementType.StockPurchaseAgreement, description: 'Govern the sale and purchase of company stock.', icon: '/icons/corporate.svg', fields: ['compensation'] },
      { title: AgreementType.AssetPurchaseAgreement, description: 'Document the sale of significant business assets.', icon: '/icons/corporate.svg', fields: ['compensation'] },
      { title: AgreementType.MergerAgreement, description: 'Outline the terms for combining two companies.', icon: '/icons/corporate.svg', fields: [] },
      { title: AgreementType.LetterOfIntent, description: 'A non-binding document outlining the main points of a proposed deal.', icon: '/icons/corporate.svg', fields: ['scopeOfWork'] },
      { title: AgreementType.TermSheet, description: 'A non-binding agreement setting out the basic terms of an investment.', icon: '/icons/corporate.svg', fields: ['compensation'] },
      { title: AgreementType.BusinessPlan, description: 'Outline your business goals and strategies to achieve them.', icon: '/icons/corporate.svg', fields: ['scopeOfWork'] },
      { title: AgreementType.CorporateResolution, description: 'Formally record a specific action taken by a corporation.', icon: '/icons/corporate.svg', fields: ['scopeOfWork'] },
      { title: AgreementType.MinutesOfMeeting, description: 'Keep a formal record of proceedings during a meeting.', icon: '/icons/corporate.svg', fields: [] },
      { title: AgreementType.CapitalizationTable, description: 'A spreadsheet detailing a company\'s equity ownership.', icon: '/icons/corporate.svg', fields: [] },
      { title: AgreementType.ProxyStatement, description: 'A document containing information for shareholder voting.', icon: '/icons/corporate.svg', fields: [] },
      { title: AgreementType.ShareCertificate, description: 'A legal document certifying ownership of shares in a corporation.', icon: '/icons/corporate.svg', fields: ['compensation'] },
    ],
  },
  {
    category: 'HR & Employment',
    templates: [
      { title: AgreementType.IndependentContractor, description: 'Hire a contractor for a specific project or service.', icon: '/icons/hr.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.OfferLetter, description: 'Formally offer a job to a candidate with key terms.', icon: '/icons/hr.svg', fields: ['compensation'] },
      { title: AgreementType.EmploymentAgreement, description: 'A comprehensive contract for a new employee.', icon: '/icons/hr.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.EmployeeHandbook, description: 'Outline company policies, procedures, and expectations.', icon: '/icons/hr.svg', fields: [] },
      { title: AgreementType.SeparationAgreement, description: 'Terms of an employee\'s departure from the company.', icon: '/icons/hr.svg', fields: ['compensation'] },
      { title: AgreementType.PerformanceImprovementPlan, description: 'Document steps for an employee to improve performance.', icon: '/icons/hr.svg', fields: ['scopeOfWork'] },
      { title: AgreementType.JobDescription, description: 'Clearly define the roles and responsibilities of a position.', icon: '/icons/hr.svg', fields: ['scopeOfWork'] },
      { title: AgreementType.NonCompeteAgreement, description: 'Prevent an ex-employee from competing for a certain period.', icon: '/icons/hr.svg', fields: [] },
      { title: AgreementType.EmployeeWarningNotice, description: 'Formally document a disciplinary action or warning.', icon: '/icons/hr.svg', fields: ['scopeOfWork'] },
      { title: AgreementType.RecruitmentServicesAgreement, description: 'Engage a third-party recruiter to find candidates.', icon: '/icons/hr.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.InternshipAgreement, description: 'Define the terms of an internship, paid or unpaid.', icon: '/icons/hr.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.VolunteerAgreement, description: 'Outline the expectations and role of a volunteer.', icon: '/icons/hr.svg', fields: ['scopeOfWork'] },
      { title: AgreementType.EmployeeBenefitsSummary, description: 'Provide an overview of the benefits offered to employees.', icon: '/icons/hr.svg', fields: [] },
      { title: AgreementType.BackgroundCheckPolicy, description: 'Inform candidates about your company\'s background check process.', icon: '/icons/hr.svg', fields: [] },
      { title: AgreementType.WorkFromHomePolicy, description: 'Set guidelines and expectations for remote work.', icon: '/icons/hr.svg', fields: [] },
    ],
  },
  {
    category: 'Sales & Services',
    templates: [
      { title: AgreementType.SimpleService, description: 'A basic contract for providing services to a client.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.ConsultingAgreement, description: 'Engage a consultant for their expert advice and services.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.MasterServiceAgreement, description: 'A foundational contract governing future work and SOWs.', icon: '/icons/sales.svg', fields: [] },
      { title: AgreementType.StatementOfWork, description: 'Define the specifics of a project under an MSA.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.SalesAgreement, description: 'Document the terms of a sale of goods or products.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.InfluencerAgreement, description: 'Contract with a social media influencer for marketing.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.AffiliateAgreement, description: 'Set terms for partners who promote your products for a commission.', icon: '/icons/sales.svg', fields: ['compensation'] },
      { title: AgreementType.ReferralAgreement, description: 'Reward parties for referring new clients or customers.', icon: '/icons/sales.svg', fields: ['compensation'] },
      { title: AgreementType.DistributionAgreement, description: 'Authorize a third party to sell and market your products.', icon: '/icons/sales.svg', fields: [] },
      { title: AgreementType.FranchiseAgreement, description: 'Grant a franchisee the right to operate a business under your brand.', icon: '/icons/sales.svg', fields: [] },
      { title: AgreementType.CateringContract, description: 'Outline terms for providing food services for an event.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.EventPlanningContract, description: 'Hire a professional to plan and execute an event.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.PhotographyServicesAgreement, description: 'Contract a photographer for an event or project.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.VideographyServicesAgreement, description: 'Contract a videographer for an event or project.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.WebDesignContract, description: 'Outline the scope and payment for web development services.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.MarketingServicesAgreement, description: 'Engage a marketing agency or freelancer for promotional work.', icon: '/icons/sales.svg', fields: ['scopeOfWork', 'compensation'] },
    ],
  },
  {
    category: 'Intellectual Property',
    templates: [
      { title: AgreementType.IPAssignment, description: "Transfer ownership of intellectual property from one party to another.", icon: "/icons/ip.svg", fields: ['scopeOfWork'] },
      { title: AgreementType.TrademarkLicense, description: "Grant permission to use your trademark under specific conditions.", icon: "/icons/ip.svg", fields: ['compensation'] },
      { title: AgreementType.CopyrightLicense, description: "Grant rights to use a copyrighted work (e.g., music, photos).", icon: "/icons/ip.svg", fields: ['compensation'] },
      { title: AgreementType.PatentLicense, description: "Allow another party to make, use, or sell your patented invention.", icon: "/icons/ip.svg", fields: ['compensation'] },
      { title: AgreementType.SoftwareLicense, description: "Set the terms for end-users to use your software (EULA).", icon: "/icons/ip.svg", fields: [] },
      { title: AgreementType.PrivacyPolicy, description: "Inform users how you collect, use, and protect their data.", icon: "/icons/ip.svg", fields: [] },
      { title: AgreementType.TermsOfService, description: "Define the rules and guidelines for using your website or service.", icon: "/icons/ip.svg", fields: [] },
      { title: AgreementType.DMCAComplaint, description: "A notice to a service provider to take down infringing content.", icon: "/icons/ip.svg", fields: ['scopeOfWork'] },
      { title: AgreementType.PhotoRelease, description: "Get consent to use someone's image or likeness.", icon: "/icons/ip.svg", fields: [] },
      { title: AgreementType.ModelRelease, description: "A photo release specifically for professional models.", icon: "/icons/ip.svg", fields: ['compensation'] },
      { title: AgreementType.IdeaSubmissionAgreement, description: "Protect your company when receiving unsolicited ideas.", icon: "/icons/ip.svg", fields: [] },
      { title: AgreementType.CeaseAndDesistIP, description: "Demand that a party stops infringing on your IP rights.", icon: "/icons/ip.svg", fields: ['scopeOfWork'] },
    ]
  },
  {
      category: "Financial Agreements",
      templates: [
          { title: AgreementType.PromissoryNote, description: "A written promise to pay a specific sum of money to a party.", icon: "/icons/financial.svg", fields: ['compensation'] },
          { title: AgreementType.LoanAgreement, description: "Detail the terms of a loan, including interest and repayment.", icon: "/icons/financial.svg", fields: ['compensation'] },
          { title: AgreementType.SecurityAgreement, description: "Pledge an asset as collateral for a loan.", icon: "/icons/financial.svg", fields: ['compensation'] },
          { title: AgreementType.InvestmentAgreement, description: "Outline the terms of an investment into your company.", icon: "/icons/financial.svg", fields: ['compensation'] },
          { title: AgreementType.SAFEAgreement, description: "An agreement for future equity in a company, common for startups.", icon: "/icons/financial.svg", fields: ['compensation'] },
          { title: AgreementType.ConvertibleNote, description: "A form of short-term debt that converts into equity.", icon: "/icons/financial.svg", fields: ['compensation'] },
          { title: AgreementType.InvoiceTemplate, description: "A standard form for billing clients for goods or services.", icon: "/icons/financial.svg", fields: ['compensation', 'scopeOfWork'] },
          { title: AgreementType.PurchaseOrder, description: "A commercial document issued by a buyer to a seller.", icon: "/icons/financial.svg", fields: ['compensation', 'scopeOfWork'] },
          { title: AgreementType.ExpenseReport, description: "A form for employees to report business-related expenses.", icon: "/icons/financial.svg", fields: ['compensation'] },
          { title: AgreementType.GuarantyAgreement, description: "A promise by a third party to assume a debt if the borrower defaults.", icon: "/icons/financial.svg", fields: ['compensation'] },
      ]
  },
  {
      category: "Real Estate",
      templates: [
          { title: AgreementType.CommercialLease, description: "Lease a property for business purposes.", icon: "/icons/real-estate.svg", fields: ['compensation'] },
          { title: AgreementType.ResidentialLease, description: "Rent out a residential property to a tenant.", icon: "/icons/real-estate.svg", fields: ['compensation'] },
          { title: AgreementType.SubleaseAgreement, description: "A tenant rents their existing leased property to a new subtenant.", icon: "/icons/real-estate.svg", fields: ['compensation'] },
          { title: AgreementType.RentalApplication, description: "Collect information from prospective tenants.", icon: "/icons/real-estate.svg", fields: [] },
          { title: AgreementType.LeaseTermination, description: "Formally end a lease agreement earlier than the original term.", icon: "/icons/real-estate.svg", fields: [] },
          { title: AgreementType.EvictionNotice, description: "The first step in the legal process of evicting a tenant.", icon: "/icons/real-estate.svg", fields: [] },
          { title: AgreementType.RealEstatePurchase, description: "The primary contract for buying or selling property.", icon: "/icons/real-estate.svg", fields: ['compensation'] },
          { title: AgreementType.PropertyManagement, description: "Hire a company to manage your rental property.", icon: "/icons/real-estate.svg", fields: ['scopeOfWork', 'compensation'] },
          { title: AgreementType.ConstructionContract, description: "Outline the terms for a construction project.", icon: "/icons/real-estate.svg", fields: ['scopeOfWork', 'compensation'] },
          { title: AgreementType.HomeInspectionContract, description: "Engage a professional to inspect a property before purchase.", icon: "/icons/real-estate.svg", fields: ['scopeOfWork', 'compensation'] },
      ]
  },
  {
      category: "Partnerships & Joint Ventures",
      templates: [
          { title: AgreementType.PartnershipAgreement, description: "Define the rights, responsibilities, and profit-sharing for business partners.", icon: "/icons/partnerships.svg", fields: ['scopeOfWork'] },
          { title: AgreementType.JointVentureAgreement, description: "Two or more parties agree to collaborate on a specific project.", icon: "/icons/partnerships.svg", fields: ['scopeOfWork'] },
          { title: AgreementType.StrategicAllianceAgreement, description: "Parties agree to cooperate to achieve a common business objective.", icon: "/icons/partnerships.svg", fields: ['scopeOfWork'] },
          { title: AgreementType.MOU, description: "A non-binding agreement that outlines a future, more detailed contract.", icon: "/icons/partnerships.svg", fields: ['scopeOfWork'] },
      ]
  },
  {
      category: "General Business & Legal",
      templates: [
          { title: AgreementType.PowerOfAttorney, description: "Grant someone the authority to act on your behalf in legal or financial matters.", icon: "/icons/general.svg", fields: [] },
          { title: AgreementType.IndemnityAgreement, description: "One party agrees to protect another from loss or damage.", icon: "/icons/general.svg", fields: ['scopeOfWork'] },
          { title: AgreementType.WaiverRelease, description: "A party voluntarily gives up a right, claim, or privilege.", icon: "/icons/general.svg", fields: ['scopeOfWork'] },
          { title: AgreementType.SettlementAgreement, description: "Resolve a dispute between parties and release them from future claims.", icon: "/icons/general.svg", fields: ['compensation'] },
          { title: AgreementType.DemandLetter, description: "A formal letter demanding payment or action before taking legal steps.", icon: "/icons/general.svg", fields: ['compensation'] },
          { title: AgreementType.Affidavit, description: "A sworn written statement confirmed by oath or affirmation.", icon: "/icons/general.svg", fields: ['scopeOfWork'] },
          { title: AgreementType.NotaryAcknowledgement, description: "A form used by a notary public to certify a signature.", icon: "/icons/general.svg", fields: [] },
          { title: AgreementType.BillOfSale, description: "Transfer ownership of personal property from a seller to a buyer.", icon: "/icons/general.svg", fields: ['compensation'] },
          { title: AgreementType.ConsignmentAgreement, description: "A seller (consignor) gives goods to another party (consignee) to sell.", icon: "/icons/general.svg", fields: ['scopeOfWork', 'compensation'] },
          { title: AgreementType.EquipmentLease, description: "An agreement to rent equipment for a specific period and price.", icon: "/icons/general.svg", fields: ['scopeOfWork', 'compensation'] },
          { title: AgreementType.BetaTestAgreement, description: "Set terms for users testing a pre-release product.", icon: "/icons/general.svg", fields: [] },
          { title: AgreementType.SponsorshipAgreement, description: "Outline the terms of a sponsorship for an event or entity.", icon: "/icons/general.svg", fields: ['scopeOfWork', 'compensation'] },
          { title: AgreementType.ConfidentialityAgreement, description: "A synonym for a Non-Disclosure Agreement (NDA).", icon: "/icons/general.svg", fields: [] },
      ]
  },
];


const genericHeader = (title: string) => `
${title.toUpperCase()}

This Agreement is made and entered into as of [EFFECTIVE_DATE] (the "Effective Date"), by and between:

Party A: [PARTY_A_NAME] (hereinafter referred to as "Party A"), with an address of [PARTY_A_ADDRESS].
and
Party B: [PARTY_B_NAME] (hereinafter referred to as "Party B"), with an address of [PARTY_B_ADDRESS].

Party A and Party B may be referred to individually as a "Party" and collectively as the "Parties."

RECITALS
WHEREAS, the Parties wish to enter into this Agreement to set forth the terms and conditions for their relationship;
NOW, THEREFORE, in consideration of the mutual covenants contained herein, the Parties agree as follows:
`;

const genericSignature = `
IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.

PARTY A

_________________________
[PARTY_A_NAME]


PARTY B

_________________________
[PARTY_B_NAME]
`;

const createTemplate = (title: string, body: string) => `${genericHeader(title)}\n${body}\n${genericSignature}`;

// Helper function to create simple templates.
const simpleTemplate = (title: string, mainClause: string) => createTemplate(title, mainClause);

const serviceTemplate = (title: string) => createTemplate(title, `
1. SERVICES. Party B agrees to provide the following services to Party A:
[SCOPE_OF_WORK]

2. COMPENSATION. Party A agrees to pay Party B the total amount of [COMPENSATION_AMOUNT] for the services rendered.

3. TERM AND TERMINATION. This Agreement shall commence on the Effective Date and continue until the services are completed, unless terminated earlier by either party with written notice.

4. INDEPENDENT CONTRACTOR. Party B is an independent contractor, and nothing in this Agreement shall be construed as creating an employer-employee relationship.
`);

const allAgreementTypes = Object.values(AgreementType);
const initialTemplateData = {} as Record<AgreementType, string>;

for (const type of allAgreementTypes) {
    if (type.toLowerCase().includes('service') || type.toLowerCase().includes('consulting') || type.toLowerCase().includes('contractor') || type.toLowerCase().includes('agreement')) {
        initialTemplateData[type] = serviceTemplate(type);
    } else {
        initialTemplateData[type] = simpleTemplate(type, `1. PURPOSE. The purpose of this document is to outline the terms and conditions agreed upon by the Parties regarding ${type.toLowerCase()}.\n\n2. KEY DETAILS.\nDetails: [SCOPE_OF_WORK]\n\nFinancials: [COMPENSATION_AMOUNT]`);
    }
}

// Override specific templates for better quality
initialTemplateData[AgreementType.NDA] = createTemplate('Non-Disclosure Agreement', `
1. DEFINITION OF CONFIDENTIAL INFORMATION. For purposes of this Agreement, "Confidential Information" shall include all information or material that has or could have commercial value or other utility in the business in which Disclosing Party is engaged.

2. OBLIGATIONS OF RECEIVING PARTY. Receiving Party shall hold and maintain the Confidential Information in strictest confidence for the sole and exclusive benefit of the Disclosing Party.

3. TERM. The non-disclosure provisions of this Agreement shall survive the termination of this Agreement and Receiving Party's duty to hold Confidential Information in confidence shall remain in effect indefinitely.
`);
initialTemplateData[AgreementType.ConfidentialityAgreement] = initialTemplateData[AgreementType.NDA];


initialTemplateData[AgreementType.SimpleService] = serviceTemplate('Simple Service Agreement');
initialTemplateData[AgreementType.IndependentContractor] = serviceTemplate('Independent Contractor Agreement');
initialTemplateData[AgreementType.ConsultingAgreement] = serviceTemplate('Consulting Agreement');

initialTemplateData[AgreementType.OfferLetter] = `
[EFFECTIVE_DATE]

[PARTY_B_NAME]
[PARTY_B_ADDRESS]

Dear [PARTY_B_NAME],

[PARTY_A_NAME] (the "Company") is pleased to offer you the position of [Position Title]. We were impressed with your qualifications and believe you will be a great asset to our team.

Your starting salary will be [COMPENSATION_AMOUNT] per year, payable in accordance with the Company's standard payroll practices.

This letter is not a contract of employment, and employment with the Company is on an "at-will" basis.

Sincerely,
[PARTY_A_NAME]
_________________________
`;

initialTemplateData[AgreementType.BillOfSale] = createTemplate('Bill of Sale', `
1. SALE OF GOODS. The Seller, [PARTY_A_NAME], hereby sells, transfers, and delivers to the Buyer, [PARTY_B_NAME], the following goods: [SCOPE_OF_WORK].

2. PURCHASE PRICE. The Buyer agrees to pay the Seller the purchase price of [COMPENSATION_AMOUNT].

3. "AS IS" CONDITION. The goods are sold in "AS IS" condition, with no warranties, express or implied.
`);


export const TemplateData: Record<AgreementType, string> = initialTemplateData;
