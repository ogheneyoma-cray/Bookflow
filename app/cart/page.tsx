"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";
import { ShoppingCart, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { formatPrice } = useCurrency();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#EDF2F4] py-24 px-6 font-['Merriweather',serif]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto" />
          <h1 className="text-4xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">Your Cart is Empty</h1>
          <p className="text-slate-500">You haven&apos;t added anything yet.</p>
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
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">Your Cart</h1>

        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover shrink-0"
                />
                <div>
                  <h2 className="font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">{item.name}</h2>
                  <p className="text-slate-400 text-sm font-['Montserrat',sans-serif]">{item.sku}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">{formatPrice(item.price)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 transition"
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-slate-500 text-sm font-['Montserrat',sans-serif]">Total</p>
            <p className="text-3xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">{formatPrice(total)}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={clearCart}
              className="border border-slate-300 text-slate-600 text-sm px-5 py-2.5 rounded-full hover:bg-slate-100 transition font-['Montserrat',sans-serif] font-bold"
            >
              Clear Cart
            </button>
            <Link
              href="/checkout"
              className="bg-[#D90429] text-white font-bold px-7 py-2.5 rounded-full hover:bg-[#b00320] transition font-['Montserrat',sans-serif]"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
