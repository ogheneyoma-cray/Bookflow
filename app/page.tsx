import Link from "next/link";
import { ArrowRight, BookOpen, Package, Truck, Star, ShieldCheck } from "lucide-react";

const featured = [
  { title: "The Midnight Archive", author: "Elena Marchetti", genre: "Mystery", id: "CK-FIC-001" },
  { title: "Building Empires from Zero", author: "Kwame Asante", genre: "Business", id: "CK-BUS-001" },
  { title: "The Glass Kingdom", author: "Tobias Vance", genre: "Fantasy", id: "CK-SCI-002" },
];

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Hero */}
      <section className="bg-[#F9F5EE] border-b border-[#D5C9B5]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-7">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] border border-[#C9A84C] px-3 py-1 rounded-sm">
              Premium Physical Books
            </span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1C1007] leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Words that<br />
              <em className="not-italic text-[#C9A84C]">live</em> on<br />
              your shelf.
            </h1>
            <p className="text-lg text-[#6B6147] leading-relaxed max-w-md">
              Crystalkeeper brings you a hand-selected collection of hardcovers and paperbacks — fiction, business, wellness, and more — delivered to your doorstep across Nigeria.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#1C1007] text-[#F9F5EE] px-7 py-3.5 font-semibold text-sm hover:bg-[#2D1A0A] transition-colors"
              >
                Browse the Collection
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#D5C9B5] text-[#6B6147] px-7 py-3.5 font-semibold text-sm hover:border-[#1C1007] hover:text-[#1C1007] transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Decorative book stack visual */}
          <div className="hidden md:flex flex-col items-center justify-center gap-0">
            <div className="relative w-64">
              {[
                { h: "h-14", bg: "bg-[#1C1007]", w: "w-64", label: "The Midnight Archive" },
                { h: "h-12", bg: "bg-[#C9A84C]", w: "w-56", label: "Building Empires" },
                { h: "h-16", bg: "bg-[#2D5A3D]", w: "w-60", label: "The Glass Kingdom" },
                { h: "h-11", bg: "bg-[#6B6147]", w: "w-52", label: "The Quiet Mind" },
                { h: "h-13", bg: "bg-[#A87D30]", w: "w-58", label: "Chronicles of the Deep" },
              ].map((book, i) => (
                <div
                  key={i}
                  className={`${book.h} ${book.bg} ${book.w} mx-auto flex items-center pl-4 shadow-md`}
                  style={{ marginBottom: "2px" }}
                >
                  <span className="text-white/60 text-xs font-medium truncate">{book.label}</span>
                </div>
              ))}
              <div className="w-72 h-3 bg-[#D5C9B5] mx-auto -mx-4 shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-b border-[#D5C9B5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: BookOpen, step: "01", title: "Browse & Choose", desc: "Explore our curated catalog of handpicked titles across every genre." },
              { icon: Package, step: "02", title: "Place Your Order", desc: "Select your format, add to cart, and check out securely." },
              { icon: Truck, step: "03", title: "We Deliver", desc: "Your books are packed with care and shipped to your door across Nigeria." },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="flex flex-col items-center gap-4 px-4">
                <div className="w-14 h-14 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                  <Icon size={22} className="text-[#C9A84C]" />
                </div>
                <span className="text-xs font-bold tracking-widest text-[#C9A84C]">STEP {step}</span>
                <h3 className="text-lg font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</h3>
                <p className="text-sm text-[#6B6147] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured books */}
      <section className="bg-[#F9F5EE] border-b border-[#D5C9B5]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-2">Hand-picked for you</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Featured Titles
              </h2>
            </div>
            <Link href="/shop" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B6147] hover:text-[#1C1007] transition-colors">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((book) => (
              <Link href={`/shop/${book.id}`} key={book.id} className="group block bg-white border border-[#D5C9B5] hover:border-[#C9A84C] transition-colors">
                <div className="bg-[#EEE8DC] h-52 flex flex-col items-center justify-center px-6 text-center border-b border-[#D5C9B5]">
                  <BookOpen size={32} className="text-[#C9A84C] mb-3 opacity-60" />
                  <p className="text-xs text-[#6B6147] uppercase tracking-wider mb-1">{book.genre}</p>
                  <h3 className="font-bold text-[#1C1007] leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {book.title}
                  </h3>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm text-[#6B6147]">by {book.author}</span>
                  <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider group-hover:text-[#1C1007] transition-colors">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/shop" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B6147] hover:text-[#1C1007] transition-colors">
              View all books <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="bg-[#1C1007] border-b border-[#2D1A0A]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-2">Something for everyone</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Browse by Genre
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Fiction & Mystery",
              "Business & Career",
              "Self-Help & Wellness",
              "Sci-Fi & Fantasy",
              "Romance & Historical",
              "Technology & Education",
              "Food & Lifestyle",
              "Finance & Investing",
            ].map((genre) => (
              <Link
                href="/shop"
                key={genre}
                className="border border-white/15 hover:border-[#C9A84C] px-5 py-4 text-sm font-medium text-[#D5C9B5] hover:text-[#C9A84C] transition-colors text-center"
              >
                {genre}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Crystalkeeper */}
      <section className="bg-white border-b border-[#D5C9B5]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-2">Why choose us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              The Crystalkeeper Promise
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Curated Quality", desc: "Every title in our catalog is personally reviewed. We stock only books worth your shelf space." },
              { icon: Truck, title: "Reliable Delivery", desc: "Fast, trackable shipping across Lagos and nationwide. Carefully packed so your books arrive in perfect condition." },
              { icon: ShieldCheck, title: "Hassle-free Returns", desc: "Not satisfied? Return undamaged books within 14 days of delivery, no questions asked." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-6 bg-[#F9F5EE] border border-[#D5C9B5]">
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-[#C9A84C]/15 flex items-center justify-center">
                    <Icon size={20} className="text-[#C9A84C]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1C1007] mb-1.5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</h3>
                  <p className="text-sm text-[#6B6147] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EEE8DC]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Ready to build your collection?
          </h2>
          <p className="text-[#6B6147] text-lg max-w-xl mx-auto leading-relaxed">
            Over a hundred titles waiting to be discovered. Order today and we&apos;ll deliver straight to your door.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1C1007] px-10 py-4 font-bold text-sm hover:bg-[#B8943D] transition-colors"
            >
              Shop Books Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
