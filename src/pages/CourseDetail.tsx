import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Briefcase, Clock, GraduationCap, CheckCircle2, ChevronRight } from "lucide-react";
import { coursesData } from "../data/coursesData";

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const course = coursesData.find(c => c.slug === slug);
  
  useEffect(() => {
    if (!course) {
      navigate('/courses', { replace: true });
    }
  }, [course, navigate]);
  
  if (!course) return null;

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      {/* A. HERO BANNER */}
      <section className="relative bg-[#0a0e27] pt-24 pb-32 text-center px-4 overflow-hidden h-[450px] md:h-[550px] flex items-end justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/80 via-[#0a0e27]/50 to-[#0a0e27]"></div>
        </div>
        
        <div className="absolute top-24 left-4 md:left-8 lg:left-12 z-20">
          <Link to="/courses" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start text-left pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <BookOpen className="w-4 h-4 text-purple-400" /> {course.category}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl"
          >
            {course.title}
          </motion.h1>
        </div>
      </section>

      {/* B. MAIN CONTENT */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[65%] space-y-8">
            
            {/* Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {course.overviewText}
              </p>
            </motion.div>

            {/* Curriculum Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Curriculum Highlights</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.curriculumHighlights.map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-semibold text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career Outcomes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Career Outcomes</h2>
              </div>
              
              <div className="divide-y divide-slate-100 border-y border-slate-100">
                {course.careerOutcomes.map((role, i) => (
                  <div key={i} className="flex items-center justify-between py-4 group">
                    <span className="text-slate-700 font-semibold group-hover:text-blue-600 transition-colors">{role}</span>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">Program Snapshot</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 border border-slate-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Duration</div>
                    <div className="text-slate-900 font-bold">{course.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 border border-slate-100">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Eligibility</div>
                    <div className="text-slate-900 font-bold text-sm leading-relaxed">{course.eligibility}</div>
                  </div>
                </div>
              </div>
              
              <div className="my-8 h-px w-full bg-slate-100"></div>
              
              <Link 
                to="/registration"
                className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                Apply for Admission
              </Link>
              <p className="text-center text-sm text-slate-500 mt-4">
                Applications are open for the upcoming batch.
              </p>
            </motion.div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
