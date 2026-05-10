export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>Welcome to Edxflow Academy. We respect your privacy and are committed to protecting the personal data of our students and visitors. This policy explains how we collect, use, and safeguard your information when you access our digital courses and platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We collect Information you provide directly to us (such as your name, email address, and payment information when enrolling in a course) and Technical Data (such as your IP address, login data, browser type, and course progress metrics) to optimize your learning experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
            <p>Your data is used primarily to grant you access to purchased courses, track your progress for certification, process secure payments, and communicate important updates regarding curriculum changes or new course launches.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security & Sharing</h2>
            <p>We implement robust, industry-standard security measures to protect your data. We do not sell your personal data to third parties. We only share data with trusted third-party service providers (like Stripe or PayPal for payment processing) strictly to facilitate our services.</p>
          </section>
        </div>
      </div>
    </div>
  );
}