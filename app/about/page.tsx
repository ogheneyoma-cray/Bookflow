import { Heart, Lightbulb, Scale } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] py-24 px-6 font-['Merriweather',serif]">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Story Section */}
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D42] mb-8 font-['Montserrat',sans-serif] leading-tight">
            Our Story: Empowering Authors, Inspiring Readers
          </h1>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left">
            <p>
              Sellisafe was founded with a singular vision: to break down the barriers of traditional publishing and connect brilliant authors directly with avid readers. In a fast-paced world, we recognized the need for a digital-first publisher that cared as much about the reading experience—typography, formatting, and cross-device compatibility—as it did about the words themselves.
            </p>
            <p>
              Today, Sellisafe is a thriving hub for diverse voices. We handle the technical intricacies of digital publishing so our authors can focus entirely on their craft. For our readers, this means a constantly expanding, premium library of thought-provoking and entertaining content. We are proud to be a 100% digital, eco-friendly company, celebrating the sustainable nature of screen-based reading while delivering uncompromised quality.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] text-center font-['Montserrat',sans-serif]">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition">
              <Lightbulb className="w-12 h-12 text-[#D90429] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',sans-serif]">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">We continually adapt to the latest e-reading technologies to provide the most fluid user experience.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition">
              <Scale className="w-12 h-12 text-[#D90429] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',sans-serif]">Fairness</h3>
              <p className="text-slate-600 leading-relaxed">We believe in transparent partnerships and fair royalties for all our authors.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition">
              <Heart className="w-12 h-12 text-[#D90429] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',sans-serif]">Passion</h3>
              <p className="text-slate-600 leading-relaxed">We are book lovers first. Our dedication to the written word drives every decision we make.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
