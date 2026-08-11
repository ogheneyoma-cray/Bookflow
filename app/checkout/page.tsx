"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Lock, ShoppingCart, CheckCircle2 } from "lucide-react";

const SHIPPING_USD = 4.99;
const FREE_SHIPPING_THRESHOLD_USD = 35;

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const [submitting, setSubmitting] = useState(false);
  const [placed, setPlaced] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingUSD = subtotal >= FREE_SHIPPING_THRESHOLD_USD ? 0 : SHIPPING_USD;
  const total = subtotal + shippingUSD;

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
      <main
        className="min-h-screen bg-[#F9F5EE] flex items-center justify-center px-6"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="text-center space-y-5 max-w-md">
          <CheckCircle2 size={48} className="text-[#2D5A3D] mx-auto" />
          <h1 className="text-3xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Order Placed!
          </h1>
          <p className="text-[#6B6147]">
            Thank you for your order. A confirmation has been sent to your email, and your books are being prepared for dispatch.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#1C1007] text-[#F9F5EE] px-8 py-3 text-sm font-semibold hover:bg-[#C9A84C] hover:text-[#1C1007] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main
        className="min-h-screen bg-[#F9F5EE] flex items-center justify-center px-6"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="text-center space-y-5">
          <ShoppingCart size={48} className="text-[#D5C9B5] mx-auto" />
          <h1 className="text-3xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Your Cart is Empty
          </h1>
          <p className="text-[#6B6147]">Add some books before heading to checkout.</p>
          <Link
            href="/shop"
            className="inline-block bg-[#1C1007] text-[#F9F5EE] px-8 py-3 text-sm font-semibold hover:bg-[#C9A84C] hover:text-[#1C1007] transition-colors"
          >
            Browse the Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <section className="bg-[#1C1007] px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Checkout
          </h1>
          <p className="text-[#A89968] text-sm mt-1">Complete your order below</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">

            {/* Shipping details */}
            <div className="bg-white border border-[#D5C9B5] p-6 space-y-4">
              <h2 className="font-bold text-[#1C1007] text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Shipping Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">Full Name</label>
                  <input required type="text" placeholder="Amara Chukwu" className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">Email</label>
                  <input required type="email" placeholder="amara@example.com" className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">Phone</label>
                  <input required type="tel" placeholder="+234 708 884 2059" className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">Street Address</label>
                  <input required type="text" placeholder="16 Anthony Udo Street" className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">City</label>
                  <input required type="text" placeholder="Lagos" className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">State</label>
                  <input required type="text" placeholder="Lagos State" className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">Country</label>
                  <input required type="text" defaultValue="Nigeria" className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                </div>
              </div>
            </div>

            {/* Payment details */}
            <div className="bg-white border border-[#D5C9B5] p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-[#C9A84C]" />
                <h2 className="font-bold text-[#1C1007] text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Payment Details
                </h2>
              </div>
              <p className="text-xs text-[#A89968]">Your card details are encrypted and processed securely. We never store your full card number.</p>
              <div className="grid gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">Cardholder Name</label>
                  <input required type="text" placeholder="Amara Chukwu" className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">Card Number</label>
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">Expiry Date</label>
                    <input required type="text" placeholder="MM/YY" maxLength={5} className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6B6147] mb-1.5">CVV</label>
                    <input required type="text" inputMode="numeric" placeholder="123" maxLength={4} className="w-full border border-[#D5C9B5] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-white border border-[#D5C9B5] p-6 h-fit space-y-4">
            <h2 className="font-bold text-[#1C1007] text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Order Summary
            </h2>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-[#6B6147]">
                  <span className="truncate pr-2">{item.name} &times;{item.quantity}</span>
                  <span className="shrink-0">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#D5C9B5] pt-3 space-y-2 text-sm">
              <div className="flex justify-between text-[#6B6147]">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#6B6147]">
                <span>Shipping</span>
                <span>{shippingUSD === 0 ? <span className="text-[#2D5A3D] font-semibold">Free</span> : formatPrice(shippingUSD)}</span>
              </div>
              <div className="border-t border-[#D5C9B5] pt-2 flex justify-between font-bold text-[#1C1007]">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="block w-full text-center bg-[#1C1007] text-[#F9F5EE] py-3.5 font-semibold text-sm hover:bg-[#C9A84C] hover:text-[#1C1007] transition-colors disabled:opacity-60"
            >
              {submitting ? "Processing…" : `Pay ${formatPrice(total)}`}
            </button>
            <p className="text-xs text-[#A89968] flex items-center gap-1.5 justify-center">
              <Lock size={12} /> Secure checkout
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
