import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Zap, GraduationCap, Code2, Briefcase, Users, Building, Plus, ArrowRight, Rocket } from "lucide-react";

export default function Services() {
  const blocks = [
    {
      id: "admissions",
      slug: "admissions",
      title: "Admissions Assistance",
      desc: "We guide aspiring students through the admissions process, providing support and insights to help them secure placements in top-tier institutes.",
      tags: ["Guidance", "Counseling", "University Selection", "Application Support"],
      icon: GraduationCap,
      colorTheme: "rose", 
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop",
      link: "/services/admissions",
      linkText: "Learn About Admissions"
    },
    {
      id: "training",
      slug: "training",
      title: "Training Programs",
      desc: "We offer customized training programs designed to equip individuals with the skills and knowledge needed to excel in their chosen fields.",
      tags: ["Technical Skills", "Soft Skills", "Corporate Training", "Workshops"],
      icon: Code2,
      colorTheme: "purple",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
      link: "/training",
      linkText: "Explore Training"
    },
    {
      id: "placements",
      slug: "placements",
      title: "Placement Services",
      desc: "Our extensive network of industry connections allows us to facilitate meaningful placements, connecting qualified candidates with reputable organizations.",
      tags: ["Job Guarantee", "Interview Prep", "Resume Building", "Career Fairs"],
      icon: Briefcase,
      colorTheme: "blue",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2874&auto=format&fit=crop",
      link: "/placement",
      linkText: "View Placements"
    },
    {
      id: "internships",
      slug: "internships",
      title: "Internship Programs",
      desc: "Internships provide candidates with invaluable real-world experience, skill development, and networking opportunities.",
      tags: ["Summer Internships", "Live Projects", "Mentorship", "Industry Experience"],
      icon: Users,
      colorTheme: "teal",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop",
      link: "/services/internships",
      linkText: "Explore Internships"
    },
    {
      id: "industrial-visits",
      slug: "industrial-visits",
      title: "Industrial Visits",
      desc: "Industrial visits provide students with hands-on exposure to practical working methods and employment practices bridging the gap.",
      tags: ["Factory Tours", "Tech Parks", "On-Site Learning", "Corporate Exposure"],
      icon: Building,
      colorTheme: "orange",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
      link: "/services/industrial-visits",
      linkText: "Discover Industrial Visits"
    },
    {
      id: "others",
      slug: "others",
      title: "Other Services",
      desc: "We provide comprehensive mobility, e-integration services, and custom enterprise solutions for modern businesses looking to scale.",
      tags: ["Consulting", "Workshops", "Custom Solutions", "Enterprise Services"],
      icon: Plus,
      colorTheme: "rose",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "/services/others",
      linkText: "View Other Services"
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
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
            alt="Business enterprise" 
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
            <Zap className="w-4 h-4 text-amber-400" /> Enterprise Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Comprehensive Services <br className="hidden md:block"/>
            <span className="text-[#d33a69] bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-[#d33a69]">For Your Growth</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We provide an end-to-end ecosystem for career development and enterprise solutions, tailored to individual and corporate success.
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
          <div className="text-sm font-bold tracking-widest text-[#d33a69] uppercase mb-4">Core Functions</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Everything we do</h2>
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
                
                <Link to={block.link} className="group inline-flex items-center gap-2 text-[#d33a69] font-bold text-sm hover:text-pink-700 transition-colors">
                  {block.linkText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="bg-[#0a0e27] py-24 text-center px-4 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center text-[#d33a69] mb-8 border border-pink-500/30">
            <Rocket className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Partner With Us</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12">
            Whether you are looking to build your career or build your team, AION Technology is your trusted partner.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#d33a69] text-white rounded-full font-bold text-lg hover:bg-pink-600 transition-colors shadow-xl shadow-pink-500/20"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
