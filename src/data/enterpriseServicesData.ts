import { GraduationCap, Users, Building, Plus, Navigation, LayoutDashboard, Briefcase, FileText, CheckCircle, BarChart, Settings, HeartHandshake, ShieldCheck, TrendingUp, Presentation, Globe, Users2, Code2 } from "lucide-react";

export const enterpriseServicesData = [
  {
    slug: "admissions",
    title: "Admissions Assistance",
    icon: GraduationCap,
    colorTheme: "rose",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop",
    heroSubtext: "Expert guidance and strategic counseling to help students secure placements in top-tier educational institutes.",
    stats: [
      { value: "500+", label: "Students Guided" },
      { value: "45+", label: "Partner Institutes" },
      { value: "95%", label: "Success Rate" },
      { value: "1-on-1", label: "Counseling" }
    ],
    overviewParagraphs: [
      "Navigating the complex landscape of higher education admissions requires more than just good grades; it requires a strategic approach. Our Admissions Assistance program is designed to provide comprehensive, personalized support to students aiming for top-tier universities and institutions.",
      "We believe that every student has a unique profile and potential. Our expert counselors work closely with each candidate to identify their strengths, map out their career aspirations, and align them with the right academic programs. From initial profiling to final enrollment, we ensure a seamless and confident journey.",
      "By leveraging our extensive network of partner institutes and deep understanding of admission criteria, we demystify the application process, offering actionable insights that significantly enhance the likelihood of acceptance."
    ],
    timelineSteps: [
      {
        title: "Initial Consultation",
        description: "Understanding your academic background, interests, and long-term career goals.",
        duration: "Step 1"
      },
      {
        title: "Profile Assessment",
        description: "Evaluating strengths and areas for improvement to build a compelling applicant profile.",
        duration: "Step 2"
      },
      {
        title: "University Shortlisting",
        description: "Curating a targeted list of institutes that best match your profile and ambitions.",
        duration: "Step 3"
      },
      {
        title: "Application Support",
        description: "Assisting with essay reviews, documentation, and interview preparation.",
        duration: "Step 4"
      },
      {
        title: "Enrollment Confirmation",
        description: "Guiding you through the final acceptance, fee structures, and onboarding steps.",
        duration: "Step 5"
      }
    ],
    features: [
      {
        icon: Navigation,
        title: "Strategic Guidance",
        description: "Personalized roadmaps tailored to your unique academic and career objectives."
      },
      {
        icon: HeartHandshake,
        title: "1-on-1 Counseling",
        description: "Dedicated sessions with experienced advisors to clear doubts and build confidence."
      },
      {
        icon: Building,
        title: "University Selection",
        description: "Data-driven matching with institutions that offer the best fit for your profile."
      },
      {
        icon: FileText,
        title: "Application Support",
        description: "Meticulous review of SOPs, resumes, and all required application documents."
      }
    ],
    impactStats: [
      { value: 500, suffix: "+", label: "Admissions Secured" },
      { value: 95, suffix: "%", label: "Acceptance Rate" },
      { value: 45, suffix: "+", label: "Institutional Partners" },
      { value: 10, suffix: "+", label: "Years Experience" }
    ],
    testimonialOrHighlight: {
      quote: "The personalized counseling and strategic university shortlisting completely transformed my application journey. AION Technology didn't just help me apply; they helped me discover my true potential and secure a spot at my dream institute.",
      author: "Priya Sharma",
      role: "Accepted into Top-Tier Tech Program",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
    },
    faqs: [
      {
        question: "How early should I start the admissions counseling process?",
        answer: "We recommend starting at least 12-18 months before your intended enrollment date. This provides ample time for profile building, standardized test preparation, and thoughtful application crafting."
      },
      {
        question: "Do you help with scholarship applications?",
        answer: "Yes, our team provides guidance on identifying relevant scholarships and assists in preparing the necessary documentation and essays to maximize your chances of financial aid."
      },
      {
        question: "Are your services limited to specific courses or streams?",
        answer: "No, we offer guidance across a wide variety of disciplines including Engineering, Management, Data Science, and emerging technology fields at both undergraduate and postgraduate levels."
      },
      {
        question: "How do you select the partner institutes?",
        answer: "We rigorously vet our partner institutes based on academic excellence, placement records, faculty credentials, and industry alignment to ensure our students receive top-tier education."
      }
    ],
    relatedServiceSlugs: ["training", "internships"]
  },
  {
    slug: "internships",
    title: "Internship Programs",
    icon: Users,
    colorTheme: "teal",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop",
    heroSubtext: "Bridge the gap between academia and industry with hands-on, real-world internship experiences.",
    stats: [
      { value: "200+", label: "Interns Placed" },
      { value: "30+", label: "Partner Companies" },
      { value: "3-6", label: "Month Programs" },
      { value: "Live", label: "Project Exposure" }
    ],
    overviewParagraphs: [
      "Theoretical knowledge alone is no longer sufficient to thrive in today's highly competitive corporate landscape. Our Internship Programs are meticulously designed to provide candidates with the invaluable practical experience they need to stand out.",
      "We partner with leading tech companies and innovative startups to curate internship roles that offer meaningful work, rather than just observational tasks. Interns are integrated into actual project teams, allowing them to apply their academic learning to solve real business challenges.",
      "Beyond technical skill development, our internships focus heavily on cultivating essential soft skills—communication, teamwork, time management, and corporate etiquette—ensuring participants emerge as well-rounded, industry-ready professionals."
    ],
    timelineSteps: [
      {
        title: "Application & Screening",
        description: "Submit your profile for review against our baseline technical and behavioral criteria.",
        duration: "Week 1"
      },
      {
        title: "Skill Matching",
        description: "Aligning your specific skill set and career interests with the right corporate partner.",
        duration: "Week 2"
      },
      {
        title: "Company Placement",
        description: "Final interviews and formal onboarding into your assigned company and project team.",
        duration: "Week 3"
      },
      {
        title: "On-the-Job Training",
        description: "Executing live projects under the direct mentorship of senior industry professionals.",
        duration: "Months 1-5"
      },
      {
        title: "Certification & Conversion",
        description: "Final evaluation, certification, and potential pre-placement offers for top performers.",
        duration: "Final Month"
      }
    ],
    features: [
      {
        icon: Briefcase,
        title: "Summer Internships",
        description: "Intensive, short-term programs designed to maximize learning during academic breaks."
      },
      {
        icon: LayoutDashboard,
        title: "Live Projects",
        description: "Hands-on involvement in active corporate projects that impact real business outcomes."
      },
      {
        icon: Users2,
        title: "Mentorship",
        description: "Direct guidance and feedback from experienced industry veterans and tech leads."
      },
      {
        icon: TrendingUp,
        title: "Industry Experience",
        description: "Deep immersion into corporate workflows, agile methodologies, and professional environments."
      }
    ],
    impactStats: [
      { value: 200, suffix: "+", label: "Internships Completed" },
      { value: 85, suffix: "%", label: "PPO Conversion Rate" },
      { value: 30, suffix: "+", label: "Corporate Partners" },
      { value: 100, suffix: "%", label: "Live Project Guarantee" }
    ],
    testimonialOrHighlight: {
      quote: "The internship program bridged the gap between my textbook knowledge and real-world application. Working on a live enterprise project gave me the exact experience I needed to secure a full-time role immediately after graduation.",
      author: "Rahul Verma",
      role: "Converted to Full-Time SDE",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop"
    },
    faqs: [
      {
        question: "Are the internships paid or unpaid?",
        answer: "The stipend structure varies by partner company and the specific nature of the role. We strive to secure paid internships for our candidates whenever possible, especially for longer-term engagements."
      },
      {
        question: "Can I do the internship remotely?",
        answer: "We offer both on-site and remote/hybrid internship opportunities, depending on the requirements of the partner organization and the specific project."
      },
      {
        question: "Will I receive a certificate upon completion?",
        answer: "Yes, all successful candidates receive a formal internship completion certificate detailing the technologies used and projects delivered, jointly issued by AION Technology and the partner company."
      },
      {
        question: "Is there a guarantee of a full-time job offer afterward?",
        answer: "While we do not guarantee pre-placement offers (PPOs), our data shows a high conversion rate (85%+) for interns who consistently demonstrate strong performance, adaptability, and cultural fit during their tenure."
      }
    ],
    relatedServiceSlugs: ["placements", "industrial-visits"]
  },
  {
    slug: "industrial-visits",
    title: "Industrial Visits",
    icon: Building,
    colorTheme: "orange",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    heroSubtext: "Exclusive behind-the-scenes access to leading corporate campuses and advanced manufacturing facilities.",
    stats: [
      { value: "20+", label: "Facility Partners" },
      { value: "10+", label: "Visits Per Year" },
      { value: "Hands-on", label: "Exposure" },
      { value: "Cross", label: "Industry Access" }
    ],
    overviewParagraphs: [
      "Understanding the scale and operational dynamics of a modern enterprise cannot be achieved entirely within the confines of a classroom. Our Industrial Visits program is structured to provide students and early-career professionals with tangible, on-site exposure to world-class facilities.",
      "We curate immersive tours of leading IT parks, advanced manufacturing units, and corporate headquarters. These visits are not mere walkthroughs; they are interactive experiences designed to demystify complex corporate workflows and infrastructure.",
      "Participants gain unique insights into agile methodologies, production pipelines, corporate culture, and the cutting-edge technologies driving today's industries, bridging the critical gap between academic theory and practical execution."
    ],
    timelineSteps: [
      {
        title: "Visit Planning",
        description: "Aligning the visit agenda with the academic curriculum and participant interests.",
        duration: "Phase 1"
      },
      {
        title: "Facility Coordination",
        description: "Securing access, finalizing schedules, and arranging logistics with the partner company.",
        duration: "Phase 2"
      },
      {
        title: "On-Site Learning",
        description: "Guided tours through different departments, observing live operations and workflows.",
        duration: "Phase 3"
      },
      {
        title: "Industry Interaction",
        description: "Q&A sessions with department heads, engineers, and HR representatives.",
        duration: "Phase 4"
      },
      {
        title: "Post-Visit Reflection",
        description: "Submitting reports and participating in debrief sessions to consolidate learning.",
        duration: "Phase 5"
      }
    ],
    features: [
      {
        icon: Building,
        title: "Factory & Tech Park Tours",
        description: "Exclusive access to highly secured, state-of-the-art corporate and industrial environments."
      },
      {
        icon: Presentation,
        title: "Interactive Sessions",
        description: "Direct engagement with industry experts, offering a chance to ask real-world questions."
      },
      {
        icon: CheckCircle,
        title: "On-Site Learning",
        description: "Observing theoretical concepts being applied in high-stakes, real-time scenarios."
      },
      {
        icon: Globe,
        title: "Corporate Exposure",
        description: "Gaining a clear understanding of workplace etiquette, team dynamics, and professional culture."
      }
    ],
    impactStats: [
      { value: 50, suffix: "+", label: "Successful Visits" },
      { value: 20, suffix: "+", label: "Corporate Partners" },
      { value: 1000, suffix: "+", label: "Students Benefited" },
      { value: 100, suffix: "%", label: "Interactive Sessions" }
    ],
    testimonialOrHighlight: {
      quote: "Seeing the sheer scale of the server infrastructure and interacting directly with the deployment team gave our students a perspective that no textbook ever could. It was an eye-opening experience that redefined their career goals.",
      author: "Dr. Anil Kumar",
      role: "Head of Computer Science Dept.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
    },
    faqs: [
      {
        question: "Who can participate in these industrial visits?",
        answer: "These visits are primarily organized for students enrolled in our partner educational institutions and candidates undergoing our specific training tracks. We also arrange customized visits for corporate onboarding programs."
      },
      {
        question: "How long does a typical visit last?",
        answer: "A standard visit typically spans a half-day to a full-day (4 to 8 hours), encompassing the facility tour, presentations, and interactive Q&A sessions."
      },
      {
        question: "Are transportation and logistics provided?",
        answer: "Yes, we handle end-to-end logistics, including secure transportation to and from the facility, ensuring a seamless and safe experience for all participants."
      },
      {
        question: "Do students need to prepare anything beforehand?",
        answer: "We provide a briefing document prior to the visit detailing the company's background, core operations, and guidelines for professional conduct, encouraging students to prepare relevant questions."
      }
    ],
    relatedServiceSlugs: ["internships", "training"]
  },
  {
    slug: "others",
    title: "Enterprise Solutions",
    icon: Plus,
    colorTheme: "rose",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    heroSubtext: "Comprehensive consulting, custom application development, and strategic IT integration for scaling businesses.",
    stats: [
      { value: "Custom", label: "Solutions" },
      { value: "End-to-End", label: "Support" },
      { value: "Scalable", label: "Integration" },
      { value: "Dedicated", label: "Management" }
    ],
    overviewParagraphs: [
      "Beyond education and career placement, AION Technology operates as a full-fledged IT consulting and development partner for businesses. We understand that modern enterprises require agile, scalable, and secure technological infrastructures to maintain their competitive edge.",
      "Our Enterprise Solutions division focuses on digital transformation, offering bespoke software development, legacy system modernization, and comprehensive IT consulting. We work closely with stakeholders to identify operational bottlenecks and design technological interventions that drive efficiency and growth.",
      "Whether you are a startup looking to build your MVP, or an established corporation needing to upskill your workforce on the latest cloud technologies, our team provides dedicated, end-to-end support tailored to your unique business objectives."
    ],
    timelineSteps: [
      {
        title: "Needs Assessment",
        description: "Deep-dive analysis of your current infrastructure, workflows, and business goals.",
        duration: "Discovery"
      },
      {
        title: "Solution Design",
        description: "Architecting a custom, scalable technological strategy and detailed project roadmap.",
        duration: "Planning"
      },
      {
        title: "Implementation",
        description: "Agile development and integration of the solution with minimal disruption to ongoing operations.",
        duration: "Execution"
      },
      {
        title: "Testing & Deployment",
        description: "Rigorous quality assurance followed by a secure, phased rollout to production environments.",
        duration: "Launch"
      },
      {
        title: "Optimization & Scaling",
        description: "Continuous monitoring, maintenance, and iterative improvements as your business grows.",
        duration: "Ongoing"
      }
    ],
    features: [
      {
        icon: Settings,
        title: "IT Consulting",
        description: "Strategic advisory on tech-stack selection, cloud migration, and digital transformation."
      },
      {
        icon: Code2,
        title: "Custom Solutions",
        description: "Bespoke software, mobile app, and enterprise web application development."
      },
      {
        icon: ShieldCheck,
        title: "System Integration",
        description: "Seamlessly connecting disparate software systems and APIs for unified workflows."
      },
      {
        icon: Presentation,
        title: "Corporate Workshops",
        description: "Targeted upskilling programs to ensure your internal teams master new technologies."
      }
    ],
    impactStats: [
      { value: 100, suffix: "%", label: "Custom Architectures" },
      { value: 24, suffix: "/7", label: "Dedicated Support" },
      { value: 50, suffix: "+", label: "Projects Delivered" },
      { value: 99, suffix: "%", label: "Client Retention" }
    ],
    testimonialOrHighlight: {
      quote: "Partnering with AION for our digital transformation was a game-changer. They didn't just deliver a custom software solution; they re-engineered our operational workflows, significantly reducing our overhead and improving data visibility across the board.",
      author: "Sarah Jenkins",
      role: "CTO, TechLogistics Inc.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1287&auto=format&fit=crop"
    },
    faqs: [
      {
        question: "Do you build custom software from scratch?",
        answer: "Yes, our development team specializes in full-stack bespoke application development, tailored specifically to your unique business logic and operational requirements."
      },
      {
        question: "Can you help modernize our legacy systems?",
        answer: "Absolutely. We offer comprehensive legacy modernization services, helping businesses migrate from outdated monolithic architectures to scalable, cloud-native microservices."
      },
      {
        question: "Do you offer post-deployment maintenance?",
        answer: "Yes, we provide ongoing SLAs (Service Level Agreements) that cover routine maintenance, security patching, performance monitoring, and feature enhancements."
      },
      {
        question: "What is your approach to corporate training?",
        answer: "We design tailored workshops based on the specific technologies your team needs to adopt. Our trainers are industry practitioners who focus on hands-on, practical execution rather than just theory."
      }
    ],
    relatedServiceSlugs: ["placements", "admissions"]
  }
];
