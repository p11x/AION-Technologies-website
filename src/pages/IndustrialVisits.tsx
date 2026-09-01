import { motion } from "motion/react";
import { Building, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustrialVisits() {
  const benefits = [
    "Behind-the-scenes access to top firms",
    "Interactive Q&A with industry leaders",
    "Understanding corporate workflows",
    "Networking with domain experts",
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="relative bg-[#0a0e27] pt-32 pb-32 px-4 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop" alt="Industrial Visits" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#0a0e27]/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Building className="w-16 h-16 text-orange-400 mb-6" />
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Industrial Visits</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Industrial visits provide students with hands-on exposure to practical working methods and employment practices bridging the gap.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-white hover:bg-orange-600 transition-colors">
            Inquire About Visits
          </Link>
        </div>
      </section>

      <section className="py-24 px-4 max-w-5xl mx-auto text-left">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Experience the corporate world firsthand.</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We organize curated visits to leading IT parks, factories, and corporate campuses. These experiences demystify the corporate environment and provide students with a clear understanding of enterprise-scale operations and workplace culture.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop" alt="Modern office" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
