export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] py-20 px-6 font-['Merriweather',_serif]">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2D42] mb-8 font-['Montserrat',_sans-serif]">Refund Policy</h1>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">1. Nature of Digital Products</h2>
            <p>At Sellisafe, we offer non-tangible, irrevocable digital goods (Ebooks). Because our products are digital downloads that cannot be &ldquo;returned,&rdquo; we generally do not offer refunds once the download link has been clicked or the file has been accessed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">2. Eligibility for Refunds</h2>
            <p className="mb-4">We will consider granting a refund within 7 days of purchase under the following specific circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>File Corruption/Defects:</strong> If the ebook file is corrupted, completely unreadable on standard devices, and our technical support team is unable to provide a working replacement file.</li>
              <li><strong>Accidental Duplicate Purchase:</strong> If you accidentally purchase the exact same ebook twice within a 24-hour period.</li>
              <li><strong>Un-Downloaded Files:</strong> If our system logs show that the download link for the purchased ebook has never been clicked or accessed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">3. Requesting a Refund</h2>
            <p>To request a refund under the eligible conditions above, please contact our support team at <a href="mailto:csteam@sellisafe.com" className="text-[#D90429] hover:underline">csteam@sellisafe.com</a> within 7 days of your purchase, including your order number, the email address used at checkout, and the reason for your request. Our team aims to respond to all refund requests within 1-2 business days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">4. Review Process</h2>
            <p>Once we receive your request, our support team will review your order history and download logs to confirm eligibility under the conditions listed above. We may ask you to describe the technical issue in detail or provide a screenshot to help us diagnose file corruption or access problems. If a working replacement file resolves the issue, we will provide that instead of a refund. If your request is approved, we will notify you by email before processing the refund.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">5. Refund Method and Timing</h2>
            <p>Approved refunds are issued to the original payment method used at checkout. Depending on your card issuer or payment provider, refunds typically appear within 5-10 business days of approval. Sellisafe is not responsible for delays caused by your bank or payment provider once the refund has been processed on our end.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">6. Non-Refundable Situations</h2>
            <p className="mb-4">Refunds will not be granted in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You simply changed your mind after downloading and reading the ebook.</li>
              <li>The request is made more than 7 days after the original purchase date.</li>
              <li>The file was downloaded and opened successfully on at least one device.</li>
              <li>The request relates to compatibility with an unsupported or outdated reading application.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">7. Chargebacks</h2>
            <p>We encourage customers to contact us directly before initiating a chargeback with their bank or card issuer, as this allows us to resolve genuine issues quickly. Fraudulent or unwarranted chargebacks may result in the suspension of your account and access to previously purchased content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">8. Changes to This Policy</h2>
            <p>We may update this refund policy periodically to reflect changes in our operations or legal requirements. The version posted on this page at the time of your purchase will govern that transaction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">9. Contact</h2>
            <p>For refund requests or questions about this policy, reach out to our support team at <a href="mailto:csteam@sellisafe.com" className="text-[#D90429] hover:underline">csteam@sellisafe.com</a> with your order number and the reason for the request.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
