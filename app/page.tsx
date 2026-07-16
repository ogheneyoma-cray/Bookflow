import Link from "next/link";
import {
  BookOpen,
  Smartphone,
  Zap,
  Layers,
  CheckCircle,
  Search,
  ShoppingCart,
  Download,
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] font-['Merriweather',_serif]">
      {/* Section 1: Hero */}
      <section className="bg-[#2B2D42] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-['Montserrat',_sans-serif]">
            Stories That <span className="text-[#D90429]">Flow</span>, Ideas That Spark.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to Sellisafe. Instantly download premium ebooks across fiction, business, and personal development. Your next great read is just a click away, beautifully formatted for any device.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/shop" className="px-8 py-4 bg-[#D90429] text-white font-bold rounded-full hover:bg-[#B90424] transition w-full sm:w-auto text-lg flex items-center justify-center gap-2 font-['Montserrat',_sans-serif]">
              Explore the Shop
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] font-['Montserrat',_sans-serif]">Welcome to the Future of Reading</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Sellisafe, we believe that incredible stories and transformative ideas should be accessible instantly. We partner with visionary authors worldwide to bring you high-quality, professionally edited, and beautifully formatted ebooks. Whether you are reading on a Kindle, an iPad, or your smartphone, our digital files guarantee a seamless and immersive reading experience without the wait.
          </p>
        </div>
      </section>

      {/* Section 3: Services / Our Genres */}
      <section className="py-24 px-6 bg-[#EDF2F4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] font-['Montserrat',_sans-serif]">Discover Your Next Obsession</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <BookOpen className="w-12 h-12 text-[#D90429] mb-6" />
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',_sans-serif]">Fiction & Thrillers</h3>
              <p className="text-slate-600">Lose yourself in gripping mysteries, sweeping romances, and epic world-building.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <Layers className="w-12 h-12 text-[#D90429] mb-6" />
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',_sans-serif]">Business & Finance</h3>
              <p className="text-slate-600">Accelerate your career and scale your business with insights from industry leaders.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <CheckCircle className="w-12 h-12 text-[#D90429] mb-6" />
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',_sans-serif]">Self-Help & Wellness</h3>
              <p className="text-slate-600">Invest in your personal growth with actionable, science-backed guides.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <Smartphone className="w-12 h-12 text-[#D90429] mb-6" />
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-['Montserrat',_sans-serif]">Tech & Education</h3>
              <p className="text-slate-600">Upgrade your skills with comprehensive tutorials and crash courses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] font-['Montserrat',_sans-serif]">The Sellisafe Advantage</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#EDF2F4]">
              <div className="shrink-0">
                <Zap className="w-8 h-8 text-[#D90429]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2B2D42] mb-2 font-['Montserrat',_sans-serif]">Instant Gratification</h3>
                <p className="text-slate-600">No shipping delays. Buy it, download it, and start reading in seconds.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#EDF2F4]">
              <div className="shrink-0">
                <Layers className="w-8 h-8 text-[#D90429]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2B2D42] mb-2 font-['Montserrat',_sans-serif]">Universal Compatibility</h3>
                <p className="text-slate-600">All our ebooks are delivered in standard formats (EPUB, PDF) ensuring a perfect fit for any e-reader or mobile device.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#EDF2F4]">
              <div className="shrink-0">
                <CheckCircle className="w-8 h-8 text-[#D90429]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2B2D42] mb-2 font-['Montserrat',_sans-serif]">Curated Excellence</h3>
                <p className="text-slate-600">We champion quality over quantity. Every book in our catalog has been rigorously vetted for exceptional writing and professional formatting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Process */}
      <section className="py-24 px-6 bg-[#2B2D42] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat',_sans-serif]">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#D90429]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D90429]">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat',_sans-serif]">1. Explore</h3>
              <p className="text-slate-400">Explore our curated categories and read free sample chapters.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#D90429]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D90429]">
                <ShoppingCart size={32} />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat',_sans-serif]">2. Purchase</h3>
              <p className="text-slate-400">Use our secure, lightning-fast checkout process.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#D90429]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D90429]">
                <Download size={32} />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat',_sans-serif]">3. Download</h3>
              <p className="text-slate-400">Receive your instant download link immediately on-screen and via email.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#D90429]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D90429]">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat',_sans-serif]">4. Immerse</h3>
              <p className="text-slate-400">Open the file in your favorite reading app and let the story flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-24 px-6 bg-[#2B2D42]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-['Montserrat',_sans-serif]">Ready to Turn the Digital Page?</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Join our reader community today and get exclusive access to our growing library of premium ebooks.
          </p>
          <div className="pt-4">
            <Link href="/shop" className="inline-block px-10 py-5 bg-[#D90429] text-white font-bold rounded-full hover:bg-[#B90424] transition text-lg shadow-lg font-['Montserrat',_sans-serif]">
              Shop Ebooks Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
