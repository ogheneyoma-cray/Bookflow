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
            <p>To request a refund under the eligible conditions, please contact our support team at <a href="mailto:csteam@sellisafe.com" className="text-[#D90429] hover:underline">csteam@sellisafe.com</a> with your order number and the reason for the request.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
