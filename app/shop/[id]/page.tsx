import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, BookMarked, Hash } from "lucide-react";
import { products } from "@/lib/products";
import AddToCart from "@/components/AddToCart";
import PriceDisplay from "@/components/PriceDisplay";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Breadcrumb */}
      <div className="border-b border-[#D5C9B5] bg-white">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-[#6B6147] hover:text-[#1C1007] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Shop
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 bg-white border border-[#D5C9B5]">

          {/* Book cover panel */}
          <div className="bg-[#EEE8DC] flex flex-col items-center justify-center px-10 py-16 text-center border-r border-[#D5C9B5] min-h-[400px]">
            <BookOpen size={56} className="text-[#C9A84C] mb-6 opacity-60" />
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-2">{product.category}</p>
            <h2
              className="text-2xl font-bold text-[#1C1007] leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {product.name}
            </h2>
            <p className="text-[#6B6147] text-sm mt-2">by {product.author}</p>
          </div>

          {/* Details panel */}
          <div className="p-8 md:p-10 flex flex-col">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-2">{product.category}</p>
            <h1
              className="text-3xl md:text-4xl font-bold text-[#1C1007] leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {product.name}
            </h1>
            <p className="text-[#6B6147] mb-6">by <span className="font-semibold">{product.author}</span></p>

            <p className="text-[#6B6147] leading-relaxed mb-8">{product.shortDesc}</p>

            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-[#1C1007] text-sm uppercase tracking-wider">About This Book</h3>
              <p className="text-[#6B6147] leading-relaxed text-sm">{product.fullDesc}</p>
            </div>

            {/* Book metadata */}
            <div className="grid grid-cols-2 gap-3 mb-8 p-4 bg-[#F9F5EE] border border-[#D5C9B5]">
              <div className="flex items-center gap-2 text-sm text-[#6B6147]">
                <BookMarked size={14} className="text-[#C9A84C]" />
                <span>{product.format}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B6147]">
                <BookOpen size={14} className="text-[#C9A84C]" />
                <span>{product.pages} pages</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B6147] col-span-2">
                <Hash size={14} className="text-[#C9A84C]" />
                <span>ISBN: {product.isbn}</span>
              </div>
            </div>

            <div className="border-t border-[#D5C9B5] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#A89968] mb-1">Price</p>
                <div className="text-3xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  <PriceDisplay usdPrice={product.price} />
                </div>
              </div>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
