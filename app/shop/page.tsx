import Link from "next/link";
import { BookOpen, ShoppingCart } from "lucide-react";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#EDF2F4] font-['Merriweather',serif] py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">
            Bookxflow Shop
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our collection of premium ebooks. Instantly download your next great read across fiction, business, and self-help.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition duration-300">
              
              {/* Book Cover Placeholder */}
              <Link href={`/shop/${product.id}`} className="block">
                <div className="bg-[#2B2D42] p-8 flex flex-col items-center justify-center text-center relative aspect-4/3 group cursor-pointer">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent transition-opacity group-hover:opacity-20"></div>
                  <BookOpen className="w-12 h-12 text-[#EDF2F4] mb-4 relative z-10 opacity-50 transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-bold text-white relative z-10 font-['Montserrat',sans-serif] leading-tight">
                    {product.name}
                  </h3>
                </div>
              </Link>
              
              {/* Book Details */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-sm text-slate-500 font-['Montserrat',sans-serif] uppercase tracking-wider font-bold">
                    {product.category.split('&')[0].trim()}
                  </p>
                  <span className="font-bold text-[#2B2D42] font-['Montserrat',sans-serif]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm line-clamp-2 flex-1">
                  {product.shortDesc}
                </p>
                
                <div className="mt-auto pt-4 flex gap-3">
                  <Link href={`/shop/${product.id}`} className="flex-1 bg-[#EDF2F4] text-[#2B2D42] py-2.5 rounded-xl font-bold font-['Montserrat',sans-serif] hover:bg-slate-200 transition flex items-center justify-center text-center">
                    Details
                  </Link>
                  <button className="flex-1 bg-[#D90429] text-white py-2.5 rounded-xl font-bold font-['Montserrat',sans-serif] hover:bg-[#b00320] transition flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}