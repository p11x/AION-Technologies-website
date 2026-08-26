import { motion } from "motion/react";
import { Check, Building2, Trophy, Briefcase, GraduationCap } from "lucide-react";
import { clients } from "../data/companyData";
import { CompanyLogo } from "../components/CompanyLogo";

export default function Placement() {
  const industries = [
    "Banks / NBFC", "IT / ITeS", "Manufacturing", "Healthcare", 
    "Pharmaceuticals", "KPO / BPO", "Consulting"
  ];

  const processes = [
    {
      icon: Building2,
      title: "Pre-Placement Talk",
      desc: "Companies visit the campus to share their vision, job profiles and expectations with prospective candidates."
    },
    {
      icon: Trophy,
      title: "Aptitude & Technical Tests",
      desc: "Candidates undergo rigorous assessments to evaluate their logical, quantitative, and technical skills."
    },
    {
      icon: Briefcase,
      title: "Group Discussions",
      desc: "Evaluating communication, leadership, and team collaboration skills in a simulated environment."
    },
    {
      icon: GraduationCap,
      title: "Personal Interviews",
      desc: "Final round of technical and HR interviews leading to job offers and onboarding."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-32 font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#0f172a] pt-32 pb-48 text-center px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" 
            alt="Students collaborating" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 to-[#0f172a]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#3b82f6] text-sm font-semibold mb-8"
          >
            <Check className="w-4 h-4" /> 100% Placement Assistance
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Launch Your <br className="hidden md:block"/>
            <span className="text-[#3b82f6]">Dream Career</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We bridge the gap between academic excellence and industry demands, ensuring our students secure top roles in leading global companies.
          </motion.p>
        </div>
      </section>

      {/* Stats Section (Floating) */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 -mt-24 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-around gap-12 md:gap-8"
        >
          <div className="text-center w-full md:w-1/3">
            <div className="text-4xl md:text-5xl font-black text-[#3b82f6] mb-3 tracking-tight">250+</div>
            <div className="text-slate-500 font-bold text-sm uppercase tracking-widest">Recruiting Partners</div>
          </div>
          <div className="hidden md:block w-px h-20 bg-slate-100"></div>
          <div className="text-center w-full md:w-1/3">
            <div className="text-4xl md:text-5xl font-black text-[#3b82f6] mb-3 tracking-tight">26<span className="text-2xl md:text-3xl">LPA</span></div>
            <div className="text-slate-500 font-bold text-sm uppercase tracking-widest">Highest Package</div>
          </div>
          <div className="hidden md:block w-px h-20 bg-slate-100"></div>
          <div className="text-center w-full md:w-1/3">
            <div className="text-4xl md:text-5xl font-black text-[#3b82f6] mb-3 tracking-tight">92%</div>
            <div className="text-slate-500 font-bold text-sm uppercase tracking-widest">Placement Rate</div>
          </div>
        </motion.div>
      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto px-4 mb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Cater To</h2>
          <p className="text-slate-500 mb-12 text-lg">Our graduates are sought after across a diverse range of high-growth sectors.</p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((ind, idx) => (
              <motion.div 
                key={ind} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-3 bg-white rounded-full border border-slate-200 text-slate-700 text-sm md:text-base font-semibold shadow-sm hover:border-[#3b82f6] transition-colors cursor-default"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recruitment Process */}
      <section className="max-w-7xl mx-auto px-4 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recruitment Process</h2>
          <p className="text-slate-500 mb-16 text-lg">A streamlined approach to connect top talent with industry leaders.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((proc, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:text-[#3b82f6] group-hover:border-[#3b82f6]/20 group-hover:bg-blue-50/50">
                <proc.icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{proc.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{proc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0b1120] rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-[#3b82f6] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Top Recruiters</h2>
            <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
              AION-IMS is trusted by leading multinational corporations and innovative startups from India's tech ecosystem.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {clients.map((client, idx) => {
                const initial = client.charAt(0);
                const colors = ['bg-blue-500', 'bg-red-500', 'bg-emerald-500', 'bg-amber-500', 'bg-purple-500', 'bg-indigo-500'];
                const color = colors[idx % colors.length];

                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 8) * 0.05 }}
                    className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-colors cursor-pointer hover:border-white/20"
                  >
                    <CompanyLogo client={client} color={color} />
                    <span className="text-slate-300 text-xs md:text-sm font-bold tracking-wider uppercase truncate">
                      {client}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
