import { BarChart, CheckCircle2, Target, Users, MessageSquare } from "lucide-react";

export const CardVisualAccent = ({ type, data, colorTheme }: { type: string, data: any, colorTheme: string }) => {
  const getThemeColor = () => {
    switch(colorTheme) {
      case "rose": return "text-rose-500 fill-rose-500 border-rose-200 bg-rose-50";
      case "purple": return "text-purple-500 fill-purple-500 border-purple-200 bg-purple-50";
      case "blue": return "text-blue-500 fill-blue-500 border-blue-200 bg-blue-50";
      case "teal": return "text-teal-500 fill-teal-500 border-teal-200 bg-teal-50";
      case "orange": return "text-orange-500 fill-orange-500 border-orange-200 bg-orange-50";
      default: return "text-slate-500 fill-slate-500 border-slate-200 bg-slate-50";
    }
  };
  
  const getProgressColor = () => {
    switch(colorTheme) {
      case "rose": return "bg-rose-500";
      case "purple": return "bg-purple-500";
      case "blue": return "bg-blue-500";
      case "teal": return "bg-teal-500";
      case "orange": return "bg-orange-500";
      default: return "bg-slate-500";
    }
  };

  const themeClass = getThemeColor();
  const bgClass = getProgressColor();

  if (type === 'progress-dots') {
    const level = data.level || 4;
    const max = data.max || 5;
    return (
      <div className="flex items-center gap-1.5 h-8">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">Level</span>
        {[...Array(max)].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i < level ? bgClass : 'bg-slate-200'}`} />
        ))}
      </div>
    );
  }

  if (type === 'status-chips') {
    return (
      <div className="flex items-center gap-2 h-8">
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${themeClass}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${bgClass} animate-pulse`} />
          {data.label}: {data.value}
        </div>
      </div>
    );
  }

  if (type === 'donut') {
    const pct = data.percentage || 85;
    return (
      <div className="flex items-center gap-3 h-8">
        <div className="relative w-7 h-7">
          <svg viewBox="0 0 36 36" className="w-7 h-7 -rotate-90">
            <path
              className="text-slate-100"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={themeClass.split(' ')[0]}
              strokeDasharray={`${pct}, 100`}
              strokeWidth="4"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{data.label}</span>
      </div>
    );
  }

  if (type === 'icon-row') {
    return (
      <div className="flex items-center gap-2 h-8">
        {data.icons?.map((iconName: string, i: number) => {
          let Icon = Users;
          if (iconName === 'MessageSquare') Icon = MessageSquare;
          if (iconName === 'Target') Icon = Target;
          return (
            <div key={i} className={`p-1.5 rounded border ${themeClass}`}>
              <Icon className="w-3.5 h-3.5" />
            </div>
          );
        })}
      </div>
    );
  }

  if (type === 'checklist') {
    return (
      <div className="flex items-center gap-3 h-8">
        {data.items?.slice(0, 2).map((item: string, i: number) => (
          <div key={i} className="flex items-center gap-1">
            <CheckCircle2 className={`w-3.5 h-3.5 ${themeClass.split(' ')[0]}`} />
            <span className="text-xs font-semibold text-slate-500">{item}</span>
          </div>
        ))}
      </div>
    );
  }

  // Fallback sparkline
  return (
    <div className="flex items-end gap-1 h-8 opacity-70">
       <div className={`w-1.5 h-3 rounded-t-sm ${bgClass}`} />
       <div className={`w-1.5 h-5 rounded-t-sm ${bgClass}`} />
       <div className={`w-1.5 h-4 rounded-t-sm ${bgClass}`} />
       <div className={`w-1.5 h-7 rounded-t-sm ${bgClass}`} />
       <div className={`w-1.5 h-6 rounded-t-sm ${bgClass}`} />
    </div>
  );
};
