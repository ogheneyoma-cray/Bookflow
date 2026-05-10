export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Shipping Policy</h1>
        
        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Delivery of Digital Goods</h2>
            <p>Edxflow Academy is a digital learning platform. All of our products—including video courses, e-books, templates, and software—are 100% digital.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Instant Access</h2>
            <p>Because our products are digital, we do not ship any physical items. You will not receive any physical packages, DVDs, or books in the mail.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Fulfillment Process</h2>
            <p>Upon successful payment processing, your account will be instantly granted access to the purchased course materials. You will also receive an automated welcome email containing your login link and a receipt for your records. If you do not receive access within 10 minutes of purchase, please check your spam folder or contact our support team.</p>
          </section>
        </div>
      </div>
    </div>
  );
}