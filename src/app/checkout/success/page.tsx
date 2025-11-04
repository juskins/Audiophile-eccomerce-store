"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  
  // Get order ID from session storage on initial load
  const [orderId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const storedOrderId = sessionStorage.getItem("lastOrderId");
      if (storedOrderId) {
        sessionStorage.removeItem("lastOrderId");
        return storedOrderId;
      }
    }
    return null;
  });

  const subtotal = total;
  const shipping = 50;
  const grandTotal = subtotal + shipping;

  // Get the first item and count of remaining items
  const firstItem = items[0];
  const remainingCount = items.length - 1;

  useEffect(() => {
    // Clear cart after confirmation
    const timer = setTimeout(() => {
      clearCart();
    }, 3000);

    return () => clearTimeout(timer);
  }, [clearCart]);

  // Redirect if no items (user accessed directly without checkout)
  useEffect(() => {
    if (items.length === 0 && !orderId) {
      router.push("/");
    }
  }, [items.length, orderId, router]);

  return (
    <div className="bg-black/40 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg p-8 md:p-12 max-w-[540px] w-full">
        <div className="mb-6">
          <CircleCheck className="w-16 h-16 text-primary" strokeWidth={1.5} />
        </div>

        <h1 className="text-[24px] md:text-[32px] font-bold tracking-[0.86px] md:tracking-[1.14px] uppercase mb-4 md:mb-6 leading-[28px] md:leading-[36px]">
          Thank you
          <br />
          for your order
        </h1>

        <p className="text-[15px] leading-[25px] text-black/50 mb-4">
          You will receive an email confirmation shortly.
        </p>

        {orderId && (
          <div className="bg-gray-light p-4 rounded mb-6">
            <p className="text-[13px] text-black/50 mb-1">Order ID</p>
            <p className="text-[15px] font-bold text-primary">{orderId}</p>
          </div>
        )}

        <div className="rounded-lg overflow-hidden mb-6 md:flex">
          {/* Order Items */}
          <div className="bg-gray p-6 md:flex-1">
            {firstItem && (
              <div className="flex items-center gap-4 pb-3 mb-3 border-b border-black/10">
                <div className="w-[50px] h-[50px] rounded-lg overflow-hidden bg-gray-light flex-shrink-0">
                  <Image
                    src={firstItem.image}
                    alt={firstItem.name}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold leading-[25px] truncate">
                    {firstItem.name}
                  </h3>
                  <p className="text-[14px] font-bold leading-[25px] text-black/50">
                    $ {firstItem.price.toLocaleString()}
                  </p>
                </div>
                <div className="text-[15px] font-bold leading-[25px] text-black/50">
                  x{firstItem.quantity}
                </div>
              </div>
            )}

            {remainingCount > 0 && (
              <p className="text-[12px] font-bold leading-[16px] tracking-[-0.21px] text-black/50 text-center">
                and {remainingCount} other item{remainingCount > 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Grand Total */}
          <div className="bg-black p-6 md:w-[198px] flex flex-col justify-end">
            <p className="text-[15px] leading-[25px] text-white/50 uppercase mb-2">
              Grand Total
            </p>
            <p className="text-[18px] font-bold text-white">
              $ {grandTotal.toLocaleString()}
            </p>
          </div>
        </div>

        <Button variant="primary" className="w-full" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
