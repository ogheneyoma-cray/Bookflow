import Link from "next/link";
import { BookOpen, Download, PlayCircle } from "lucide-react";
import { products } from "@/lib/products";

export default function LibraryPage() {
  // Mocking 3 purchased books. In a real app, this would come from a database or global state.
  const purchasedBooks = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#EDF2F4] font-['Merriweather',serif] py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif] mb-4">
          My Library
        </h1>
        
        {purchasedBooks.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center min-h-100">
            <BookOpen className="w-16 h-16 text-slate-300 mb-4" />
            <h2 className="text-2xl font-bold text-[#2B2D42] font-['Montserrat',sans-serif] mb-2">
              Your library is empty
            </h2>
            <p className="text-slate-500 mb-6">
              You haven't added any books yet.
            </p>
            
            <Link href="/shop" className="bg-[#D90429] text-white px-8 py-3 rounded-full font-bold font-['Montserrat',sans-serif] hover:bg-[#b00320] transition">
              Browse Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purchasedBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition duration-300">
                
                {/* Book Cover Placeholder */}
                <div className="bg-[#2B2D42] p-8 flex flex-col items-center justify-center text-center relative aspect-4/3">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
                  <BookOpen className="w-12 h-12 text-[#EDF2F4] mb-4 relative z-10 opacity-50" />
                  <h3 className="text-xl font-bold text-white relative z-10 font-['Montserrat',sans-serif] leading-tight">
                    {book.name}
                  </h3>
                </div>
                
                {/* Book Details and Actions */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <p className="text-sm text-slate-500 font-['Montserrat',sans-serif] uppercase tracking-wider font-bold">
                    {book.category.split('&')[0].trim()}
                  </p>
                  
                  <div className="mt-auto pt-4 flex gap-3">
                    <button className="flex-1 bg-[#EDF2F4] text-[#2B2D42] py-2.5 rounded-xl font-bold font-['Montserrat',sans-serif] hover:bg-slate-200 transition flex items-center justify-center gap-2">
                      <PlayCircle size={18} />
                      Read
                    </button>
                    <button className="flex-1 bg-[#D90429] text-white py-2.5 rounded-xl font-bold font-['Montserrat',sans-serif] hover:bg-[#b00320] transition flex items-center justify-center gap-2">
                      <Download size={18} />
                      Download
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}