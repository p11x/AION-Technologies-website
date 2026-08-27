import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Rocket } from "lucide-react";
import { coursesData } from "../data/coursesData";
import { CardVisualAccent } from "../components/CardVisualAccent";

export default function Courses() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Development & Programming": return "text-rose-600";
      case "Testing & QA": return "text-purple-600";
      case "Data & Cloud": return "text-blue-600";
      case "Professional Skills": return "text-teal-600";
      case "Business & Tools": return "text-orange-600";
      default: return "text-slate-600";
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
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
            <BookOpen className="w-4 h-4 text-purple-400" /> Training Modules
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Accelerate Your <br className="hidden md:block"/>
            <span className="text-[#8b5cf6] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">Learning Journey</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Immersive, hands-on modules designed by industry experts to give you the practical skills that companies are hiring for today.
          </motion.p>
        </div>
      </section>

      {/* 2. SECTION INTRO */}
      <section className="pt-24 pb-12 text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-bold tracking-widest text-[#7c3aed] uppercase mb-4">TRAINING MODULES</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Hands-on modules built for real skills</h2>
        </motion.div>
      </section>

      {/* 3. CARD GRID */}
      <section className="max-w-[1400px] mx-auto px-4 pb-24">
        <div className="flex flex-wrap justify-center gap-6">
          {coursesData.map((course, index) => (
            <div key={course.slug} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 flex flex-col">
              <Link to={`/courses/${course.slug}`} className="group flex flex-col h-full focus:outline-none w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 8) * 0.05 }}
                className="flex flex-col bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] group-hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
              >
                {/* Visual Area (Specific Image) */}
                <div className="h-[200px] w-full overflow-hidden relative bg-slate-900">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
                </div>
                
                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <span className={`text-xs font-bold uppercase tracking-wider mb-2 ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">{course.title}</h3>
                  
                  <div className="mb-4 mt-1"><CardVisualAccent type={course.visualType} data={course.visualData} colorTheme={course.colorTheme} /></div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    {course.desc}
                  </p>
                  
                  <div className="mt-auto inline-flex items-center gap-2 text-[#2563eb] font-bold text-sm group-hover:text-blue-700 transition-colors">
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
              </Link>
            </div>
          ))}
        </div>
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
              <div className="text-4xl md:text-5xl font-black text-white mb-2">20</div>
              <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Skill Modules</div>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 mb-8 border border-purple-500/30">
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
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
