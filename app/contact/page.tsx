import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            We’re Here to Help You Succeed.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a question about a course? Need technical support with the video player? Or perhaps you&apos;re interested in purchasing enterprise licenses for your team? Our dedicated student support team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Mail className="w-8 h-8 text-[#1E3A8A] shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600">support@edxflow.com</p>
                <p className="text-sm text-slate-400 mt-1">(Average response time: under 4 hours)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Phone className="w-8 h-8 text-[#1E3A8A] shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                <p className="text-slate-600">1-800-EDX-FLOW</p>
                <p className="text-sm text-slate-400 mt-1">(Mon-Fri, 9 AM - 5 PM EST)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <MapPin className="w-8 h-8 text-[#1E3A8A] shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                <p className="text-slate-600">404 Digital Way, Learning District<br/>[City, State, Zip]</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent" placeholder="How can we help?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent" placeholder="Write your message here..."></textarea>
              </div>
              
              <button type="button" className="w-full px-8 py-4 bg-[#F59E0B] text-slate-900 font-bold rounded-xl hover:bg-[#d97706] transition">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}