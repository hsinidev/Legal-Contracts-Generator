
import { AgreementType } from '../types';

export const templateGalleryData = [
  {
    category: 'Startup & Corporate',
    templates: [
      { title: AgreementType.NDA, description: "Protect sensitive information shared between parties.", icon: "/confidentiality-agreement.svg", fields: ['scopeOfWork'] },
      { title: AgreementType.FounderAgreement, description: "Define roles, responsibilities, and equity for co-founders.", icon: "/founder-agreement.svg", fields: ['scopeOfWork'] },
      { title: AgreementType.ShareholderAgreement, description: "Govern the relationship between a company's shareholders.", icon: "/shareholder-agreement.svg", fields: [] },
      { title: AgreementType.OperatingAgreement, description: "Outline the ownership and operating procedures of an LLC.", icon: "/operating-agreement.svg", fields: [] },
      { title: AgreementType.Bylaws, description: "Establish the internal rules for governing a corporation.", icon: "/bylaws.svg", fields: [] },
      { title: AgreementType.ArticlesOfIncorporation, description: "The primary document to form a new corporation.", icon: "/articles-of-incorporation.svg", fields: [] },
      { title: AgreementType.BoardResolution, description: "Document a formal decision made by the board of directors.", icon: "/board-resolution.svg", fields: [] },
      { title: AgreementType.AdvisoryBoardAgreement, description: "Formalize the relationship with an advisory board member.", icon: "/advisory-board-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.VestingAgreement, description: "Detail the schedule for earning stock or options over time.", icon: "/vesting-agreement.svg", fields: ['compensation'] },
      { title: AgreementType.StockPurchaseAgreement, description: "An agreement for the sale and purchase of company stock.", icon: "/stock-purchase-agreement.svg", fields: ['compensation'] },
      { title: AgreementType.AssetPurchaseAgreement, description: "Document the sale of significant business assets.", icon: "/asset-purchase-agreement.svg", fields: ['compensation'] },
      { title: AgreementType.MergerAgreement, description: "Formalize the terms of a business merger.", icon: "/merger-agreement.svg", fields: [] },
      { title: AgreementType.LetterOfIntent, description: "A non-binding document outlining the main terms of a potential deal.", icon: "/letter-of-intent.svg", fields: ['scopeOfWork'] },
      { title: AgreementType.TermSheet, description: "A summary of the key financial and other terms of a proposed venture.", icon: "/term-sheet.svg", fields: ['compensation'] },
      { title: AgreementType.BusinessPlan, description: "A formal document outlining a company's goals and strategies.", icon: "/business-plan.svg", fields: [] },
      { title: AgreementType.MinutesOfMeeting, description: "Official record of the proceedings of a meeting.", icon: "/minutes-of-meeting.svg", fields: [] },
    ]
  },
  {
    category: 'HR & Employment',
    templates: [
      { title: AgreementType.IndependentContractor, description: "Hire a freelancer or contractor for a specific project.", icon: "/contractor-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.OfferLetter, description: "A formal offer of employment to a candidate.", icon: "/offer-letter.svg", fields: ['compensation'] },
      { title: AgreementType.EmploymentAgreement, description: "Define the terms and conditions of employment.", icon: "/employment-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.EmployeeHandbook, description: "A guide to a company's policies and procedures.", icon: "/employee-handbook.svg", fields: [] },
      { title: AgreementType.SeparationAgreement, description: "Terms for an employee's departure from a company.", icon: "/separation-agreement.svg", fields: ['compensation'] },
      { title: AgreementType.PerformanceImprovementPlan, description: "Document steps for an employee to improve performance.", icon: "/pip-agreement.svg", fields: ['scopeOfWork'] },
      { title: AgreementType.NonCompeteAgreement, description: "Prevent an employee from competing after termination.", icon: "/non-compete-agreement.svg", fields: [] },
      { title: AgreementType.InternshipAgreement, description: "Define the terms of an internship for a student or trainee.", icon: "/internship-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.WorkFromHomePolicy, description: "Establish rules and guidelines for remote work.", icon: "/work-from-home-policy.svg", fields: [] },
    ]
  },
  {
    category: 'Sales & Services',
    templates: [
      { title: AgreementType.SimpleService, description: "A basic contract for providing services to a client.", icon: "/simple-service-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.ConsultingAgreement, description: "Hire an expert consultant for advice and services.", icon: "/consulting-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.MasterServiceAgreement, description: "A foundational contract governing future transactions or projects.", icon: "/master-service-agreement.svg", fields: [] },
      { title: AgreementType.StatementOfWork, description: "A detailed document that defines project-specific activities.", icon: "/statement-of-work.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.SalesAgreement, description: "Formalize the sale of goods between a buyer and seller.", icon: "/sales-agreement.svg", fields: ['compensation'] },
      { title: AgreementType.InfluencerAgreement, description: "Contract with a social media influencer for marketing.", icon: "/influencer-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.AffiliateAgreement, description: "Set terms for an affiliate to promote your products.", icon: "/affiliate-agreement.svg", fields: ['compensation'] },
      { title: AgreementType.ReferralAgreement, description: "Agreement for referring new clients or customers.", icon: "/referral-agreement.svg", fields: ['compensation'] },
      { title: AgreementType.DistributionAgreement, description: "Appoint a distributor for your products in a specific territory.", icon: "/distribution-agreement.svg", fields: ['scopeOfWork'] },
      { title: AgreementType.CateringContract, description: "Contract for providing catering services for an event.", icon: "/catering-contract.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.PhotographyServicesAgreement, description: "Hire a photographer for an event or project.", icon: "/photography-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
      { title: AgreementType.WebDesignContract, description: "Contract for website design and development services.", icon: "/web-design-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
    ]
  },
  {
    category: 'Intellectual Property',
    templates: [
      { title: AgreementType.IPAssignment, description: "Transfer ownership of intellectual property rights.", icon: "/ip-assignment-agreement.svg", fields: ['scopeOfWork'] },
      { title: AgreementType.TrademarkLicense, description: "Grant permission to use your trademark.", icon: "/trademark-license-agreement.svg", fields: ['compensation'] },
      { title: AgreementType.CopyrightLicense, description: "Grant permission to use your copyrighted work.", icon: "/copyright-license-agreement.svg", fields: ['compensation'] },
      { title: AgreementType.SoftwareLicense, description: "An End-User License Agreement (EULA) for software.", icon: "/software-license-agreement.svg", fields: [] },
      { title: AgreementType.PrivacyPolicy, description: "Disclose how you collect, use, and manage user data.", icon: "/privacy-policy.svg", fields: [] },
      { title: AgreementType.TermsOfService, description: "The rules and guidelines for using your website or service.", icon: "/terms-of-service.svg", fields: [] },
      { title: AgreementType.PhotoRelease, description: "Get consent to use someone's image or likeness.", icon: "/photo-release-form.svg", fields: [] },
      { title: AgreementType.ModelRelease, description: "Consent from a model to use their image.", icon: "/model-release-form.svg", fields: [] },
      { title: AgreementType.CeaseAndDesistIP, description: "Demand a party stop infringing on your IP rights.", icon: "/cease-and-desist-letter.svg", fields: [] },
    ]
  },
  {
    category: 'Financial Agreements',
    templates: [
        { title: AgreementType.PromissoryNote, description: "A written promise to pay a specific sum of money to someone.", icon: "/promissory-note.svg", fields: ['compensation'] },
        { title: AgreementType.LoanAgreement, description: "Formalize the terms of a loan between a lender and borrower.", icon: "/loan-agreement.svg", fields: ['compensation'] },
        { title: AgreementType.SAFEAgreement, description: "An agreement for an investor to get future equity in a startup.", icon: "/safe-agreement.svg", fields: ['compensation'] },
        { title: AgreementType.ConvertibleNote, description: "A form of short-term debt that converts into equity.", icon: "/convertible-note.svg", fields: ['compensation'] },
        { title: AgreementType.InvoiceTemplate, description: "A standard template for billing clients for goods or services.", icon: "/invoice-template.svg", fields: ['compensation'] },
        { title: AgreementType.PurchaseOrder, description: "A commercial document issued by a buyer to a seller.", icon: "/purchase-order.svg", fields: ['compensation'] },
    ]
  },
  {
    category: 'Real Estate',
    templates: [
        { title: AgreementType.CommercialLease, description: "Lease a commercial property for business use.", icon: "/commercial-lease-agreement.svg", fields: ['compensation'] },
        { title: AgreementType.ResidentialLease, description: "Rent out a residential property to a tenant.", icon: "/residential-lease-agreement.svg", fields: ['compensation'] },
        { title: AgreementType.SubleaseAgreement, description: "Agreement for a tenant to re-rent their leased property.", icon: "/sublease-agreement.svg", fields: ['compensation'] },
        { title: AgreementType.EvictionNotice, description: "A formal notice from a landlord to a tenant to vacate a property.", icon: "/eviction-notice.svg", fields: [] },
        { title: AgreementType.RealEstatePurchase, description: "A binding contract for the sale of property.", icon: "/real-estate-purchase-agreement.svg", fields: ['compensation'] },
        { title: AgreementType.PropertyManagement, description: "Hire a third party to manage a rental property.", icon: "/property-management-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
    ]
  },
  {
    category: 'Partnerships & Joint Ventures',
    templates: [
        { title: AgreementType.PartnershipAgreement, description: "Establish the terms and conditions between business partners.", icon: "/partnership-agreement.svg", fields: [] },
        { title: AgreementType.JointVentureAgreement, description: "An agreement between two or more parties for a specific project.", icon: "/joint-venture-agreement.svg", fields: ['scopeOfWork'] },
        { title: AgreementType.MOU, description: "Outlines a cooperative relationship between two parties.", icon: "/mou-agreement.svg", fields: ['scopeOfWork'] },
    ]
  },
  {
    category: 'General Business & Legal Letters',
    templates: [
        { title: AgreementType.PowerOfAttorney, description: "Grant someone the authority to act on your behalf.", icon: "/power-of-attorney.svg", fields: [] },
        { title: AgreementType.IndemnityAgreement, description: "Transfer risk from one party to another.", icon: "/indemnity-agreement.svg", fields: [] },
        { title: AgreementType.WaiverRelease, description: "Relinquish a legal claim in exchange for compensation.", icon: "/waiver-release-agreement.svg", fields: ['compensation'] },
        { title: AgreementType.DemandLetter, description: "A formal letter demanding payment or another action.", icon: "/demand-letter.svg", fields: ['compensation'] },
        { title: AgreementType.BillOfSale, description: "Record the transfer of ownership of personal property.", icon: "/bill-of-sale.svg", fields: ['compensation'] },
        { title: AgreementType.ConsignmentAgreement, description: "Agreement to sell goods on behalf of the owner.", icon: "/consignment-agreement.svg", fields: ['scopeOfWork'] },
        { title: AgreementType.EquipmentLease, description: "An agreement for renting equipment.", icon: "/equipment-lease-agreement.svg", fields: ['compensation'] },
        { title: AgreementType.SponsorshipAgreement, description: "Formalize an agreement with a sponsor for an event or project.", icon: "/sponsorship-agreement.svg", fields: ['scopeOfWork', 'compensation'] },
    ]
  },
];


const GENERIC_AGREEMENT_TEXT = `
This Agreement is made and entered into as of [EFFECTIVE_DATE] (the "Effective Date") by and between:

Party A: [PARTY_A_NAME], with a primary address of [PARTY_A_ADDRESS] ("Party A"), and

Party B: [PARTY_B_NAME], with a primary address of [PARTY_B_ADDRESS] ("Party B").

WHEREAS, the parties desire to enter into an agreement to define their rights and obligations;

NOW, THEREFORE, in consideration of the mutual covenants and promises contained herein, the parties agree as follows:

1.  Purpose of Agreement.
    The purpose of this agreement is to set forth the terms and conditions governing the relationship between Party A and Party B.
    [SCOPE_OF_WORK]

2.  Term.
    This Agreement shall commence on the Effective Date and shall continue until terminated as provided herein.

3.  Compensation.
    As full compensation for the services rendered, Party A shall pay Party B the amount of [COMPENSATION_AMOUNT].

4.  Confidentiality.
    Both parties agree to maintain the confidentiality of any proprietary information shared during the term of this Agreement.

5.  Governing Law.
    This Agreement shall be governed by and construed in accordance with the laws of the State of ______________.

6.  Entire Agreement.
    This document constitutes the entire agreement between the parties and supersedes all prior agreements and understandings.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

Party A: _________________________
[PARTY_A_NAME]

Party B: _________________________
[PARTY_B_NAME]
`;

export const TemplateData: Record<AgreementType, string> = {
  [AgreementType.SimpleService]: `
SERVICE AGREEMENT

This Service Agreement ("Agreement") is made effective as of [EFFECTIVE_DATE], by and between [PARTY_A_NAME] ("Client"), of [PARTY_A_ADDRESS], and [PARTY_B_NAME] ("Service Provider"), of [PARTY_B_ADDRESS].

1. DESCRIPTION OF SERVICES. Service Provider will provide the following services to the Client:
[SCOPE_OF_WORK]

2. PAYMENT. Client agrees to pay Service Provider the sum of [COMPENSATION_AMOUNT] for the services. Payment shall be made as follows: [Payment Schedule].

3. TERM. This Agreement will terminate automatically upon completion of the Services by the Service Provider.

4. CONFIDENTIALITY. Service Provider agrees not to disclose or use any confidential information of the Client.

5. GOVERNING LAW. This Agreement shall be governed by the laws of the State of ______________.

IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first above written.

CLIENT:
_________________________
[PARTY_A_NAME]

SERVICE PROVIDER:
_________________________
[PARTY_B_NAME]
`,
  [AgreementType.NDA]: `
NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into as of [EFFECTIVE_DATE] by and between [PARTY_A_NAME] ("Disclosing Party") and [PARTY_B_NAME] ("Receiving Party").

1. DEFINITION OF CONFIDENTIAL INFORMATION. "Confidential Information" means any data or information that is proprietary to the Disclosing Party and not generally known to the public, whether in tangible or intangible form.
[SCOPE_OF_WORK]

2. OBLIGATIONS OF RECEIVING PARTY. The Receiving Party agrees to hold the Confidential Information in strict confidence and to take all reasonable precautions to protect such Confidential Information.

3. EXCLUSIONS. Confidential Information does not include information that was rightfully known to the Receiving Party prior to its disclosure, or becomes publicly known through no fault of the Receiving Party.

4. TERM. The obligations of this Agreement shall survive for a period of three (3) years from the date of disclosure.

5. GOVERNING LAW. This Agreement shall be governed by the laws of the State of ______________.

DISCLOSING PARTY:
_________________________
[PARTY_A_NAME]

RECEIVING PARTY:
_________________________
[PARTY_B_NAME]
`,
  [AgreementType.IndependentContractor]: `
INDEPENDENT CONTRACTOR AGREEMENT

This Independent Contractor Agreement ("Agreement") is made as of [EFFECTIVE_DATE], between [PARTY_A_NAME] ("Client") and [PARTY_B_NAME] ("Contractor").

1. SERVICES. The Contractor shall perform the following services for the Client:
[SCOPE_OF_WORK]

2. COMPENSATION. The Client will pay the Contractor a fee of [COMPENSATION_AMOUNT]. The Contractor will be responsible for their own taxes and insurance.

3. RELATIONSHIP OF PARTIES. It is understood that the Contractor is an independent contractor and not an employee of the Client.

4. TERM AND TERMINATION. This agreement will begin on the Effective Date and will remain in effect until the services are completed, or until terminated by either party with 15 days written notice.

5. GOVERNING LAW. This Agreement shall be governed by the laws of the State of ______________.

CLIENT:
_________________________
[PARTY_A_NAME]

CONTRACTOR:
_________________________
[PARTY_B_NAME]
`,
  // Add placeholder templates for all other agreement types
  // Using a loop to generate placeholders to avoid massive duplication
  ...Object.values(AgreementType).reduce((acc, type) => {
    if (![AgreementType.SimpleService, AgreementType.NDA, AgreementType.IndependentContractor].includes(type)) {
      acc[type] = `
${type.toUpperCase()}

${GENERIC_AGREEMENT_TEXT}
      `.trim();
    }
    return acc;
  }, {} as Record<AgreementType, string>)
};
