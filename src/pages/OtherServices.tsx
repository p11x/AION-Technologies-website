import { motion } from "motion/react";
import { Plus, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function OtherServices() {
  const benefits = [
    "Custom enterprise application development",
    "IT infrastructure consulting",
    "Digital transformation strategy",
    "Corporate upskilling workshops",
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="relative bg-[#0a0e27] pt-32 pb-32 px-4 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Other Services" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#0a0e27]/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Plus className="w-16 h-16 text-rose-400 mb-6" />
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Other Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            We provide comprehensive mobility, e-integration services, and custom enterprise solutions for modern businesses looking to scale.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-4 text-sm font-bold text-white hover:bg-rose-600 transition-colors">
            Request a Consultation
          </Link>
        </div>
      </section>

      <section className="py-24 px-4 max-w-5xl mx-auto text-left">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Empowering businesses to scale efficiently.</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Beyond education and placement, AION Technology operates as a full-fledged IT consulting partner. We assist startups and established enterprises in modernizing their tech stack and training their workforce for the future.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rose-500" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" alt="Consulting" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
