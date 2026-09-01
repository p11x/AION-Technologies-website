import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isDarkTheme?: boolean;
  imageHeight?: string;
}

export function Logo({ className = "", isDarkTheme = false, imageHeight = "h-7" }: LogoProps) {
  const textColor = isDarkTheme ? "text-white" : "text-[#0c1a53]";
  const subtextColor = isDarkTheme ? "text-slate-300" : "text-[#111]";

  return (
    <Link to="/" className={`flex flex-col items-center justify-center ${className}`}>
      <img src="/aion-brand-v2.png" alt="AION Logo Graphic" className={`${imageHeight} w-auto object-contain`} />
      <span 
        className={`text-base md:text-lg font-bold ${textColor} leading-none tracking-wide`} 
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Aion Technology
      </span>
      <span 
        className={`text-[7px] md:text-[8px] ${subtextColor} leading-tight`} 
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Success has no Destiny
      </span>
      <span 
        className={`text-[8px] md:text-[9px] ${textColor} leading-tight mt-0.5`} 
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Training, Placements And Software.
      </span>
    </Link>
  );
}
