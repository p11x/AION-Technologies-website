import { useState } from "react";
import { Recruiter } from "../data/companyData";

export const CompanyLogo = ({ clientObj, color }: { clientObj: Recruiter, color?: string }) => {
  const [error, setError] = useState(false);
  const bgClass = color || "bg-slate-500";
  
  if (error) {
    return (
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-lg font-black text-white ${bgClass} shrink-0 shadow-inner`}>
        {clientObj.name.charAt(0)}
      </div>
    );
  }
  
  const content = (
    <img 
      src={clientObj.logoPath}
      alt={`${clientObj.name} logo`}
      className="w-full h-full object-contain"
      onError={() => setError(true)}
    />
  );
  
  if (clientObj.logoBgVariant === "white-chip") {
    return (
      <div className="w-14 h-14 p-2 flex items-center justify-center shrink-0 rounded-lg bg-white shadow-sm border border-slate-100">
        {content}
      </div>
    );
  }
  
  return (
    <div className="w-14 h-14 p-2 flex items-center justify-center shrink-0 rounded-lg">
      {content}
    </div>
  );
};
