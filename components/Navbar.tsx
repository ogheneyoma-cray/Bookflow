"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
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

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow rounded-full overflow-hidden">
            <Image src="/logo.png" alt="Edxflow Academy Logo" fill sizes="40px" className="object-cover" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight bg-linear-to-r from-[#F59E0B] to-[#F59E0B]/80 bg-clip-text text-transparent">
            Edxflow Academy
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
            className="text-slate-400 hover:text-[#F59E0B] transition-colors font-sans text-sm tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}

          {/* Cart Icon */}
        <Link href="/cart" className="relative text-slate-400 hover:text-[#F59E0B] transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#F59E0B] text-slate-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/contact"
          className="bg-[#F59E0B] text-slate-900 px-6 py-2.5 text-sm font-bold tracking-widest uppercase hover:bg-[#d97706] transition-colors rounded-full"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
        <Link href="/cart" className="relative text-slate-400">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#F59E0B] text-slate-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
          className="text-slate-400"
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
          className="md:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-[#F59E0B] transition-colors uppercase tracking-widest text-sm font-sans"
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