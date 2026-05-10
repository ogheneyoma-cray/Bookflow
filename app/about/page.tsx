import { products } from "@/lib/products";
import { Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
            Discover Your Next Skill.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong>Welcome to the Edxflow Library.</strong> Explore our full catalog of premium courses. Use the filters below to navigate by category, skill level, or price. Every course includes lifetime access, downloadable resources, and a certificate of completion.
          </p>
        </div>

        {/* Dynamic Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition duration-300">
              {/* Thumbnail Placeholder */}
              <div className="w-full h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                <span className="font-semibold">Course Thumbnail</span>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">{product.category}</span>
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-6 grow">{product.shortDesc}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-slate-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition text-sm font-semibold">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle & Save Section */}
        <div className="bg-[#1E3A8A] text-white p-10 md:p-16 rounded-3xl shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bundle & Save</h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Looking to master an entire discipline? Check out our Career Tracks! Bundle multiple courses together (like our &quot;Ultimate UI/UX Designer Track&quot;) and save up to 30% on your enrollment.
          </p>
          <Link href="/career-tracks" className="inline-block px-8 py-4 bg-[#F59E0B] text-slate-900 font-bold rounded-full hover:bg-[#d97706] transition text-lg">
            View Career Tracks
          </Link>
        </div>
      </div>
    </div>
  );
}