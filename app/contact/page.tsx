import { Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] py-24 px-6 font-['Merriweather',serif]">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">We’d Love to Hear From You</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you need technical support downloading your latest purchase, have a question about a specific title, or are an author interested in joining the Bookxflow family, our team is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <Mail className="w-10 h-10 text-[#D90429] mb-4" />
              <h3 className="text-lg font-bold text-[#2B2D42] mb-2 font-['Montserrat',sans-serif]">Email Us</h3>
              <a href="mailto:support@bookxflowpublishing.com" className="text-[#D90429] hover:underline font-medium">support@bookxflowpublishing.com</a>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <Clock className="w-10 h-10 text-[#D90429] mb-4" />
              <h3 className="text-lg font-bold text-[#2B2D42] mb-2 font-['Montserrat',sans-serif]">Support Hours</h3>
              <p className="text-slate-600">Monday – Friday<br />9:00 AM to 5:00 PM (EST)</p>
            </div>
          </div>

          {/* Contact Form Layout */}
          <div className="md:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-6 font-['Montserrat',sans-serif]">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 font-['Montserrat',sans-serif]">Full Name</label>
                  <input type="text" id="name" className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 font-['Montserrat',sans-serif]">Email Address</label>
                  <input type="email" id="email" className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="order" className="text-sm font-bold text-slate-700 font-['Montserrat',sans-serif]">Order Number (If applicable)</label>
                  <input type="text" id="order" className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition" placeholder="#12345" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="inquiry" className="text-sm font-bold text-slate-700 font-['Montserrat',sans-serif]">Inquiry Type</label>
                  <select id="inquiry" className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition appearance-none">
                    <option>Support</option>
                    <option>General</option>
                    <option>Author Submission</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 font-['Montserrat',sans-serif]">Message</label>
                <textarea id="message" rows={5} className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="bg-[#D90429] text-white px-8 py-4 rounded-xl font-bold font-['Montserrat',sans-serif] hover:bg-[#b00320] transition flex items-center gap-2 justify-center w-full sm:w-auto shadow-md">
                <Send size={18} />
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}