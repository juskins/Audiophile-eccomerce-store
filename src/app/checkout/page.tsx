"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { createOrder } from "@/lib/actions";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"e-money" | "cash">(
    "e-money"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = total;
  const shipping = 50;
  const vat = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    // Validation
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const zipCode = formData.get("zipCode") as string;
    const city = formData.get("city") as string;
    const country = formData.get("country") as string;

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email is invalid";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!address) newErrors.address = "Address is required";
    if (!zipCode) newErrors.zipCode = "ZIP code is required";
    if (!city) newErrors.city = "City is required";
    if (!country) newErrors.country = "Country is required";

    if (paymentMethod === "e-money") {
      const eMoneyNumber = formData.get("eMoneyNumber") as string;
      const eMoneyPin = formData.get("eMoneyPin") as string;

      if (!eMoneyNumber) newErrors.eMoneyNumber = "e-Money Number is required";
      if (!eMoneyPin) newErrors.eMoneyPin = "e-Money PIN is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, create order
    setIsSubmitting(true);
    try {
      const orderData = {
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        shippingAddress: address,
        shippingZip: zipCode,
        shippingCity: city,
        shippingCountry: country,
        paymentMethod: paymentMethod === "e-money" ? "e-money" : "cash-on-delivery",
        eMoneyNumber: paymentMethod === "e-money" ? (formData.get("eMoneyNumber") as string) : undefined,
        eMoneyPin: paymentMethod === "e-money" ? (formData.get("eMoneyPin") as string) : undefined,
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          shortName: item.shortName,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        subtotal,
        shipping,
        vat,
        grandTotal,
      };

      const result = await createOrder(orderData);

      if (result.success) {
        // Store order ID in session storage for success page
        sessionStorage.setItem("lastOrderId", result.orderId!);
        router.push("/checkout/success");
      } else {
        setErrors({ submit: "Failed to create order. Please try again." });
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setErrors({ submit: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="bg-gray min-h-screen">
        <div className="container mx-auto px-6 md:px-10 lg:px-0 py-8">
          <Link
            href="/"
            className="text-[15px] leading-[25px] text-black/50 hover:text-primary inline-block mb-6"
          >
            Go Back
          </Link>
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-[32px] font-bold mb-4">Your cart is empty</h1>
            <p className="text-black/50 mb-6">
              Add some products to your cart before checking out.
            </p>
            <Button variant="primary" asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray min-h-screen">
      <div className="container mx-auto px-6 md:px-10 lg:px-0 py-8 lg:py-20">
        <Link
          href="/"
          className="text-[15px] leading-[25px] text-black/50 hover:text-primary inline-block mb-6"
        >
          Go Back
        </Link>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
            {/* Checkout Form */}
            <div className="bg-white rounded-lg p-6 md:p-12">
              <h1 className="text-[28px] md:text-[32px] font-bold tracking-[1px] md:tracking-[1.14px] uppercase mb-8 md:mb-10">
                Checkout
              </h1>

              {/* Billing Details */}
              <div className="mb-8">
                <h2 className="text-[13px] font-bold tracking-[0.93px] uppercase text-primary mb-4">
                  Billing Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Name"
                    name="name"
                    placeholder="Alexei Ward"
                    error={errors.name}
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="alexei@mail.com"
                    error={errors.email}
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    placeholder="+1 202-555-0136"
                    error={errors.phone}
                  />
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mb-8">
                <h2 className="text-[13px] font-bold tracking-[0.93px] uppercase text-primary mb-4">
                  Shipping Info
                </h2>
                <div className="space-y-6">
                  <Input
                    label="Address"
                    name="address"
                    placeholder="1137 Williams Avenue"
                    error={errors.address}
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="ZIP Code"
                      name="zipCode"
                      placeholder="10001"
                      error={errors.zipCode}
                    />
                    <Input
                      label="City"
                      name="city"
                      placeholder="New York"
                      error={errors.city}
                    />
                  </div>
                  <Input
                    label="Country"
                    name="country"
                    placeholder="United States"
                    error={errors.country}
                  />
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h2 className="text-[13px] font-bold tracking-[0.93px] uppercase text-primary mb-4">
                  Payment Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[12px] font-bold tracking-[-0.21px] block mb-2">
                      Payment Method
                    </label>
                  </div>
                  <div className="space-y-4">
                    <RadioGroup
                      name="paymentMethod"
                      options={[
                        { value: "e-money", label: "e-Money" },
                        { value: "cash", label: "Cash on Delivery" },
                      ]}
                      value={paymentMethod}
                      onChange={(value) =>
                        setPaymentMethod(value as "e-money" | "cash")
                      }
                    />
                  </div>
                </div>

                {paymentMethod === "e-money" && (
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <Input
                      label="e-Money Number"
                      name="eMoneyNumber"
                      placeholder="238521993"
                      error={errors.eMoneyNumber}
                    />
                    <Input
                      label="e-Money PIN"
                      name="eMoneyPin"
                      placeholder="6891"
                      type="password"
                      error={errors.eMoneyPin}
                    />
                  </div>
                )}

                {paymentMethod === "cash" && (
                  <div className="mt-8 flex gap-8">
                    <div className="flex-shrink-0">
                      <Image
                        src="/assets/checkout/icon-cash-on-delivery.svg"
                        alt="Cash on Delivery"
                        width={48}
                        height={48}
                      />
                    </div>
                    <p className="text-[15px] leading-[25px] text-black/50">
                      The &apos;Cash on Delivery&apos; option enables you to
                      pay in cash when our delivery courier arrives at your
                      residence. Just make sure your address is correct so that
                      your order will not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-lg p-6 md:p-8 h-fit">
              <h2 className="text-[18px] font-bold tracking-[1.29px] uppercase mb-8">
                Summary
              </h2>

              <div className="space-y-6 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-bold leading-[25px] truncate">
                        {item.name}
                      </h3>
                      <p className="text-[14px] font-bold leading-[25px] text-black/50">
                        $ {item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-[15px] font-bold leading-[25px] text-black/50">
                      x{item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[15px] leading-[25px] text-black/50 uppercase">
                    Total
                  </span>
                  <span className="text-[18px] font-bold">
                    $ {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] leading-[25px] text-black/50 uppercase">
                    Shipping
                  </span>
                  <span className="text-[18px] font-bold">
                    $ {shipping.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] leading-[25px] text-black/50 uppercase">
                    VAT (included)
                  </span>
                  <span className="text-[18px] font-bold">
                    $ {vat.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <span className="text-[15px] leading-[25px] text-black/50 uppercase">
                  Grand Total
                </span>
                <span className="text-[18px] font-bold text-primary">
                  $ {grandTotal.toLocaleString()}
                </span>
              </div>

              {errors.submit && (
                <div className="mb-4 p-3 bg-error/10 border border-error rounded text-error text-sm">
                  {errors.submit}
                </div>
              )}

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Continue & Pay"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
