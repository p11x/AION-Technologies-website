import { 
  Code2, CheckCircle2, Cloud, Users, TrendingUp, Monitor, 
  Database, Cpu, Globe, Server, Shield, Zap, Award, BookOpen, 
  Briefcase, BarChart, FileSpreadsheet, MessageSquare, Target, Settings, Terminal, Layout, Smartphone
} from "lucide-react";

export const coursesData = [
  {
    slug: "software-testing",
    title: "Software Testing",
    category: "Testing & QA",
    desc: "Ensure highest software quality.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2800&auto=format&fit=crop",
    icon: CheckCircle2,
    colorTheme: "purple",
    visualType: "status-chips",
    visualData: { label: "Pass Rate", value: "98%" },
    heroSubtext: "Dive deep into Software Testing and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Ensure highest software quality. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Software Testing.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Software Testing Specialist", description: "Lead implementation of Software Testing across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "core-java-and-selenium",
    title: "Core Java and Selenium",
    category: "Development & Programming",
    desc: "Object-oriented programming and automation.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2800&auto=format&fit=crop",
    icon: Code2,
    colorTheme: "rose",
    visualType: "progress-dots",
    visualData: { level: 4, max: 5 },
    heroSubtext: "Dive deep into Core Java and Selenium and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Object-oriented programming and automation. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Core Java and Selenium.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Core Java and Selenium Specialist", description: "Lead implementation of Core Java and Selenium across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "python-selenium-mysql-python",
    title: "Python-Selenium/MySQL-Python",
    category: "Development & Programming",
    desc: "Python automation and database integration.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2800&auto=format&fit=crop",
    icon: Code2,
    colorTheme: "rose",
    visualType: "progress-dots",
    visualData: { level: 4, max: 5 },
    heroSubtext: "Dive deep into Python-Selenium/MySQL-Python and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Python automation and database integration. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Python-Selenium/MySQL-Python.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Python-Selenium/MySQL-Python Specialist", description: "Lead implementation of Python-Selenium/MySQL-Python across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "performance-testing",
    title: "Performance Testing",
    category: "Testing & QA",
    desc: "Optimize application speed and reliability.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2800&auto=format&fit=crop",
    icon: CheckCircle2,
    colorTheme: "purple",
    visualType: "status-chips",
    visualData: { label: "Pass Rate", value: "98%" },
    heroSubtext: "Dive deep into Performance Testing and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Optimize application speed and reliability. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Performance Testing.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Performance Testing Specialist", description: "Lead implementation of Performance Testing across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "c-c-programming",
    title: "C,C++ Programming",
    category: "Development & Programming",
    desc: "Master the foundations of computer science.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2800&auto=format&fit=crop",
    icon: Code2,
    colorTheme: "rose",
    visualType: "progress-dots",
    visualData: { level: 4, max: 5 },
    heroSubtext: "Dive deep into C,C++ Programming and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Master the foundations of computer science. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master C,C++ Programming.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "C,C++ Programming Specialist", description: "Lead implementation of C,C++ Programming across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    category: "Data & Cloud",
    desc: "Derive insights from complex datasets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2800&auto=format&fit=crop",
    icon: Cloud,
    colorTheme: "blue",
    visualType: "donut",
    visualData: { percentage: 85, label: "Efficiency" },
    heroSubtext: "Dive deep into Data Analytics and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Derive insights from complex datasets. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Data Analytics.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Data Analytics Specialist", description: "Lead implementation of Data Analytics across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "data-science",
    title: "Data Science",
    category: "Data & Cloud",
    desc: "Build predictive models and algorithms.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2800&auto=format&fit=crop",
    icon: Cloud,
    colorTheme: "blue",
    visualType: "donut",
    visualData: { percentage: 85, label: "Efficiency" },
    heroSubtext: "Dive deep into Data Science and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Build predictive models and algorithms. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Data Science.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Data Science Specialist", description: "Lead implementation of Data Science across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "amazon-web-services",
    title: "Amazon Web Services",
    category: "Data & Cloud",
    desc: "Design scalable cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2800&auto=format&fit=crop",
    icon: Cloud,
    colorTheme: "blue",
    visualType: "donut",
    visualData: { percentage: 85, label: "Efficiency" },
    heroSubtext: "Dive deep into Amazon Web Services and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Design scalable cloud infrastructure. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Amazon Web Services.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Amazon Web Services Specialist", description: "Lead implementation of Amazon Web Services across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    category: "Data & Cloud",
    desc: "Master modern cloud architecture principles.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2800&auto=format&fit=crop",
    icon: Cloud,
    colorTheme: "blue",
    visualType: "donut",
    visualData: { percentage: 85, label: "Efficiency" },
    heroSubtext: "Dive deep into Cloud Computing and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Master modern cloud architecture principles. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Cloud Computing.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Cloud Computing Specialist", description: "Lead implementation of Cloud Computing across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "sap",
    title: "SAP",
    category: "Data & Cloud",
    desc: "Enterprise resource planning and management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2800&auto=format&fit=crop",
    icon: Cloud,
    colorTheme: "blue",
    visualType: "donut",
    visualData: { percentage: 85, label: "Efficiency" },
    heroSubtext: "Dive deep into SAP and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Enterprise resource planning and management. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master SAP.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "SAP Specialist", description: "Lead implementation of SAP across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Business & Tools",
    desc: "Drive growth and brand awareness.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2800&auto=format&fit=crop",
    icon: Briefcase,
    colorTheme: "orange",
    visualType: "checklist",
    visualData: { items: ["Strategy", "Execution", "Review"] },
    heroSubtext: "Dive deep into Digital Marketing and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Drive growth and brand awareness. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Digital Marketing.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Digital Marketing Specialist", description: "Lead implementation of Digital Marketing across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "communication-training",
    title: "Communication training",
    category: "Professional Skills",
    desc: "Articulate ideas clearly and effectively.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2800&auto=format&fit=crop",
    icon: Users,
    colorTheme: "teal",
    visualType: "icon-row",
    visualData: { icons: ["MessageSquare", "Users", "Target"] },
    heroSubtext: "Dive deep into Communication training and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Articulate ideas clearly and effectively. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Communication training.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Communication training Specialist", description: "Lead implementation of Communication training across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "interview-skills",
    title: "Interview skills",
    category: "Professional Skills",
    desc: "Ace your technical and HR rounds.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2800&auto=format&fit=crop",
    icon: Users,
    colorTheme: "teal",
    visualType: "icon-row",
    visualData: { icons: ["MessageSquare", "Users", "Target"] },
    heroSubtext: "Dive deep into Interview skills and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Ace your technical and HR rounds. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Interview skills.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Interview skills Specialist", description: "Lead implementation of Interview skills across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "soft-skills",
    title: "Soft skills",
    category: "Professional Skills",
    desc: "Develop teamwork and adaptability.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2800&auto=format&fit=crop",
    icon: Users,
    colorTheme: "teal",
    visualType: "icon-row",
    visualData: { icons: ["MessageSquare", "Users", "Target"] },
    heroSubtext: "Dive deep into Soft skills and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Develop teamwork and adaptability. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Soft skills.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Soft skills Specialist", description: "Lead implementation of Soft skills across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "basic-computer",
    title: "basic Computer",
    category: "Business & Tools",
    desc: "Essential digital literacy for the workplace.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2800&auto=format&fit=crop",
    icon: Briefcase,
    colorTheme: "orange",
    visualType: "checklist",
    visualData: { items: ["Strategy", "Execution", "Review"] },
    heroSubtext: "Dive deep into basic Computer and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Essential digital literacy for the workplace. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master basic Computer.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "basic Computer Specialist", description: "Lead implementation of basic Computer across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "excel-advanced-excel",
    title: "Excel/Advanced Excel",
    category: "Business & Tools",
    desc: "Data manipulation and business reporting.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2800&auto=format&fit=crop",
    icon: Briefcase,
    colorTheme: "orange",
    visualType: "checklist",
    visualData: { items: ["Strategy", "Execution", "Review"] },
    heroSubtext: "Dive deep into Excel/Advanced Excel and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Data manipulation and business reporting. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Excel/Advanced Excel.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Excel/Advanced Excel Specialist", description: "Lead implementation of Excel/Advanced Excel across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "bpo-training",
    title: "BPO Training",
    category: "Business & Tools",
    desc: "Prepare for business process operations.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2800&auto=format&fit=crop",
    icon: Briefcase,
    colorTheme: "orange",
    visualType: "checklist",
    visualData: { items: ["Strategy", "Execution", "Review"] },
    heroSubtext: "Dive deep into BPO Training and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Prepare for business process operations. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master BPO Training.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "BPO Training Specialist", description: "Lead implementation of BPO Training across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "spoken-english",
    title: "Spoken English",
    category: "Professional Skills",
    desc: "Enhance verbal fluency and confidence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2800&auto=format&fit=crop",
    icon: Users,
    colorTheme: "teal",
    visualType: "icon-row",
    visualData: { icons: ["MessageSquare", "Users", "Target"] },
    heroSubtext: "Dive deep into Spoken English and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Enhance verbal fluency and confidence. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Spoken English.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Spoken English Specialist", description: "Lead implementation of Spoken English across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "hr-trainings-and-internship",
    title: "HR Training's and Internship",
    category: "Professional Skills",
    desc: "Real-world human resources experience.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2800&auto=format&fit=crop",
    icon: Users,
    colorTheme: "teal",
    visualType: "icon-row",
    visualData: { icons: ["MessageSquare", "Users", "Target"] },
    heroSubtext: "Dive deep into HR Training's and Internship and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Real-world human resources experience. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master HR Training's and Internship.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "HR Training's and Internship Specialist", description: "Lead implementation of HR Training's and Internship across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
  {
    slug: "projects",
    title: "Projects",
    category: "Professional Skills",
    desc: "Hands-on capstone development.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2800&auto=format&fit=crop",
    icon: Users,
    colorTheme: "teal",
    visualType: "icon-row",
    visualData: { icons: ["MessageSquare", "Users", "Target"] },
    heroSubtext: "Dive deep into Projects and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2800&auto=format&fit=crop",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "Hands-on capstone development. This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: [
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master Projects.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ],
    timelineSteps: [
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ],
    tools: [
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ],
    careerRoles: [
      { title: "Projects Specialist", description: "Lead implementation of Projects across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ],
    impactStats: [
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ],
    relatedModuleSlugs: []
  },
];
