"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, NumberInput } from "@/components/ui";
import { CategoryCards } from "@/components/home";
import { AboutSection } from "@/components/home";
import { useCart } from "@/context/cart-context";

export default function XX99MarkOnePage() {
   const [quantity, setQuantity] = useState(1);
   const { addToCart } = useCart();

   const handleAddToCart = () => {
      addToCart({
         id: "xx99-mark-one",
         name: "XX99 Mark I Headphones",
         shortName: "XX99 MK I",
         price: 1750,
         quantity,
         image: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
      });
   };

   return (
      <main className="md:px-10 lg:px-[165px]">
         {/* Go Back Link */}
         <section className="container mx-auto px-6 pt-20 md:px-10 lg:px-0">
            <Link
               href="/headphones"
               className="text-[15px] font-medium text-black/50 transition-colors hover:text-primary"
            >
               Go Back
            </Link>
         </section>

         {/* Product Hero Section */}
         <section className="container mx-auto px-6 py-14 md:px-10 lg:px-0">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
               {/* Product Image */}
               <div className="overflow-hidden rounded-lg bg-gray">
                  <div className="relative h-[327px] w-full md:h-[480px]">
                     <Image
                        src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                        alt="XX99 Mark I Headphones"
                        fill
                        className="object-cover"
                     />
                  </div>
               </div>

               {/* Product Info */}
               <div className="lg:max-w-[445px] text-center lg:text-left">
                  <h1 className="mb-6 text-[28px] font-bold uppercase leading-[32px] tracking-[1px] md:text-[40px] md:leading-[44px] md:tracking-[1.5px]">
                     XX99 Mark I Headphones
                  </h1>
                  <p className="mb-6 text-[15px] font-medium leading-[25px] text-black/50">
                     As the gold standard for headphones, the classic XX99 Mark I offers
                     detailed and accurate audio reproduction for audiophiles, mixing
                     engineers, and music aficionados alike in studios and on the go.
                  </p>

                  {/* Price */}
                  <p className="mb-8 text-lg font-bold tracking-[1.3px] text-black">
                     $ 1,750
                  </p>

                  {/* Quantity & Add to Cart */}
                  <div className="flex items-center gap-4">
                     <NumberInput value={quantity} onChange={setQuantity} />
                     <Button variant="primary" onClick={handleAddToCart}>
                        Add to Cart
                     </Button>
                  </div>
               </div>
            </div>
         </section>

         {/* Features & In the Box */}
         <section className="container mx-auto px-6 py-14 md:px-10 lg:px-0">
            <div className="gap-16 flex justify-between flex-col md:flex-row lg:gap-24 w-full">
               {/* Features */}
               <div className="lg:w-[60%]">
                  <h2 className="mb-8 text-2xl font-bold uppercase tracking-[0.86px] md:text-[32px] md:tracking-[1.15px]">
                     Features
                  </h2>
                  <div className="space-y-6 text-[15px] font-medium leading-[25px] text-black/50">
                     <p>
                        As the headphones all others are measured against, the XX99 Mark I
                        demonstrates over five decades of audio expertise, redefining the
                        critical listening experience. This pair of closed-back headphones
                        are made of industrial, aerospace-grade materials to emphasize
                        durability at a relatively light weight of 28 oz.
                     </p>
                     <p>
                        From the handcrafted microfiber ear cushions to the robust metal
                        headband with inner damping element, the components work together to
                        deliver comfort and uncompromising sound. Its closed-back design
                        delivers up to 27 dB of passive noise cancellation, reducing
                        resonance by reflecting sound to a dedicated absorber. For
                        connectivity, a specially tuned cable is included with a balanced
                        gold connector.
                     </p>
                  </div>
               </div>

               {/* In the Box */}
               <div className="lg:w-[40%]">
                  <h2 className="mb-8 text-2xl font-bold uppercase tracking-[0.86px] md:text-[32px] md:tracking-[1.15px]">
                     In the Box
                  </h2>
                  <ul className="space-y-2">
                     <li className="flex gap-6">
                        <span className="text-[15px] font-bold text-primary">1x</span>
                        <span className="text-[15px] font-medium text-black/50">
                           Headphone Unit
                        </span>
                     </li>
                     <li className="flex gap-6">
                        <span className="text-[15px] font-bold text-primary">2x</span>
                        <span className="text-[15px] font-medium text-black/50">
                           Replacement Earcups
                        </span>
                     </li>
                     <li className="flex gap-6">
                        <span className="text-[15px] font-bold text-primary">1x</span>
                        <span className="text-[15px] font-medium text-black/50">
                           User Manual
                        </span>
                     </li>
                     <li className="flex gap-6">
                        <span className="text-[15px] font-bold text-primary">1x</span>
                        <span className="text-[15px] font-medium text-black/50">
                           3.5mm 5m Audio Cable
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         {/* Image Gallery */}
         <section className="container mx-auto px-6 py-14 md:px-10 lg:px-0">
            <div className="grid gap-5 md:grid-cols-[1fr,1fr] md:grid-rows-2 md:gap-8">
               <div className="relative h-[174px] overflow-hidden rounded-lg md:h-[280px] lg:h-[280px]">
                  <Image
                     src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
                     alt="Product detail 1"
                     fill
                     className="object-cover"
                  />
               </div>

               <div className="relative h-[174px] overflow-hidden rounded-lg md:h-[280px] lg:h-[280px]">
                  <Image
                     src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
                     alt="Product detail 2"
                     fill
                     className="object-cover"
                  />
               </div>

               <div className="relative h-[368px] overflow-hidden rounded-lg md:col-start-2 md:row-span-2 md:row-start-1 md:h-[592px]">
                  <Image
                     src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
                     alt="Product detail 3"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>
         </section>

         {/* You May Also Like */}
         <section className="container mx-auto px-6 py-14 md:px-10 lg:px-0">
            <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-[0.86px] md:mb-14 md:text-[32px] md:tracking-[1.15px]">
               You May Also Like
            </h2>

            <div className="grid gap-14 md:grid-cols-3 md:gap-3 lg:gap-8">
               {/* XX99 Mark II */}
               <div className="text-center">
                  <div className="mb-8 overflow-hidden rounded-lg bg-gray">
                     <div className="relative h-[265px] w-full">
                        <Image
                           src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
                           alt="XX99 Mark II"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
                  <h3 className="mb-8 text-2xl font-bold uppercase tracking-[1.7px]">
                     XX99 Mark II
                  </h3>
                  <Link href="/headphones/xx99-mark-two">
                     <Button variant="primary">See Product</Button>
                  </Link>
               </div>

               {/* XX59 */}
               <div className="text-center">
                  <div className="mb-8 overflow-hidden rounded-lg bg-gray">
                     <div className="relative h-[265px] w-full">
                        <Image
                           src="/assets/shared/desktop/image-xx59-headphones.jpg"
                           alt="XX59"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
                  <h3 className="mb-8 text-2xl font-bold uppercase tracking-[1.7px]">
                     XX59
                  </h3>
                  <Link href="/headphones/xx59">
                     <Button variant="primary">See Product</Button>
                  </Link>
               </div>

               {/* ZX9 Speaker */}
               <div className="text-center">
                  <div className="mb-8 overflow-hidden rounded-lg bg-gray">
                     <div className="relative h-[265px] w-full">
                        <Image
                           src="/assets/shared/desktop/image-zx9-speaker.jpg"
                           alt="ZX9 Speaker"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
                  <h3 className="mb-8 text-2xl font-bold uppercase tracking-[1.7px]">
                     ZX9 Speaker
                  </h3>
                  <Link href="/speakers/zx9">
                     <Button variant="primary">See Product</Button>
                  </Link>
               </div>
            </div>
         </section>

         {/* Category Cards */}
         <section className="container mx-auto px-6 pb-14 md:px-10 lg:px-0">
            <CategoryCards />
         </section>

         {/* About Section */}
         <AboutSection />
      </main>
   );
}
