import { motion } from "motion/react";
import { Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Internships() {
  const benefits = [
    "Work on live enterprise projects",
    "Mentorship from industry experts",
    "Gain practical hands-on experience",
    "Pre-placement offers for top performers",
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="relative bg-[#0a0e27] pt-32 pb-32 px-4 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" alt="Internships" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#0a0e27]/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Users className="w-16 h-16 text-teal-400 mb-6" />
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Internship Programs</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Internships provide candidates with invaluable real-world experience, skill development, and networking opportunities.
          </p>
          <Link to="/registration" className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-8 py-4 text-sm font-bold text-white hover:bg-teal-600 transition-colors">
            Apply for Internship
          </Link>
        </div>
      </section>

      <section className="py-24 px-4 max-w-5xl mx-auto text-left">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Bridge the gap between academia and industry.</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our internship programs are structured to simulate a real-world corporate environment. You will work alongside experienced professionals on live projects, gaining the practical skills required to succeed in today's competitive job market.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2968&auto=format&fit=crop" alt="Working together" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
