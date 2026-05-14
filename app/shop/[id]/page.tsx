import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
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

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#EDF2F4] font-['Merriweather',_serif] py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <Link href="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#D90429] transition font-['Montserrat',_sans-serif] font-medium">
          <ArrowLeft size={20} />
          Back to Shop
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">

          {/* Product Cover Placeholder */}
          <div className="md:w-2/5 bg-[#2B2D42] p-12 flex flex-col items-center justify-center text-center relative min-h-[400px]">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
            <BookOpen className="w-24 h-24 text-[#EDF2F4] mb-6 relative z-10 opacity-50" />
            <h2 className="text-3xl font-bold text-white mb-2 relative z-10 font-['Montserrat',_sans-serif] leading-tight">{product.name}</h2>
            <span className="text-[#D90429] font-bold text-sm relative z-10 tracking-widest uppercase font-['Montserrat',_sans-serif]">{product.category.split("&")[0].trim()}</span>
          </div>

          {/* Product Details */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col">
            <div className="mb-2">
              <span className="text-[#D90429] font-bold text-sm tracking-widest uppercase font-['Montserrat',_sans-serif]">{product.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2B2D42] font-['Montserrat',_sans-serif] mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {product.shortDesc}
            </p>

            <div className="space-y-6 flex-1 mb-8">
              <div>
                <h3 className="text-lg font-bold text-[#2B2D42] font-['Montserrat',_sans-serif] mb-2">About This Book</h3>
                <p className="text-slate-600 leading-relaxed">{product.fullDesc}</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="text-[#D90429] w-5 h-5 shrink-0" />
                  <span>Instant digital download (EPUB, PDF formats)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="text-[#D90429] w-5 h-5 shrink-0" />
                  <span>Read gracefully on Kindle, Apple Books, or Mobile</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-4xl font-bold text-[#2B2D42] font-['Montserrat',_sans-serif]">
                <PriceDisplay usdPrice={product.price} />
              </div>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
