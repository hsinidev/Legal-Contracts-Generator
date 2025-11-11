
export enum AgreementType {
  // Startup & Corporate
  NDA = "Non-Disclosure Agreement (NDA)",
  FounderAgreement = "Founder Agreement",
  ShareholderAgreement = "Shareholder Agreement",
  OperatingAgreement = "LLC Operating Agreement",
  Bylaws = "Corporate Bylaws",
  ArticlesOfIncorporation = "Articles of Incorporation",
  BoardResolution = "Board Resolution",
  AdvisoryBoardAgreement = "Advisory Board Agreement",
  VestingAgreement = "Vesting Agreement",
  StockPurchaseAgreement = "Stock Purchase Agreement",
  AssetPurchaseAgreement = "Asset Purchase Agreement",
  MergerAgreement = "Merger Agreement",
  LetterOfIntent = "Letter of Intent (LOI)",
  TermSheet = "Term Sheet",
  BusinessPlan = "Business Plan",
  CorporateResolution = "Corporate Resolution",
  MinutesOfMeeting = "Minutes of Meeting",
  CapitalizationTable = "Capitalization Table (Cap Table)",
  ProxyStatement = "Proxy Statement",
  ShareCertificate = "Share Certificate",

  // HR & Employment
  IndependentContractor = "Independent Contractor Agreement",
  OfferLetter = "Employment Offer Letter",
  EmploymentAgreement = "Employment Agreement",
  EmployeeHandbook = "Employee Handbook",
  SeparationAgreement = "Separation Agreement",
  PerformanceImprovementPlan = "Performance Improvement Plan (PIP)",
  JobDescription = "Job Description Template",
  NonCompeteAgreement = "Non-Compete Agreement",
  EmployeeWarningNotice = "Employee Warning Notice",
  RecruitmentServicesAgreement = "Recruitment Services Agreement",
  InternshipAgreement = "Internship Agreement",
  VolunteerAgreement = "Volunteer Agreement",
  EmployeeBenefitsSummary = "Employee Benefits Summary",
  BackgroundCheckPolicy = "Background Check Policy",
  WorkFromHomePolicy = "Work From Home Policy",

  // Sales & Services
  SimpleService = "Simple Service Agreement",
  ConsultingAgreement = "Consulting Agreement",
  MasterServiceAgreement = "Master Service Agreement (MSA)",
  StatementOfWork = "Statement of Work (SOW)",
  SalesAgreement = "Sales Agreement / Bill of Sale",
  InfluencerAgreement = "Influencer Agreement",
  AffiliateAgreement = "Affiliate Agreement",
  ReferralAgreement = "Referral Agreement",
  DistributionAgreement = "Distribution Agreement",
  FranchiseAgreement = "Franchise Agreement",
  CateringContract = "Catering Contract",
  EventPlanningContract = "Event Planning Contract",
  PhotographyServicesAgreement = "Photography Services Agreement",
  VideographyServicesAgreement = "Videography Services Agreement",
  WebDesignContract = "Web Design & Development Contract",
  MarketingServicesAgreement = "Marketing Services Agreement",

  // Intellectual Property
  IPAssignment = "IP Assignment Agreement",
  TrademarkLicense = "Trademark License Agreement",
  CopyrightLicense = "Copyright License Agreement",
  PatentLicense = "Patent License Agreement",
  SoftwareLicense = "Software License Agreement (EULA)",
  PrivacyPolicy = "Privacy Policy",
  TermsOfService = "Website Terms of Service",
  DMCAComplaint = "DMCA Takedown Notice",
  PhotoRelease = "Photo & Video Release Form",
  ModelRelease = "Model Release Form",
  IdeaSubmissionAgreement = "Idea Submission Agreement",
  CeaseAndDesistIP = "Cease and Desist Letter (IP Infringement)",

  // Financial Agreements
  PromissoryNote = "Promissory Note",
  LoanAgreement = "Loan Agreement",
  SecurityAgreement = "Security Agreement",
  InvestmentAgreement = "Investment Agreement",
  SAFEAgreement = "Simple Agreement for Future Equity (SAFE)",
  ConvertibleNote = "Convertible Note Agreement",
  InvoiceTemplate = "Invoice Template",
  PurchaseOrder = "Purchase Order Template",
  ExpenseReport = "Expense Report Form",
  GuarantyAgreement = "Guaranty Agreement",

  // Real Estate
  CommercialLease = "Commercial Lease Agreement",
  ResidentialLease = "Residential Lease Agreement",
  SubleaseAgreement = "Sublease Agreement",
  RentalApplication = "Rental Application",
  LeaseTermination = "Lease Termination Agreement",
  EvictionNotice = "Eviction Notice",
  RealEstatePurchase = "Real Estate Purchase Agreement",
  PropertyManagement = "Property Management Agreement",
  ConstructionContract = "Construction Contract",
  HomeInspectionContract = "Home Inspection Contract",

  // Partnerships & Joint Ventures
  PartnershipAgreement = "Partnership Agreement",
  JointVentureAgreement = "Joint Venture Agreement",
  StrategicAllianceAgreement = "Strategic Alliance Agreement",
  MOU = "Memorandum of Understanding (MOU)",

  // General Business & Legal
  PowerOfAttorney = "Power of Attorney",
  IndemnityAgreement = "Indemnity Agreement",
  WaiverRelease = "Waiver/Release Agreement",
  SettlementAgreement = "Settlement Agreement",
  DemandLetter = "Demand Letter",
  Affidavit = "Affidavit",
  NotaryAcknowledgement = "Notary Acknowledgement",
  BillOfSale = "Bill of Sale",
  ConsignmentAgreement = "Consignment Agreement",
  EquipmentLease = "Equipment Lease Agreement",
  BetaTestAgreement = "Beta Test Agreement",
  SponsorshipAgreement = "Sponsorship Agreement",
  ConfidentialityAgreement = "Confidentiality Agreement",
}

export interface FormData {
  agreementType: AgreementType;
  partyAName: string;
  partyAAddress: string;
  partyBName: string;
  partyBAddress: string;
  effectiveDate: string;
  scopeOfWork?: string;
  compensationAmount?: string;
}
