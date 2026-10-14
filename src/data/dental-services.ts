export interface DentalServiceItem {
  slug: string;
  title: string;
  category:
    | "Endodontics & Restorative"
    | "Implants & Prosthodontics"
    | "Orthodontics & Aesthetic"
    | "Oral Surgery & Periodontics"
    | "Preventive & Diagnostic";
  shortDescription: string;
  featuredOnHome?: boolean;
  featuredOrder?: number;
  image?: string;
  imageAlt?: string;
  leadDoctorSlug: string;
  clinicalDuration: string;
  anesthesiaType: string;
  recoverySummary: string;
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

export const dentalServices: DentalServiceItem[] = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Endodontics & Restorative",
    shortDescription:
      "Specialist single-sitting and multi-sitting endodontic therapy led by MDS Endodontist Dr. Anisha Deb to eliminate deep infection and preserve your natural tooth.",
    featuredOnHome: true,
    featuredOrder: 1,
    image: "/images/dental-root-canal.png",
    imageAlt:
      "Microscopic Root Canal Treatment and Endodontic Care at Dant काया Multispeciality Clinic",
    leadDoctorSlug: "dr-anisha-deb",
    clinicalDuration: "45 – 75 Minutes (Often Single-Sitting)",
    anesthesiaType: "Targeted Local Anesthesia",
    recoverySummary: "Immediate return to daily routine; mild tenderness resolves in 24–48 hours",
    overview: [
      "When dental decay, deep cracks, or trauma reach the inner pulp chamber of a tooth, bacterial inflammation causes acute sensitivity or throbbing pain. Root Canal Treatment (Endodontic Therapy) is a conservative micro-surgical procedure designed to save the natural tooth rather than extracting it.",
      "At Dant काया Multispeciality Clinic, root canal treatments are led by Dr. Anisha Deb (BDS, MDS, FFAC — Ex Consultant Endodontist, Max Superspeciality Hospital, New Delhi). Using digital radiography, electronic apex locators, and flexible rotary instrumentation, infected pulp tissue is thoroughly disinfected and sealed with biocompatible material.",
    ],
    indications: [
      "Lingering pain after hot or cold food and beverages",
      "Spontaneous throbbing toothache, especially at night or when lying down",
      "Pain or tenderness when biting or chewing on a specific tooth",
      "Deep caries extending into the dental pulp on a digital X-ray",
      "Localized gum swelling, sinus tract, or darkening of a previously injured tooth",
      "Previously root-treated tooth requiring specialist endodontic re-treatment",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Digital Radiographic Diagnosis & Anesthesia",
        description:
          "A low-radiation digital X-ray maps the exact root canal anatomy and periapical bone status, followed by profound local anesthesia for a comfortable, painless session.",
      },
      {
        step: "02",
        title: "Isolation & Conservative Access",
        description:
          "A sterile barrier isolates the tooth from saliva while a conservative opening is created to reach the infected pulp chamber without weakening healthy enamel.",
      },
      {
        step: "03",
        title: "Rotary Cleaning & Antimicrobial Irrigation",
        description:
          "Precision nickel-titanium rotary instruments and ultrasonic irrigants clean and shape the microscopic root canals down to their exact biological apex.",
      },
      {
        step: "04",
        title: "3D Biocompatible Obturation & Crown Restoration",
        description:
          "The disinfected canals are hermetically sealed with biocompatible gutta-percha, followed by a core build-up and protective zirconia or ceramic crown.",
      },
    ],
    benefits: [
      "Preserves your natural tooth root and jawbone proprioception",
      "Eliminates deep dental infection and acute toothache predictably",
      "Performed by an MDS Consultant Endodontist trained in complex canal anatomy",
      "Restores full, pain-free chewing efficiency when paired with a protective crown",
    ],
    aftercare: [
      "Avoid chewing hard or sticky foods on the treated side until your permanent crown is placed.",
      "Take prescribed anti-inflammatory or antibiotic medications strictly as advised by your endodontist.",
      "Maintain gentle brushing and flossing around the treated tooth.",
      "Schedule your definitive crown placement promptly to prevent tooth fracture.",
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "Modern endodontic treatment is performed under effective local anesthesia and is designed to relieve toothache, not cause it. Most patients report that the procedure feels similar to having a routine dental filling placed.",
      },
      {
        question: "Can my root canal be completed in a single sitting?",
        answer:
          "Many vital or uncomplicated cases can be completed in a single 45–60 minute sitting. However, if there is active periapical pus, swelling, or complex re-treatment needed, Dr. Anisha Deb may place an intracanal medication and complete the seal in a second visit for optimal long-term healing.",
      },
      {
        question: "Why do I need a crown after a root canal?",
        answer:
          "Back teeth (premolars and molars) sustain heavy biting forces. After decay removal and endodontic access, a custom zirconia or ceramic crown reinforces the tooth and prevents vertical root fractures.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Implants & Prosthodontics",
    shortDescription:
      "Biocompatible titanium tooth root replacements engineered to restore missing single teeth, multiple teeth, or full arches without grinding adjacent healthy teeth.",
    featuredOnHome: true,
    featuredOrder: 2,
    image: "/images/dental-implants.png",
    imageAlt:
      "Biocompatible Titanium Dental Implants at Dant काया Multispeciality Clinic",
    leadDoctorSlug: "dr-abhinav-kumar",
    clinicalDuration: "60 – 90 Minutes per Surgical Placement",
    anesthesiaType: "Local Anesthesia",
    recoverySummary: "Osseointegration over 8–16 weeks followed by custom prosthetic crown placement",
    overview: [
      "A dental implant is a medical-grade titanium fixture placed gently into the jawbone to act as an artificial tooth root. Unlike conventional bridges, dental implants do not require cutting down neighboring healthy teeth and actively help preserve alveolar bone volume.",
      "Led by Dr. Abhinav Kumar (BDS, MBA, MIDA), implant procedures at Dant काया Multispeciality Clinic follow strict surgical asepsis and prosthetic-driven planning to ensure functional bite alignment and natural gingival contours.",
    ],
    indications: [
      "Loss of a single tooth due to trauma, fracture, or non-restorable decay",
      "Multiple missing teeth causing difficulty chewing or shifting of adjacent teeth",
      "Loose or uncomfortable removable dentures requiring fixed implant stabilization",
      "Desire to replace a missing tooth without grinding down healthy neighboring teeth",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Bone & Occlusal Assessment",
        description:
          "Detailed clinical examination and radiographic imaging evaluate bone density, sinus proximity, and bite clearance.",
      },
      {
        step: "02",
        title: "Atraumatic Fixture Placement",
        description:
          "Under sterile surgical conditions and local anesthesia, the titanium implant is placed at the precise angulation and depth.",
      },
      {
        step: "03",
        title: "Biological Osseointegration",
        description:
          "Over 8 to 16 weeks, natural bone cells fuse directly with the biocompatible implant surface to create a rock-solid anchor.",
      },
      {
        step: "04",
        title: "Custom Abutment & Zirconia Crown",
        description:
          "A precision-milled abutment and shade-matched ceramic crown are secured to restore natural appearance and chewing strength.",
      },
    ],
    benefits: [
      "Functions and feels like a natural tooth root",
      "Preserves adjacent healthy teeth completely untouched",
      "Helps prevent progressive jawbone shrinkage after tooth loss",
      "Long-term stability for speaking and chewing with confidence",
    ],
    aftercare: [
      "Apply a cold compress externally during the first 24 hours if mild swelling occurs.",
      "Consume soft, cool-to-lukewarm foods for the first 48–72 hours post-placement.",
      "Avoid smoking or tobacco use, as nicotine impairs bone healing around implants.",
      "Attend scheduled follow-up reviews for suture removal and hygiene maintenance.",
    ],
    faqs: [
      {
        question: "Am I a candidate for dental implants?",
        answer:
          "Most adults with healthy gums and adequate jawbone volume are suitable candidates. If you have systemic conditions such as diabetes or hypertension, our surgeons evaluate your medical stability before planning surgery.",
      },
      {
        question: "How long does the complete dental implant process take?",
        answer:
          "The surgical placement itself typically takes under 90 minutes. Depending on your bone density, the healing phase (osseointegration) takes 2 to 4 months before the final permanent crown is attached.",
      },
    ],
  },
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    category: "Orthodontics & Aesthetic",
    shortDescription:
      "Removable, virtually invisible orthodontic trays custom-fabricated to correct crowding, spacing, and bite misalignment without metal brackets or wires.",
    featuredOnHome: true,
    featuredOrder: 3,
    image: "/images/dental-aligners.png",
    imageAlt:
      "Crystal Clear Orthodontic Aligners at Dant काया Multispeciality Clinic",
    leadDoctorSlug: "dr-abhinav-kumar",
    clinicalDuration: "30 – 45 Minutes per Digital Assessment / Review",
    anesthesiaType: "Non-Invasive (No Anesthesia Required)",
    recoverySummary: "No downtime; trays are worn 20–22 hours daily and removed for meals and brushing",
    overview: [
      "Clear Aligners offer a discreet, hygienic alternative to traditional metal braces for teenagers and adults seeking orthodontic correction. Each series of medical-grade transparent trays applies gentle, calibrated forces to guide teeth into harmonious alignment stage by stage.",
      "At Dant काया Multispeciality Clinic, every clear aligner journey begins with a comprehensive occlusal and periodontal evaluation so that tooth movement is both aesthetically pleasing and biologically stable.",
    ],
    indications: [
      "Mild to moderate dental crowding or overlapping front teeth",
      "Gaps and diastemas between teeth",
      "Orthodontic relapse after previous childhood braces",
      "Overbite, crossbite, or open bite suitable for aligner biomechanics",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Orthodontic Consultation & Records",
        description:
          "Comprehensive examination of tooth alignment, jaw joints, gums, and digital radiographs to confirm suitability.",
      },
      {
        step: "02",
        title: "Staged Movement Planning",
        description:
          "A sequential digital treatment plan maps each incremental tooth movement from start to retention.",
      },
      {
        step: "03",
        title: "Aligner Delivery & Attachment Placement",
        description:
          "You receive custom-fitted transparent aligner sets along with tiny tooth-colored attachments if needed for rotational control.",
      },
      {
        step: "04",
        title: "Periodic Progress Reviews & Retention",
        description:
          "Scheduled clinical checks monitor tracking accuracy, followed by retainers at completion to lock in your new alignment.",
      },
    ],
    benefits: [
      "Virtually invisible during professional and social interactions",
      "Removable for eating all your regular foods without dietary restrictions",
      "Easy brushing and flossing with zero brackets or wires trapping plaque",
      "Smooth medical-grade thermoplastic trays that do not irritate cheeks or gums",
    ],
    aftercare: [
      "Wear your aligner trays for 20 to 22 hours every day for predictable movement.",
      "Remove aligners before eating or drinking anything other than plain cool water.",
      "Brush and rinse your teeth before reinserting trays to prevent enamel decalcification.",
      "Wear your post-treatment retainers as instructed once active alignment is complete.",
    ],
    faqs: [
      {
        question: "How many hours a day must clear aligners be worn?",
        answer:
          "For teeth to move accurately according to your digital treatment plan, aligners must be worn 20–22 hours per day, removed only for meals, hot beverages, and oral hygiene.",
      },
      {
        question: "Are clear aligners painful?",
        answer:
          "When switching to a new aligner stage every 1–2 weeks, you will feel gentle pressure for the first 24–48 hours—a normal sign that the tray is actively guiding your teeth.",
      },
    ],
  },
  {
    slug: "digital-x-ray",
    title: "Digital X-Ray (Radiography)",
    category: "Preventive & Diagnostic",
    shortDescription:
      "Low-radiation intraoral digital imaging providing instant, high-contrast visualization of root canals, hidden caries, bone levels, and impacted teeth.",
    leadDoctorSlug: "dr-anisha-deb",
    clinicalDuration: "5 – 10 Minutes",
    anesthesiaType: "Non-Invasive Diagnostic Imaging",
    recoverySummary: "Immediate results displayed chairside for transparent explanation",
    overview: [
      "Accurate dental treatment is impossible without seeing beneath the enamel and gumline. Digital intraoral radiography (RVG) captures high-resolution images of tooth roots, interdental decay, and supporting alveolar bone with significantly lower radiation exposure than conventional film X-rays.",
      "At Dant काया Multispeciality Clinic, digital X-rays are reviewed with you right on the chairside screen so you can clearly see the clinical condition of your tooth before deciding on any treatment.",
    ],
    indications: [
      "Detecting hidden cavities between teeth or beneath existing fillings",
      "Evaluating root canal length, curvature, and periapical infection",
      "Assessing bone levels in gum disease or prior to dental implant placement",
      "Inspecting the position and root morphology of impacted wisdom teeth",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Protective Positioning",
        description:
          "A barrier-wrapped digital sensor is positioned comfortably next to the target tooth.",
      },
      {
        step: "02",
        title: "Micro-Exposure Capture",
        description:
          "A fraction-of-a-second exposure captures crisp structural detail with minimal radiation.",
      },
      {
        step: "03",
        title: "Chairside Diagnostic Walkthrough",
        description:
          "Your doctor magnifies and explains the radiographic findings on screen in clear, understandable terms.",
      },
    ],
    benefits: [
      "Significantly reduced radiation compared to traditional dental film",
      "Instant chairside image visualization with zero chemical processing wait",
      "High-contrast magnification for micro-endodontic and surgical accuracy",
    ],
    aftercare: [
      "No special aftercare is required following diagnostic dental radiography.",
      "Always inform your dentist beforehand if you are pregnant so appropriate shielding and precautions are taken.",
    ],
    faqs: [
      {
        question: "Are digital dental X-rays safe?",
        answer:
          "Yes. Digital intraoral sensors require only a fraction of the exposure needed by older film X-rays, making them safe for routine diagnostics and root canal verification.",
      },
    ],
  },
  {
    slug: "child-dental-treatment",
    title: "Child Dental Treatment (Pediatric Care)",
    category: "Preventive & Diagnostic",
    shortDescription:
      "Gentle, anxiety-free preventive and restorative dental care for children, including fluoride protection, pit and fissure sealants, and milk tooth care.",
    leadDoctorSlug: "dr-sumit-kumar",
    clinicalDuration: "20 – 45 Minutes",
    anesthesiaType: "Topical / Gentle Local Anesthesia When Required",
    recoverySummary: "Child-friendly pace focused on building positive lifelong dental habits",
    overview: [
      "Healthy primary (milk) teeth are essential for proper chewing, speech development, and holding space for erupting permanent teeth. Our child dental care protocols focus on patience, gentle communication, and early prevention.",
      "From protective fluoride applications and fissure sealants to painless pediatric restorations and space maintainers, we make every child's visit calm, reassuring, and educational.",
    ],
    indications: [
      "Early childhood cavities or chalky white spots on milk teeth",
      "Deep grooves on newly erupted permanent molars needing protective sealants",
      "Toothache or gum swelling in primary teeth requiring pulpotomy/pulpectomy",
      "Premature loss of a milk tooth requiring a space maintainer",
      "Habit counseling for thumb sucking, mouth breathing, or tongue thrusting",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Tell-Show-Do Familiarization",
        description:
          "We introduce instruments gently to your child in an unhurried environment to build trust and remove fear.",
      },
      {
        step: "02",
        title: "Growth & Caries Assessment",
        description:
          "Examination of erupting teeth, bite development, brushing habits, and any early carious lesions.",
      },
      {
        step: "03",
        title: "Preventive or Restorative Care",
        description:
          "Application of fluoride varnish, pit sealants, or gentle tooth-colored restorations as clinically indicated.",
      },
    ],
    benefits: [
      "Prevents painful dental emergencies and premature loss of milk teeth",
      "Protects newly erupted adult molars from decay with non-invasive sealants",
      "Builds confidence and eliminates fear of dental visits from an early age",
    ],
    aftercare: [
      "Supervise your child's brushing twice daily using an age-appropriate fluoridated toothpaste.",
      "Limit frequent snacking on sticky sugars and sweetened beverages between meals.",
      "Schedule routine check-ups every 6 months to monitor jaw and tooth eruption.",
    ],
    faqs: [
      {
        question: "Why treat milk teeth if they eventually fall out?",
        answer:
          "Untreated decay in milk teeth can cause severe pain, abscess formation affecting the developing permanent tooth underneath, and loss of arch space that leads to crowded adult teeth.",
      },
    ],
  },
  {
    slug: "braces",
    title: "Orthodontic Braces (Metal & Ceramic)",
    category: "Orthodontics & Aesthetic",
    shortDescription:
      "Precision fixed orthodontic bracket systems (conventional metal, self-ligating, and tooth-colored ceramic) to correct complex bite and alignment discrepancies.",
    leadDoctorSlug: "dr-abhinav-kumar",
    clinicalDuration: "45 – 60 Minutes Initial Bonding; 20-Minute Monthly Adjustments",
    anesthesiaType: "Non-Invasive",
    recoverySummary: "Mild adaptation soreness for 2–3 days after archwire adjustments",
    overview: [
      "Fixed orthodontic braces remain the gold standard for correcting severe crowding, deep bites, open bites, impacted teeth, and skeletal-dental discrepancies that require precise three-dimensional root control.",
      "We offer both high-precision stainless steel brackets and low-profile tooth-colored ceramic braces, paired with gentle nickel-titanium archwires for biologically sound tooth movement.",
    ],
    indications: [
      "Moderate to severe dental crowding or rotated teeth",
      "Protruding front teeth susceptible to trauma",
      "Deep overbite, underbite, or crossbite affecting jaw function",
      "Generalized spacing between teeth",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Diagnostic Records & Case Analysis",
        description:
          "Clinical examination, photographs, study models, and radiographs determine the ideal orthodontic plan.",
      },
      {
        step: "02",
        title: "Precision Bracket Bonding",
        description:
          "Brackets are bonded accurately onto cleaned enamel surfaces and connected with a flexible initial archwire.",
      },
      {
        step: "03",
        title: "Periodic Archwire Progression",
        description:
          "Scheduled adjustments every 4–6 weeks guide teeth into proper alignment and occlusal interdigitation.",
      },
      {
        step: "04",
        title: "Debonding & Orthodontic Retention",
        description:
          "Once alignment is achieved, brackets are gently removed, enamel is polished, and retainers are provided.",
      },
    ],
    benefits: [
      "Provides comprehensive 3D control for complex tooth movements",
      "Choice of durable metal or discreet tooth-colored ceramic brackets",
      "Improves long-term gum health by eliminating plaque-trapping crowding",
    ],
    aftercare: [
      "Use an orthodontic toothbrush and interdental brushes to clean thoroughly around brackets after every meal.",
      "Avoid biting directly into hard, crunchy, or sticky foods that can dislodge brackets.",
      "Use orthodontic relief wax on brackets if mild cheek irritation occurs during the first week.",
    ],
    faqs: [
      {
        question: "What is the difference between metal and ceramic braces?",
        answer:
          "Both work on the same biomechanical principles. Ceramic braces use translucent or tooth-colored brackets that blend closely with your natural enamel for a much less noticeable appearance.",
      },
    ],
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning (Ultrasonic Scaling & Polishing)",
    category: "Preventive & Diagnostic",
    shortDescription:
      "Gentle ultrasonic calculus removal and stain polishing to halt gum bleeding, eliminate halitosis, and protect periodontal bone support.",
    leadDoctorSlug: "dr-sumit-kumar",
    clinicalDuration: "30 – 45 Minutes",
    anesthesiaType: "None / Topical Gel for Sensitive Gums",
    recoverySummary: "Immediate refresh; gums feel cleaner and healthier within days",
    overview: [
      "Even with diligent home brushing, mineral deposits from saliva combine with plaque to form hardened tartar (calculus) along and beneath the gumline. Tartar cannot be brushed away at home and triggers gum inflammation (gingivitis), bleeding, and bad breath.",
      "Our ultrasonic scaling and polishing procedure uses calibrated high-frequency vibrations and fine water mist to gently detach tartar and extrinsic tea, coffee, or tobacco stains without scratching tooth enamel.",
    ],
    indications: [
      "Bleeding gums during brushing or flossing",
      "Visible yellowish or brownish tartar build-up behind lower front teeth",
      "Persistent bad breath (halitosis) caused by plaque accumulation",
      "Tea, coffee, or food staining on tooth surfaces",
      "Routine 6-month preventive periodontal maintenance",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Periodontal Screening",
        description:
          "Inspection of gum health, pocket depths, plaque deposits, and tartar accumulation.",
      },
      {
        step: "02",
        title: "Ultrasonic Supragingival & Subgingival Scaling",
        description:
          "Fine ultrasonic tips gently dislodge hardened calculus from tooth surfaces and shallow gum pockets.",
      },
      {
        step: "03",
        title: "Prophylaxis Paste Polishing",
        description:
          "A soft rotating rubber cup and fine polishing paste smooth the enamel so new plaque cannot easily adhere.",
      },
    ],
    benefits: [
      "Stops gum bleeding and reverses early gingivitis",
      "Removes stubborn surface stains and restores natural tooth brightness",
      "Does not weaken or thin tooth enamel",
    ],
    aftercare: [
      "Brush twice daily with a soft-bristled toothbrush using gentle circular or sweeping strokes.",
      "If gums were inflamed prior to scaling, rinse with warm salt water or prescribed mouthwash for 3–5 days.",
      "Schedule routine professional scaling every 6 months.",
    ],
    faqs: [
      {
        question: "Does professional teeth cleaning loosen teeth or damage enamel?",
        answer:
          "No—that is a common myth. Ultrasonic scaling only vibrates off hardened tartar deposits attached to the tooth; it does not cut enamel. In fact, removing tartar prevents the bone loss that actually causes teeth to loosen.",
      },
    ],
  },
  {
    slug: "dentures",
    title: "Dentures (Fixed & Removable Prosthetics)",
    category: "Implants & Prosthodontics",
    shortDescription:
      "Custom-engineered complete dentures, flexible partial dentures, and implant-supported prostheses designed for comfortable fit, clear speech, and natural facial support.",
    leadDoctorSlug: "dr-sumit-kumar",
    clinicalDuration: "3 – 5 Clinical Visits for Precision Try-In & Delivery",
    anesthesiaType: "Non-Invasive (For Conventional Removable Dentures)",
    recoverySummary: "Guided adaptation with follow-up adjustments for pressure-free comfort",
    overview: [
      "Missing multiple or all teeth affects nutrition, speech clarity, and the vertical support of the lips and cheeks. Modern prosthodontics offers far more comfortable and lifelike solutions than bulky traditional dentures.",
      "At Dant काया Multispeciality Clinic, we fabricate high-impact complete dentures, lightweight flexible partial dentures (Valplast), cast partial dentures, and implant-retained overdentures tailored to your oral mucosa and jaw ridge.",
    ],
    indications: [
      "Complete loss of teeth in the upper, lower, or both dental arches",
      "Multiple missing teeth where a removable or flexible prosthesis is preferred",
      "Old, worn, or loose dentures causing sore spots or difficulty chewing",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Primary & Border-Molded Impressions",
        description:
          "Accurate anatomical impressions record the exact contours of your gums and muscle attachments.",
      },
      {
        step: "02",
        title: "Jaw Relation & Bite Registration",
        description:
          "Measuring vertical facial height and centric bite relationship so your lower face looks naturally supported.",
      },
      {
        step: "03",
        title: "Aesthetic Wax Try-In",
        description:
          "You preview the tooth shade, size, and arrangement in wax before final processing.",
      },
      {
        step: "04",
        title: "Final Insertion & Occlusal Refinement",
        description:
          "Delivery of the polished prosthesis with fine adjustments and home-care training.",
      },
    ],
    benefits: [
      "Restores chewing ability for balanced everyday nutrition",
      "Supports lip and cheek contours to prevent a sunken facial appearance",
      "Available in flexible, unbreakable nylon partials or implant-stabilized designs",
    ],
    aftercare: [
      "Remove and rinse removable dentures after meals, and brush them daily with a soft denture brush.",
      "Soak removable dentures overnight in clean water or denture cleansing solution to let your gum tissues rest.",
      "Visit the clinic promptly if you notice any localized sore spot so we can smooth the contact area.",
    ],
    faqs: [
      {
        question: "What are flexible partial dentures?",
        answer:
          "Flexible dentures are crafted from biocompatible thermoplastic nylon without rigid metal clasps. They are lightweight, translucent against natural gums, and highly resistant to fracture.",
      },
    ],
  },
  {
    slug: "crown-and-bridge",
    title: "Crown & Bridge Restorations",
    category: "Implants & Prosthodontics",
    shortDescription:
      "High-strength monolithic Zirconia, E.max all-ceramic, and porcelain-fused crowns and bridges that protect weakened teeth and replace missing gaps.",
    leadDoctorSlug: "dr-abhinav-kumar",
    clinicalDuration: "2 Visits (Preparation & Digital Shade Match, followed by Cementation)",
    anesthesiaType: "Local Anesthesia When Needed",
    recoverySummary: "Immediate functional biting once permanently luted",
    overview: [
      "When a tooth has undergone root canal therapy, suffered a cusp fracture, or lost substantial structure to decay, a simple filling cannot withstand heavy chewing forces. A dental crown encases the tooth in a precision-milled protective restoration.",
      "Similarly, a fixed dental bridge replaces one or more missing teeth by anchoring onto adjacent prepared teeth. We specialize in metal-free Zirconia and lithium disilicate (E.max) ceramics that combine exceptional flexural strength with lifelike translucency.",
    ],
    indications: [
      "Protection and reinforcement of a root canal treated tooth",
      "Fractured, cracked, or heavily filled teeth at risk of splitting",
      "Fixed replacement of 1–2 missing teeth via a dental bridge",
      "Replacing old crowns with dark metal margins at the gumline",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Conservative Tooth Preparation & Shade Selection",
        description:
          "The tooth is shaped conservatively with smooth margins, and the exact shade of your neighboring teeth is matched under natural light.",
      },
      {
        step: "02",
        title: "Elastomeric Impression & Provisional Crown",
        description:
          "High-accuracy impressions capture microscopic margin detail while a protective temporary crown safeguards your tooth.",
      },
      {
        step: "03",
        title: "Try-In & Adhesive Luting",
        description:
          "The CAD/CAM fabricated Zirconia or ceramic crown is verified for marginal seal, contact points, and bite before permanent bonding.",
      },
    ],
    benefits: [
      "Prevents fracture of root-treated or structurally weakened teeth",
      "Metal-free Zirconia and E.max eliminate dark grey lines near the gums",
      "Precision CAD/CAM margins promote healthy surrounding gum tissue",
    ],
    aftercare: [
      "Avoid sticky foods for the first 24 hours after final crown cementation.",
      "Brush and floss daily around crown margins and beneath bridge pontics.",
    ],
    faqs: [
      {
        question: "Which is better: Zirconia or PFM (metal-ceramic) crowns?",
        answer:
          "Zirconia crowns are milled from solid biocompatible ceramic, offering superior fracture resistance and natural light transmission without any metal core that could show as a dark line if gums recede over time.",
      },
    ],
  },
  {
    slug: "gum-problems-treatment",
    title: "Gum Problems Treatment (Periodontal Care)",
    category: "Oral Surgery & Periodontics",
    shortDescription:
      "Targeted management of bleeding gums, deep periodontal pockets, gum recession, and pyorrhea through deep root planing and periodontal therapy.",
    leadDoctorSlug: "dr-sumit-kumar",
    clinicalDuration: "45 – 60 Minutes",
    anesthesiaType: "Topical or Local Anesthesia for Deep Subgingival Curettage",
    recoverySummary: "Progressive reduction in gum inflammation, bleeding, and pocket depth",
    overview: [
      "Periodontal (gum) disease is a chronic bacterial infection that affects the gums and the bone supporting your teeth. Left untreated, gingivitis progresses into periodontitis—leading to deep gum pockets, pus discharge, gum recession, and eventual tooth mobility.",
      "Our periodontal care protocols focus on halting tissue destruction through thorough subgingival scaling, root planing, curettage, and tailored maintenance regimens.",
    ],
    indications: [
      "Spontaneous gum bleeding or red, swollen, tender gingiva",
      "Persistent bad breath or unpleasant taste in the mouth",
      "Receding gums making teeth appear longer or sensitive at the roots",
      "Periodontal pockets or mild mobility of teeth",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Periodontal Pocket Charting",
        description:
          "Assessment of gingival inflammation, attachment loss, bone levels, and plaque retention factors.",
      },
      {
        step: "02",
        title: "Deep Scaling & Root Planing",
        description:
          "Removal of subgingival calculus and bacterial toxins from root surfaces so gum tissues can reattach firmly.",
      },
      {
        step: "03",
        title: "Antimicrobial Therapy & Maintenance Plan",
        description:
          "Targeted local antibacterial irrigation and personalized interdental hygiene coaching.",
      },
    ],
    benefits: [
      "Halts the progression of bone loss around natural teeth",
      "Eliminates chronic gum inflammation, bleeding, and periodontal odor",
      "Protects systemic health by reducing chronic oral bacterial load",
    ],
    aftercare: [
      "Use warm saline rinses and any prescribed medicated mouthwash strictly for the recommended duration.",
      "Clean between teeth daily using interdental brushes or floss.",
      "Attend 3-to-6-month periodontal maintenance visits to prevent recurrence.",
    ],
    faqs: [
      {
        question: "Can gum disease be cured?",
        answer:
          "Early gum inflammation (gingivitis) is completely reversible with professional cleaning and home care. More advanced periodontitis can be effectively arrested and stabilized so you keep your natural teeth.",
      },
    ],
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery (Major & Minor)",
    category: "Oral Surgery & Periodontics",
    shortDescription:
      "Atraumatic dental extractions, cyst enucleation, frenectomy, alveoloplasty, and minor soft-tissue oral surgical procedures under strict surgical sterility.",
    leadDoctorSlug: "dr-abhinav-kumar",
    clinicalDuration: "30 – 60 Minutes",
    anesthesiaType: "Profound Local Anesthesia",
    recoverySummary: "Guided post-operative care with smooth mucosal healing in 5–7 days",
    overview: [
      "When a tooth is fractured below the bone line or a localized oral lesion requires surgical management, atraumatic technique is essential to preserve surrounding bone and ensure rapid, comfortable healing.",
      "Led by Dr. Abhinav Kumar, our oral surgery protocols utilize gentle luxation instruments, strict autoclaved sterility, and careful suturing to minimize post-operative swelling and discomfort.",
    ],
    indications: [
      "Severely decayed or fractured teeth that cannot be saved by root canal treatment",
      "Retained root stumps causing recurrent infection",
      "Pre-prosthetic bone smoothing (alveoloplasty) prior to denture fabrication",
      "High labial or lingual frenum attachments (frenectomy)",
      "Periapical cysts or minor benign oral tissue growths",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Medical History & Radiographic Review",
        description:
          "Verification of blood pressure, systemic medications, and root-to-nerve anatomical relationships.",
      },
      {
        step: "02",
        title: "Atraumatic Surgical Protocol",
        description:
          "Under profound local anesthesia, the procedure is performed gently to preserve surrounding cortical bone.",
      },
      {
        step: "03",
        title: "Hemostasis, Suturing & Recovery Guidance",
        description:
          "Socket stabilization, placement of sutures when indicated, and clear written post-operative instructions.",
      },
    ],
    benefits: [
      "Bone-preserving atraumatic instrumentation",
      "Hospital-grade instrument sterilization and surgical drape protocols",
      "Clear post-surgical follow-up and pain management",
    ],
    aftercare: [
      "Bite gently but firmly on the sterile gauze pack for 30–45 minutes after surgery.",
      "Do not spit forcefully, drink through a straw, or smoke for 48 hours to protect the healing blood clot.",
      "Eat soft, cool foods on the opposite side for the first 24 hours.",
    ],
    faqs: [
      {
        question: "How soon can I return to work after a minor oral surgery?",
        answer:
          "Most patients resume normal desk work the very next day. We advise avoiding strenuous physical exercise for 48 hours to prevent bleeding.",
      },
    ],
  },
  {
    slug: "dental-jewellery",
    title: "Dental Jewellery",
    category: "Orthodontics & Aesthetic",
    shortDescription:
      "Non-invasive, drill-free bonding of genuine dental crystals onto the enamel surface for a subtle, reversible sparkle.",
    leadDoctorSlug: "dr-sumit-kumar",
    clinicalDuration: "15 – 20 Minutes",
    anesthesiaType: "Non-Invasive (Zero Drilling, Zero Anesthesia)",
    recoverySummary: "Instant result; completely reversible without harming tooth enamel",
    overview: [
      "Dental jewellery adds a delicate crystal accent to an upper lateral incisor or canine using medical-grade composite bonding—without drilling, cutting, or damaging a single millimeter of your natural tooth enamel.",
      "Because the bonding is entirely superficial and biocompatible, the crystal can be safely polished off by a dentist at any time in the future, leaving your underlying enamel completely intact.",
    ],
    indications: [
      "Patients seeking a safe, dentist-applied crystal accent on a front tooth",
      "Special occasions, weddings, or personal aesthetic expression without enamel damage",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Placement Preview",
        description:
          "Selecting the ideal tooth position so the crystal catches the light naturally when you smile and does not interfere with your bite.",
      },
      {
        step: "02",
        title: "Enamel Cleaning & Gentle Conditioning",
        description:
          "The chosen spot on the enamel is polished and conditioned without any mechanical drilling.",
      },
      {
        step: "03",
        title: "Light-Cured Biocompatible Bonding",
        description:
          "The flat-backed dental crystal is secured with flowable dental adhesive and cured in seconds.",
      },
    ],
    benefits: [
      "100% drill-free and painless application in 15 minutes",
      "Uses safe medical-grade orthodontic/restorative dental adhesives",
      "Completely reversible whenever you choose to remove it",
    ],
    aftercare: [
      "Avoid biting directly into very hard foods with the decorated tooth for the first 24 hours.",
      "Brush normally around the crystal to keep the surrounding enamel clean.",
    ],
    faqs: [
      {
        question: "Does dental jewellery harm my tooth enamel?",
        answer:
          "Not at all. No drilling is performed; the crystal is bonded using the exact same reversible adhesive technique used for orthodontic brackets.",
      },
    ],
  },
  {
    slug: "smile-designing",
    title: "Smile Designing",
    category: "Orthodontics & Aesthetic",
    shortDescription:
      "Customized aesthetic enhancement combining porcelain veneers, biomimetic composite bonding, gum contouring, and shade harmony.",
    leadDoctorSlug: "dr-sumit-kumar",
    clinicalDuration: "1 – 3 Visits Depending on Treatment Scope",
    anesthesiaType: "Conservative / Local Anesthesia Only When Needed",
    recoverySummary: "Natural, proportionate smile tailored to your facial symmetry",
    overview: [
      "Smile Designing is a disciplined aesthetic and restorative process that evaluates tooth proportion, gingival symmetry, midline alignment, and shade in relation to your lips and facial features.",
      "Rather than applying a uniform, artificial 'one-size-fits-all' look, our clinicians combine ultra-thin ceramic veneers, conservative composite bonding, enamel recontouring, or gum zenith alignment to create a refined, natural-looking smile.",
    ],
    indications: [
      "Chipped, worn, or unevenly shaped front teeth",
      "Midline diastema (gaps between front teeth) or minor asymmetries",
      "Intrinsic tooth discoloration resistant to conventional bleaching",
      "Disproportionate tooth-to-gum display when smiling",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Facial & Dental Aesthetic Analysis",
        description:
          "Photographs and clinical assessment of lip line, tooth width-to-length ratios, and shade profile.",
      },
      {
        step: "02",
        title: "Mock-Up & Conservative Preparation",
        description:
          "Previewing the proposed contours before performing minimal, enamel-preserving preparation.",
      },
      {
        step: "03",
        title: "Artisanal Veneer or Biomimetic Bonding Delivery",
        description:
          "Bonding ultra-thin lithium disilicate veneers or multi-layered aesthetic composites with natural surface texture.",
      },
    ],
    benefits: [
      "Tailored to your individual facial proportions and skin tone",
      "Focuses on minimally invasive, enamel-conserving techniques",
      "Harmonizes tooth shape, alignment, and natural translucency",
    ],
    aftercare: [
      "Maintain meticulous brushing and flossing around veneer or composite margins.",
      "Avoid using front teeth as tools to open packaging or bite hard shells.",
    ],
    faqs: [
      {
        question: "Will smile designing make my teeth look bulky or fake?",
        answer:
          "No. Our aesthetic philosophy prioritizes natural translucency, realistic incisal edges, and conservative preparation so your smile looks authentically yours.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening (Clinical Bleaching)",
    category: "Orthodontics & Aesthetic",
    shortDescription:
      "Dentist-supervised in-office tooth whitening that safely lifts deep enamel staining caused by coffee, tea, spices, and ageing.",
    leadDoctorSlug: "dr-sumit-kumar",
    clinicalDuration: "45 – 60 Minutes",
    anesthesiaType: "Non-Invasive with Gingival Barrier Protection",
    recoverySummary: "Visibly brighter tooth shade immediately after a single clinical session",
    overview: [
      "Over time, chromogenic pigments from tea, coffee, turmeric, and natural ageing penetrate microscopic enamel pores, dulling your tooth shade. Over-the-counter abrasive pastes often scratch enamel without lifting deep stains.",
      "Our clinical teeth whitening protocol protects your gums with a light-cured gingival barrier before applying pH-balanced whitening gel and desensitizing agents—brightening your natural teeth safely in a single supervised appointment.",
    ],
    indications: [
      "Generalized yellowing or dullness of natural teeth from diet or ageing",
      "Pre-wedding or special-event smile brightening",
      "Shade matching prior to placing new front crowns or veneers",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Pre-Whitening Polish & Shade Recording",
        description:
          "Surface biofilm is removed and your baseline tooth shade is recorded against a clinical shade guide.",
      },
      {
        step: "02",
        title: "Gingival Barrier Isolation",
        description:
          "A protective resin barrier covers the gums and lips so the active gel contacts only tooth enamel.",
      },
      {
        step: "03",
        title: "Controlled Whitening Cycles & Remineralization",
        description:
          "Application of clinical whitening gel followed by a soothing fluoride/potassium nitrate desensitizing treatment.",
      },
    ],
    benefits: [
      "Brightens natural enamel by several shades in a single 60-minute visit",
      "Full gingival protection prevents soft-tissue irritation",
      "Includes post-treatment desensitizing care for enamel comfort",
    ],
    aftercare: [
      "Follow a 'white diet' for 48 hours—avoiding dark tea, coffee, red wine, turmeric, and colored sodas while enamel pores rehydrate.",
      "Use a sensitivity toothpaste for 3–5 days if mild transient sensitivity occurs.",
    ],
    faqs: [
      {
        question: "Does clinical teeth whitening work on existing crowns or fillings?",
        answer:
          "Whitening gel only lightens natural tooth enamel. If you have visible front fillings or crowns, we plan whitening first and then match any new restorations to your brighter shade.",
      },
    ],
  },
  {
    slug: "third-molar-surgery",
    title: "Third Molar Surgery & Disimpaction",
    category: "Oral Surgery & Periodontics",
    shortDescription:
      "Specialist surgical removal of impacted or painfully erupting wisdom teeth causing pericoronitis, jaw pain, or damage to adjacent molars.",
    leadDoctorSlug: "dr-abhinav-kumar",
    clinicalDuration: "40 – 60 Minutes",
    anesthesiaType: "Profound Local Nerve Block Anesthesia",
    recoverySummary: "Sutures removed in 7 days; structured medication protocol minimizes swelling",
    overview: [
      "Third molars (wisdom teeth) are the last teeth to erupt—often between ages 17 and 25—when the jaw frequently lacks sufficient room. As a result, wisdom teeth may grow sideways, remain trapped in bone (impacted), or partially erupt under a flap of gum that repeatedly traps food and bacteria (pericoronitis).",
      "Dr. Abhinav Kumar performs careful radiographic nerve-mapping and surgical disimpaction to remove problematic third molars safely while protecting the adjacent second molar and inferior alveolar nerve.",
    ],
    indications: [
      "Recurrent pain and gum swelling behind the last molar (pericoronitis)",
      "Difficulty opening the mouth fully (trismus) or pain radiating to the ear/jaw",
      "Horizontal or mesioangular impaction causing decay on the neighboring second molar",
      "Cyst formation around an unerupted third molar crown",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Radiographic Impaction & Nerve Assessment",
        description:
          "Digital imaging evaluates root angulation, bone depth, and proximity to the mandibular canal.",
      },
      {
        step: "02",
        title: "Profound Nerve Block & Tooth Sectioning",
        description:
          "Once the area is completely numb, the impacted tooth is often sectioned into smaller segments for gentle removal through a conservative opening.",
      },
      {
        step: "03",
        title: "Socket Irrigation & Primary Closure",
        description:
          "The surgical site is irrigated with sterile saline and closed with sutures for smooth tissue healing.",
      },
    ],
    benefits: [
      "Permanently resolves recurrent wisdom tooth gum infections and jaw pain",
      "Prevents hidden root decay on the vital second molar in front of it",
      "Careful tooth-sectioning technique reduces trauma and post-operative swelling",
    ],
    aftercare: [
      "Use an external ice pack intermittently (15 minutes on, 15 minutes off) on the first day.",
      "Stick to a soft, cool diet (yogurt, smoothies, dal, mashed foods) for 48–72 hours.",
      "Begin gentle warm salt-water rinses 24 hours after surgery after meals.",
    ],
    faqs: [
      {
        question: "Will removing my wisdom tooth affect my eyesight or other teeth?",
        answer:
          "No—wisdom tooth extraction has zero connection to eyesight, and removing an impacted third molar actually protects your remaining teeth from crowding and decay.",
      },
    ],
  },
  {
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    category: "Implants & Prosthodontics",
    shortDescription:
      "Comprehensive multidisciplinary reconstruction of severely worn, missing, or broken teeth to restore vertical bite dimension, TMJ comfort, and aesthetics.",
    leadDoctorSlug: "dr-abhinav-kumar",
    clinicalDuration: "Phased Multi-Stage Treatment Plan",
    anesthesiaType: "Local Anesthesia as Required per Stage",
    recoverySummary: "Step-by-step restoration with provisional testing before final prosthetics",
    overview: [
      "When multiple teeth across both jaws are severely worn down by bruxism (grinding), acid erosion, multiple missing teeth, or failing old dental work, treating single teeth in isolation cannot restore a balanced bite.",
      "Full Mouth Rehabilitation at Dant काया Multispeciality Clinic brings together our Oral Surgeons and Endodontist to systematically rebuild your bite height (vertical dimension), stabilize periodontal health, replace missing teeth with implants or bridges, and restore functional harmony.",
    ],
    indications: [
      "Generalized severe tooth wear or flattened teeth from chronic grinding",
      "Multiple missing, broken, or failing teeth across upper and lower jaws",
      "Collapsed bite height causing jaw joint (TMJ) fatigue or facial aging",
      "Need for coordinated endodontic, surgical, implant, and crown reconstruction",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Comprehensive Diagnostic & Occlusal Workup",
        description:
          "Full-arch radiographs, study models, periodontal evaluation, and joint assessment.",
      },
      {
        step: "02",
        title: "Disease Control & Foundation Phase",
        description:
          "Completing necessary periodontal therapy, root canals, and surgical extractions or implant placements.",
      },
      {
        step: "03",
        title: "Provisional Bite Stabilization",
        description:
          "Testing the newly restored bite height and aesthetics with comfortable temporary restorations.",
      },
      {
        step: "04",
        title: "Definitive Ceramic & Implant Prosthetics",
        description:
          "Delivery of custom Zirconia/ceramic crowns, bridges, and protective occlusal nightguards.",
      },
    ],
    benefits: [
      "Restores comfortable, balanced chewing across both sides of the jaw",
      "Re-establishes proper lower-face vertical height and lip support",
      "Coordinated under one roof by our surgical and endodontic specialists",
    ],
    aftercare: [
      "Wear your custom occlusal nightguard if you have a history of nighttime clenching or bruxism.",
      "Attend scheduled 6-month hygiene and occlusal maintenance reviews.",
    ],
    faqs: [
      {
        question: "Will I be left without teeth during full mouth rehabilitation?",
        answer:
          "Never. Throughout phased rehabilitation, carefully fabricated provisional (temporary) restorations keep you comfortable, functional, and presentable while permanent restorations are completed.",
      },
    ],
  },
  {
    slug: "cosmetic-filling-restoration",
    title: "Cosmetic Filling & Restoration of Dental Caries",
    category: "Endodontics & Restorative",
    shortDescription:
      "Biomimetic, mercury-free composite resin restorations that bond micromechanically to tooth structure to repair cavities and chipped enamel invisibly.",
    leadDoctorSlug: "dr-anisha-deb",
    clinicalDuration: "25 – 45 Minutes per Tooth",
    anesthesiaType: "None or Gentle Local Anesthesia for Deep Caries",
    recoverySummary: "Immediate chewing comfort; light-cured composite sets instantly",
    overview: [
      "Dental caries (cavities) progressively demineralize enamel and dentin. Early conservative removal of decay prevents bacteria from reaching the nerve and avoids the need for a future root canal.",
      "We use multi-shade nano-hybrid composite resins that bond directly to healthy enamel and dentin. Unlike older silver amalgam fillings, composite restorations require minimal removal of sound tooth structure and blend seamlessly with your natural tooth shade.",
    ],
    indications: [
      "Cavities or dark carious spots on molars, premolars, or front teeth",
      "Sensitivity to sweet or cold foods caused by enamel decay or cervical abrasion",
      "Chipped incisal edges on front teeth",
      "Replacement of old, leaking, or cracked fillings",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Selective Caries Removal",
        description:
          "Only decayed, infected dentin is gently removed while preserving maximum healthy tooth structure.",
      },
      {
        step: "02",
        title: "Adhesive Bonding Protocol",
        description:
          "Enamel and dentin are conditioned and sealed with a desensitizing dental bonding agent.",
      },
      {
        step: "03",
        title: "Incremental Layering & Anatomical Sculpting",
        description:
          "Shade-matched composite resin is sculpted to recreate natural cusps and fissures, light-cured, and polished to a high gloss.",
      },
    ],
    benefits: [
      "100% mercury-free, tooth-colored restorations that are virtually invisible",
      "Conserves healthy tooth structure compared to traditional metal fillings",
      "Instant curing allows you to eat normally right after the appointment",
    ],
    aftercare: [
      "If local anesthesia was used, wait until numbness wears off before chewing hot foods so you do not accidentally bite your lip.",
      "Floss and brush daily to prevent recurrent decay around filling margins.",
    ],
    faqs: [
      {
        question: "How long do tooth-colored composite fillings last?",
        answer:
          "With proper adhesive technique and good oral hygiene, modern nano-hybrid composite restorations provide durable service for many years and can be easily polished or repaired if needed.",
      },
    ],
  },
];

const dentalServiceImageMap: Record<string, string> = {
  "root-canal-treatment": "/images/dental-root-canal.png",
  "dental-implants": "/images/dental-implants.jpg",
  "clear-aligners": "/images/dental-aligners.png",
  "digital-x-ray": "/images/dental-xray.jpg",
  "child-dental-treatment": "/images/dental-pediatric.jpg",
  "braces": "/images/dental-braces.jpg",
  "teeth-cleaning": "/images/dental-teeth-cleaning.jpg",
  "dentures": "/images/dental-dentures.jpg",
  "crown-and-bridge": "/images/dental-crown.jpg",
  "gum-problems-treatment": "/images/dental-gum-care.jpg",
  "oral-surgery": "/images/dental-surgery.jpg",
  "dental-jewellery": "/images/dental-jewellery.jpg",
  "smile-designing": "/images/dental-smile-design.jpg",
  "teeth-whitening": "/images/dental-teeth-whitening.jpg",
  "third-molar-surgery": "/images/dental-wisdom-tooth.jpg",
  "full-mouth-rehabilitation": "/images/dental-full-mouth-rehab.jpg",
  "cosmetic-filling-restoration": "/images/dental-restorative.jpg",
};

for (const item of dentalServices) {
  item.image = dentalServiceImageMap[item.slug] || item.image || "/images/dental-root-canal.png";
  if (!item.imageAlt) {
    item.imageAlt = `${item.title} — Clinical Dental Care at Dant काया Multispeciality Clinic, Patna`;
  }
}

export function getDentalServiceBySlug(slug: string): DentalServiceItem | undefined {
  return dentalServices.find((service) => service.slug === slug);
}

export function getFeaturedDentalServices(): DentalServiceItem[] {
  return dentalServices
    .filter((service) => service.featuredOnHome)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

