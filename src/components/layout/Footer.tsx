import { Link } from "react-router-dom";
import { contactInfo } from "../../data/companyData";

export default function Footer() {
  return (
    <footer className="bg-[#0a0e27] py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/aion-brand-v2.png" alt="AION Technology Logo" className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-bold text-white">AION Technology</h3>
            </div>
            <p className="text-sm">
              Training, Placements, and Software.
              <br/><br/>
              "Success has no destiny"
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-[#d33a69] transition-colors">Services</Link></li>
              <li><Link to="/training" className="hover:text-[#d33a69] transition-colors">Training</Link></li>
              <li><Link to="/courses" className="hover:text-[#d33a69] transition-colors">Courses</Link></li>
              <li><Link to="/placement" className="hover:text-[#d33a69] transition-colors">Placements</Link></li>
              <li><Link to="/registration" className="hover:text-[#d33a69] transition-colors">Apply Now</Link></li>
              <li><Link to="/contact" className="hover:text-[#d33a69] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Core Functions</h4>
            <ul className="space-y-2 text-sm">
              <li>Admissions Assistance</li>
              <li>Training Programs</li>
              <li>Placement Services</li>
              <li>Internship</li>
              <li>Industrial Visit</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="font-semibold text-white">Office</li>
              <li>{contactInfo.address}</li>
              <li className="mt-4">Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-[#d33a69]">{contactInfo.email}</a></li>
              <li>Phone: {contactInfo.phones.join(" / ")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} AION Technology. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
             <a href={`https://${contactInfo.website}`} className="hover:text-[#d33a69] transition-colors">{contactInfo.website}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
