import { 
  Code2, CheckCircle2, Cloud, Users, TrendingUp, Monitor, 
  Database, Cpu, Globe, Server, Shield, Zap, Award, BookOpen, 
  Briefcase, BarChart, FileSpreadsheet, MessageSquare, Target, Settings, Terminal, Layout, Smartphone
} from "lucide-react";

export const servicesData = [
  {
    slug: "development-programming",
    title: "Development & Programming",
    icon: Code2,
    colorTheme: "rose",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2852&auto=format&fit=crop",
    heroSubtext: "Build robust, scalable software applications from the ground up. Master modern coding languages and frameworks.",
    heroStats: [
      { label: "Core Skills", value: "5" },
      { label: "Hours Training", value: "200+" },
      { label: "Live Projects", value: "12" },
      { label: "Placement Rate", value: "95%" }
    ],
    overviewParagraphs: [
      "The Development & Programming module is meticulously designed to transform beginners into full-fledged software engineers. In today's digital-first economy, the ability to build, maintain, and scale applications is one of the most sought-after skills globally.",
      "Our curriculum goes beyond syntax. We focus on core computer science principles, system design, and algorithmic thinking. You will write code daily, debug real-world issues, and learn how to collaborate using industry-standard version control systems.",
      "Whether you are aiming to build enterprise backends in Java, write high-performance scripts in C++, or automate workflows with Python, this track provides the comprehensive foundation needed to excel in top-tier tech organizations."
    ],
    subSkills: [
      {
        name: "Core Java & Selenium",
        description: "Master object-oriented programming with Java and learn to automate browser testing using Selenium WebDriver.",
        depthLevel: 90,
        coveredTopics: ["OOP Concepts", "Data Structures", "Selenium WebDriver", "TestNG Framework"]
      },
      {
        name: "Python & MySQL",
        description: "Learn Python scripting for automation, data manipulation, and integrating with MySQL databases.",
        depthLevel: 85,
        coveredTopics: ["Python Syntax", "Database Design", "MySQL Queries", "API Integration"]
      },
      {
        name: "C/C++ Programming",
        description: "Understand the foundations of memory management, pointers, and performance-critical software development.",
        depthLevel: 80,
        coveredTopics: ["Memory Management", "Pointers", "STL Library", "Algorithmic Logic"]
      }
    ],
    timelineSteps: [
      { title: "Foundations", description: "Learn programming basics and syntax.", duration: "Week 1-2" },
      { title: "Core Concepts", description: "Deep dive into OOP and data structures.", duration: "Week 3-5" },
      { title: "Database Integration", description: "Connect applications to MySQL.", duration: "Week 6-7" },
      { title: "Automation", description: "Write scripts with Selenium & Python.", duration: "Week 8-10" },
      { title: "Capstone Project", description: "Build a full application from scratch.", duration: "Week 11-12" }
    ],
    tools: [
      { name: "Java", icon: Terminal },
      { name: "Python", icon: Code2 },
      { name: "C++", icon: Cpu },
      { name: "MySQL", icon: Database },
      { name: "Selenium", icon: Globe }
    ],
    careerRoles: [
      { title: "Software Engineer", description: "Build and maintain complex software systems.", demandLevel: 95, salaryRange: "$60k - $120k" },
      { title: "Backend Developer", description: "Design robust server-side architecture and APIs.", demandLevel: 90, salaryRange: "$65k - $130k" },
      { title: "Automation Engineer", description: "Create scripts to automate manual testing and workflows.", demandLevel: 85, salaryRange: "$55k - $110k" }
    ],
    impactStats: [
      { label: "Students Trained", value: 1200, suffix: "+" },
      { label: "Hiring Partners", value: 45, suffix: "+" },
      { label: "Completion Rate", value: 92, suffix: "%" },
      { label: "Student Rating", value: 4.8, suffix: "/5" }
    ],
    faqs: [
      { question: "Do I need prior coding experience?", answer: "No, our modules start from the absolute basics before advancing to complex topics." },
      { question: "Will I build real projects?", answer: "Yes, you will complete multiple hands-on projects, culminating in a major capstone project for your portfolio." },
      { question: "What languages are covered?", answer: "We cover Java, Python, C, and C++, along with SQL for database management." },
      { question: "Is this suitable for freshers?", answer: "Absolutely. This track is specifically designed to make fresh graduates industry-ready." }
    ],
    relatedModuleSlugs: ["core-java-and-selenium", "python-selenium-mysql-python", "c-c-programming"]
  },
  {
    slug: "testing-qa",
    title: "Testing & Quality Assurance",
    icon: CheckCircle2,
    colorTheme: "purple",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    heroSubtext: "Ensure the highest software quality and reliability. Learn automated and manual testing methodologies to deploy bug-free products.",
    heroStats: [
      { label: "Testing Tools", value: "8+" },
      { label: "Hours Training", value: "150+" },
      { label: "Live Projects", value: "8" },
      { label: "Placement Rate", value: "93%" }
    ],
    overviewParagraphs: [
      "Quality Assurance is the backbone of successful software delivery. In the Testing & QA track, you will learn how to identify critical bugs, write robust test plans, and ensure applications perform flawlessly under pressure.",
      "We cover the entire testing lifecycle, from manual exploratory testing to advanced automation frameworks. You will learn to think like a user to break software, and think like a developer to build automated tests that prevent future regressions.",
      "By mastering tools like Selenium, JMeter, and industry-standard bug tracking systems, you will graduate as a highly skilled QA Engineer capable of driving quality in any agile development team."
    ],
    subSkills: [
      {
        name: "Manual Software Testing",
        description: "Learn the fundamentals of test planning, execution, and defect reporting in agile environments.",
        depthLevel: 95,
        coveredTopics: ["Test Case Design", "Defect Life Cycle", "Agile Testing", "Exploratory Testing"]
      },
      {
        name: "Automation Testing",
        description: "Automate repetitive tests using frameworks like Selenium WebDriver with Java or Python.",
        depthLevel: 85,
        coveredTopics: ["Selenium", "TestNG/JUnit", "XPath & Locators", "Data-Driven Frameworks"]
      },
      {
        name: "Performance Testing",
        description: "Test application scalability, speed, and stability under heavy simulated traffic.",
        depthLevel: 80,
        coveredTopics: ["JMeter", "Load Testing", "Stress Testing", "Bottleneck Analysis"]
      }
    ],
    timelineSteps: [
      { title: "QA Fundamentals", description: "Understand the software testing life cycle.", duration: "Week 1-2" },
      { title: "Manual Testing", description: "Write test cases and report bugs.", duration: "Week 3-4" },
      { title: "Automation Basics", description: "Learn Selenium and programming basics.", duration: "Week 5-7" },
      { title: "Advanced Automation", description: "Build hybrid test frameworks.", duration: "Week 8-9" },
      { title: "Performance Testing", description: "Execute load tests using JMeter.", duration: "Week 10" }
    ],
    tools: [
      { name: "Selenium", icon: Settings },
      { name: "JMeter", icon: Zap },
      { name: "Jira", icon: Target },
      { name: "TestNG", icon: Shield },
      { name: "Postman", icon: Globe }
    ],
    careerRoles: [
      { title: "QA Analyst", description: "Execute manual tests and ensure product quality.", demandLevel: 90, salaryRange: "$50k - $90k" },
      { title: "Automation Engineer", description: "Write code to automate testing procedures.", demandLevel: 95, salaryRange: "$65k - $120k" },
      { title: "Performance Tester", description: "Ensure systems remain stable under heavy loads.", demandLevel: 80, salaryRange: "$70k - $130k" }
    ],
    impactStats: [
      { label: "QA Alumni", value: 850, suffix: "+" },
      { label: "Bugs Caught", value: 10000, suffix: "+" },
      { label: "Completion Rate", value: 94, suffix: "%" },
      { label: "Student Rating", value: 4.7, suffix: "/5" }
    ],
    faqs: [
      { question: "Do I need coding experience to start?", answer: "No. We start with manual testing, which requires no coding, and gradually teach the programming needed for automation." },
      { question: "What tools will I learn?", answer: "You will master Selenium WebDriver, JMeter, TestNG, Jira, and basic Java/Python." },
      { question: "Is QA a good career path?", answer: "Yes, QA is an essential part of every software company, offering excellent stability, growth, and salaries comparable to developers." },
      { question: "Are there practical projects?", answer: "Yes, you will test real web applications and build a complete automation framework from scratch." }
    ],
    relatedModuleSlugs: ["software-testing", "performance-testing"]
  },
  {
    slug: "data-cloud",
    title: "Data & Cloud",
    icon: Cloud,
    colorTheme: "blue",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2934&auto=format&fit=crop",
    heroSubtext: "Unlock actionable insights and scale infrastructure globally. Harness the power of big data and leading cloud platforms.",
    heroStats: [
      { label: "Cloud Platforms", value: "3" },
      { label: "Hours Training", value: "250+" },
      { label: "Live Datasets", value: "20+" },
      { label: "Placement Rate", value: "96%" }
    ],
    overviewParagraphs: [
      "Data is the new oil, and the Cloud is the engine that refines it. The Data & Cloud track immerses you in the technologies driving modern business intelligence and global IT infrastructure.",
      "You will learn how to extract, clean, and visualize complex datasets to uncover hidden business trends. Simultaneously, you will dive into cloud architecture, learning how to deploy scalable, secure, and highly available applications on platforms like AWS.",
      "Whether you are aspiring to become a Data Scientist predicting future trends, or a Cloud Architect designing enterprise networks, this comprehensive program equips you with the highly specialized skills demanded by the world's top tech firms."
    ],
    subSkills: [
      {
        name: "Data Analytics & Science",
        description: "Transform raw data into insights using Python, statistical modeling, and machine learning algorithms.",
        depthLevel: 90,
        coveredTopics: ["Data Wrangling", "Machine Learning", "Data Visualization", "Predictive Modeling"]
      },
      {
        name: "Amazon Web Services (AWS)",
        description: "Design, deploy, and manage scalable cloud infrastructure using industry-leading AWS services.",
        depthLevel: 85,
        coveredTopics: ["EC2 & S3", "VPC Networking", "IAM Security", "Serverless Computing"]
      },
      {
        name: "SAP ERP",
        description: "Master enterprise resource planning systems used by the world's largest corporations to manage operations.",
        depthLevel: 80,
        coveredTopics: ["SAP Navigation", "Financial Accounting", "Materials Management", "Sales & Distribution"]
      }
    ],
    timelineSteps: [
      { title: "Data Foundations", description: "Learn Python for data manipulation.", duration: "Week 1-3" },
      { title: "Advanced Analytics", description: "Machine learning and predictive models.", duration: "Week 4-7" },
      { title: "Cloud Basics", description: "Introduction to cloud concepts and AWS.", duration: "Week 8-10" },
      { title: "Cloud Architecture", description: "Designing secure virtual networks.", duration: "Week 11-13" },
      { title: "Enterprise Systems", description: "SAP overview and hands-on modules.", duration: "Week 14-16" }
    ],
    tools: [
      { name: "AWS", icon: Cloud },
      { name: "Python", icon: Code2 },
      { name: "SAP", icon: Server },
      { name: "Tableau", icon: BarChart },
      { name: "SQL", icon: Database }
    ],
    careerRoles: [
      { title: "Data Analyst / Scientist", description: "Analyze data to provide actionable business insights.", demandLevel: 95, salaryRange: "$70k - $140k" },
      { title: "Cloud Architect", description: "Design scalable cloud infrastructure and deployments.", demandLevel: 98, salaryRange: "$90k - $160k" },
      { title: "SAP Consultant", description: "Implement and manage enterprise ERP systems.", demandLevel: 85, salaryRange: "$80k - $150k" }
    ],
    impactStats: [
      { label: "Data Pros Trained", value: 950, suffix: "+" },
      { label: "Cloud Certifications", value: 600, suffix: "+" },
      { label: "Completion Rate", value: 91, suffix: "%" },
      { label: "Student Rating", value: 4.9, suffix: "/5" }
    ],
    faqs: [
      { question: "Do I need a strong math background for Data Science?", answer: "Basic high-school math is required. We teach the necessary statistics and probability from the ground up." },
      { question: "Will this prepare me for AWS certification?", answer: "Yes, the curriculum aligns closely with the AWS Certified Solutions Architect - Associate exam objectives." },
      { question: "What is SAP and why should I learn it?", answer: "SAP is the world's leading enterprise software. Learning it opens doors to high-paying consulting and operational roles at massive global corporations." },
      { question: "Are the datasets real?", answer: "Yes, you will work with real-world, anonymized datasets from various industries including finance, healthcare, and e-commerce." }
    ],
    relatedModuleSlugs: ["data-analytics", "data-science", "amazon-web-services", "cloud-computing", "sap"]
  },
  {
    slug: "professional-skills",
    title: "Professional Skills",
    icon: Users,
    colorTheme: "teal",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop",
    heroSubtext: "Develop the leadership and communication abilities that top employers demand. Transform into a confident corporate professional.",
    heroStats: [
      { label: "Core Modules", value: "6" },
      { label: "Mock Interviews", value: "15+" },
      { label: "Group Sessions", value: "40" },
      { label: "Confidence Boost", value: "100%" }
    ],
    overviewParagraphs: [
      "Technical skills may get you the interview, but professional skills get you the job—and the promotion. The Professional Skills track is dedicated to transforming raw talent into polished, confident corporate professionals.",
      "We focus heavily on the art of communication. From crafting the perfect business email to delivering compelling presentations and speaking English with absolute fluency, you will learn how to articulate your ideas effectively in any business setting.",
      "Beyond communication, we train you in the nuances of corporate etiquette, teamwork, emotional intelligence, and interview strategies. You will undergo rigorous mock interviews and HR training, ensuring you walk into any room with undeniable presence and confidence."
    ],
    subSkills: [
      {
        name: "Communication & Spoken English",
        description: "Master verbal and written communication, enhancing your fluency, grammar, and professional articulation.",
        depthLevel: 95,
        coveredTopics: ["Verbal Fluency", "Business Writing", "Public Speaking", "Active Listening"]
      },
      {
        name: "Interview Preparation",
        description: "Learn strategies to ace technical and HR rounds, including resume building and behavioral questions.",
        depthLevel: 90,
        coveredTopics: ["Resume Building", "Mock Interviews", "Salary Negotiation", "Body Language"]
      },
      {
        name: "Soft Skills & Leadership",
        description: "Develop emotional intelligence, adaptability, and teamwork essential for workplace success.",
        depthLevel: 85,
        coveredTopics: ["Emotional Intelligence", "Conflict Resolution", "Time Management", "Leadership"]
      }
    ],
    timelineSteps: [
      { title: "Communication Basics", description: "Grammar, vocabulary, and written etiquette.", duration: "Week 1-2" },
      { title: "Verbal Fluency", description: "Spoken English and public speaking exercises.", duration: "Week 3-4" },
      { title: "Workplace Skills", description: "Teamwork, emotional intelligence, and time management.", duration: "Week 5-6" },
      { title: "Resume & Branding", description: "Crafting a standout resume and LinkedIn profile.", duration: "Week 7" },
      { title: "Interview Mastery", description: "Intensive mock interviews and HR rounds.", duration: "Week 8" }
    ],
    tools: [
      { name: "Communication", icon: MessageSquare },
      { name: "Presentations", icon: Monitor },
      { name: "Teamwork", icon: Users },
      { name: "Leadership", icon: Award },
      { name: "HR Processes", icon: Briefcase }
    ],
    careerRoles: [
      { title: "Corporate Professional", description: "Excel in any corporate role with strong interpersonal skills.", demandLevel: 100, salaryRange: "Variable by Industry" },
      { title: "HR Executive", description: "Manage talent acquisition and employee relations.", demandLevel: 85, salaryRange: "$45k - $80k" },
      { title: "Team Lead", description: "Lead projects and foster collaboration among team members.", demandLevel: 90, salaryRange: "$60k - $110k" }
    ],
    impactStats: [
      { label: "Graduates Polished", value: 3000, suffix: "+" },
      { label: "Mock Interviews", value: 15000, suffix: "+" },
      { label: "Placement Boost", value: 85, suffix: "%" },
      { label: "Student Rating", value: 4.9, suffix: "/5" }
    ],
    faqs: [
      { question: "Is this course only for non-technical roles?", answer: "Not at all. Strong professional skills are critical for developers, testers, and data scientists to communicate their technical ideas to stakeholders." },
      { question: "How are the mock interviews conducted?", answer: "We bring in experienced HR professionals and technical leads to conduct realistic, high-pressure mock interviews, followed by detailed personalized feedback." },
      { question: "Will my English fluency improve?", answer: "Yes, we have dedicated modules focused entirely on spoken English, pronunciation, and corporate vocabulary." },
      { question: "Can I take this alongside a technical track?", answer: "Yes! In fact, we highly recommend combining this track with a technical module for maximum employability." }
    ],
    relatedModuleSlugs: ["communication-training", "interview-skills", "soft-skills", "spoken-english", "hr-trainings-and-internship"]
  },
  {
    slug: "business-tools",
    title: "Business & Tools",
    icon: TrendingUp,
    colorTheme: "orange",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    heroSubtext: "Master the essential tools and strategies required to drive organizational success, manage data, and accelerate digital growth.",
    heroStats: [
      { label: "Business Tools", value: "10+" },
      { label: "Hours Training", value: "120+" },
      { label: "Case Studies", value: "15" },
      { label: "Placement Rate", value: "90%" }
    ],
    overviewParagraphs: [
      "Modern businesses run on a stack of critical tools and data-driven strategies. The Business & Tools track equips you with the practical digital literacy and analytical software skills required to thrive in any operational or marketing role.",
      "You will dive deep into Advanced Excel, learning how to manipulate vast spreadsheets, write complex formulas, and automate tasks with macros. These are the unsung, essential skills that keep corporations running smoothly.",
      "Furthermore, we cover the dynamic world of Digital Marketing. You will learn how to leverage SEO, run paid ad campaigns, and analyze web traffic to drive measurable business growth, making you an invaluable asset to modern digital teams."
    ],
    subSkills: [
      {
        name: "Excel & Advanced Excel",
        description: "Master data manipulation, pivot tables, complex formulas (VLOOKUP, INDEX/MATCH), and VBA Macros.",
        depthLevel: 95,
        coveredTopics: ["Advanced Formulas", "Pivot Tables", "Data Visualization", "VBA Macros"]
      },
      {
        name: "Digital Marketing",
        description: "Learn to drive online growth through SEO, social media strategies, and pay-per-click advertising.",
        depthLevel: 85,
        coveredTopics: ["SEO Strategy", "Social Media Ads", "Google Analytics", "Content Marketing"]
      },
      {
        name: "Basic Computer & BPO",
        description: "Establish foundational digital literacy and prepare for high-volume business process operations.",
        depthLevel: 80,
        coveredTopics: ["OS Navigation", "Office Suite", "Customer Service", "Call Handling"]
      }
    ],
    timelineSteps: [
      { title: "Digital Literacy", description: "Master operating systems and basic office suites.", duration: "Week 1-2" },
      { title: "Excel Fundamentals", description: "Data entry, basic formulas, and formatting.", duration: "Week 3-4" },
      { title: "Advanced Excel", description: "Pivot tables, macros, and business reporting.", duration: "Week 5-7" },
      { title: "Marketing Basics", description: "Introduction to SEO and social media.", duration: "Week 8-9" },
      { title: "Digital Campaigns", description: "Running ads and analyzing web traffic.", duration: "Week 10-11" }
    ],
    tools: [
      { name: "Excel", icon: FileSpreadsheet },
      { name: "Google Ads", icon: Target },
      { name: "Analytics", icon: BarChart },
      { name: "Windows/OS", icon: Monitor },
      { name: "Social Media", icon: Smartphone }
    ],
    careerRoles: [
      { title: "Digital Marketing Executive", description: "Manage online campaigns and brand presence.", demandLevel: 90, salaryRange: "$45k - $85k" },
      { title: "MIS/Data Executive", description: "Manage reporting and data analysis using Advanced Excel.", demandLevel: 95, salaryRange: "$40k - $75k" },
      { title: "BPO / Operations Agent", description: "Handle client operations and customer service.", demandLevel: 85, salaryRange: "$35k - $60k" }
    ],
    impactStats: [
      { label: "Marketers Trained", value: 650, suffix: "+" },
      { label: "Reports Generated", value: 5000, suffix: "+" },
      { label: "Completion Rate", value: 95, suffix: "%" },
      { label: "Student Rating", value: 4.6, suffix: "/5" }
    ],
    faqs: [
      { question: "Is Advanced Excel still relevant today?", answer: "Absolutely. Excel remains the most widely used data tool in the world. Mastery of Advanced Excel is a prerequisite for thousands of operational and financial roles." },
      { question: "Will I learn how to run real ad campaigns?", answer: "Yes, you will learn the mechanics of setting up, targeting, and optimizing real ad campaigns on platforms like Google and Facebook." },
      { question: "Do I need technical skills for this track?", answer: "No, this track is designed to be accessible to anyone, regardless of technical background. We start from the basics of computer literacy." },
      { question: "What kind of jobs can I get after the BPO training?", answer: "You will be well-prepared for roles in customer support, tech support, telemarketing, and back-office operations at major multinational companies." }
    ],
    relatedModuleSlugs: ["digital-marketing", "basic-computer", "excel-advanced-excel", "bpo-training"]
  }
];
