import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Building2, Users, Target, BookOpen, GraduationCap, ChevronRight, CheckCircle2, Award, Star, Sparkles, TrendingUp, Medal, FileText, Briefcase, UserPlus, Factory, ArrowRight } from "lucide-react";
import { aboutUs, mainFunctions, clients } from "../data/companyData";
import { CompanyLogo } from "../components/CompanyLogo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center min-h-[100vh] sm:min-h-[110vh] overflow-hidden bg-[#2a1a5e] pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a5e] via-[#462066] to-[#d33a69] opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 border border-white/10 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm font-medium tracking-wide text-white/90">Empowering Future Tech Talent</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                AION Technology
              </h1>
              <p className="mt-6 text-xl leading-8 text-blue-100 sm:text-2xl font-light italic">
                {aboutUs.tagline}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-x-6">
                <Link
                  to="/services"
                  className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f9a826] to-[#d33a69] px-8 py-4 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/registration"
                  className="rounded-full bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 border border-white/20 w-full sm:w-auto"
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden sm:flex">
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Main Functions Section */}
      <section className="bg-slate-50 py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center justify-center"
            >
              <span className="text-xs font-bold tracking-widest text-[#d33a69] uppercase bg-[#d33a69]/10 px-4 py-1.5 rounded-full">
                What We Do
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-[#2a1a5e] sm:text-4xl"
            >
              Main Functions of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a1a5e] via-[#462066] to-[#d33a69]">Company</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-slate-600"
            >
              We provide a comprehensive ecosystem for career development and enterprise solutions.
            </motion.p>
          </div>

          <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-6 mt-16">
            {/* Static background rail */}
            <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-slate-200 lg:left-0 lg:right-0 lg:top-[31px] lg:bottom-auto lg:w-full lg:h-[2px] z-0" />
            
            {/* Animated rail - Mobile (Vertical) */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[31px] top-0 w-[2px] bg-gradient-to-b from-[#462066] via-teal-500 to-[#d33a69] z-0 lg:hidden origin-top"
            />
            
            {/* Animated rail - Desktop (Horizontal) */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="hidden lg:block absolute left-0 top-[31px] h-[2px] bg-gradient-to-r from-[#462066] via-teal-500 to-[#d33a69] z-0 origin-left"
            />

            {mainFunctions.map((fn, idx) => {
              const functionIcons = [FileText, GraduationCap, Briefcase, UserPlus, Factory];
              const functionColors = [
                { bg: 'bg-purple-100', text: 'text-purple-600', accent: 'bg-purple-500' },
                { bg: 'bg-blue-100', text: 'text-blue-600', accent: 'bg-blue-500' },
                { bg: 'bg-teal-100', text: 'text-teal-600', accent: 'bg-teal-500' },
                { bg: 'bg-orange-100', text: 'text-orange-600', accent: 'bg-orange-500' },
                { bg: 'bg-pink-100', text: 'text-pink-600', accent: 'bg-pink-500' },
              ];
              const Icon = functionIcons[idx];
              const color = functionColors[idx];

              return (
                <motion.div
                  key={fn.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 + (idx * 0.15), duration: 0.5 }}
                  className="flex flex-row lg:flex-col items-start lg:items-center relative z-10 w-full lg:flex-1 group"
                >
                  {/* Node Marker */}
                  <div className={`shrink-0 w-16 h-16 rounded-2xl ${color.bg} ${color.text} flex items-center justify-center border-4 border-white shadow-sm relative z-10 group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                    <Icon className="w-7 h-7" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                      {fn.id}
                    </div>
                  </div>
                  
                  {/* Spacer for responsive layout */}
                  <div className="w-8 lg:h-8 lg:w-full shrink-0" />
                  
                  {/* Content Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300 w-full">
                    {/* Top accent border (Desktop) / Left accent border (Mobile) */}
                    <div className={`absolute top-0 left-0 w-1 h-full lg:w-full lg:h-1 ${color.accent} transition-opacity`} />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 pr-2">{fn.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{fn.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="bg-white py-16 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h3 className="text-sm font-bold tracking-widest text-slate-500 uppercase">Our Top Recruiters</h3>
        </div>
        
        <div className="relative w-full flex overflow-hidden group py-4">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            className="flex shrink-0 items-center gap-6 pr-6 w-max"
          >
            {[...clients, ...clients].map((clientObj, idx) => {
              const colors = ['bg-blue-500', 'bg-red-500', 'bg-emerald-500', 'bg-amber-500', 'bg-purple-500', 'bg-indigo-500'];
              const color = colors[idx % colors.length];

              return (
                <div 
                  key={idx}
                  className="flex items-center gap-4 bg-slate-50/50 border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm w-64 md:w-[280px] hover:shadow-md transition-shadow cursor-default"
                >
                  <CompanyLogo clientObj={clientObj} color={color} />
                  <span className="text-slate-700 text-xs md:text-sm font-bold tracking-wider uppercase text-left whitespace-normal break-words leading-tight">
                    {clientObj.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
          
          {/* Right Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* Awards & Rankings Section */}
      <section className="bg-[#0b1120] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] to-[#131b2f] z-0"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/50 bg-slate-800/30 text-[10px] sm:text-xs font-semibold text-slate-300 uppercase tracking-widest mb-6"
            >
              <Award className="w-3.5 h-3.5 text-amber-500" /> Recent Recognitions
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Awards & <span className="text-[#3b82f6]">Rankings</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              As a rapidly emerging institution, we are already making waves in the educational
              <br className="hidden sm:block" /> sector with our innovative approach to tech and management education.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-[#131b2f] rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl border border-amber-500/30 flex items-center justify-center text-amber-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Promising Tech Institute</h3>
                <p className="text-sm text-slate-400 font-medium">State Education Board</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-[#131b2f] rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl border border-blue-500/30 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Excellence in Infrastructure</h3>
                <p className="text-sm text-slate-400 font-medium">Campus Design Review</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative bg-[#131b2f] rounded-2xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Upcoming Innovation Hub</h3>
                <p className="text-sm text-slate-400 font-medium">Local Tech Community</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative bg-[#131b2f] rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl border border-purple-500/30 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Medal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Student-Centric Campus</h3>
                <p className="text-sm text-slate-400 font-medium">Education Forum</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#2a1a5e] sm:text-4xl mb-6">About Us</h2>
              <div className="space-y-4 text-lg text-slate-600">
                {aboutUs.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 text-[#d33a69] font-semibold">
                  <CheckCircle2 className="h-5 w-5" /> Training
                </div>
                <div className="flex items-center gap-2 text-[#d33a69] font-semibold">
                  <CheckCircle2 className="h-5 w-5" /> Placements
                </div>
                <div className="flex items-center gap-2 text-[#d33a69] font-semibold">
                  <CheckCircle2 className="h-5 w-5" /> Software
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-8"
            >
              <div className="rounded-2xl bg-slate-50 p-8 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Target className="w-24 h-24" />
                </div>
                <h3 className="text-xl font-bold text-[#2a1a5e] mb-3 flex items-center gap-3">
                  <Target className="text-[#d33a69]" /> Vision
                </h3>
                <p className="text-slate-600 leading-relaxed">{aboutUs.vision}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-8 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <GraduationCap className="w-24 h-24" />
                </div>
                <h3 className="text-xl font-bold text-[#2a1a5e] mb-3 flex items-center gap-3">
                  <GraduationCap className="text-[#d33a69]" /> Mission
                </h3>
                <p className="text-slate-600 leading-relaxed">{aboutUs.mission}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-[#2a1a5e]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d33a69] to-[#2a1a5e] opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-10">
            Join our expert-led training programs and gain access to premium placement opportunities in top tech companies.
          </p>
          <Link
            to="/registration"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-bold text-[#2a1a5e] shadow-lg hover:bg-gray-50 transition-colors"
          >
            Apply Now <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
