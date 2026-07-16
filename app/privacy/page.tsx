export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] py-20 px-6 font-['Merriweather',_serif]">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2D42] mb-8 font-['Montserrat',_sans-serif]">Privacy Policy</h1>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">1. Introduction</h2>
            <p>Sellisafe (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or purchase our digital products.</p>
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
            <p>We use your data primarily to deliver your purchased digital content, process your payments securely, and send you important updates regarding your order (such as updated file versions). With your consent, we may also send you communications about new ebook releases.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">4. Cookies and Tracking Technologies</h2>
            <p>Our website uses cookies and similar tracking technologies to keep you signed in, remember your currency preference, and understand how visitors use our site. Essential cookies are required for core functionality such as your shopping cart and cannot be disabled. Analytics cookies help us identify popular titles and improve navigation. You can control or disable non-essential cookies through your browser settings, though this may affect certain features of the site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">5. Sharing Your Data</h2>
            <p>We do not sell your personal data to third parties. We may share limited data with trusted service providers who help us operate the business, including payment processors who handle your transaction securely, email delivery services that send your download links and receipts, and analytics providers who help us understand site usage in aggregate. Each of these partners is contractually obligated to protect your data and use it only for the purpose we specify.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">6. Data Retention</h2>
            <p>We retain your account and transaction data for as long as your account remains active, and for a reasonable period afterward to comply with tax, accounting, and legal obligations. Order records are typically kept for a minimum of six years. You may request that we delete data we are not legally required to retain by contacting us using the details below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">7. Your Rights</h2>
            <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your data, subject to our legal retention obligations.</li>
              <li>Object to or restrict certain processing of your data.</li>
              <li>Withdraw consent to marketing communications at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">8. Data Security</h2>
            <p>We implement robust security measures to prevent your personal data from being lost, used, or accessed in an unauthorized way. All payment transactions are encrypted using SSL technology and processed by trusted, PCI-compliant third-party payment gateways. We do not store your full card details on our servers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">9. Children&apos;s Privacy</h2>
            <p>Our services are not directed at children under the age of 16, and we do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us so we can promptly remove it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">10. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. Material changes will be posted on this page with an updated effective date, and continued use of our site after such changes constitutes your acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">11. Contact Us</h2>
            <p>For any privacy-related questions or to exercise your data rights, please contact us at <a href="mailto:csteam@sellisafe.com" className="text-[#D90429] hover:underline">csteam@sellisafe.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
