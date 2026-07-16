"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const { currency, setCurrency } = useCurrency();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#2B2D42]/95 backdrop-blur-md border-b border-white/10 font-['Montserrat',sans-serif]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow rounded-[18px] overflow-hidden">
            <img src="/logo.svg" alt="Sellisafe Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Sellisafe
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-[#D90429] transition-colors text-sm tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                currency === "USD"
                  ? "bg-[#D90429] text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency("NGN")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                currency === "NGN"
                  ? "bg-[#D90429] text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              NGN
            </button>
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="relative text-slate-300 hover:text-[#D90429] transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D90429] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/contact"
            className="bg-[#D90429] text-white px-6 py-2.5 text-sm font-bold tracking-widest uppercase hover:bg-[#B90424] transition-colors rounded-full"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Currency Switcher (mobile) */}
          <div className="flex items-center gap-1 bg-white/10 rounded-full p-0.5">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2 py-0.5 rounded-full text-xs font-bold transition ${
                currency === "USD" ? "bg-[#D90429] text-white" : "text-slate-300"
              }`}
            >
              $
            </button>
            <button
              onClick={() => setCurrency("NGN")}
              className={`px-2 py-0.5 rounded-full text-xs font-bold transition ${
                currency === "NGN" ? "bg-[#D90429] text-white" : "text-slate-300"
              }`}
            >
              ₦
            </button>
          </div>

          <Link href="/cart" className="relative text-slate-300 hover:text-[#D90429]">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D90429] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-300 hover:text-[#D90429]"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#2B2D42] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-[#D90429] transition-colors uppercase tracking-widest text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
