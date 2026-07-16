"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Lock, ShoppingCart, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const [submitting, setSubmitting] = useState(false);
  const [placed, setPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setPlaced(true);
      clearCart();
    }, 1200);
  };

  if (placed) {
    return (
      <main className="min-h-screen bg-[#EDF2F4] flex items-center justify-center px-6 font-['Merriweather',serif]">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-12 text-center space-y-5 max-w-md">
          <CheckCircle2 size={48} className="text-emerald-600 mx-auto" />
          <h1 className="text-3xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">Order Confirmed!</h1>
          <p className="text-slate-600">
            Thank you for your purchase. Your download links have been sent to your email, and are also available in your Library.
          </p>
          <Link
            href="/library"
            className="inline-block bg-[#D90429] text-white font-bold px-8 py-3 rounded-full hover:bg-[#b00320] transition font-['Montserrat',sans-serif]"
          >
            Go to My Library
          </Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#EDF2F4] flex items-center justify-center px-6 font-['Merriweather',serif]">
        <div className="text-center space-y-5">
          <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto" />
          <h1 className="text-3xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">Your Cart is Empty</h1>
          <p className="text-slate-500">Add some ebooks before heading to checkout.</p>
          <Link
            href="/shop"
            className="inline-block bg-[#D90429] text-white font-bold px-8 py-3 rounded-full hover:bg-[#b00320] transition font-['Montserrat',sans-serif]"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#EDF2F4] py-24 px-6 font-['Merriweather',serif]">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">

            {/* Billing details */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 space-y-4">
              <h2 className="font-bold text-[#2B2D42] text-lg font-['Montserrat',sans-serif]">Billing Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 font-['Montserrat',sans-serif] uppercase tracking-wide">Full Name</label>
                  <input required type="text" placeholder="Amara Chukwu" className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 font-['Montserrat',sans-serif] uppercase tracking-wide">Email (for your download links)</label>
                  <input required type="email" placeholder="amara@example.com" className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 font-['Montserrat',sans-serif] uppercase tracking-wide">Country</label>
                  <input required type="text" defaultValue="Nigeria" className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition" />
                </div>
              </div>
            </div>

            {/* Payment details */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-[#D90429]" />
                <h2 className="font-bold text-[#2B2D42] text-lg font-['Montserrat',sans-serif]">Payment Details</h2>
              </div>
              <p className="text-xs text-slate-400">Your card details are encrypted and processed securely. We never store your full card number.</p>
              <div className="grid gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 font-['Montserrat',sans-serif] uppercase tracking-wide">Cardholder Name</label>
                  <input required type="text" placeholder="Amara Chukwu" className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 font-['Montserrat',sans-serif] uppercase tracking-wide">Card Number</label>
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 font-['Montserrat',sans-serif] uppercase tracking-wide">Expiry Date</label>
                    <input required type="text" placeholder="MM/YY" maxLength={5} className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 font-['Montserrat',sans-serif] uppercase tracking-wide">CVV</label>
                    <input required type="text" inputMode="numeric" placeholder="123" maxLength={4} className="w-full bg-[#EDF2F4] border-transparent focus:border-[#D90429] focus:bg-white focus:ring-2 focus:ring-[#D90429]/20 rounded-xl px-4 py-3 outline-none transition" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 h-fit space-y-4">
            <h2 className="font-bold text-[#2B2D42] text-lg font-['Montserrat',sans-serif]">Order Summary</h2>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-slate-600 font-['Montserrat',sans-serif]">
                  <span className="truncate pr-2">{item.name} &times;{item.quantity}</span>
                  <span className="shrink-0 font-bold">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 pt-3 flex justify-between font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="block w-full text-center bg-[#D90429] text-white py-3.5 rounded-full font-bold text-sm hover:bg-[#b00320] transition disabled:opacity-60 font-['Montserrat',sans-serif]"
            >
              {submitting ? "Processing…" : `Pay ${formatPrice(total)}`}
            </button>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 justify-center">
              <Lock size={12} /> Secure checkout
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
