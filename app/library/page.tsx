import Link from "next/link";
import { BookOpen, Package } from "lucide-react";
import { products } from "@/lib/products";

export default function LibraryPage() {
  const purchasedBooks = products.slice(0, 3);

  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <section className="bg-[#1C1007] px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">Your Account</p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            My Orders
          </h1>
          <p className="text-[#A89968] mt-1">Books you&apos;ve purchased from Crystalkeeper.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        {purchasedBooks.length === 0 ? (
          <div className="bg-white border border-[#D5C9B5] p-16 text-center space-y-5">
            <BookOpen size={40} className="text-[#D5C9B5] mx-auto" />
            <h2 className="text-xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              No orders yet
            </h2>
            <p className="text-[#6B6147] text-sm">Once you place an order, your books will appear here.</p>
            <Link
              href="/shop"
              className="inline-block bg-[#1C1007] text-[#F9F5EE] px-7 py-3 text-sm font-semibold hover:bg-[#C9A84C] hover:text-[#1C1007] transition-colors"
            >
              Browse Shop
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {purchasedBooks.map((book) => (
              <div key={book.id} className="bg-white border border-[#D5C9B5] p-5 flex items-center gap-5">
                <div className="w-12 h-16 bg-[#EEE8DC] flex items-center justify-center shrink-0 border border-[#D5C9B5]">
                  <Package size={18} className="text-[#C9A84C]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-[#1C1007] leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {book.name}
                  </h2>
                  <p className="text-sm text-[#6B6147]">by {book.author} &middot; {book.format} &middot; {book.pages} pages</p>
                </div>
                <div className="shrink-0 flex gap-2">
                  <span className="text-xs border border-[#2D5A3D] text-[#2D5A3D] px-3 py-1.5 font-semibold">Delivered</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
