export const aboutUs = {
  title: "About Us",
  tagline: "\"Success has no destiny\"",
  paragraphs: [
    "Our company aim is to provide a complete and comprehensive environment where students and professionals can improve their technical skills and find endless employment opportunities.",
    "AION Technology institute aims to introduce and delve into the concept of a one-stop solution.",
    "We provide mobility and e-integration services for businesses. Our core values are in customer relationships and knowledge sharing.",
    "We believe every customer has the right to choose the vendor and solution that they will be using with complete honesty in between."
  ],
  vision: "To be a premier technological hub in offering training for student community in state Of the art technology and providing countless career options.",
  mission: "To create a comprehensive place where students and professionals can develop their technical skills and discover boundless employment opportunities."
};

export const mainFunctions = [
  {
    id: 1,
    title: "Admissions Assistance",
    description: "We guide aspiring students through the admissions process, providing support and insights to help them secure placements in top-tier institutes."
  },
  {
    id: 2,
    title: "Training Programs",
    description: "We offer customized training programs designed to equip individuals with the skills and knowledge needed to excel in their chosen fields."
  },
  {
    id: 3,
    title: "Placement Services",
    description: "Our extensive network of industry connections allows us to facilitate meaningful placements, connecting qualified candidates with reputable organizations."
  },
  {
    id: 4,
    title: "Internship",
    description: "Internships provide candidates with invaluable real-world experience, skill development, and networking opportunities. They also offer recruiters a proven way to identify and groom potential future employees."
  },
  {
    id: 5,
    title: "Industrial Visit",
    description: "Industrial visits provide students with hands-on exposure to practical working methods and employment practices. We arrange these visits across various sectors to bridge the gap between academic learning and real-world application."
  }
];

export const servicesOffered = [
  "Software Testing",
  "Core Java and Selenium",
  "Python-Selenium/MySQL-Python",
  "Performance Testing",
  "C,C++ Programming",
  "Data Analytics",
  "Data Science",
  "Amazon Web Services",
  "Cloud Computing",
  "SAP",
  "Digital Marketing",
  "Communication training",
  "Interview skills",
  "Soft skills",
  "basic Computer",
  "Excel/Advanced Excel",
  "BPO Training",
  "Spoken English",
  "HR Training's and Internship",
  "Projects"
];

export interface Recruiter {
  name: string;
  logoPath: string;
  logoBgVariant: "white-chip" | "dark-native";
}

export const clients: Recruiter[] = [
  { name: "Omega Healthcare", logoPath: "/logos/recruiters/omega-healthcare.png", logoBgVariant: "white-chip" },
  { name: "Teleperformance", logoPath: "/logos/recruiters/teleperformance.svg", logoBgVariant: "white-chip" },
  { name: "HGS", logoPath: "/logos/recruiters/hgs.webp", logoBgVariant: "white-chip" },
  { name: "Mitsubishi", logoPath: "/logos/recruiters/mitsubishi.svg", logoBgVariant: "white-chip" },
  { name: "Fujitsu", logoPath: "/logos/recruiters/fujitsu.webp", logoBgVariant: "white-chip" },
  { name: "Convey tech labs", logoPath: "/logos/recruiters/convey-tech-labs.svg", logoBgVariant: "white-chip" },
  { name: "Airtel", logoPath: "/logos/recruiters/airtel.webp", logoBgVariant: "white-chip" },
  { name: "Accenture", logoPath: "/logos/recruiters/accenture.svg", logoBgVariant: "white-chip" },
  { name: "[24]7.ai", logoPath: "/logos/recruiters/247-ai.webp", logoBgVariant: "white-chip" },
  { name: "ELMEASURE", logoPath: "/logos/recruiters/elmeasure.svg", logoBgVariant: "white-chip" },
  { name: "Flipkart", logoPath: "/logos/recruiters/flipkart.webp", logoBgVariant: "white-chip" },
  { name: "ELECSIS", logoPath: "/logos/recruiters/elecsis.svg", logoBgVariant: "white-chip" },
  { name: "JindalX", logoPath: "/logos/recruiters/jindalx.svg", logoBgVariant: "white-chip" },
  { name: "upGrad", logoPath: "/logos/recruiters/upgrad.svg", logoBgVariant: "white-chip" },
  { name: "TATA MOTORS", logoPath: "/logos/recruiters/tata-motors.svg", logoBgVariant: "white-chip" },
  { name: "WIPRO", logoPath: "/logos/recruiters/wipro.svg", logoBgVariant: "white-chip" }
];

export const contactInfo = {
  address: "Chinna's complex, REVA university circle, Bagalur Main Rd, above Jockey Exclusive Store, Niranthara Layout, Kattigenahalli, Bengaluru, Sathanur, Karnataka 560063",
  email: "hr.aiontechnology@gmail.com",
  website: "www.aiontechnology.in",
  phones: ["9353992306"]
};
