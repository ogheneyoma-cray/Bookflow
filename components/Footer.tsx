import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#1C1007] text-[#D5C9B5] mt-0"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Crystalkeeper Logo" className="w-8 h-8 object-contain" />
            <span
              className="text-lg font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Crystalkeeper
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[#A89968]">
            A curated bookstore bringing you premium physical books across fiction, business, and beyond. Delivered with care to your door.
          </p>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-2.5">
            {[
              { href: "/shop", label: "Browse Books" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms & Conditions" },
              { href: "/refund", label: "Refund Policy" },
              { href: "/shipping", label: "Shipping Policy" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-[#A89968] hover:text-[#C9A84C] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-[#A89968]">
              <Mail size={14} className="shrink-0 mt-0.5 text-[#C9A84C]" />
              <a href="mailto:hello@crystalkeeper.com" className="hover:text-[#C9A84C] transition-colors">
                hello@crystalkeeper.com
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-[#A89968]">
              <Phone size={14} className="shrink-0 mt-0.5 text-[#C9A84C]" />
              <a href="tel:+2349033609628" className="hover:text-[#C9A84C] transition-colors">
                +234 903 360 9628
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-[#A89968]">
              <MapPin size={14} className="shrink-0 mt-0.5 text-[#C9A84C]" />
              <span>16 Anthony Udo Street, Ajao Estate, Oshodi-Isolo LGA, Lagos</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#6B6147]">
          <span>&copy; {new Date().getFullYear()} Crystalkeeper. All rights reserved.</span>
          <span>Premium Physical Books &middot; Delivered Across Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
