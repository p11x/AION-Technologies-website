const fs = require('fs');

const courses = [
  { slug: "software-testing", title: "Software Testing", category: "Testing & QA", desc: "Ensure highest software quality." },
  { slug: "core-java-and-selenium", title: "Core Java and Selenium", category: "Development & Programming", desc: "Object-oriented programming and automation." },
  { slug: "python-selenium-mysql-python", title: "Python-Selenium/MySQL-Python", category: "Development & Programming", desc: "Python automation and database integration." },
  { slug: "performance-testing", title: "Performance Testing", category: "Testing & QA", desc: "Optimize application speed and reliability." },
  { slug: "c-c-programming", title: "C,C++ Programming", category: "Development & Programming", desc: "Master the foundations of computer science." },
  { slug: "data-analytics", title: "Data Analytics", category: "Data & Cloud", desc: "Derive insights from complex datasets." },
  { slug: "data-science", title: "Data Science", category: "Data & Cloud", desc: "Build predictive models and algorithms." },
  { slug: "amazon-web-services", title: "Amazon Web Services", category: "Data & Cloud", desc: "Design scalable cloud infrastructure." },
  { slug: "cloud-computing", title: "Cloud Computing", category: "Data & Cloud", desc: "Master modern cloud architecture principles." },
  { slug: "sap", title: "SAP", category: "Data & Cloud", desc: "Enterprise resource planning and management." },
  { slug: "digital-marketing", title: "Digital Marketing", category: "Business & Tools", desc: "Drive growth and brand awareness." },
  { slug: "communication-training", title: "Communication training", category: "Professional Skills", desc: "Articulate ideas clearly and effectively." },
  { slug: "interview-skills", title: "Interview skills", category: "Professional Skills", desc: "Ace your technical and HR rounds." },
  { slug: "soft-skills", title: "Soft skills", category: "Professional Skills", desc: "Develop teamwork and adaptability." },
  { slug: "basic-computer", title: "basic Computer", category: "Business & Tools", desc: "Essential digital literacy for the workplace." },
  { slug: "excel-advanced-excel", title: "Excel/Advanced Excel", category: "Business & Tools", desc: "Data manipulation and business reporting." },
  { slug: "bpo-training", title: "BPO Training", category: "Business & Tools", desc: "Prepare for business process operations." },
  { slug: "spoken-english", title: "Spoken English", category: "Professional Skills", desc: "Enhance verbal fluency and confidence." },
  { slug: "hr-trainings-and-internship", title: "HR Training's and Internship", category: "Professional Skills", desc: "Real-world human resources experience." },
  { slug: "projects", title: "Projects", category: "Professional Skills", desc: "Hands-on capstone development." }
];

const images = {
  "software-testing": "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?q=80&w=2800&auto=format&fit=crop",
  "core-java-and-selenium": "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2800&auto=format&fit=crop",
  "python-selenium-mysql-python": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2800&auto=format&fit=crop",
  "performance-testing": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2800&auto=format&fit=crop",
  "c-c-programming": "https://images.unsplash.com/photo-1515228699708-d144510c4c47?q=80&w=2800&auto=format&fit=crop",
  "data-analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2800&auto=format&fit=crop",
  "data-science": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2800&auto=format&fit=crop",
  "amazon-web-services": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2800&auto=format&fit=crop",
  "cloud-computing": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2800&auto=format&fit=crop",
  "sap": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2800&auto=format&fit=crop",
  "digital-marketing": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2800&auto=format&fit=crop",
  "communication-training": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2800&auto=format&fit=crop",
  "interview-skills": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2800&auto=format&fit=crop",
  "soft-skills": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2800&auto=format&fit=crop",
  "basic-computer": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2800&auto=format&fit=crop",
  "excel-advanced-excel": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2800&auto=format&fit=crop",
  "bpo-training": "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2800&auto=format&fit=crop",
  "spoken-english": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2800&auto=format&fit=crop",
  "hr-trainings-and-internship": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2800&auto=format&fit=crop",
  "projects": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2800&auto=format&fit=crop"
};

const getTheme = (cat) => {
  switch (cat) {
    case "Development & Programming": return "rose";
    case "Testing & QA": return "purple";
    case "Data & Cloud": return "blue";
    case "Professional Skills": return "teal";
    case "Business & Tools": return "orange";
    default: return "slate";
  }
};

const getVisualType = (cat) => {
  switch (cat) {
    case "Development & Programming": return "progress-dots";
    case "Testing & QA": return "status-chips";
    case "Data & Cloud": return "donut";
    case "Professional Skills": return "icon-row";
    case "Business & Tools": return "checklist";
    default: return "progress-dots";
  }
};

const getIcon = (cat) => {
  switch (cat) {
    case "Development & Programming": return "Code2";
    case "Testing & QA": return "CheckCircle2";
    case "Data & Cloud": return "Cloud";
    case "Professional Skills": return "Users";
    case "Business & Tools": return "Briefcase";
    default: return "BookOpen";
  }
};

let output = `import { 
  Code2, CheckCircle2, Cloud, Users, TrendingUp, Monitor, 
  Database, Cpu, Globe, Server, Shield, Zap, Award, BookOpen, 
  Briefcase, BarChart, FileSpreadsheet, MessageSquare, Target, Settings, Terminal, Layout, Smartphone
} from "lucide-react";

export const coursesData = [\n`;

courses.forEach(c => {
  const theme = getTheme(c.category);
  const vType = getVisualType(c.category);
  const icon = getIcon(c.category);
  const img = images[c.slug];
  
  // Create realistic subSkills and tools based on the title
  let subSkills = `[
      { name: "Fundamentals", description: "Learn the absolute basics and core concepts required to master ${c.title}.", depthLevel: 80, coveredTopics: ["Core Syntax", "Environment Setup", "Best Practices", "Troubleshooting"] },
      { name: "Advanced Applications", description: "Apply advanced techniques and frameworks used in production environments.", depthLevel: 95, coveredTopics: ["Performance Optimization", "Architecture", "Security", "Scale"] }
    ]`;
    
  let tools = `[
      { name: "Industry Standard Tool", icon: Settings },
      { name: "Analytics Dashboard", icon: BarChart }
    ]`;
    
  let timeline = `[
      { title: "Introduction", description: "Initial setup and foundational theory.", duration: "Week 1-2" },
      { title: "Deep Dive", description: "Intensive hands-on practice and labs.", duration: "Week 3-6" },
      { title: "Capstone", description: "Real-world project execution.", duration: "Week 7-8" }
    ]`;
    
  let career = `[
      { title: "${c.title} Specialist", description: "Lead implementation of ${c.title} across enterprise teams.", demandLevel: 90, salaryRange: "₹6L - ₹12L" },
      { title: "Consultant", description: "Provide strategic guidance and auditing for clients.", demandLevel: 85, salaryRange: "₹8L - ₹15L" }
    ]`;
    
  let stats = `[
      { label: "Hours", value: 40, suffix: "+" },
      { label: "Projects", value: 3, suffix: "" },
      { label: "Placement", value: 95, suffix: "%" }
    ]`;

  let faqs = `[
      { question: "What are the prerequisites?", answer: "This module starts from the basics, but a general understanding of the domain is helpful. No prior advanced experience is strictly required." },
      { question: "Is there a certificate?", answer: "Yes, upon successful completion and capstone evaluation, you will receive an industry-recognized certificate." }
    ]`;

  let visualData = '{}';
  if (vType === 'progress-dots') visualData = '{ level: 4, max: 5 }';
  if (vType === 'status-chips') visualData = '{ label: "Pass Rate", value: "98%" }';
  if (vType === 'donut') visualData = '{ percentage: 85, label: "Efficiency" }';
  if (vType === 'icon-row') visualData = '{ icons: ["MessageSquare", "Users", "Target"] }';
  if (vType === 'checklist') visualData = '{ items: ["Strategy", "Execution", "Review"] }';

  // Using template literal properly escaped
  output += `  {
    slug: "${c.slug}",
    title: "${c.title}",
    category: "${c.category}",
    desc: "${c.desc}",
    image: "${img}",
    icon: ${icon},
    colorTheme: "${theme}",
    visualType: "${vType}",
    visualData: ${visualData},
    heroSubtext: "Dive deep into ${c.title} and build the hands-on skills required to excel in modern industry roles. Designed by experts, tailored for your success.",
    heroImage: "${img}",
    heroStats: [
      { label: "Duration", value: "8 Wks" },
      { label: "Format", value: "Live" },
      { label: "Labs", value: "15+" }
    ],
    overviewParagraphs: [
      "${c.desc} This intensive module takes you from foundational concepts to advanced practical implementation. The curriculum is constantly updated to reflect current industry demands.",
      "Throughout the course, you will work on real-world case studies and hands-on projects, ensuring you are day-one ready for your next career move."
    ],
    subSkills: ${subSkills},
    timelineSteps: ${timeline},
    tools: ${tools},
    careerRoles: ${career},
    impactStats: ${stats},
    faqs: ${faqs},
    relatedModuleSlugs: []
  },\n`;
});

output += `];\n`;

fs.writeFileSync('src/data/coursesData.ts', output);
console.log("Successfully generated src/data/coursesData.ts");
