export default function TermsAndConditionsPage() {
  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <section className="bg-[#1C1007] px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Terms and Conditions
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white border border-[#D5C9B5] p-8 md:p-12 space-y-10 text-[#6B6147] leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>1. Overview</h2>
            <p>By placing an order with Crystalkeeper, you agree to be bound by these Terms and Conditions. Please read them carefully before completing your purchase. If you do not agree, you should not place an order.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2. Products</h2>
            <p>All books listed on the Crystalkeeper website are physical items (hardcover or paperback). Product descriptions, page counts, and ISBNs are provided in good faith. Colours and cover designs may vary slightly between print runs due to the nature of physical publishing.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>3. Pricing and Payment</h2>
            <p>All prices are listed in USD and may be displayed in NGN based on your selected currency. Prices are subject to change without notice, but the price at the time of your order will be honoured. Payment is processed securely by our third-party payment partner.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>4. Shipping and Delivery</h2>
            <p>Estimated delivery times are provided at checkout but are not guaranteed. Crystalkeeper is not responsible for delays caused by courier services, customs, or events outside our control. Risk of loss passes to you upon handover to the courier.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>5. Intellectual Property</h2>
            <p>The books sold by Crystalkeeper are protected by copyright law. You acquire a personal copy for reading only. Reproducing, scanning, reselling, or distributing any book purchased from us without authorisation is prohibited and may result in legal action.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>6. Contact</h2>
            <p>For any queries, contact us at <a href="mailto:hello@crystalkeeper.com" className="text-[#C9A84C] hover:underline">hello@crystalkeeper.com</a>.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
