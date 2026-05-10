export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        
        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>By creating an account and enrolling in Edxflow Academy courses, you agree to comply with and be bound by these Terms and Conditions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Account Security & Sharing</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials. Course purchases are for individual use only. Sharing account logins, downloading course videos for unauthorized distribution, or pirating materials will result in immediate account termination without a refund.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
            <p>All course content, including videos, PDFs, code snippets, and graphics, are the intellectual property of Edxflow Academy and its instructors. You are granted a limited, non-exclusive, non-transferable license to access and view the content for your personal, non-commercial educational purposes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Course Modifications</h2>
            <p>Technology moves fast. Edxflow Academy reserves the right to update, modify, or remove course content at any time to ensure the curriculum remains accurate and up-to-date.</p>
          </section>
        </div>
      </div>
    </div>
  );
}