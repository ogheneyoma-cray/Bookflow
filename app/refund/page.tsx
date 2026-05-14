export default function RefundPolicyPage() {
  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <section className="bg-[#1C1007] px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Returns & Refund Policy
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white border border-[#D5C9B5] p-8 md:p-12 space-y-10 text-[#6B6147] leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>1. Our Returns Promise</h2>
            <p>At Crystalkeeper, we want you to love every book you buy. If you&apos;re not completely satisfied, we offer a straightforward return process within <strong>14 days of delivery</strong>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2. Eligible Returns</h2>
            <p className="mb-4">We accept returns in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Undamaged & Unread Copies:</strong> Books returned in their original condition — no bent spines, torn pages, or markings — within 14 days of delivery.</li>
              <li><strong>Wrong Item Received:</strong> If we shipped you a different title or edition than what you ordered, we will cover return shipping and send the correct item at no extra cost.</li>
              <li><strong>Damaged on Arrival:</strong> If your book arrives visibly damaged (water damage, crushed cover, loose pages), report it within 48 hours of delivery with photographic evidence. We will send a replacement or issue a full refund.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>3. Non-Returnable Items</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Books that have been read, annotated, or show signs of use.</li>
              <li>Items returned after the 14-day window has passed.</li>
              <li>Sale or clearance items (marked at time of purchase).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>4. How to Request a Return</h2>
            <p>Email <a href="mailto:hello@crystalkeeper.com" className="text-[#C9A84C] hover:underline">hello@crystalkeeper.com</a> with your order number and the reason for your return. Our team will respond within 1 business day with return instructions. Return shipping costs are the customer&apos;s responsibility unless the return is due to our error.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>5. Refund Processing</h2>
            <p>Once we receive and inspect your return, we will notify you of approval or rejection within 3 business days. Approved refunds are processed to your original payment method within 5–10 business days.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
