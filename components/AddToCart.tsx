"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={added}
      className={`w-full md:w-auto flex items-center justify-center gap-2 text-white font-bold py-4 px-8 rounded-full transition font-['Montserrat',_sans-serif] text-lg ${
        added ? "bg-emerald-600 hover:bg-emerald-700" : "bg-[#D90429] hover:bg-[#B90424]"
      }`}
    >
      {added ? <Check size={20} /> : <ShoppingCart size={20} />}
      {added ? "Added to Cart!" : `Add to Cart - $${product.price.toFixed(2)}`}
    </button>
  );
}