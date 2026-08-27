const fs = require('fs');

let code = fs.readFileSync('src/data/companyData.ts', 'utf-8');

const replacement = `export interface Recruiter {
  name: string;
  logoPath: string;
  logoBgVariant: "white-chip" | "dark-native";
}

export const clients: Recruiter[] = [
  { name: "Omega Healthcare", logoPath: "/logos/recruiters/omega-healthcare.svg", logoBgVariant: "white-chip" },
  { name: "Teleperformance", logoPath: "/logos/recruiters/teleperformance.svg", logoBgVariant: "white-chip" },
  { name: "HGS", logoPath: "/logos/recruiters/hgs.svg", logoBgVariant: "white-chip" },
  { name: "Mitsubishi", logoPath: "/logos/recruiters/mitsubishi.svg", logoBgVariant: "white-chip" },
  { name: "Fujitsu", logoPath: "/logos/recruiters/fujitsu.svg", logoBgVariant: "white-chip" },
  { name: "Convey tech labs", logoPath: "/logos/recruiters/convey-tech-labs.png", logoBgVariant: "dark-native" },
  { name: "Airtel", logoPath: "/logos/recruiters/airtel.svg", logoBgVariant: "white-chip" },
  { name: "Accenture", logoPath: "/logos/recruiters/accenture.svg", logoBgVariant: "white-chip" },
  { name: "[24]7.ai", logoPath: "/logos/recruiters/247-ai.svg", logoBgVariant: "white-chip" },
  { name: "ELMEASURE", logoPath: "/logos/recruiters/elmeasure.png", logoBgVariant: "white-chip" },
  { name: "Flipkart", logoPath: "/logos/recruiters/flipkart.svg", logoBgVariant: "white-chip" },
  { name: "ELECSIS", logoPath: "/logos/recruiters/elecsis.png", logoBgVariant: "white-chip" },
  { name: "JindalX", logoPath: "/logos/recruiters/jindalx.svg", logoBgVariant: "white-chip" },
  { name: "upGrad", logoPath: "/logos/recruiters/upgrad.svg", logoBgVariant: "white-chip" },
  { name: "TATA MOTORS", logoPath: "/logos/recruiters/tata-motors.svg", logoBgVariant: "white-chip" },
  { name: "WIPRO", logoPath: "/logos/recruiters/wipro.svg", logoBgVariant: "white-chip" }
];`;

const startIndex = code.indexOf('export const clients = [');
const endIndex = code.indexOf('];', startIndex) + 2;

if (startIndex !== -1 && endIndex !== -1) {
  code = code.substring(0, startIndex) + replacement + code.substring(endIndex);
  fs.writeFileSync('src/data/companyData.ts', code);
  console.log("Updated clients in companyData.ts");
} else {
  console.log("Could not find clients array in companyData.ts");
}
