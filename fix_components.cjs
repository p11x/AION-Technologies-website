const fs = require('fs');

// 1. CompanyLogo.tsx
let companyLogoCode = `import { useState } from "react";
import { Recruiter } from "../data/companyData";

export const CompanyLogo = ({ clientObj, color }: { clientObj: Recruiter, color?: string }) => {
  const [error, setError] = useState(false);
  const bgClass = color || "bg-slate-500";
  
  if (error) {
    return (
      <div className={\`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-black text-white \${bgClass} shrink-0 shadow-inner\`}>
        {clientObj.name.charAt(0)}
      </div>
    );
  }
  
  const content = (
    <img 
      src={clientObj.logoPath}
      alt={\`\${clientObj.name} logo\`}
      className="w-full h-full object-contain"
      onError={() => setError(true)}
    />
  );
  
  if (clientObj.logoBgVariant === "white-chip") {
    return (
      <div className="w-10 h-10 p-1.5 flex items-center justify-center shrink-0 rounded-lg bg-white overflow-hidden shadow-sm border border-slate-100">
        {content}
      </div>
    );
  }
  
  return (
    <div className="w-10 h-10 p-1 flex items-center justify-center shrink-0 rounded-lg overflow-hidden">
      {content}
    </div>
  );
};`;
fs.writeFileSync('src/components/CompanyLogo.tsx', companyLogoCode);

// 2. Home.tsx
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
homeCode = homeCode.replace(/\{\[\.\.\.clients, \.\.\.clients\]\.map\(\(client, idx\) => \{/g, '{[...clients, ...clients].map((clientObj, idx) => {');
homeCode = homeCode.replace(/<CompanyLogo client=\{client\} color=\{color\} \/>/g, '<CompanyLogo clientObj={clientObj} color={color} />');
homeCode = homeCode.replace(/\{client\}/g, '{clientObj.name}');
// wait! There might be other {client} used. Let's do it carefully.
homeCode = homeCode.replace(/<CompanyLogo client=\{clientObj.name\} color=\{color\} \/>/g, '<CompanyLogo clientObj={clientObj} color={color} />'); // Revert if accidental

fs.writeFileSync('src/pages/Home.tsx', homeCode);

// 3. Placement.tsx
let placementCode = fs.readFileSync('src/pages/Placement.tsx', 'utf-8');
placementCode = placementCode.replace(/clients\.map\(\(client, idx\) => \{/g, 'clients.map((clientObj, idx) => {');
placementCode = placementCode.replace(/<CompanyLogo client=\{client\} color=\{color\} \/>/g, '<CompanyLogo clientObj={clientObj} color={color} />');
placementCode = placementCode.replace(/>\s*\{client\}\s*<\/span>/g, '>{clientObj.name}</span>');
fs.writeFileSync('src/pages/Placement.tsx', placementCode);
