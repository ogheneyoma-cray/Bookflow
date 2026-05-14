"use client";

import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";
import { ShoppingCart, Trash2, Package } from "lucide-react";

const SHIPPING_USD = 4.99;
const FREE_SHIPPING_THRESHOLD_USD = 35;

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { formatPrice } = useCurrency();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingUSD = subtotal >= FREE_SHIPPING_THRESHOLD_USD ? 0 : SHIPPING_USD;
  const total = subtotal + shippingUSD;

  if (cart.length === 0) {
    return (
      <main
        className="min-h-screen bg-[#F9F5EE] flex items-center justify-center px-6"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="text-center space-y-5">
          <ShoppingCart size={48} className="text-[#D5C9B5] mx-auto" />
          <h1 className="text-3xl font-bold text-[#1C1007]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Your Cart is Empty
          </h1>
          <p className="text-[#6B6147]">You haven&apos;t added any books yet.</p>
          <Link
            href="/shop"
            className="inline-block bg-[#1C1007] text-[#F9F5EE] px-8 py-3 text-sm font-semibold hover:bg-[#C9A84C] hover:text-[#1C1007] transition-colors"
          >
            Browse the Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-[#F9F5EE]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <section className="bg-[#1C1007] px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Your Cart
          </h1>
          <p className="text-[#A89968] text-sm mt-1">{cart.length} item{cart.length !== 1 ? "s" : ""}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Item list */}
          <div className="md:col-span-2 space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#D5C9B5] p-5 flex items-start gap-4"
              >
                <div className="w-12 h-16 bg-[#EEE8DC] flex items-center justify-center shrink-0 border border-[#D5C9B5]">
                  <Package size={18} className="text-[#C9A84C]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2
                    className="font-bold text-[#1C1007] leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.name}
                  </h2>
                  <p className="text-xs text-[#A89968] mt-0.5">by {(item as typeof item & { author?: string }).author ?? ""} &middot; {(item as typeof item & { format?: string }).format ?? ""}</p>
                  <p className="text-xs text-[#6B6147] mt-0.5">SKU: {item.sku}</p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="font-bold text-[#1C1007]">{formatPrice(item.price)}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#A89968] hover:text-red-500 transition-colors"
                    aria-label="Remove"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-xs text-[#A89968] hover:text-[#6B6147] transition-colors mt-2"
            >
              Clear all items
            </button>
          </div>

          {/* Order summary */}
          <div className="bg-white border border-[#D5C9B5] p-6 h-fit space-y-4">
            <h2 className="font-bold text-[#1C1007] text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Order Summary
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-[#6B6147]">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#6B6147]">
                <span>Shipping</span>
                <span>
                  {shippingUSD === 0 ? (
                    <span className="text-[#2D5A3D] font-semibold">Free</span>
                  ) : (
                    formatPrice(shippingUSD)
                  )}
                </span>
              </div>
              {shippingUSD > 0 && (
                <p className="text-xs text-[#A89968] bg-[#F9F5EE] px-3 py-2 border border-[#D5C9B5]">
                  Add {formatPrice(FREE_SHIPPING_THRESHOLD_USD - subtotal)} more for free shipping
                </p>
              )}
              <div className="border-t border-[#D5C9B5] pt-3 flex justify-between font-bold text-[#1C1007]">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block w-full text-center bg-[#1C1007] text-[#F9F5EE] py-3.5 font-semibold text-sm hover:bg-[#C9A84C] hover:text-[#1C1007] transition-colors"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/shop"
              className="block w-full text-center border border-[#D5C9B5] text-[#6B6147] py-3 text-sm font-semibold hover:border-[#1C1007] hover:text-[#1C1007] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
