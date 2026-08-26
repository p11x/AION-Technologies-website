import { useState } from "react";

export const clientDomains: Record<string, string> = {
  "Omega Healthcare": "omegahealthcare.com",
  "Teleperformance": "teleperformance.com",
  "HGS": "hgs.cx",
  "Mitsubishi": "mitsubishi.com",
  "Fujitsu": "fujitsu.com",
  "Convey tech labs": "conveytechlabs.com",
  "Airtel": "airtel.in",
  "Accenture": "accenture.com",
  "[24]7.ai": "247.ai",
  "ELMEASURE": "elmeasure.com",
  "Flipkart": "flipkart.com",
  "ELECSIS": "elecsis.com",
  "JindalX": "jindalx.com",
  "upGrad": "upgrad.com",
  "TATA MOTORS": "tatamotors.com",
  "WIPRO": "wipro.com"
};

export const CompanyLogo = ({ client, color }: { client: string, color?: string }) => {
  const [error, setError] = useState(false);
  const domain = clientDomains[client];
  const bgClass = color || "bg-slate-500";
  
  if (!domain || error) {
    return (
      <div className={`w-8 h-8 rounded flex items-center justify-center text-[11px] font-black text-white ${bgClass} shrink-0 shadow-inner`}>
        {client.charAt(0)}
      </div>
    );
  }
  
  return (
    <div className="w-8 h-8 flex items-center justify-center shrink-0 rounded overflow-hidden">
      <img 
        src={`https://logo.clearbit.com/${domain}`} 
        alt={`${client} logo`}
        className="w-full h-full object-contain"
        onError={() => setError(true)}
      />
    </div>
  );
};
