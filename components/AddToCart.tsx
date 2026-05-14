"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
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
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-sm transition-colors ${
        added
          ? "bg-[#2D5A3D] text-white"
          : "bg-[#C9A84C] text-[#1C1007] hover:bg-[#B8943D]"
      }`}
    >
      {added ? <Check size={16} /> : <ShoppingCart size={16} />}
      {added ? "Added to Cart!" : `Add to Cart — ${formatPrice(product.price)}`}
    </button>
  );
}
