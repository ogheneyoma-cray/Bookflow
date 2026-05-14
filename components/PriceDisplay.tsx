"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function PriceDisplay({
  usdPrice,
  className,
}: {
  usdPrice: number;
  className?: string;
}) {
  const { formatPrice } = useCurrency();
  return <span className={className}>{formatPrice(usdPrice)}</span>;
}
