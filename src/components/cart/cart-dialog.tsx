"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export function CartDialog() {
  const { items, updateQuantity, clearCart, total, isCartOpen, closeCart } =
    useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Cart Modal */}
      <div className="fixed md:top-[90px] md:right-0 z-50 md:w-full w-[90%] max-w-[377px] mx-6 md:mx-10 lg:right-[165px] lg:mx-0">
        <div className="bg-white rounded-lg p-8 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold tracking-[1.29px] uppercase">
              Cart ({itemCount})
            </h2>
            <button
              onClick={clearCart}
              className="text-[15px] leading-[25px] text-black/50 hover:text-primary underline transition-colors"
            >
              Remove all
            </button>
          </div>

          {/* Cart Items */}
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-black/50">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    {/* Product Image */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-bold leading-[25px] truncate">
                        {item.shortName}
                      </h3>
                      <p className="text-sm font-bold text-black/50">
                        $ {item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center bg-gray h-8 w-24">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex-1 h-full text-black/25 hover:text-primary transition-colors text-[13px] font-bold"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="flex-1 h-full flex items-center justify-center text-[13px] font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex-1 h-full text-black/25 hover:text-primary transition-colors text-[13px] font-bold"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[15px] leading-[25px] text-black/50 uppercase">
                  Total
                </span>
                <span className="text-lg font-bold">
                  $ {total.toLocaleString()}
                </span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" onClick={closeCart}>
                <Button variant="primary" className="w-full">
                  Checkout
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
