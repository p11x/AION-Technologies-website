import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus, ArrowRight, Quote } from "lucide-react";

function AnimatedCounter({ to, duration = 2 }: { to: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(to * progress));
          animationFrame = requestAnimationFrame(updateCounter);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(updateCounter);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [to, duration, inView]);

  return <span ref={nodeRef}>{count}</span>;
}

export function EnterpriseServiceTemplate({ item, relatedServices }: { item: any, relatedServices: any[] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getThemeBg = () => {
    switch (item.colorTheme) {
      case "rose": return "bg-rose-500";
      case "teal": return "bg-teal-500";
      case "orange": return "bg-orange-500";
      case "blue": return "bg-blue-500";
      case "purple": return "bg-purple-500";
      default: return "bg-blue-500";
    }
  };

  const getThemeText = () => {
    switch (item.colorTheme) {
      case "rose": return "text-rose-500";
      case "teal": return "text-teal-500";
      case "orange": return "text-orange-500";
      case "blue": return "text-blue-500";
      case "purple": return "text-purple-500";
      default: return "text-blue-500";
    }
  };
  
  const getThemeLightBg = () => {
    switch (item.colorTheme) {
      case "rose": return "bg-rose-50";
      case "teal": return "bg-teal-50";
      case "orange": return "bg-orange-50";
      case "blue": return "bg-blue-50";
      case "purple": return "bg-purple-50";
      default: return "bg-blue-50";
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0a0e27] pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/90 via-[#0a0e27]/80 to-[#0a0e27]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          
          <div className="flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <item.icon className={`w-4 h-4 ${getThemeText()}`} /> Enterprise Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              {item.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-xl md:text-2xl max-w-3xl leading-relaxed mb-10"
            >
              {item.heroSubtext}
            </motion.p>
            
            {/* Stat Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-8 py-6 border-y border-white/10 w-full mb-10"
            >
              {item.stats.map((stat: any, i: number) => (
                <div key={i} className="flex flex-col">
                  <span className={`text-2xl font-black ${getThemeText()}`}>{stat.value}</span>
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className={`inline-flex items-center justify-center px-8 py-4 ${getThemeBg()} text-white rounded-full font-bold text-sm md:text-base hover:opacity-90 transition-opacity shadow-lg`}>
                Contact Our Team
              </Link>
              <Link to="/registration" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-sm md:text-base hover:bg-white/20 transition-colors backdrop-blur-sm">
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Driving strategic value and operational excellence.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              {item.overviewParagraphs.map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
            <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover scale-105" />
            <div className={`absolute inset-0 bg-gradient-to-tr ${getThemeBg()} mix-blend-multiply opacity-20`}></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[24px]"></div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS TIMELINE */}
      <section className={`py-24 ${getThemeLightBg()} px-4`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Process & Engagement Model</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">A structured, proven approach to delivering consistent results.</p>
          </div>
          
          <div className="relative border-l-4 border-white md:border-slate-200 ml-4 md:ml-1/2 md:translate-x-[-2px] space-y-12">
            {item.timelineSteps.map((step: any, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-[-10px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-slate-200 z-10 flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${getThemeBg()}`}></div>
                  </div>
                  
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <span className={`inline-block px-3 py-1 rounded-full ${getThemeLightBg()} ${getThemeText()} text-xs font-bold uppercase tracking-wider mb-3`}>
                        {step.duration}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES GRID */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Key Features & Offerings</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Comprehensive solutions tailored to meet the highest enterprise standards.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {item.features.map((feature: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl ${getThemeLightBg()} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${getThemeText()}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 flex-1">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. STATS / IMPACT BANNER */}
      <section className={`py-24 ${getThemeBg()} text-white text-center px-4`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {item.impactStats.map((stat: any, i: number) => (
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

      {/* 7. FAQ ACCORDION */}
      <section className={`py-24 ${getThemeLightBg()} px-4`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {item.faqs.map((faq: any, i: number) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className="font-bold text-slate-900 text-lg pr-4">{faq.question}</span>
                    {isOpen ? (
                      <Minus className={`w-5 h-5 shrink-0 ${getThemeText()}`} />
                    ) : (
                      <Plus className="w-5 h-5 shrink-0 text-slate-400" />
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
        </div>
      </section>

      {/* 8. RELATED SERVICES */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-24 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Explore Other Services</h2>
              <Link to="/services" className={`text-sm font-bold ${getThemeText()} hover:opacity-80 transition-opacity hidden md:flex items-center gap-1`}>
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service: any) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
                  <div className="h-48 relative overflow-hidden bg-slate-100">
                    <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-2">{service.heroSubtext}</p>
                    <div className={`mt-auto flex items-center gap-2 font-bold text-sm ${getThemeText()}`}>
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. FINAL CTA */}
      <section className="bg-[#0a0e27] py-24 text-center px-4 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] ${getThemeBg()} opacity-20 blur-[120px] pointer-events-none rounded-full`}></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Ready to Partner With Us?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12">
            Let's discuss how our {item.title} can drive growth and success for your goals.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl shadow-white/5"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
