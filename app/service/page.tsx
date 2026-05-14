import { BookOpen, Download, Smartphone, Layers } from "lucide-react";

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] py-24 px-6 font-['Merriweather',serif]">
      <div className="max-w-5xl mx-auto space-y-16">

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Sellisafe provides premium digital publishing services for both readers and authors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <BookOpen className="w-12 h-12 text-[#D90429] mb-4" />
            <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',sans-serif]">Premium Ebook Store</h3>
            <p className="text-slate-600 leading-relaxed">Browse and purchase from a curated selection of fiction, business, self-help, and educational titles in high-quality digital formats.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <Download className="w-12 h-12 text-[#D90429] mb-4" />
            <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',sans-serif]">Instant Download</h3>
            <p className="text-slate-600 leading-relaxed">Receive your ebook instantly after purchase — no waiting, no shipping. Available in EPUB and PDF formats compatible with all devices.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <Smartphone className="w-12 h-12 text-[#D90429] mb-4" />
            <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',sans-serif]">Multi-Device Access</h3>
            <p className="text-slate-600 leading-relaxed">Your purchased ebooks work seamlessly on Kindle, Apple Books, Google Play Books, and any standard e-reader or smartphone app.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <Layers className="w-12 h-12 text-[#D90429] mb-4" />
            <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',sans-serif]">Author Publishing</h3>
            <p className="text-slate-600 leading-relaxed">Are you an author? Submit your manuscript to be part of the Sellisafe catalog. We handle formatting, distribution, and payments.</p>
          </div>
        </div>

      </div>
    </main>
  );
}
