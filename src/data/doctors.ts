export interface DoctorProfile {
  slug: string;
  name: string;
  credentials: string;
  fullCredentials: string;
  role: string;
  shortRole: string;
  roleSubtitle: string;
  departmentBadge: string;
  pastAffiliation: string;
  image: string;
  imageAlt: string;
  homepageSummary: string;
  directorySummary: string;
  leadIntro: string;
  biography: string[];
  competencyTags: string[];
  heroBadges: string[];
  quickHighlightPills: Array<{
    value: string;
    label: string;
  }>;
  metadataChips: Array<{
    label: string;
    value: string;
    subtext?: string;
  }>;
  clinicalTenet: {
    eyebrow: string;
    title: string;
    description: string;
  };
  clinicalFocus: Array<{
    title: string;
    description: string;
    tag?: string;
  }>;
  qualifications: Array<{
    category: string;
    degree: string;
    detail: string;
  }>;
  experienceHighlights: Array<{
    role: string;
    institution: string;
    location: string;
    summary: string;
  }>;
  careApproach: Array<{
    number: string;
    title: string;
    description: string;
    footerTag: string;
  }>;
  philosophyQuote: string;
  signatureRole: string;
  associatedServiceSlugs: {
    dental: string[];
    skin: string[];
  };
  consultationSchedule: string;
}

export const doctors: DoctorProfile[] = [
  {
    slug: "dr-abhinav-kumar",
    name: "Dr. Abhinav Kumar",
    credentials: "BDS, MBA, MIDA",
    fullCredentials: "BDS, MBA (Healthcare Management), MIDA",
    role: "Oral and Dental Surgeon",
    shortRole: "Oral & Dental Surgeon",
    roleSubtitle:
      "Senior Dentist | Oral & Dental Surgeon | Healthcare Administrator",
    departmentBadge: "Department Lead",
    pastAffiliation: "Ex Senior Dentist, Smile Foundation, New Delhi",
    image: "/images/dr-abhinav.jpeg",
    imageAlt:
      "Dr. Abhinav Kumar, BDS, MBA, MIDA — Oral and Dental Surgeon at Dant काया Multispeciality Clinic, Patna",
    homepageSummary:
      "Ex-Senior Dentist at Smile Foundation, New Delhi. Specializes in oral surgery, dental implants, and comprehensive full-mouth rehabilitation.",
    directorySummary:
      "Dr. Abhinav Kumar combines dental expertise with healthcare management knowledge to support comprehensive, patient-focused oral healthcare.",
    leadIntro:
      "Dr. Abhinav Kumar is a dedicated dental professional and healthcare administrator committed to delivering comprehensive dental care while maintaining high standards of clinical excellence and patient satisfaction.",
    biography: [
      "Dr. Abhinav Kumar is a dedicated dental professional and healthcare administrator committed to delivering comprehensive dental care while maintaining high standards of clinical excellence and patient satisfaction.",
      "With qualifications in Bachelor of Dental Surgery (BDS) and Master of Business Administration (MBA) in Healthcare Management, he combines clinical knowledge with healthcare leadership, administration, and patient-focused management.",
      "Prior to establishing Dant काया Multispeciality Clinic in Patna, Dr. Abhinav served as Senior Dentist with the Smile Foundation in New Delhi, managing diagnostic, surgical, and restorative oral healthcare programs.",
      "His professional interests include general and restorative dentistry, oral and dental surgery, dental implants, preventive oral healthcare, dental treatment planning, and comprehensive dental procedures.",
      "Alongside his clinical responsibilities, Dr. Abhinav plays an important role in healthcare administration, clinical coordination, quality management, and patient care services, contributing to an organized, efficient, and comfortable healthcare environment.",
      "He believes that exceptional healthcare requires a combination of clinical expertise, effective management, ethical decision-making, and compassionate patient care—building long-term patient relationships through transparency and personalized treatment.",
    ],
    competencyTags: [
      "General Dentistry",
      "Oral & Dental Surgery",
      "Preventive & Restorative Dentistry",
      "Dental Treatment Planning",
      "Healthcare Administration",
    ],
    heroBadges: [
      "Clinical Faculty & Senior Dentist • Patna Clinic",
      "Operations Lead",
    ],
    quickHighlightPills: [
      { value: "BDS", label: "Dental Surgery" },
      { value: "MBA", label: "Healthcare Mgmt" },
      { value: "MIDA", label: "IDA Member" },
    ],
    metadataChips: [
      {
        label: "Previous Affiliation",
        value: "Ex-Senior Dentist",
        subtext: "Smile Foundation, New Delhi",
      },
      {
        label: "Leadership",
        value: "Clinical Operations Lead",
        subtext: "Dant काया Patna Atelier",
      },
      {
        label: "Schedule",
        value: "OPD: Mon – Sat",
        subtext: "10:00 AM – 08:00 PM",
      },
    ],
    clinicalTenet: {
      eyebrow: "Clinical Governance",
      title: "Patna Clinic Anchor",
      description:
        "Supervising strict aseptic standards, digital diagnostics, surgical implant protocols, and smooth patient transit through every procedure.",
    },
    clinicalFocus: [
      {
        title: "General & Comprehensive Dentistry",
        description:
          "Full-spectrum clinical examinations, digital diagnostic radiographs, oral prophylaxis, and holistic oral health management.",
        tag: "Clinical Scope",
      },
      {
        title: "Oral & Dental Surgery",
        description:
          "Precision surgical extractions, third molar impaction management, dental implants, pre-prosthetic surgeries, and tissue preservation with minimal trauma.",
        tag: "Surgical Suite",
      },
      {
        title: "Preventive & Restorative Dentistry",
        description:
          "Tooth-colored composite restorations, crown and bridge prosthetics, preventive sealants, and conservative tooth preservation.",
        tag: "Preservation",
      },
      {
        title: "Dental Treatment Planning",
        description:
          "Systematic case work-ups, multi-stage clinical sequencing, clear cost transparency, and individualized care timelines.",
        tag: "Case Work-Up",
      },
      {
        title: "Healthcare Administration",
        description:
          "Institutional leadership leveraging MBA Healthcare training to streamline clinical standards, compliance, and clinic efficiency.",
        tag: "Leadership",
      },
      {
        title: "Clinical Operations & Quality",
        description:
          "Multi-stage autoclave sterilization audits, bio-waste control protocols, equipment calibration, and seamless patient pathway management.",
        tag: "Quality Control",
      },
      {
        title: "Patient Care & Clinical Coordination",
        description:
          "Dedicated multi-department case navigation ensuring seamless collaboration between endodontists, oral surgeons, and facial aesthetic clinicians for every patient.",
        tag: "Direct Coordination",
      },
    ],
    qualifications: [
      {
        category: "Primary Degree",
        degree: "Bachelor of Dental Surgery (BDS)",
        detail:
          "Comprehensive clinical training in oral surgery, prosthodontics, conservative dentistry, and oral pathology.",
      },
      {
        category: "Postgraduate Management",
        degree: "MBA in Healthcare Management",
        detail:
          "Specialized postgraduate training in healthcare administration, sterilization quality protocols, and patient care operations.",
      },
      {
        category: "Professional Affiliation",
        degree: "Member, Indian Dental Association (MIDA)",
        detail:
          "Active registered dental clinician committed to continuing dental education and evidence-based practice.",
      },
    ],
    experienceHighlights: [
      {
        role: "Lead Oral & Dental Surgeon & Operations Lead",
        institution: "Dant काया Multispeciality Clinic",
        location: "Boring Canal Road, Patna",
        summary:
          "Directs multidisciplinary dental surgery, implantology, prosthodontic rehabilitation, and clinic-wide quality and sterilization protocols.",
      },
      {
        role: "Ex Senior Dentist",
        institution: "Smile Foundation",
        location: "New Delhi",
        summary:
          "Led clinical dental consultations, minor oral surgeries, restorative care, and preventive oral health initiatives across New Delhi.",
      },
    ],
    careApproach: [
      {
        number: "01",
        title: "Personalized Treatment Planning",
        description:
          "Custom clinical roadmaps tailored to each patient’s unique biological requirements and lifestyle context, never rushing into aggressive or redundant procedures.",
        footerTag: "Biological Conservation",
      },
      {
        number: "02",
        title: "Ethical & Transparent Communication",
        description:
          "Complete clarity on diagnostics, digital imaging, itemized treatment plans, and clinical rationale before any step begins—ensuring trust without hidden surprises.",
        footerTag: "Informed Consent",
      },
      {
        number: "03",
        title: "Organized, Compassionate Care",
        description:
          "Seamless clinical operations combined with an empathetic bedside manner, specifically designed to eliminate dental anxiety and nurture lasting oral wellness.",
        footerTag: "Calm Clinical Environment",
      },
    ],
    philosophyQuote:
      "Dr. Abhinav Kumar is a dedicated dental professional and healthcare administrator committed to delivering comprehensive dental care while maintaining high standards of clinical excellence and patient satisfaction.",
    signatureRole: "Senior Dentist • Dant काया Patna Atelier",
    associatedServiceSlugs: {
      dental: [
        "dental-implants",
        "oral-surgery",
        "third-molar-surgery",
        "full-mouth-rehabilitation",
        "crown-and-bridge",
        "clear-aligners",
      ],
      skin: [],
    },
    consultationSchedule: "Monday – Saturday | 10:00 AM – 08:00 PM",
  },
  {
    slug: "dr-sumit-kumar",
    name: "Dr. Sumit Kumar",
    credentials: "BDS, FFAC",
    fullCredentials: "BDS, FFAC",
    role: "Oral and Dental Surgeon",
    shortRole: "Oral & Dental Surgeon",
    roleSubtitle:
      "Oral & Dental Surgeon | Facial Aesthetics & Clinical Cosmetology | Ex-Resident, Realtooth, Lucknow",
    departmentBadge: "Aesthetic & Surgical Lead",
    pastAffiliation: "Resident, Realtooth, Lucknow",
    image: "/images/dr-sumit.jpeg",
    imageAlt:
      "Dr. Sumit Kumar, BDS, FFAC — Oral and Dental Surgeon & Facial Aesthetic Specialist at Dant काया Multispeciality Clinic",
    homepageSummary:
      "Former Resident at Realtooth, Lucknow with Fellowship in Facial Aesthetics. Focuses on aesthetic dentistry, prosthodontics, and clinical skin rejuvenation.",
    directorySummary:
      "Dr. Sumit Kumar focuses on comprehensive oral healthcare, smile enhancement and selected facial aesthetic treatments, with additional training in facial aesthetics and clinical cosmetology.",
    leadIntro:
      "Dr. Sumit Kumar combines modern dental techniques, clinical precision, and an understanding of facial harmony to deliver personalized care tailored to each patient’s needs.",
    biography: [
      "Dr. Sumit Kumar is a dedicated dental professional with a strong focus on comprehensive oral healthcare, aesthetic dentistry, and facial aesthetics.",
      "With clinical experience gained through his association as Resident at Realtooth, Lucknow, he brings practical clinical knowledge and a patient-centered approach to dental treatments, managing diverse restorative and surgical cases with meticulous technique.",
      "He has also completed FFAC – Fellowship in Facial Aesthetics and Clinical Cosmetology, providing him with specialized training in facial rejuvenation, skin aesthetics, and modern non-surgical cosmetic procedures that harmonize facial proportion.",
      "His clinical interests include preventive and restorative dentistry, smile enhancement, facial rejuvenation, and aesthetic treatments designed specifically to complement natural facial features without artificial overcorrection.",
      "Dr. Sumit believes in combining modern dental techniques, clinical precision, and an understanding of facial harmony to deliver personalized care tailored to each patient's individual needs and aesthetic objectives.",
      "His philosophy emphasizes thorough patient comfort, ethical and transparent treatment planning, and achieving predictable, natural-looking aesthetic outcomes in an unhurried, reassuring environment.",
    ],
    competencyTags: [
      "General Dentistry",
      "Oral Surgery",
      "Restorative Dentistry",
      "Smile Enhancement",
      "Facial Aesthetics",
      "Clinical Cosmetology",
    ],
    heroBadges: [
      "Clinical Faculty & Oral Surgeon • Patna Clinic",
      "Facial Aesthetics & Cosmetology",
    ],
    quickHighlightPills: [
      { value: "BDS", label: "Dental Surgery" },
      { value: "FFAC", label: "Facial Aesthetics" },
      { value: "OPD", label: "Mon – Sat Care" },
    ],
    metadataChips: [
      {
        label: "Previous Association",
        value: "Resident, Realtooth",
        subtext: "Lucknow Residency",
      },
      {
        label: "Fellowship",
        value: "FFAC Certification",
        subtext: "Aesthetics & Cosmetology",
      },
      {
        label: "Facility Roster",
        value: "Patna Main Atelier",
        subtext: "Mon – Sat Regular Care",
      },
    ],
    clinicalTenet: {
      eyebrow: "Clinical Focus",
      title: "Facial Harmony & Tooth Preservation",
      description:
        "Combining precision oral surgery with non-invasive facial rejuvenation for natural, balanced aesthetics that respect each individual's anatomical architecture.",
    },
    clinicalFocus: [
      {
        title: "General & Comprehensive Dentistry",
        description:
          "Full diagnostic oral assessments, hygiene maintenance, caries management, and systematic long-term dental health plans.",
        tag: "Clinical Scope",
      },
      {
        title: "Oral & Dental Surgery",
        description:
          "Precision surgical extractions, impaction management, pre-prosthetic surgeries, and tissue preservation with minimal trauma.",
        tag: "Surgical Suite",
      },
      {
        title: "Preventive & Restorative Dentistry",
        description:
          "Biomimetic tooth restorations, composite bonding, fluoride therapies, and structural preservation of natural dentition.",
        tag: "Preservation",
      },
      {
        title: "Smile Enhancement & Aesthetic Dentistry",
        description:
          "Custom cosmetic veneers, anterior alignment planning, enamel contouring, and shade-matched micro-restorations.",
        tag: "Aesthetic Design",
      },
      {
        title: "Facial Aesthetics & Rejuvenation",
        description:
          "Non-surgical perioral aesthetics, soft tissue balance, wrinkle reduction strategies, and facial contour harmony.",
        tag: "FFAC Fellowship",
      },
      {
        title: "Clinical Cosmetology",
        description:
          "Scientific dermal care therapies, medical-grade peels, pigmentation balancing, and skin condition rehabilitation.",
        tag: "Clinical Protocols",
      },
      {
        title: "Skin Rejuvenation & Aesthetic Treatments",
        description:
          "Comprehensive treatment plans harmonizing radiant facial skin texture with healthy, confident smile dynamics through integrated cosmetic modalities.",
        tag: "Integrated Harmony",
      },
    ],
    qualifications: [
      {
        category: "Primary Degree",
        degree: "Bachelor of Dental Surgery (BDS)",
        detail:
          "Foundation in comprehensive oral surgery, dental pathology, and restorative therapeutics.",
      },
      {
        category: "Postgraduate Fellowship",
        degree: "FFAC – Fellowship in Facial Aesthetics & Clinical Cosmetology",
        detail:
          "Advanced institutional training in facial rejuvenation, skin aesthetics, and non-surgical cosmetic interventions.",
      },
      {
        category: "Previous Association",
        degree: "Resident, Realtooth, Lucknow",
        detail:
          "Extensive clinical residency experience in advanced multispeciality dentistry and restorative practice in Lucknow.",
      },
    ],
    experienceHighlights: [
      {
        role: "Consultant Oral Surgeon & Facial Aesthetic Clinician",
        institution: "Dant काया Multispeciality Clinic",
        location: "Boring Canal Road, Patna",
        summary:
          "Provides comprehensive restorative dentistry, smile designing, and clinical skin and laser aesthetic treatments.",
      },
      {
        role: "Clinical Resident",
        institution: "Realtooth Dental Clinic",
        location: "Lucknow",
        summary:
          "Completed intensive clinical residency in modern prosthodontics, rotary endodontics, oral surgery, and digital dental workflows.",
      },
    ],
    careApproach: [
      {
        number: "01",
        title: "Facial Harmony & Natural Aesthetics",
        description:
          "Integrating dental aesthetics with natural facial contouring to create subtle, balanced outcomes without exaggerated changes or artificial volume.",
        footerTag: "Subtle, Anatomical Balance",
      },
      {
        number: "02",
        title: "Patient Comfort & Ethical Planning",
        description:
          "Clear diagnostic discussions, transparent step-by-step treatment plans, and gentle, anxiety-free procedures tailored to individual comfort thresholds.",
        footerTag: "Empathy & Transparency",
      },
      {
        number: "03",
        title: "Precision & Clinical Rigor",
        description:
          "Techniques informed by rigorous clinical residency and fellowship standards in restorative care, minor surgical protocols, and facial cosmetology.",
        footerTag: "Institutional Standards",
      },
    ],
    philosophyQuote:
      "Dr. Sumit Kumar combines modern dental techniques, clinical precision, and an understanding of facial harmony to deliver personalized care tailored to each patient’s needs.",
    signatureRole: "Oral & Dental Surgeon | Dant काया Patna Atelier",
    associatedServiceSlugs: {
      dental: [
        "smile-designing",
        "cosmetic-filling-restoration",
        "teeth-whitening",
        "crown-and-bridge",
        "dentures",
        "teeth-cleaning",
      ],
      skin: [
        "skin-rejuvenation",
        "laser-hair-reduction",
        "hydrafacial",
        "acne-scar-treatment",
        "chemical-peels",
        "microneedling",
      ],
    },
    consultationSchedule: "Monday – Saturday | 10:00 AM – 08:00 PM",
  },
  {
    slug: "dr-anisha-deb",
    name: "Dr. Anisha Deb",
    credentials: "BDS, MDS, FFAC",
    fullCredentials: "BDS, MDS, FFAC",
    role: "Root Canal Specialist",
    shortRole: "Root Canal Specialist",
    roleSubtitle:
      "Conservative Dentistry & Endodontics • Root Canal Specialist • Facial Aesthetics & Clinical Cosmetology",
    departmentBadge: "Endodontic Specialist",
    pastAffiliation:
      "Ex Consultant Endodontist, Max Superspeciality Hospital, New Delhi",
    image: "/images/dr-anisha.jpeg",
    imageAlt:
      "Dr. Anisha Deb, BDS, MDS, FFAC — Root Canal Specialist and Facial Aesthetic Clinician at Dant काया Multispeciality Clinic",
    homepageSummary:
      "Ex-Consultant Endodontist at Max Superspeciality Hospital, New Delhi. Specialist in microscopic root canal therapy, re-treatment, and facial aesthetics.",
    directorySummary:
      "Dr. Anisha Deb specializes in conservative dentistry and endodontics, with a focus on tooth preservation, restorative care and root canal treatment.",
    leadIntro:
      "Dr. Anisha Deb combines clinical precision, modern treatment techniques, and a gentle, patient-centered approach to provide personalized dental and aesthetic care, focused on preserving natural teeth.",
    biography: [
      "Dr. Anisha Deb is a dedicated dental professional specializing in Conservative Dentistry and Endodontics, with additional training in Facial Aesthetics and Clinical Cosmetology.",
      "With her MDS qualification in Conservative Dentistry and Endodontics, she focuses on preserving natural teeth through advanced root canal treatments, restorative dentistry, aesthetic dental restorations, and comprehensive dental care.",
      "Prior to practicing at Dant काया Multispeciality Clinic in Patna, Dr. Anisha served as Consultant Endodontist at Max Superspeciality Hospital, New Delhi, managing complex root canal treatments, endodontic re-treatments, and conservative dental reconstructions.",
      "She has also completed FFAC – Fellowship in Facial Aesthetics and Clinical Cosmetology, expanding her expertise into facial rejuvenation, skin aesthetics, and non-surgical cosmetic procedures.",
      "Her training allows her to approach dental and facial aesthetics with an understanding of facial harmony, natural beauty, and individual patient needs.",
      "Dr. Anisha combines clinical precision, modern treatment techniques, and a gentle, patient-centered approach to provide personalized dental and aesthetic care—centered on preserving healthy smiles, enhancing natural beauty, and helping patients achieve long-lasting oral health and confidence.",
    ],
    competencyTags: [
      "Conservative Dentistry",
      "Endodontics",
      "Root Canal Treatment",
      "Restorative Dentistry",
      "Tooth Preservation",
      "Facial Aesthetics",
    ],
    heroBadges: [
      "Certified Endodontist & Facial Cosmetologist",
      "Ex-Consultant Endodontist • Max Hospital, New Delhi",
    ],
    quickHighlightPills: [
      { value: "MDS", label: "Master of Surgery" },
      { value: "FFAC", label: "Fellowship Cosmetology" },
      { value: "BDS", label: "Dental Surgery" },
    ],
    metadataChips: [
      {
        label: "Specialty Degree",
        value: "MDS (Endodontics)",
        subtext: "Conservative Dentistry & Endodontics",
      },
      {
        label: "Hospital Background",
        value: "Ex-Consultant Endodontist",
        subtext: "Max Superspeciality Hospital, New Delhi",
      },
      {
        label: "Aesthetics Fellowship",
        value: "FFAC Certified",
        subtext: "Facial Aesthetics & Cosmetology",
      },
    ],
    clinicalTenet: {
      eyebrow: "Clinical Tenet",
      title: "Biological Tooth Preservation",
      description:
        "Dedicated to saving natural teeth through microscopic root canal therapies and minimally invasive aesthetic restorative protocols, protecting natural dental anatomy.",
    },
    clinicalFocus: [
      {
        title: "Conservative Dentistry & Endodontics",
        description:
          "Minimally invasive therapies dedicated to salvaging compromised dental structure, arresting decay, and restoring biomechanical strength.",
        tag: "Specialty Care",
      },
      {
        title: "Root Canal Treatment (Microscopic & Rotary)",
        description:
          "Precision canal cleaning using high-magnification endodontic illumination and flexible rotary nickel-titanium instrumentation for comfortable efficacy.",
        tag: "Endodontics",
      },
      {
        title: "Restorative & Aesthetic Dentistry",
        description:
          "Nano-hybrid composite restorations, aesthetic inlays, onlays, and biomimetic bonding that blend seamlessly with natural tooth enamel.",
        tag: "Biomimetic",
      },
      {
        title: "Tooth Preservation & Pulp Therapy",
        description:
          "Vital pulp therapy, bioceramic capping, and conservative protocols focused on maintaining living tooth vitality whenever clinically indicated.",
        tag: "Preservation",
      },
      {
        title: "Facial Aesthetics & Rejuvenation",
        description:
          "Non-surgical facial harmonization, profile balancing, and contour refinement harmonized precisely with smile line architecture.",
        tag: "FFAC Fellowship",
      },
      {
        title: "Clinical Cosmetology",
        description:
          "Medical-grade dermaceutical therapies, active pigment regulation, and barrier restoration protocols supervised in a sterile clinical environment.",
        tag: "Clinical Skin Care",
      },
      {
        title: "Skin Rejuvenation & Aesthetic Treatments",
        description:
          "Advanced laser skin resurfacing, Hydrafacial, medical peels, and anti-ageing therapies customized for Indian skin phenotypes.",
        tag: "Consult on Aesthetics",
      },
    ],
    qualifications: [
      {
        category: "Primary Degree",
        degree: "Bachelor of Dental Surgery (BDS)",
        detail:
          "Foundational comprehensive dental medicine and oral healthcare protocols.",
      },
      {
        category: "Postgraduate Specialty",
        degree: "MDS – Conservative Dentistry & Endodontics",
        detail:
          "Master's qualification in advanced endodontics, rotary root canal therapy, pulp capping, and complex natural tooth preservation.",
      },
      {
        category: "Postgraduate Fellowship",
        degree: "FFAC – Facial Aesthetics & Cosmetology",
        detail:
          "Postgraduate fellowship in facial harmony, dermal aesthetics, clinical cosmetology, and non-surgical skin rejuvenation procedures.",
      },
    ],
    experienceHighlights: [
      {
        role: "Senior Root Canal Specialist & Aesthetic Clinician",
        institution: "Dant काया Multispeciality Clinic",
        location: "Boring Canal Road, Patna",
        summary:
          "Heads the Department of Endodontics, Conservative Dentistry, and Advanced Skin Aesthetics.",
      },
      {
        role: "Ex Consultant Endodontist",
        institution: "Max Superspeciality Hospital",
        location: "New Delhi",
        summary:
          "Served as specialist hospital consultant performing complex endodontic procedures, re-treatments, and multidisciplinary restorative cases.",
      },
    ],
    careApproach: [
      {
        number: "01",
        title: "Natural Tooth Preservation",
        description:
          "Prioritizing conservative protocols that salvage natural dentition through high-precision endodontic care before considering extractions or artificial replacements.",
        footerTag: "Core Standard",
      },
      {
        number: "02",
        title: "Gentle & Anxiety-Free Care",
        description:
          "A reassuring, patient-focused bedside manner designed to make root canal treatments comfortable and calm, demystifying complex procedures with genuine empathy.",
        footerTag: "Bedside Protocol",
      },
      {
        number: "03",
        title: "Facial Harmony & Natural Beauty",
        description:
          "Approaching skin and dental aesthetics holistically, enhancing natural facial features while maintaining lasting structural health and authentic personal expression.",
        footerTag: "Holistic Goal",
      },
    ],
    philosophyQuote:
      "Dr. Anisha Deb combines clinical precision, modern treatment techniques, and a gentle, patient-centered approach to provide personalized dental and aesthetic care, focused on preserving natural teeth.",
    signatureRole:
      "Endodontist & Cosmetic Specialist | Dant काया Patna Atelier",
    associatedServiceSlugs: {
      dental: [
        "root-canal-treatment",
        "cosmetic-filling-restoration",
        "crown-and-bridge",
        "smile-designing",
        "teeth-whitening",
        "child-dental-treatment",
      ],
      skin: [
        "anti-ageing-treatment",
        "pigmentation-treatment",
        "skin-brightening",
        "fine-lines-wrinkle-treatment",
        "chemical-peels",
        "pore-reduction",
      ],
    },
    consultationSchedule: "Monday – Saturday | 10:00 AM – 07:30 PM",
  },
];

export function getDoctorBySlug(slug: string): DoctorProfile | undefined {
  return doctors.find((doc) => doc.slug === slug);
}
