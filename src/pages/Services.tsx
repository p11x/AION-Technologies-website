import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Zap, Code2, CheckCircle2, Cloud, Users, TrendingUp, ArrowRight, Rocket } from "lucide-react";

export default function Services() {
  const blocks = [
    {
      id: "dev-prog",
      slug: "development-programming",
      title: "Development & Programming",
      desc: "Build robust, scalable software applications from the ground up. Master modern coding languages and frameworks to become a versatile developer.",
      tags: ["Core Java", "Selenium", "Python", "MySQL", "C/C++ Programming"],
      icon: Code2,
      colorTheme: "rose", // We'll map this to classes
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2852&auto=format&fit=crop"
    },
    {
      id: "testing-qa",
      slug: "testing-qa",
      title: "Testing & QA",
      desc: "Ensure the highest software quality and reliability. Learn automated and manual testing methodologies to deploy bug-free products.",
      tags: ["Software Testing", "Performance Testing", "Automation"],
      icon: CheckCircle2,
      colorTheme: "purple",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: "data-cloud",
      slug: "data-cloud",
      title: "Data & Cloud",
      desc: "Unlock actionable insights and scale infrastructure globally. Harness the power of big data and leading cloud platforms.",
      tags: ["Data Analytics", "Data Science", "AWS", "Cloud Computing", "SAP"],
      icon: Cloud,
      colorTheme: "blue",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2934&auto=format&fit=crop"
    },
    {
      id: "prof-skills",
      slug: "professional-skills",
      title: "Professional Skills",
      desc: "Develop the leadership and communication abilities that top employers demand. Transform into a confident corporate professional.",
      tags: ["Communication", "Interview Skills", "Soft Skills", "Spoken English", "HR Training", "Projects"],
      icon: Users,
      colorTheme: "teal",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop"
    },
    {
      id: "business-tools",
      slug: "business-tools",
      title: "Business & Tools",
      desc: "Master the essential tools and strategies required to drive organizational success and digital growth.",
      tags: ["Digital Marketing", "Basic Computer", "Excel / Advanced Excel", "BPO Training"],
      icon: TrendingUp,
      colorTheme: "orange",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "rose": return { bg: "bg-rose-100", text: "text-rose-600" };
      case "purple": return { bg: "bg-purple-100", text: "text-purple-600" };
      case "blue": return { bg: "bg-blue-100", text: "text-blue-600" };
      case "teal": return { bg: "bg-teal-100", text: "text-teal-600" };
      case "orange": return { bg: "bg-orange-100", text: "text-orange-600" };
      default: return { bg: "bg-slate-100", text: "text-slate-600" };
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. HERO HEADER */}
      <section className="relative bg-[#0a0e27] pt-32 pb-32 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop" 
            alt="Students collaborating" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/80 via-[#0a0e27]/60 to-[#0a0e27]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-8 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 text-amber-400" /> Our Services
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Everything You Need to <br className="hidden md:block"/>
            <span className="text-[#3b82f6] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Launch Your Career</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive training and enterprise solutions designed to bridge the gap between academic learning and corporate requirements.
          </motion.p>
        </div>
      </section>

      {/* 2. SECTION INTRO */}
      <section className="pt-24 pb-12 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-bold tracking-widest text-[#3b82f6] uppercase mb-4">Our Services</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Skills that get you hired</h2>
        </motion.div>
      </section>

      {/* 3. ALTERNATING SERVICE BLOCKS */}
      <section className="max-w-[1200px] mx-auto px-4 pb-24 space-y-24 md:space-y-32">
        {blocks.map((block, index) => {
          const isReversed = index % 2 !== 0;
          const colors = getColorClasses(block.colorTheme);
          return (
            <div key={block.id} className={`flex flex-col gap-12 md:gap-16 items-center ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-[45%] shrink-0"
              >
                <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-2xl">
                  <img src={block.image} alt={block.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div 
                initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-[55%] flex flex-col items-start text-left"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colors.bg} ${colors.text}`}>
                  <block.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{block.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{block.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {block.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-md border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link to={`/services/${block.slug}`} className="group inline-flex items-center gap-2 text-[#2563eb] font-bold text-sm hover:text-blue-700 transition-colors">
                  Explore Curriculum 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* 5. STATS BANNER */}
      <section className="bg-[#0a0e27] py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">500+</div>
              <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Students Placed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">45+</div>
              <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Hiring Partners</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">5</div>
              <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Skill Tracks</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">100%</div>
              <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Practical Training</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="bg-[#0a0e27] py-24 text-center px-4 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 border border-blue-500/30">
            <Rocket className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Ready to Build Your Skills?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12">
            Join thousands of successful graduates and accelerate your journey in the tech industry today.
          </p>
          <Link 
            to="/registration"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl shadow-white/5"
          >
            View Full Curriculum
          </Link>
        </div>
      </section>
    </div>
  );
}
