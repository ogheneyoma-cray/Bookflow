export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] py-20 px-6 font-['Merriweather',serif]">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2D42] mb-8 font-['Montserrat',sans-serif]">Shipping Policy (Digital Delivery)</h1>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',sans-serif]">1. Instant Digital Delivery</h2>
            <p>Because Sellisafe exclusively sells digital products (Ebooks), there are no physical items to be shipped. Therefore, no physical shipping fees, transit times, or customs delays apply to your order.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',sans-serif]">2. How You Will Receive Your Ebook</h2>
            <p className="mb-4">Upon successful completion of your payment at checkout, you will receive your product in two immediate ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>On-Screen Download:</strong> A download link will appear directly on your order confirmation page.</li>
              <li><strong>Email Delivery:</strong> An email containing your receipt and a secure link to download your ebook will be sent automatically to the email address provided during checkout.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',sans-serif]">3. File Formats and Access</h2>
            <p>Most of our ebooks are provided in highly compatible EPUB or PDF formats. To protect our copyrighted material, download links may be subject to a maximum number of download attempts (e.g., 5 attempts). We strongly recommend downloading your ebook to your preferred device immediately upon purchase.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',sans-serif]">4. Technical Issues</h2>
            <p>If you do not receive your download email within 15 minutes of purchase (please check your spam/junk folder), or if you experience any issues downloading or opening your file, please contact us immediately at <a href="mailto:csteam@sellisafe.com" className="text-[#D90429] hover:underline">csteam@sellisafe.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
