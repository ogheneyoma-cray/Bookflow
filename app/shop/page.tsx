"use client";

import Link from "next/link";
import { BookOpen, ShoppingCart, BookMarked } from "lucide-react";
import { products } from "@/lib/products";
import { useCurrency } from "@/context/CurrencyContext";
import { useCart } from "@/context/CartContext";

export default function ShopPage() {
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();

  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Page header */}
      <section className="bg-[#1C1007] px-6 py-14">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">Our Catalog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            The Full Collection
          </h1>
          <p className="text-[#A89968] max-w-xl mx-auto">
            {products.length} carefully selected titles — hardcovers, paperbacks, and everything in between.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#D5C9B5] flex flex-col group hover:border-[#C9A84C] transition-colors"
            >
              {/* Cover */}
              <Link href={`/shop/${product.id}`} className="block">
                <div className="bg-[#EEE8DC] h-44 flex flex-col items-center justify-center px-6 text-center border-b border-[#D5C9B5] group-hover:bg-[#E5DDD0] transition-colors">
                  <BookOpen size={28} className="text-[#C9A84C] mb-3 opacity-70" />
                  <h3
                    className="font-bold text-[#1C1007] leading-snug text-sm"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#A89968] mt-1">by {product.author}</p>
                </div>
              </Link>

              {/* Details */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
                    {product.category.split("&")[0].trim()}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs border border-[#D5C9B5] px-2 py-0.5 text-[#6B6147]">
                    <BookMarked size={10} />
                    {product.format}
                  </span>
                </div>
                <p className="text-sm text-[#6B6147] line-clamp-2 leading-relaxed flex-1">{product.shortDesc}</p>
                <div className="flex items-center justify-between pt-2 border-t border-[#EEE8DC]">
                  <span className="font-bold text-[#1C1007]">{formatPrice(product.price)}</span>
                  <span className="text-xs text-[#A89968]">{product.pages} pp.</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <Link
                    href={`/shop/${product.id}`}
                    className="flex-1 text-center border border-[#D5C9B5] text-[#6B6147] py-2 text-xs font-semibold hover:border-[#1C1007] hover:text-[#1C1007] transition-colors"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#1C1007] text-[#F9F5EE] py-2 text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#1C1007] transition-colors"
                  >
                    <ShoppingCart size={13} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
