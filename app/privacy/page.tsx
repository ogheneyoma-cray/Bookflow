export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] py-20 px-6 font-['Merriweather',_serif]">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2D42] mb-8 font-['Montserrat',_sans-serif]">Privacy Policy</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">1. Introduction</h2>
            <p>Bookflow Publishing ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or purchase our digital products.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">2. Data We Collect</h2>
            <p className="mb-4">We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data</strong> (Name, username).</li>
              <li><strong>Contact Data</strong> (Email address, billing address).</li>
              <li><strong>Transaction Data</strong> (Details about payments and the digital downloads you have purchased).</li>
              <li><strong>Technical Data</strong> (IP address, browser type, device used to access our site).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">3. How We Use Your Data</h2>
            <p>We use your data primarily to deliver your purchased digital content, process your payments securely, and send you important updates regarding your order (such as updated file versions). With your consent, we may also send you marketing communications about new ebook releases.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">4. Data Security</h2>
            <p>We implement robust security measures to prevent your personal data from being lost, used, or accessed in an unauthorized way. All payment transactions are encrypted using SSL technology and processed by trusted, PCI-compliant third-party payment gateways.</p>
          </section>
        </div>
      </div>
    </main>
  );
}