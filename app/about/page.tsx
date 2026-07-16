import { BookOpen, Package, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Page header */}
      <section className="bg-[#1C1007] px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Bringing Great Books<br />to Every Doorstep
          </h1>
          <p className="text-[#A89968] text-lg max-w-2xl mx-auto leading-relaxed">
            Crystalkeeper was founded on the belief that everyone deserves access to great physical books — beautifully made, thoughtfully chosen, and reliably delivered.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white border-b border-[#D5C9B5]">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-8 text-[#6B6147] leading-relaxed">
          <p className="text-lg">
            Founded in Lagos, Crystalkeeper started as a small lending library in the Ajao Estate neighbourhood. As word spread and shelves overflowed, we realised the demand for quality books far outstripped what any local shelf could hold. In 2022, we launched our online store — making our curated catalog available to readers across Nigeria and beyond.
          </p>
          <p>
            We&apos;re picky by design. Every title in our catalog earns its place after careful review. We don&apos;t stock everything; we stock the right things. Our buyers comb through new releases, rediscover overlooked classics, and seek out voices that deserve wider audiences — so you don&apos;t have to.
          </p>
          <p>
            Today, Crystalkeeper ships hundreds of orders a month from our Lagos warehouse. Every book is quality-checked, carefully wrapped, and sent out with a personal touch. We&apos;re proud to be a Nigerian bookstore that holds its own against any in the world.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F9F5EE] border-b border-[#D5C9B5]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-2">What drives us</p>
            <h2 className="text-3xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Curation Above All",
                desc: "We read widely so you can choose confidently. Every book we list has been evaluated for quality, relevance, and lasting value.",
              },
              {
                icon: Package,
                title: "Delivered with Care",
                desc: "A book is a physical object that deserves respect. We pack every order as if we were sending it to our own bookshelves.",
              },
              {
                icon: Users,
                title: "Built for Readers",
                desc: "Our team are avid readers first and retailers second. We give honest recommendations because we genuinely love the books we carry.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#D5C9B5] p-8">
                <div className="w-12 h-12 bg-[#EEE8DC] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-lg font-bold text-[#1C1007] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {title}
                </h3>
                <p className="text-sm text-[#6B6147] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team snippet */}
      <section className="bg-[#EEE8DC]">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Based in Lagos, Shipping Nationwide
          </h2>
          <p className="text-[#6B6147] max-w-xl mx-auto leading-relaxed">
            Our team operates from our warehouse at 16 Anthony Udo Street, Ajao Estate, Oshodi-Isolo LGA, Lagos. Reach us at{" "}
            <a href="mailto:hello@crystalkeeper.com" className="text-[#C9A84C] hover:underline">hello@crystalkeeper.com</a>
            {" "}or call <a href="tel:+2349076759030" className="text-[#C9A84C] hover:underline">+234 907 675 9030</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
