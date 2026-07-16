"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X, Mail, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/library", label: "Library" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const { currency, setCurrency } = useCurrency();

  return (
    <header className="sticky top-0 z-50 w-full" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Top contact bar */}
      <div className="bg-[#1C1007] text-[#D5C9B5] text-xs py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:hello@crystalkeeper.com" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
              <Mail size={12} />
              hello@crystalkeeper.com
            </a>
            <a href="tel:+2349076759030" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
              <Phone size={12} />
              +234 907 675 9030
            </a>
          </div>
          {/* Currency switcher */}
          <div className="flex items-center gap-1 border border-white/20 rounded px-1 py-0.5">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2 py-0.5 rounded text-xs font-semibold transition ${
                currency === "USD" ? "bg-[#C9A84C] text-[#1C1007]" : "text-[#D5C9B5] hover:text-white"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency("NGN")}
              className={`px-2 py-0.5 rounded text-xs font-semibold transition ${
                currency === "NGN" ? "bg-[#C9A84C] text-[#1C1007]" : "text-[#D5C9B5] hover:text-white"
              }`}
            >
              NGN
            </button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-[#F9F5EE] border-b border-[#D5C9B5]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <img src="/logo.svg" alt="Crystalkeeper Logo" className="w-9 h-9 object-contain" />
            <span
              className="text-xl font-bold text-[#1C1007] tracking-tight group-hover:text-[#C9A84C] transition-colors"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Crystalkeeper
            </span>
          </Link>

          {/* Desktop links — centered */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[#6B6147] hover:text-[#1C1007] transition-colors tracking-wide"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Cart + mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile currency */}
            <div className="flex md:hidden items-center gap-1 border border-[#D5C9B5] rounded px-1 py-0.5">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-1.5 py-0.5 rounded text-xs font-semibold transition ${
                  currency === "USD" ? "bg-[#C9A84C] text-[#1C1007]" : "text-[#6B6147]"
                }`}
              >
                $
              </button>
              <button
                onClick={() => setCurrency("NGN")}
                className={`px-1.5 py-0.5 rounded text-xs font-semibold transition ${
                  currency === "NGN" ? "bg-[#C9A84C] text-[#1C1007]" : "text-[#6B6147]"
                }`}
              >
                ₦
              </button>
            </div>

            <Link href="/cart" className="relative text-[#6B6147] hover:text-[#1C1007] transition-colors">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C9A84C] text-[#1C1007] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              className="md:hidden text-[#6B6147] hover:text-[#1C1007]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-[#D5C9B5] bg-[#F9F5EE] overflow-hidden"
            >
              <div className="px-6 py-5 flex flex-col gap-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-[#6B6147] hover:text-[#1C1007] transition-colors py-1 border-b border-[#EEE8DC] last:border-0"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="pt-2 flex gap-4 text-xs text-[#6B6147]">
                  <a href="mailto:hello@crystalkeeper.com" className="hover:text-[#C9A84C] transition-colors">hello@crystalkeeper.com</a>
                  <a href="tel:+2349076759030" className="hover:text-[#C9A84C] transition-colors">+234 907 675 9030</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
