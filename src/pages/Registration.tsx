import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Registration() {
  const { register, handleSubmit, formState: { isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center max-w-lg">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#2a1a5e] mb-4">Registration Submitted</h2>
          <p className="text-slate-600">Thank you for registering with AION Technology. Our team will review your application and get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-r from-[#2a1a5e] to-[#d33a69] p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">Registration Form</h1>
            <p className="text-blue-100">Training, Placement and Software</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 sm:p-12 space-y-12">
            {/* Candidate Information */}
            <div>
              <h2 className="text-xl font-bold text-white bg-[#2a1a5e] py-2 px-4 rounded mb-6 uppercase tracking-wider text-sm">Candidate Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input {...register("fullName", { required: true })} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
                  <input type="date" {...register("dob")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Gender</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2"><input type="radio" value="Male" {...register("gender")} className="text-[#d33a69] focus:ring-[#d33a69]" /> Male</label>
                    <label className="flex items-center gap-2"><input type="radio" value="Female" {...register("gender")} className="text-[#d33a69] focus:ring-[#d33a69]" /> Female</label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Home Address</label>
                  <input {...register("address")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                  <input {...register("city")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Zip Code</label>
                  <input {...register("zipCode")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input {...register("phone")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" {...register("email")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
              </div>
            </div>

            {/* Qualification */}
            <div>
              <h2 className="text-xl font-bold text-white bg-[#2a1a5e] py-2 px-4 rounded mb-6 uppercase tracking-wider text-sm">Qualification</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Highest Qualification</label>
                  <input {...register("qualification")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Branch</label>
                  <input {...register("branch")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">University/College</label>
                  <input {...register("university")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Graduation Year</label>
                  <input {...register("gradYear")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
              </div>
            </div>

            {/* Preferred Role & Salary */}
            <div>
              <h2 className="text-xl font-bold text-white bg-[#2a1a5e] py-2 px-4 rounded mb-6 uppercase tracking-wider text-sm">Preferred Role & Salary Expectations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2"><input type="radio" value="Fresher" {...register("experienceType")} className="text-[#d33a69] focus:ring-[#d33a69]" /> Fresher</label>
                    <label className="flex items-center gap-2"><input type="radio" value="Experienced" {...register("experienceType")} className="text-[#d33a69] focus:ring-[#d33a69]" /> Experienced</label>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2"><input type="radio" value="IT" {...register("industry")} className="text-[#d33a69] focus:ring-[#d33a69]" /> IT</label>
                    <label className="flex items-center gap-2"><input type="radio" value="NON-IT" {...register("industry")} className="text-[#d33a69] focus:ring-[#d33a69]" /> NON-IT</label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Skills</label>
                  <input {...register("skills")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Roles</label>
                  <input {...register("preferredRoles")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Expected CTC (in Lakhs)</label>
                  <input {...register("expectedCtc")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Work Mode</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2"><input type="radio" value="On-Site" {...register("workMode")} className="text-[#d33a69] focus:ring-[#d33a69]" /> On-Site</label>
                    <label className="flex items-center gap-2"><input type="radio" value="Hybrid" {...register("workMode")} className="text-[#d33a69] focus:ring-[#d33a69]" /> Hybrid</label>
                    <label className="flex items-center gap-2"><input type="radio" value="Remote" {...register("workMode")} className="text-[#d33a69] focus:ring-[#d33a69]" /> Remote</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xl font-bold text-white bg-[#2a1a5e] py-2 px-4 rounded mb-6 uppercase tracking-wider text-sm">Work Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Total Years of Experience</label>
                  <input {...register("totalExperience")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Job Title</label>
                  <input {...register("lastJobTitle")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Employer</label>
                  <input {...register("lastEmployer")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Previous Employer(s)</label>
                  <input {...register("previousEmployers")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">References (Optional)</label>
                  <input {...register("references")} className="w-full rounded-md border-slate-300 shadow-sm focus:border-[#d33a69] focus:ring-[#d33a69] p-2 border" />
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-[#2a1a5e] mb-4">Terms and Conditions</h3>
              <div className="text-xs text-slate-600 space-y-2 h-40 overflow-y-auto pr-4">
                <p><strong>Correct Information Obligation:</strong> Candidates are responsible for providing accurate and current information, including resume details, references, and educational qualifications. Providing false or outdated information may result in the discontinuation of our services.</p>
                <p><strong>Employment Security Guarantee:</strong> In the event that a candidate experiences job loss within the one-year assurance period through no fault of their own, Aion Technology will proactively engage in securing a new employment opportunity for the candidate at no extra charge.</p>
                <p><strong>Confidentiality Agreement:</strong> Both parties agree to maintain confidentiality regarding all communications and information shared during the placement process and post-placement support process.</p>
                <p><strong>Non-Refundable Fees:</strong> All payments made to Aion Technology for services, including but not limited to training, placement assistance, and job guarantee programs, are strictly non-refundable. Additionally, candidates must understand that if there are any delays in job placement, they are required to wait until a suitable opportunity is secured, as refunds will not be issued under such circumstances.</p>
                <p><strong>Placement Fees:</strong> The financial obligations associated with job placement services, including a specified amount that will be charged for securing a placement and certain amount will be charged as an advance.</p>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <input type="checkbox" required className="mt-1 text-[#d33a69] focus:ring-[#d33a69]" />
                <label className="text-sm text-slate-700">I have read and agree to the Terms and Conditions and confirm that the information provided is accurate.</label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-8 bg-gradient-to-r from-[#2a1a5e] to-[#d33a69] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
