export interface SkinServiceItem {
  slug: string;
  title: string;
  category:
    | "Facial Rejuvenation & Glow"
    | "Acne, Scars & Texture"
    | "Laser & Targeted Procedures"
    | "Anti-Ageing & Pigmentation";
  shortDescription: string;
  featuredOnHome?: boolean;
  featuredOrder?: number;
  image?: string;
  imageAlt?: string;
  leadDoctorSlug: string;
  sessionDuration: string;
  downtimeSummary: string;
  recommendedCourse: string;
  overview: string[];
  indications: string[];
  procedureSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  benefits: string[];
  aftercare: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const skinServices: SkinServiceItem[] = [
  {
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    category: "Facial Rejuvenation & Glow",
    shortDescription:
      "Doctor-administered dermal revitalization combining deep cellular hydration, barrier repair, and collagen stimulation for fatigued or dull skin.",
    featuredOnHome: true,
    featuredOrder: 1,
    image: "/images/skin-rejuvenation.png",
    imageAlt:
      "Clinical Skin Rejuvenation and Facial Aesthetics at Dant काया Multispeciality Clinic",
    leadDoctorSlug: "dr-sumit-kumar",
    sessionDuration: "45 – 60 Minutes",
    downtimeSummary: "Minimal to zero downtime; immediate hydrated radiance",
    recommendedCourse: "Customized 3–6 session protocol based on skin assessment",
    overview: [
      "Urban pollution, UV exposure, stress, and dehydration gradually impair the skin's epidermal barrier—leaving the complexion dull, uneven, and fatigued. Clinical Skin Rejuvenation goes beyond superficial salon facials by addressing cellular turnover and dermal hydration under medical supervision.",
      "Led by our FFAC-certified clinicians (Dr. Sumit Kumar and Dr. Anisha Deb), every skin rejuvenation protocol begins with a detailed skin type and barrier analysis so active serums, gentle exfoliation, and phototherapy are calibrated safely for Indian skin tones.",
    ],
    indications: [
      "Dull, dehydrated, or tired-looking facial skin",
      "Uneven skin texture and early sun-induced photo-damage",
      "Compromised skin barrier needing gentle medical revitalization",
      "Pre-event skin conditioning for healthy, natural luminosity",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Clinical Skin & Barrier Evaluation",
        description:
          "Assessment of Fitzpatrick skin phototype, sebum balance, sensitivity, and hydration levels.",
      },
      {
        step: "02",
        title: "Medical Cleansing & Controlled Exfoliation",
        description:
          "Gentle removal of dead corneocytes and oxidized sebum without stripping the protective lipid barrier.",
      },
      {
        step: "03",
        title: "Targeted Bio-Active Infusion",
        description:
          "Transdermal delivery of medical-grade hyaluronic acid, peptides, and antioxidant complexes.",
      },
      {
        step: "04",
        title: "Calming Photoprotection",
        description:
          "Soothing dermal mask application followed by broad-spectrum clinical sunscreen protection.",
      },
    ],
    benefits: [
      "Restores epidermal hydration and smooth surface texture",
      "Formulated safely for Indian skin phototypes without bleaching agents",
      "Supervised directly by FFAC-trained facial aesthetic clinicians",
    ],
    aftercare: [
      "Apply broad-spectrum SPF 50+ sunscreen every morning and reapply when outdoors.",
      "Avoid harsh scrubs, steam, or unprescribed retinoids for 48 hours post-session.",
      "Keep skin well moisturized with a gentle non-comedogenic barrier cream.",
    ],
    faqs: [
      {
        question: "How is clinical skin rejuvenation different from a salon facial?",
        answer:
          "Salon facials rely on fragrance-heavy creams and vigorous scrubbing that can trigger acne or pigmentation. Clinical skin rejuvenation uses sterile, dermatologist-grade actives selected for your specific skin physiology.",
      },
    ],
  },
  {
    slug: "acne-scar-treatment",
    title: "Acne & Scar Treatment",
    category: "Acne, Scars & Texture",
    shortDescription:
      "Evidence-based medical protocols to control active inflammatory breakouts and remodel depressed post-acne scars through collagen induction.",
    featuredOnHome: true,
    featuredOrder: 2,
    image: "/images/skin-rejuvenation.png",
    imageAlt:
      "Clinical Acne and Scar Revision Treatment at Dant काया Multispeciality Clinic",
    leadDoctorSlug: "dr-sumit-kumar",
    sessionDuration: "45 – 60 Minutes",
    downtimeSummary: "24–72 hours of mild erythema depending on scar revision modality",
    recommendedCourse: "4 – 6 sessions spaced 4 weeks apart",
    overview: [
      "Both active acne vulgaris and post-inflammatory acne scarring require targeted clinical intervention rather than over-the-counter experimentation. Untreated inflammatory nodules often leave permanent atrophic (ice-pick, boxcar, or rolling) scars and dark post-inflammatory hyperpigmentation (PIH).",
      "At Dant काया Multispeciality Clinic, we first calm active sebaceous inflammation using salicylic/azelaic protocols and medical guidance, and then remodel depressed scars using controlled microneedling, chemical reconstruction, and collagen-inducing therapies.",
    ],
    indications: [
      "Recurrent comedonal (blackhead/whitehead) or inflammatory papular acne",
      "Depressed boxcar, rolling, or ice-pick acne scars on cheeks and temples",
      "Post-acne dark spots and red macules (PIH / PIE)",
      "Oily, acne-prone skin with enlarged pores",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Acne Grading & Scar Mapping",
        description:
          "Distinguishing between active inflammatory lesions and mature atrophic scar architecture.",
      },
      {
        step: "02",
        title: "Sebum Control or Topical Anesthesia",
        description:
          "Preparation of the skin with antiseptic cleansing and numbing cream (for collagen-induction scar sessions).",
      },
      {
        step: "03",
        title: "Targeted Peel or Scar Remodeling",
        description:
          "Application of acne-control keratolytic peels or precision microneedling to break fibrotic scar bands and trigger fresh Type-I collagen.",
      },
      {
        step: "04",
        title: "Post-Procedure Repair Protocol",
        description:
          "Application of non-comedogenic calming recovery serum and tailored home-care prescription.",
      },
    ],
    benefits: [
      "Addresses both active acne breakouts and residual textural scars",
      "Stimulates your skin's own dermal collagen to soften indented scars",
      "Reduces post-acne dark marks while regulating excess sebum",
    ],
    aftercare: [
      "Never pick, squeeze, or scratch healing skin or micro-crusts.",
      "Use only the prescribed gentle cleanser, recovery moisturizer, and oil-free sunscreen for 5 days.",
      "Avoid direct midday sun exposure and heavy sweating for 48 hours after scar remodeling.",
    ],
    faqs: [
      {
        question: "Can acne scars be improved while I still have active pimples?",
        answer:
          "We always stabilize active inflammatory pimples first so bacteria are not spread during deeper collagen-induction procedures. Once active breakouts are controlled, scar remodeling begins safely.",
      },
    ],
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "Laser & Targeted Procedures",
    shortDescription:
      "Safe, cooling-assisted clinical laser hair reduction calibrated for Indian skin tones to progressively reduce unwanted facial and body hair.",
    featuredOnHome: true,
    featuredOrder: 3,
    image: "/images/skin-rejuvenation.png",
    imageAlt:
      "Clinical Laser Hair Reduction at Dant काया Multispeciality Clinic",
    leadDoctorSlug: "dr-sumit-kumar",
    sessionDuration: "20 – 60 Minutes (Area Dependent)",
    downtimeSummary: "Zero downtime; resume regular activities immediately",
    recommendedCourse: "6 – 8 sessions timed with the natural hair growth cycle",
    overview: [
      "Repeated waxing, threading, and shaving often cause ingrown hairs, folliculitis, and frictional darkening on the upper lip, chin, sidelocks, underarms, and body. Clinical Laser Hair Reduction uses selective photothermolysis to target melanin within the hair follicle without harming surrounding skin.",
      "Our protocols are carefully calibrated for Indian skin phototypes (Fitzpatrick III–V), utilizing contact cooling to ensure a comfortable experience and progressive, long-term hair reduction.",
    ],
    indications: [
      "Unwanted facial hair on upper lip, chin, jawline, or sidelocks",
      "Hirsutism or PCOS-associated coarse facial hair growth",
      "Recurrent ingrown hairs or razor bumps on underarms, arms, or legs",
      "Skin irritation and pigmentation caused by frequent waxing or threading",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Hair & Skin Phototype Assessment",
        description:
          "Evaluating hair thickness, density, and skin melanin level to set safe fluence and pulse parameters.",
      },
      {
        step: "02",
        title: "Area Mapping & Gentle Shaving",
        description:
          "The target area is cleansed and surface hair is trimmed so laser energy focuses directly into the follicle root.",
      },
      {
        step: "03",
        title: "Cooling-Assisted Laser Delivery",
        description:
          "Controlled laser pulses are delivered through a chilled sapphire tip that keeps the epidermis cool and comfortable.",
      },
      {
        step: "04",
        title: "Soothing Post-Laser Care",
        description:
          "Application of calming aloe/panthenol gel and broad-spectrum UV protection.",
      },
    ],
    benefits: [
      "Progressively thins and reduces hair growth across treated areas",
      "Eliminates painful waxing, threading burns, and ingrown hairs",
      "Contact-cooling handpiece keeps the epidermis protected and comfortable",
    ],
    aftercare: [
      "Do not wax, pluck, or thread between laser sessions—shaving is permitted if needed.",
      "Avoid hot showers, steam rooms, and direct sun exposure for 24–48 hours post-session.",
      "Apply sunscreen diligently on exposed facial areas.",
    ],
    faqs: [
      {
        question: "Why are multiple sessions needed for laser hair reduction?",
        answer:
          "Laser energy only disables hair follicles that are currently in their active growth phase (anagen). Because only 15–20% of hairs are in the anagen phase at any given time, 6–8 spaced sessions are required to treat all follicles.",
      },
    ],
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    category: "Facial Rejuvenation & Glow",
    shortDescription:
      "Custom-buffered glycolic, salicylic, lactic, and mandelic clinical peels to accelerate cell turnover, clear congested pores, and lift uneven pigmentation.",
    leadDoctorSlug: "dr-anisha-deb",
    sessionDuration: "30 Minutes",
    downtimeSummary: "Minimal; mild dryness or micro-flaking for 2–4 days depending on peel depth",
    recommendedCourse: "4 – 6 sessions at 2–3 week intervals",
    overview: [
      "Medical chemical peels use dermatologist-formulated alpha-hydroxy acids (AHAs), beta-hydroxy acids (BHAs), or combination solutions to dissolve the bonds holding dull, hyperpigmented dead skin cells on the surface.",
      "Unlike aggressive unbuffered peels, our clinicians select the exact acid molecular weight and concentration suited to your concern—whether mandelic/salicylic for acne-prone skin or glycolic/kojic/lactic blends for tanning and melasma.",
    ],
    indications: [
      "Sun tan, uneven skin tone, and superficial epidermal pigmentation",
      "Comedonal acne, clogged pores, and excess facial oiliness",
      "Post-acne dark marks (post-inflammatory hyperpigmentation)",
      "Rough, lackluster skin texture needing gentle resurfacing",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Pre-Peel Degreasing & Barrier Protection",
        description:
          "Skin is cleansed and sensitive corners of the eyes, nose, and lips are protected with barrier ointment.",
      },
      {
        step: "02",
        title: "Timed Controlled Peel Application",
        description:
          "The selected medical peel is applied evenly and monitored closely by your doctor for the exact neutralization endpoint.",
      },
      {
        step: "03",
        title: "Neutralization & Soothing Hydration",
        description:
          "The peel is neutralized, cooled, and sealed with a barrier-repair moisturizer and sunscreen.",
      },
    ],
    benefits: [
      "Clears congested pores and reduces acne breakouts",
      "Fades stubborn sun tan and post-acne hyperpigmentation safely",
      "Quick 30-minute lunch-hour clinical procedure",
    ],
    aftercare: [
      "Do not peel, rub, or scratch any dry or flaking skin over the next 3–5 days.",
      "Pause active home creams (retinol, AHA/BHA serums, vitamin C) for 5 days post-peel.",
      "Use a gentle cleanser, ceramide moisturizer, and SPF 50+ sunscreen daily.",
    ],
    faqs: [
      {
        question: "Will my skin visibly peel off in sheets after a chemical peel?",
        answer:
          "Most modern superficial clinical peels cause only microscopic exfoliation or very light dryness rather than dramatic sheet peeling, allowing you to attend work normally.",
      },
    ],
  },
  {
    slug: "microneedling",
    title: "Microneedling (Collagen Induction Therapy)",
    category: "Acne, Scars & Texture",
    shortDescription:
      "Precision medical microneedling with sterile single-use cartridges to remodel acne scars, refine enlarged pores, and stimulate dermal elastin and collagen.",
    leadDoctorSlug: "dr-sumit-kumar",
    sessionDuration: "45 – 60 Minutes (Including Topical Numbing)",
    downtimeSummary: "24 – 48 hours of mild pinkness (similar to mild sunburn)",
    recommendedCourse: "3 – 6 sessions spaced 4 weeks apart",
    overview: [
      "Clinical Microneedling (Collagen Induction Therapy) creates thousands of controlled, microscopic micro-channels in the dermis using a motorized medical pen with sterile, single-use needle cartridges.",
      "These micro-channels trigger the skin's natural wound-healing cascade—releasing growth factors and synthesizing new collagen and elastin fibers while allowing sterile regenerative serums to penetrate deeply.",
    ],
    indications: [
      "Atrophic acne scars and uneven textural indentations",
      "Enlarged facial pores and rough skin texture",
      "Early fine lines and loss of dermal firmness",
      "Stretch marks and post-traumatic superficial scars",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Antiseptic Prep & Topical Anesthesia",
        description:
          "A medical numbing cream is applied for 30 minutes so the procedure is comfortable.",
      },
      {
        step: "02",
        title: "Depth-Calibrated Sterile Microneedling",
        description:
          "Using a freshly unsealed sterile cartridge, needling depth is adjusted precisely for forehead, cheeks, and scar zones.",
      },
      {
        step: "03",
        title: "Sterile Peptide / Hyaluronic Infusion",
        description:
          "Pure soothing bio-actives are glided across the micro-channels to support rapid barrier recovery.",
      },
    ],
    benefits: [
      "Stimulates natural collagen remodeling without thermal heat damage",
      "Safe for darker Indian skin tones with minimal risk of pigmentation",
      "100% sterile, single-use disposable needle cartridges for every patient",
    ],
    aftercare: [
      "Avoid makeup, gym workouts, swimming, and dust exposure for 24–48 hours.",
      "Wash face with cool clean water and a mild non-soap cleanser.",
      "Apply broad-spectrum sunscreen diligently starting the next morning.",
    ],
    faqs: [
      {
        question: "Is clinical microneedling painful?",
        answer:
          "Because we apply a prescription topical anesthetic cream for 30 minutes prior to treatment, most patients feel only a mild vibrating sensation.",
      },
    ],
  },
  {
    slug: "hydrafacial",
    title: "Medical Hydrafacial",
    category: "Facial Rejuvenation & Glow",
    shortDescription:
      "Multi-step hydro-dermabrasion, painless vortex pore extraction, and antioxidant serum infusion for instant clarity, hydration, and plump skin.",
    leadDoctorSlug: "dr-sumit-kumar",
    sessionDuration: "45 – 60 Minutes",
    downtimeSummary: "Zero downtime; immediate dewy glow",
    recommendedCourse: "Monthly maintenance or pre-occasion skin refresher",
    overview: [
      "Our Medical Hydrafacial combines gentle hydro-dermabrasion exfoliation, painless vacuum-assisted extraction of blackheads and sebaceous filaments, and deep infusion of hydrating hyaluronic and antioxidant serums.",
      "Unlike manual comedone squeezing that leaves red marks and broken capillaries, fluid-assisted vortex extraction clears congested T-zone pores gently while bathing the skin in moisture.",
    ],
    indications: [
      "Congested pores, blackheads, and whiteheads on nose and chin",
      "Dehydrated, flaky, or dull complexion",
      "Pre-bridal, pre-event, or monthly skin health maintenance",
      "Sensitive skin that cannot tolerate abrasive microdermabrasion crystals",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Hydro-Exfoliation & Gentle Resurfacing",
        description:
          "Fluid-assisted tip gently lifts dead surface cells while softening sebum plugs.",
      },
      {
        step: "02",
        title: "Painless Vortex Pore Extraction",
        description:
          "Controlled suction clears blackheads and impurities from the nose, chin, and forehead without pinching the skin.",
      },
      {
        step: "03",
        title: "Antioxidant & Hyaluronic Fusion",
        description:
          "Deep infusion of hydrating peptides, vitamins, and calming botanicals followed by LED phototherapy.",
      },
    ],
    benefits: [
      "Zero redness or downtime—walk out with noticeably clearer, hydrated skin",
      "Painless extraction of stubborn blackheads and congested pores",
      "Suitable for almost all skin types, including dry and combination skin",
    ],
    aftercare: [
      "Allow the infused serums to absorb fully for several hours before washing your face.",
      "Maintain daily hydration and SPF 50+ sun protection.",
    ],
    faqs: [
      {
        question: "Can I get a Medical Hydrafacial right before an event or wedding?",
        answer:
          "Yes. Because there is zero peeling or downtime, scheduling a Medical Hydrafacial 2 to 3 days before a major event gives your skin peak hydration and smooth makeup application.",
      },
    ],
  },
  {
    slug: "mole-wart-removal",
    title: "Mole / Wart Removal",
    category: "Laser & Targeted Procedures",
    shortDescription:
      "Precise, doctor-performed radiofrequency or laser ablation of benign skin tags, viral warts, and raised moles with minimal scarring.",
    leadDoctorSlug: "dr-abhinav-kumar",
    sessionDuration: "20 – 30 Minutes",
    downtimeSummary: "Tiny superficial crust heals naturally within 5–10 days",
    recommendedCourse: "Usually completed in a single targeted session",
    overview: [
      "Benign raised moles (intradermal nevi), skin tags (acrochordons), and viral warts on the face, neck, or eyelids can catch on clothing, bleed during shaving, or cause cosmetic concern.",
      "At Dant काया Multispeciality Clinic, every lesion is clinically inspected first before performing precise, layer-by-layer radiofrequency or laser micro-ablation under local anesthesia—preserving surrounding healthy skin.",
    ],
    indications: [
      "Skin tags (acrochordons) on the neck, eyelids, or underarms",
      "Benign raised facial moles causing aesthetic or shaving discomfort",
      "Cutaneous viral warts or seborrheic keratoses",
      "Milia and benign epidermal cysts",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Clinical Lesion Examination",
        description:
          "Your doctor examines the border, depth, and benign characteristics of the mole, wart, or skin tag.",
      },
      {
        step: "02",
        title: "Targeted Local Numbing",
        description:
          "Topical anesthetic cream or a tiny micro-drop of local anesthesia ensures the removal is completely painless.",
      },
      {
        step: "03",
        title: "Precision Micro-Ablation",
        description:
          "Controlled radiofrequency or laser energy vaporizes the lesion flush with the skin surface with instant hemostasis.",
      },
    ],
    benefits: [
      "Completed comfortably in 20 minutes under local anesthesia",
      "Bloodless micro-ablation protects surrounding healthy tissue",
      "Safe doctor-performed alternative to dangerous home acid pastes",
    ],
    aftercare: [
      "Apply the prescribed topical antibiotic ointment twice daily until the tiny crust sheds naturally.",
      "Do not scratch or pick the healing scab, as premature picking causes pigmentation.",
      "Once the crust falls off, protect the fresh pink skin with sunscreen daily.",
    ],
    faqs: [
      {
        question: "Why shouldn't I use home wart/mole removal creams or threads?",
        answer:
          "Caustic home pastes cause uncontrolled chemical burns and deep keloid scars. Doctor-performed micro-ablation controls the exact millimeter depth for clean, flat healing.",
      },
    ],
  },
  {
    slug: "anti-ageing-treatment",
    title: "Anti-Ageing Treatment",
    category: "Anti-Ageing & Pigmentation",
    shortDescription:
      "Holistic non-surgical dermal firming, collagen bio-remodeling, and elasticity restoration led by FFAC facial aesthetic specialists.",
    leadDoctorSlug: "dr-anisha-deb",
    sessionDuration: "45 – 60 Minutes",
    downtimeSummary: "Minimal downtime; progressive firming over 4–8 weeks",
    recommendedCourse: "Personalized treatment plan after facial aging assessment",
    overview: [
      "Facial ageing involves gradual loss of dermal collagen, elastin fragmentation, bone resorption, and epidermal thinning. Effective anti-ageing medicine restores skin density and structural support without creating an overdone or unnatural appearance.",
      "Led by Dr. Anisha Deb and Dr. Sumit Kumar (both holding Fellowships in Facial Aesthetics & Cosmetology — FFAC), our anti-ageing protocols combine collagen induction, medical bio-revitalization, peptide infusions, and targeted wrinkle-relaxing therapies.",
    ],
    indications: [
      "Loss of skin firmness and early laxity along the jawline and cheeks",
      "Photo-ageing, crepey skin texture, and dullness",
      "Early nasolabial folds and periorbital aging",
      "Preventive collagen banking for patients in their late 20s to 50s",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Anatomical Facial Aging Analysis",
        description:
          "Evaluation of skin elasticity, dynamic vs. static lines, and dermal volume support.",
      },
      {
        step: "02",
        title: "Collagen & Elastin Bio-Stimulation",
        description:
          "Application of targeted collagen-inducing modalities and clinical peptide/retinoid protocols.",
      },
      {
        step: "03",
        title: "Barrier Strengthening & Maintenance Regimen",
        description:
          "Structured home-care prescription with medical antioxidants, retinoids, and photoprotection.",
      },
    ],
    benefits: [
      "Focuses on natural skin quality, firmness, and structural harmony",
      "Performed by clinicians trained in maxillofacial and facial anatomy",
      "Combines in-clinic procedures with sustainable home skin maintenance",
    ],
    aftercare: [
      "Consistent daily broad-spectrum UV protection is the cornerstone of maintaining collagen results.",
      "Follow your clinician's gradual introduction schedule for nighttime retinoids or peptides.",
    ],
    faqs: [
      {
        question: "At what age should I consider clinical anti-ageing care?",
        answer:
          "Natural collagen production begins declining by about 1% per year after age 25. Preventive barrier care and collagen stimulation in your late 20s and 30s are far more effective than waiting for deep folds to form.",
      },
    ],
  },
  {
    slug: "pigmentation-treatment",
    title: "Pigmentation & Melasma Treatment",
    category: "Anti-Ageing & Pigmentation",
    shortDescription:
      "Targeted clinical management of melasma, sun spots, freckles, and post-inflammatory hyperpigmentation safe for melanin-rich skin.",
    leadDoctorSlug: "dr-anisha-deb",
    sessionDuration: "30 – 45 Minutes",
    downtimeSummary: "Zero to minimal downtime with gradual, even tone correction",
    recommendedCourse: "4 – 6 clinical sessions paired with melasma-safe home care",
    overview: [
      "Hyperpigmentation—whether hormonal melasma across the cheeks and forehead, solar lentigines (sun spots), or post-acne dark marks—requires careful diagnosis of whether excess melanin sits in the superficial epidermis or deeper dermis.",
      "We avoid harsh steroid-containing creams that cause rebound pigmentation. Instead, Dr. Anisha Deb designs safe, medical tyrosinase-inhibiting protocols using buffered depigmenting peels, tranexamic/kojic/azelaic actives, and strict UV/visible-light protection.",
    ],
    indications: [
      "Symmetrical butterfly-pattern melasma on cheeks, nose bridge, or forehead",
      "Sun-induced dark spots, tanning, and uneven facial tone",
      "Perioral (around the mouth) or periorbital pigmentation",
      "Stubborn dark marks left behind by healed acne",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Pigment Depth & Trigger Assessment",
        description:
          "Identifying hormonal, UV, cosmetic, or inflammatory triggers and assessing epidermal vs. dermal pigment depth.",
      },
      {
        step: "02",
        title: "Melanin-Regulating Clinical Procedure",
        description:
          "Application of specialized depigmenting peels or targeted brightening infusions that calm overactive melanocytes.",
      },
      {
        step: "03",
        title: "Steroid-Free Maintenance Protocol",
        description:
          "Prescribing safe topical melanin inhibitors and iron-oxide/broad-spectrum sunblock to prevent recurrence.",
      },
    ],
    benefits: [
      "100% free from harmful triple-combination steroid dependency",
      "Gradually lightens dark patches while evening out overall complexion",
      "Addresses root triggers to minimize summer UV rebound",
    ],
    aftercare: [
      "Reapply SPF 50+ broad-spectrum sunscreen every 3–4 hours during daylight hours.",
      "Avoid direct stove heat, facial steam, and harsh scrubbing, which stimulate melanocytes.",
    ],
    faqs: [
      {
        question: "Why did over-the-counter fairness creams make my pigmentation worse later?",
        answer:
          "Many unprescribed tube creams contain potent topical steroids or hydroquinone that initially bleach the skin but later cause severe rebound darkening, skin thinning, and redness. Our medical protocols safely wean skin off such damage.",
      },
    ],
  },
  {
    slug: "skin-brightening",
    title: "Skin Brightening Therapy",
    category: "Facial Rejuvenation & Glow",
    shortDescription:
      "Antioxidant-rich clinical brightening protocols designed to remove oxidative dullness, de-tan sun-exposed skin, and restore healthy radiance.",
    leadDoctorSlug: "dr-anisha-deb",
    sessionDuration: "45 Minutes",
    downtimeSummary: "No downtime; immediate refreshed luminosity",
    recommendedCourse: "3 – 4 sessions or monthly radiance maintenance",
    overview: [
      "Clinical Skin Brightening is not about altering your natural constitutional skin color—it is about removing the layer of oxidative stress, UV tanning, and micro-shadowing that prevents your skin from reflecting light evenly.",
      "Using medical-grade Vitamin C, glutathione precursors, lactic/mandelic resurfacing, and deep hydration, this therapy restores a clear, luminous, and healthy complexion.",
    ],
    indications: [
      "Sun tanning and dullness after outdoor travel or summer exposure",
      "Uneven tone across forehead, around the mouth, and neck",
      "Smoker's skin or pollution-induced oxidative sallow tone",
      "Bridal and festive radiance preparation",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Enzymatic & Lactic Micro-Polish",
        description:
          "Gently dissolves dull, oxidized surface corneocytes without irritation.",
      },
      {
        step: "02",
        title: "Antioxidant & Brightening Complex Infusion",
        description:
          "Delivery of stabilized Vitamin C, niacinamide, and hydrating botanicals deep into the epidermis.",
      },
      {
        step: "03",
        title: "Luminosity Lock & UV Shield",
        description:
          "Calming hydrogel mask and broad-spectrum photoprotection.",
      },
    ],
    benefits: [
      "Visibly lifts stubborn sun tan and surface dullness",
      "Boosts antioxidant defense against daily urban pollution",
      "Gentle enough for sensitive skin with zero recovery downtime",
    ],
    aftercare: [
      "Maintain daily sunscreen use to prevent immediate re-tanning.",
      "Stay well hydrated and use your recommended antioxidant morning serum.",
    ],
    faqs: [
      {
        question: "Is skin brightening safe for sensitive skin?",
        answer:
          "Yes. We customize the exfoliation strength using gentle lactic or mandelic acids that hydrate while brightening, avoiding irritation.",
      },
    ],
  },
  {
    slug: "pore-reduction",
    title: "Pore Reduction & Texture Refinement",
    category: "Acne, Scars & Texture",
    shortDescription:
      "Sebum-regulating and dermal collagen-tightening protocols to visibly minimize dilated T-zone pores and smooth orange-peel skin texture.",
    leadDoctorSlug: "dr-sumit-kumar",
    sessionDuration: "45 Minutes",
    downtimeSummary: "Minimal (0–24 hours of mild redness)",
    recommendedCourse: "4 sessions spaced 3–4 weeks apart",
    overview: [
      "Enlarged pores on the nose, inner cheeks, and forehead are primarily caused by two factors: chronic excess sebum stretching the follicular opening, and loss of surrounding dermal collagen elasticity.",
      "Our Pore Reduction protocol attacks both causes simultaneously—unclogging sebaceous filaments with lipophilic BHA/vortex cleansing and tightening the perifollicular collagen ring through microneedling or targeted resurfacing.",
    ],
    indications: [
      "Visibly dilated pores on the cheeks, nose, and forehead",
      "Excessive midday facial shine and sebaceous filaments",
      "Rough 'orange-peel' skin texture under makeup",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Deep Follicular Decongestion",
        description:
          "Lipophilic salicylic prep dissolves hardened sebum plugs stretching the pore walls.",
      },
      {
        step: "02",
        title: "Perifollicular Collagen Tightening",
        description:
          "Micro-channel stimulation or pore-refining resurfacing tightens the structural collar around each pore.",
      },
      {
        step: "03",
        title: "Niacinamide & Sebum-Balancing Finish",
        description:
          "Oil-free mattifying hydration and non-comedogenic UV protection.",
      },
    ],
    benefits: [
      "Reduces oil congestion and shrinks the visual diameter of enlarged pores",
      "Creates a smoother canvas that reflects light evenly",
      "Prevents pores from evolving into blackheads and acne pustules",
    ],
    aftercare: [
      "Switch to lightweight, non-comedogenic gel moisturizers and gel sunscreens.",
      "Avoid heavy oil-based foundations or occlusive creams that clog pores.",
    ],
    faqs: [
      {
        question: "Can pores be erased completely?",
        answer:
          "Pores are essential natural openings for sweat and oil glands, so they cannot be eliminated completely—but clearing their congestion and strengthening the collagen around them makes them appear significantly smaller and tighter.",
      },
    ],
  },
  {
    slug: "prp-treatment",
    title: "PRP of Face & Hair",
    category: "Anti-Ageing & Pigmentation",
    shortDescription:
      "Autologous Platelet-Rich Plasma (PRP) therapy utilizing concentrated growth factors to stimulate hair follicle regrowth and restore youthful facial elasticity.",
    leadDoctorSlug: "dr-anisha-deb",
    sessionDuration: "45 – 60 Minutes",
    downtimeSummary: "Minimal (Mild redness resolves within 12–24 hours)",
    recommendedCourse: "3 to 4 sessions spaced 4 weeks apart for optimal follicle and dermal restoration",
    overview: [
      "Platelet-Rich Plasma (PRP) therapy is a cutting-edge regenerative treatment harnessing the natural healing and bioactive growth factors in your own blood. A small sample of peripheral blood is centrifuged under strict sterile clinical conditions to separate concentrated platelets rich in PDGF, VEGF, and TGF-beta.",
      "At Dant काया Multispeciality Clinic, PRP protocols are performed by our Fellowship-trained facial aesthetic practitioners. For hair thinning and early androgenic alopecia, micro-injections revitalize dormant follicles and increase hair shaft density. For facial rejuvenation, PRP triggers intense fibroblast activation, stimulating collagen and elastin synthesis for a radiant, firmer complexion.",
    ],
    indications: [
      "Hair thinning, crown widening, and androgenetic hair loss in men and women",
      "Post-telogen effluvium hair shedding and weakened hair follicle roots",
      "Facial skin dullness, loss of dermal tone, and early volume laxity",
      "Periorbital under-eye dark circles, hollows, and crepey texture",
      "Mild acne scarring and uneven skin texture requiring biological healing",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Sterile Blood Draw & Centrifugation",
        description:
          "A small blood draw is spun in a specialized centrifuge to isolate platelet-rich plasma with high platelet and growth factor concentration.",
      },
      {
        step: "02",
        title: "Topical Numbing & Scalp/Skin Preparation",
        description:
          "The targeted treatment zone (scalp or face) is disinfected and treated with medical-grade topical anesthetic for optimal patient comfort.",
      },
      {
        step: "03",
        title: "Targeted Micro-Injection / Microneedling Infusion",
        description:
          "Using ultrafine micro-needles, concentrated PRP is precisely delivered into the dermal matrix or follicular papillae layers.",
      },
      {
        step: "04",
        title: "Soothing Calming Serum & Post-Care Advisory",
        description:
          "Application of soothing anti-inflammatory care with detailed post-session guidance on shampooing, sun avoidance, and hydration.",
      },
    ],
    benefits: [
      "100% autologous biological treatment with zero risk of allergic reaction or rejection",
      "Stimulates dormant hair follicles, improving hair density and shaft thickness",
      "Triggers natural collagen synthesis to soften fine creases and revitalize tired skin",
      "Doctor-performed under strict clinical sterility on Boring Canal Road, Patna",
    ],
    aftercare: [
      "Avoid washing hair or strenuous sweaty exercise for 24 hours after scalp PRP.",
      "Avoid touching or applying unprescribed cosmetics to the face for 24 hours.",
      "Stay well hydrated and maintain consistent sun protection (SPF 50+) daily.",
      "Adhere to the recommended maintenance cycle to maintain follicular longevity.",
    ],
    faqs: [
      {
        question: "Is PRP treatment painful?",
        answer:
          "Discomfort is very mild and well-tolerated. We apply medical-grade topical numbing cream or local scalp blocks prior to micro-injections, ensuring a comfortable clinical experience.",
      },
      {
        question: "How many sessions of hair or facial PRP will I need?",
        answer:
          "Most patients achieve noticeable results with an initial series of 3 to 4 sessions spaced 4 weeks apart, followed by maintenance sessions every 6 to 12 months.",
      },
    ],
  },
];

const skinServiceImageMap: Record<string, string> = {
  "skin-rejuvenation": "/images/skin-rejuvenation.jpg",
  "acne-scar-treatment": "/images/skin-microneedling.jpg",
  "laser-hair-reduction": "/images/skin-laser.jpg",
  "chemical-peels": "/images/skin-peels.jpg",
  "microneedling": "/images/skin-microneedling.jpg",
  "hydrafacial": "/images/skin-hydrafacial.jpg",
  "mole-wart-removal": "/images/skin-mole-removal.jpg",
  "anti-ageing-treatment": "/images/skin-anti-ageing.jpg",
  "pigmentation-treatment": "/images/skin-pigmentation.jpg",
  "skin-brightening": "/images/skin-brightening.jpg",
  "pore-reduction": "/images/skin-pore-reduction.jpg",
  "prp-treatment": "/images/skin-prp.jpg",
};

for (const item of skinServices) {
  item.image =
    skinServiceImageMap[item.slug] || item.image || "/images/skin-rejuvenation.png";
  if (!item.imageAlt) {
    item.imageAlt = `${item.title} — Clinical Skin & Facial Aesthetics at Dant काया Multispeciality Clinic, Patna`;
  }
}

export function getSkinServiceBySlug(slug: string): SkinServiceItem | undefined {
  return skinServices.find((service) => service.slug === slug);
}

export function getFeaturedSkinServices(): SkinServiceItem[] {
  return skinServices
    .filter((service) => service.featuredOnHome)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

