export default function ShippingPolicyPage() {
  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <section className="bg-[#1C1007] px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Shipping Policy
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white border border-[#D5C9B5] p-8 md:p-12 space-y-10 text-[#6B6147] leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>1. Processing Times</h2>
            <p>Orders are processed and dispatched within <strong>1–2 business days</strong> of payment confirmation. You will receive a dispatch notification email with tracking details once your parcel leaves our Lagos warehouse.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2. Delivery Options & Timeframes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-[#D5C9B5]">
                <thead>
                  <tr className="bg-[#EEE8DC]">
                    <th className="border border-[#D5C9B5] px-4 py-3 text-left text-[#1C1007] font-semibold">Delivery Zone</th>
                    <th className="border border-[#D5C9B5] px-4 py-3 text-left text-[#1C1007] font-semibold">Estimated Time</th>
                    <th className="border border-[#D5C9B5] px-4 py-3 text-left text-[#1C1007] font-semibold">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#D5C9B5] px-4 py-3">Lagos (same state)</td>
                    <td className="border border-[#D5C9B5] px-4 py-3">1–2 business days</td>
                    <td className="border border-[#D5C9B5] px-4 py-3">₦1,500 / $0.99</td>
                  </tr>
                  <tr className="bg-[#F9F5EE]">
                    <td className="border border-[#D5C9B5] px-4 py-3">South-West Nigeria</td>
                    <td className="border border-[#D5C9B5] px-4 py-3">2–3 business days</td>
                    <td className="border border-[#D5C9B5] px-4 py-3">₦2,500 / $1.99</td>
                  </tr>
                  <tr>
                    <td className="border border-[#D5C9B5] px-4 py-3">Other Nigerian States</td>
                    <td className="border border-[#D5C9B5] px-4 py-3">3–5 business days</td>
                    <td className="border border-[#D5C9B5] px-4 py-3">₦3,500 / $2.99</td>
                  </tr>
                  <tr className="bg-[#F9F5EE]">
                    <td className="border border-[#D5C9B5] px-4 py-3">International</td>
                    <td className="border border-[#D5C9B5] px-4 py-3">7–14 business days</td>
                    <td className="border border-[#D5C9B5] px-4 py-3">Calculated at checkout</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>3. Free Shipping</h2>
            <p>Orders with a subtotal of <strong>$35 USD or more</strong> (before shipping) qualify for free standard shipping within Nigeria. The discount is applied automatically at checkout.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>4. How We Pack Your Books</h2>
            <p>Every order is wrapped in protective kraft paper and placed in a rigid cardboard mailer to prevent bending or moisture damage during transit. For orders containing three or more books, we use double-walled boxes with foam padding. We take great pride in ensuring your books arrive in perfect condition.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>5. Tracking Your Order</h2>
            <p>A tracking number is emailed to you when your order is dispatched. You can use this number on our courier partner&apos;s website to follow your parcel in real time.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>6. Delivery Issues</h2>
            <p>If your parcel has not arrived within the estimated window, or if your tracking shows no movement for 5+ days, please contact us at <a href="mailto:hello@crystalkeeper.com" className="text-[#C9A84C] hover:underline">hello@crystalkeeper.com</a> or call <a href="tel:+2349076759030" className="text-[#C9A84C] hover:underline">+234 907 675 9030</a>. We will investigate with the courier immediately.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1007] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>7. Undeliverable Parcels</h2>
            <p>If a parcel is returned to us as undeliverable (wrong address, uncollected, etc.), we will contact you to arrange re-delivery. Additional shipping charges may apply. Please ensure your delivery address is accurate at the time of checkout.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
