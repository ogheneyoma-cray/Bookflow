import { BookOpen, Truck, Package, Users } from "lucide-react";

export default function ServicePage() {
  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <section className="bg-[#1C1007] px-6 py-14">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Our Services
          </h1>
          <p className="text-[#A89968] max-w-xl mx-auto">
            From individual purchases to bulk corporate orders, Crystalkeeper serves every type of reader.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Curated Physical Bookstore",
              desc: "Browse our hand-selected catalog of over 100 titles across fiction, business, self-help, science, and more. Every book has been personally reviewed before it earns a place in our store.",
            },
            {
              icon: Truck,
              title: "Nationwide Delivery",
              desc: "We ship physical books to every state in Nigeria. Orders from Lagos arrive in 1–2 business days; nationwide delivery takes 3–5 business days. Free shipping on orders over $35.",
            },
            {
              icon: Package,
              title: "Gift Wrapping",
              desc: "Sending books as a gift? We offer premium gift wrapping with a personalised message card. Select this option at checkout — perfect for birthdays, graduations, and celebrations.",
            },
            {
              icon: Users,
              title: "Bulk & Corporate Orders",
              desc: "Ordering books for your team, school, or event? We offer discounted pricing for bulk orders of 10+ copies of the same title. Contact us at hello@crystalkeeper.com for a quote.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border border-[#D5C9B5] p-8">
              <div className="w-12 h-12 bg-[#EEE8DC] flex items-center justify-center mb-5">
                <Icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1007] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {title}
              </h3>
              <p className="text-[#6B6147] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
