import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Page header */}
      <section className="bg-[#1C1007] px-6 py-14">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">We&apos;re here for you</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Get in Touch
          </h1>
          <p className="text-[#A89968] max-w-xl mx-auto leading-relaxed">
            Questions about your order, book recommendations, or anything else — our team is happy to help.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">

          {/* Contact info */}
          <div className="md:col-span-2 space-y-5">
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: <a href="mailto:hello@crystalkeeper.com" className="text-[#C9A84C] hover:underline break-all">hello@crystalkeeper.com</a>,
              },
              {
                icon: Phone,
                title: "Call Us",
                content: <a href="tel:+2347088842059" className="text-[#C9A84C] hover:underline">+234 708 884 2059</a>,
              },
              {
                icon: MapPin,
                title: "Our Address",
                content: (
                  <p className="text-sm text-[#6B6147] leading-relaxed">
                    16 Anthony Udo Street,<br />
                    Ajao Estate,<br />
                    Oshodi-Isolo LGA, Lagos,<br />
                    Nigeria
                  </p>
                ),
              },
              {
                icon: Clock,
                title: "Support Hours",
                content: (
                  <p className="text-sm text-[#6B6147]">
                    Monday – Friday<br />
                    9:00 AM – 5:00 PM (WAT)
                  </p>
                ),
              },
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="bg-white border border-[#D5C9B5] p-6 flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-[#EEE8DC] flex items-center justify-center">
                  <Icon size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1C1007] mb-1.5 text-sm">{title}</h3>
                  {content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="md:col-span-3 bg-white border border-[#D5C9B5] p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#1C1007] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-[#1C1007] uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Amara Osei"
                    className="w-full border border-[#D5C9B5] bg-[#F9F5EE] px-4 py-3 text-sm text-[#1C1007] placeholder-[#A89968] focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[#1C1007] uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="amara@example.com"
                    className="w-full border border-[#D5C9B5] bg-[#F9F5EE] px-4 py-3 text-sm text-[#1C1007] placeholder-[#A89968] focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-[#1C1007] uppercase tracking-wider">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+234..."
                    className="w-full border border-[#D5C9B5] bg-[#F9F5EE] px-4 py-3 text-sm text-[#1C1007] placeholder-[#A89968] focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="inquiry" className="text-xs font-semibold text-[#1C1007] uppercase tracking-wider">Inquiry Type</label>
                  <select
                    id="inquiry"
                    className="w-full border border-[#D5C9B5] bg-[#F9F5EE] px-4 py-3 text-sm text-[#1C1007] focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none"
                  >
                    <option>Order Status</option>
                    <option>Returns & Refunds</option>
                    <option>Book Recommendation</option>
                    <option>Bulk / Corporate Order</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="order" className="text-xs font-semibold text-[#1C1007] uppercase tracking-wider">Order Number (If applicable)</label>
                <input
                  type="text"
                  id="order"
                  placeholder="CK-00123"
                  className="w-full border border-[#D5C9B5] bg-[#F9F5EE] px-4 py-3 text-sm text-[#1C1007] placeholder-[#A89968] focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-[#1C1007] uppercase tracking-wider">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full border border-[#D5C9B5] bg-[#F9F5EE] px-4 py-3 text-sm text-[#1C1007] placeholder-[#A89968] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#1C1007] text-[#F9F5EE] px-8 py-3.5 font-semibold text-sm hover:bg-[#2D1A0A] transition-colors"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
