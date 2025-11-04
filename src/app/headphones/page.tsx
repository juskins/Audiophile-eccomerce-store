import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { AboutSection, CategoryCards } from "@/components/home";

export default function HeadphonesPage() {
   return (
      <main>
         {/* Black header */}
         <section className="bg-black">
            <div className="container mx-auto px-6 py-12 text-center md:py-20">
               <h1 className="text-2xl font-bold tracking-[6px] text-white md:text-[40px]">
                  HEADPHONES
               </h1>
            </div>
         </section>

         {/* Products list */}
         <section className="container mx-auto px-6 py-20 md:px-10 lg:px-[165px] ">
            <div className="grid gap-24 lg:grid-cols-2 lg:items-center">
               {/* XX99 Mark II - left image */}
               <div className="order-1 lg:order-1">
                  <div className="mx-auto w-full max-w-[520px] rounded-lg bg-gray p-8">
                     <div className="relative h-[320px] w-full">
                        <Image
                           src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
                           alt="XX99 Mark II Headphones"
                           fill
                           className="object-contain"
                        />
                     </div>
                  </div>
               </div>

               <div className="order-2 lg:order-2 w-full max-w-lg">
                  <p className="mb-4 text-sm uppercase tracking-[10px] text-primary">New Product</p>
                  <h2 className="mb-6 text-3xl font-bold uppercase leading-[38px] tracking-[2px] md:text-4xl">XX99 Mark II Headphones</h2>
                  <p className="mb-6 max-w-lg text-[15px] font-medium leading-[25px] text-black/60">
                     The new XX99 Mark II headphones is the pinnacle of pristine audio.
                     It redefines your premium headphone experience by reproducing the
                     balanced depth and precision of studio-quality sound.
                  </p>
                  <Link href="/headphones/xx99-mark-two">
                     <Button variant="primary">See Product</Button>
                  </Link>
               </div>
            </div>

            {/* Second product - XX99 Mark I (image on right) */}
            <div className="mt-24 grid gap-24 lg:grid-cols-2 lg:items-center ">
               <div className="order-2 lg:order-1">
                  <h2 className="mb-6 text-3xl font-bold uppercase leading-[38px] tracking-[2px] md:text-4xl">XX99 Mark I Headphones</h2>
                  <p className="mb-6 max-w-lg text-[15px] font-medium leading-[25px] text-black/60">
                     As the gold standard for headphones, the classic XX99 Mark I offers
                     detailed and accurate audio reproduction for audiophiles, mixing
                     engineers, and music aficionados alike in studios and on the go.
                  </p>
                  <Link href="/headphones/xx99-mark-one">
                     <Button variant="primary">See Product</Button>
                  </Link>
               </div>

               <div className="order-1 lg:order-2">
                  <div className="mx-auto w-full max-w-[480px] rounded-lg p-8">
                     <div className="relative h-[320px] w-full">
                        <Image
                           src="/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
                           alt="XX99 Mark I Headphones"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>
            </div>

            {/* Third product - XX59 */}
            <div className="mt-24 grid gap-24 lg:grid-cols-2 lg:items-center">
               <div className="order-1">
                  <div className="mx-auto w-full max-w-[520px] rounded-lg bg-gray p-8">
                     <div className="relative h-[320px] w-full">
                        <Image
                           src="/assets/shared/desktop/image-xx59-headphones.jpg"
                           alt="XX59 Headphones"
                           fill
                           className="object-contain"
                        />
                     </div>
                  </div>
               </div>

               <div className="order-2">
                  <h3 className="mb-6 text-2xl font-bold uppercase tracking-[1px]">XX59 Headphones</h3>
                  <p className="mb-6 max-w-md text-[15px] font-medium leading-[25px] text-black/60">
                     Enjoy your audio almost anywhere and customize it to your specific
                     tastes with the XX59 headphones. The stylish yet durable
                     versatile wireless headset is a brilliant companion at home or on
                     the move.
                  </p>
                  <Link href="/headphones/xx59">
                     <Button variant="primary">See Product</Button>
                  </Link>
               </div>
            </div>

            {/* Category cards */}
            <div className="mt-32">
               <CategoryCards />
            </div>

            {/* About Section */}
            <AboutSection />
         </section>
      </main>
   );
}
