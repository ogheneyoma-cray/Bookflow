import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-8 mt-12 bg-[#2B2D42] font-['Montserrat',_sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">
          &copy; {new Date().getFullYear()} Sellisafe. All rights reserved.
        </div>
        <div className="space-x-6 flex items-center flex-wrap justify-center gap-y-2">
          <Link href="/privacy" className="text-sm text-slate-300 hover:text-[#D90429] transition-colors">Privacy</Link>
          <Link href="/terms" className="text-sm text-slate-300 hover:text-[#D90429] transition-colors">Terms</Link>
          <Link href="/refund" className="text-sm text-slate-300 hover:text-[#D90429] transition-colors">Refund Policy</Link>
          <Link href="/shipping" className="text-sm text-slate-300 hover:text-[#D90429] transition-colors">Shipping</Link>
          <Link href="/contact" className="text-sm text-slate-300 hover:text-[#D90429] transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
