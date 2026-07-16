export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] py-20 px-6 font-['Merriweather',_serif]">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2D42] mb-8 font-['Montserrat',_sans-serif]">Terms and Conditions</h1>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">1. Overview</h2>
            <p>By accessing the Sellisafe website and purchasing our digital products, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms, you may not access the website or use any services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">2. License and Use of Ebooks</h2>
            <p>When you purchase an ebook from Sellisafe, you are granted a non-exclusive, non-transferable license to download and access the content for your personal, non-commercial use only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">3. Copyright and Intellectual Property</h2>
            <p>All digital content sold on this site is protected by international copyright laws. You may not copy, reproduce, distribute, share, pirate, or resell our ebooks in any form. Unauthorized distribution or file-sharing of our copyrighted material will result in immediate termination of your account and potential legal action.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">4. Account Responsibilities</h2>
            <p>If you create an account on our site, you are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and checkout, and to promptly update your details if they change. We reserve the right to suspend or terminate accounts that provide false information or are used in violation of these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">5. Pricing and Payment</h2>
            <p>All prices are listed in USD and may be displayed in NGN based on your selected currency, using an exchange rate that is updated periodically and may not exactly match real-time market rates. Prices are subject to change at any time without prior notice, but the price displayed at the moment you complete your purchase will be the price you are charged. Payments are processed securely by our third-party payment partners; we do not store your full card details on our servers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">6. Digital Delivery</h2>
            <p>As all products sold through Sellisafe are digital ebooks, delivery is instant upon successful payment via an on-screen download link and an email containing your receipt and download instructions. It is your responsibility to ensure the email address provided at checkout is correct and able to receive attachments and links.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">7. Prohibited Conduct</h2>
            <p className="mb-4">When using our site and products, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Circumvent, disable, or interfere with security-related features of the site or our digital files.</li>
              <li>Use automated systems or bots to scrape content or place orders.</li>
              <li>Upload or transmit viruses or any other malicious code.</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Sellisafe shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, our website or digital products. Our total liability for any claim arising out of these terms shall not exceed the amount you paid for the specific product giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">9. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to our site and services at our discretion, without notice, if we believe you have violated these terms or engaged in fraudulent or unlawful activity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">10. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">11. Changes to These Terms</h2>
            <p>We may revise these terms from time to time. The most current version will always be posted on this page, and your continued use of the site after changes are posted constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-['Montserrat',_sans-serif]">12. Contact</h2>
            <p>For any queries regarding these terms, please contact us at <a href="mailto:csteam@sellisafe.com" className="text-[#D90429] hover:underline">csteam@sellisafe.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
