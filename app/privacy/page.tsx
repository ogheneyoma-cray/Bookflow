export default function PrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <section className="bg-[#1C1007] px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white border border-[#D5C9B5] p-8 md:p-12 space-y-10 text-[#6B6147] leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>1. Introduction</h2>
            <p>Crystalkeeper (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your personal data. This policy explains what information we collect when you browse our website, place an order, or contact our support team, and how we use and safeguard it.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2. Data We Collect</h2>
            <p className="mb-4">We collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> Your full name.</li>
              <li><strong>Contact Data:</strong> Email address and phone number.</li>
              <li><strong>Delivery Data:</strong> Shipping address (street, city, state, country) required to deliver your physical order.</li>
              <li><strong>Transaction Data:</strong> Details of products purchased, payment amounts, and order history.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information collected automatically during site visits.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>3. How We Use Your Data</h2>
            <p>We use your data to process and fulfil your physical book orders, arrange delivery through our logistics partners, provide customer support, and — with your consent — send you updates about new titles and promotions. We never sell your data to third parties.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>4. Sharing with Third Parties</h2>
            <p>Your delivery address and contact details are shared with our courier and logistics partners solely for the purpose of delivering your order. These partners are contractually bound to protect your data and may not use it for any other purpose.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>5. Data Security</h2>
            <p>All payment transactions are encrypted via SSL and processed by PCI-compliant payment gateways. We do not store your card details on our servers.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>6. Contact</h2>
            <p>For privacy queries, write to <a href="mailto:hello@crystalkeeper.com" className="text-[#C9A84C] hover:underline">hello@crystalkeeper.com</a> or call <a href="tel:+2349076759030" className="text-[#C9A84C] hover:underline">+234 907 675 9030</a>.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
