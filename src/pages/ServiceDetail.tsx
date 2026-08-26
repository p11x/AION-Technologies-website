import { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useInView, useMotionValue, useTransform, animate as framerAnimate } from "motion/react";
import { ArrowLeft, Rocket, Plus, Minus, ArrowRight } from "lucide-react";
import { servicesData } from "../data/servicesData";
import { coursesData } from "../data/coursesData";

// Counter component for animated stats
function AnimatedCounter({ from = 0, to, suffix = "", duration = 2 }: { from?: number, to: number, suffix?: string, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      framerAnimate(count, to, { duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.slug === slug);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (!service) {
      navigate('/services', { replace: true });
    }
    // reset tab on navigate
    setActiveTab(0);
  }, [service, navigate]);
  
  if (!service) return null;

  const Icon = service.icon;
  
  // Find related courses
  const relatedCourses = coursesData.filter(course => 
    service.relatedModuleSlugs.includes(course.slug)
  );

  const getThemeColor = () => {
    switch(service.colorTheme) {
      case "rose": return "text-rose-500 bg-rose-50 border-rose-100";
      case "purple": return "text-purple-500 bg-purple-50 border-purple-100";
      case "blue": return "text-blue-500 bg-blue-50 border-blue-100";
      case "teal": return "text-teal-500 bg-teal-50 border-teal-100";
      case "orange": return "text-orange-500 bg-orange-50 border-orange-100";
      default: return "text-slate-500 bg-slate-50 border-slate-100";
    }
  };
  
  const getThemeBg = () => {
    switch(service.colorTheme) {
      case "rose": return "bg-rose-500";
      case "purple": return "bg-purple-500";
      case "blue": return "bg-blue-500";
      case "teal": return "bg-teal-500";
      case "orange": return "bg-orange-500";
      default: return "bg-slate-500";
    }
  };

  const getThemeText = () => {
    switch(service.colorTheme) {
      case "rose": return "text-rose-600";
      case "purple": return "text-purple-600";
      case "blue": return "text-blue-600";
      case "teal": return "text-teal-600";
      case "orange": return "text-orange-600";
      default: return "text-slate-600";
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0a0e27] pt-24 pb-32 px-4 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/80 via-[#0a0e27]/60 to-[#0a0e27]"></div>
        </div>
        
        <div className="absolute top-24 left-4 md:left-8 lg:left-12 z-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm`}
          >
            <Icon className="w-4 h-4" /> {service.title}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-6"
          >
            {service.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
          >
            {service.heroSubtext}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button 
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold shadow-lg shadow-white/5 hover:bg-slate-100 transition-colors"
            >
              Explore Curriculum
            </button>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Talk to an Advisor
            </Link>
          </motion.div>
          
          {/* Small Stats Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full pt-8 border-t border-white/10"
          >
            {service.heroStats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Why {service.title}?</h2>
            {service.overviewParagraphs.map((p, i) => (
              <p key={i} className="text-slate-600 text-lg leading-relaxed">{p}</p>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
             <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={service.heroImage} alt="Overview visual" className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-tr ${getThemeBg()} opacity-20 mix-blend-multiply`}></div>
                {/* Floating animated elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-10 left-10 p-4 bg-white rounded-2xl shadow-xl shadow-black/10"
                >
                  <Icon className={`w-8 h-8 ${getThemeText()}`} />
                </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SKILLS BREAKDOWN (Tabs) */}
      <section className="py-24 bg-white border-y border-slate-100" id="curriculum">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Core Competencies</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Explore the deep-dive skills you will master in this track.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              {service.subSkills.map((skill, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`text-left px-6 py-4 rounded-xl font-bold transition-all ${activeTab === i ? getThemeColor() + ' shadow-sm' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                >
                  {skill.name}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="w-full lg:w-2/3 bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.subSkills[activeTab].name}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.subSkills[activeTab].description}</p>
                
                <div className="mb-8">
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-900">Skill Depth</span>
                    <span className={getThemeText()}>Advanced</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${service.subSkills[activeTab].depthLevel}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full rounded-full ${getThemeBg()}`}
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 mb-4">What's Covered:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.subSkills[activeTab].coveredTopics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                        <div className={`w-2 h-2 rounded-full ${getThemeBg()}`}></div>
                        <span className="text-slate-700 font-semibold text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRICULUM TIMELINE */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Learning Journey</h2>
          <p className="text-slate-500 text-lg">Your step-by-step path to industry readiness.</p>
        </div>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {service.timelineSteps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${getThemeBg()} text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
                <span className="text-sm font-bold">{i + 1}</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${getThemeText()}`}>{step.duration}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. TOOLS & TECHNOLOGIES GRID */}
      <section className="py-24 bg-slate-900 text-center px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Tools You'll Master</h2>
          <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">Get hands-on experience with the exact software stack used by Fortune 500 companies.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {service.tools.map((tool, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors w-40"
              >
                <div className={`p-4 rounded-full bg-white/10 text-white`}>
                  <tool.icon className="w-8 h-8" />
                </div>
                <span className="font-bold text-white tracking-wide">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CAREER OUTCOMES */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Career Outcomes</h2>
          <p className="text-slate-500 text-lg">Roles you'll be prepared for upon graduation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.careerRoles.map((role, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">{role.title}</h3>
              <p className="text-slate-600 mb-6 min-h-[48px]">{role.description}</p>
              
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-400 uppercase">Demand Trend</span>
                  <span className="text-sm font-bold text-emerald-600">High Growth</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${role.demandLevel}%` }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold text-slate-400 uppercase">Salary Range</span>
                  <span className="text-sm font-bold text-slate-900">{role.salaryRange}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. STATS/IMPACT BANNER */}
      <section className={`py-24 ${getThemeBg()} text-white text-center`}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          {service.impactStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-black mb-2 tracking-tight flex items-baseline">
                <AnimatedCounter to={stat.value} duration={2} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="py-24 max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {service.faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                  {isOpen ? (
                    <Minus className={`w-5 h-5 ${getThemeText()}`} />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. RELATED MODULES */}
      {relatedCourses.length > 0 && (
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-10">Specific Modules in this Track</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map(course => (
                <Link key={course.slug} to={`/courses/${course.slug}`} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
                  <div className="h-32 bg-slate-100 relative overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{course.category}</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-1">{course.desc}</p>
                    <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm">
                      View Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. FINAL CTA */}
      <section className="bg-[#0a0e27] py-24 text-center px-4 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] ${getThemeBg()} opacity-20 blur-[120px] pointer-events-none rounded-full`}></div>
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className={`w-16 h-16 ${getThemeBg()} bg-opacity-20 rounded-2xl flex items-center justify-center ${getThemeText()} mb-8 border border-white/10`}>
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Ready to specialize in {service.title}?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12">
            Enroll today and start building the skills that leading tech companies are looking for.
          </p>
          <Link 
            to="/registration"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl shadow-white/5"
          >
            Register Now
          </Link>
        </div>
      </section>

    </div>
  );
}
