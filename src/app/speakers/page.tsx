import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { AboutSection, CategoryCards } from "@/components/home";

export default function SpeakersPage() {
   return (
      <main>
         <section className="bg-black">
            <div className="container mx-auto px-6 py-12 text-center md:py-20">
               <h1 className="text-2xl font-bold tracking-[6px] text-white md:text-[40px]">
                  SPEAKERS
               </h1>
            </div>
         </section>

         <section className="container mx-auto px-6 py-20 md:px-10 lg:px-[165px]">
            <div className="grid md:gap-24 lg:grid-cols-2 lg:items-center">
               {/* ZX9 Speaker - image left */}
               <div>
                  <div className="mx-auto w-full max-w-[520px] rounded-lg bg-gray-light px-8 py-12 lg:px-12">
                     <div className="relative h-[320px] w-full">
                        <Image
                           src="/assets/home/desktop/image-speaker-zx9.png"
                           alt="ZX9 Speaker"
                           fill
                           className="object-contain"
                        />
                     </div>
                  </div>
               </div>

               <div className=" w-full max-w-lg text-center lg:text-left">
                  <p className="mb-4 text-sm uppercase tracking-[10px] text-primary">New Product</p>
                  <h2 className="mb-6 text-3xl font-bold uppercase leading-[38px] tracking-[2px] md:text-4xl">ZX9 Speaker</h2>
                  <p className="mb-6 max-w-lg text-[15px] font-medium leading-[25px] text-black/60">
                     Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                  </p>
                  <Link href="/speakers/zx9">
                     <Button variant="primary">See Product</Button>
                  </Link>
               </div>
            </div>

            {/* ZX7 - image right */}
            <div className="mt-24 grid md:gap-24 lg:grid-cols-2 lg:items-center">
               <div className="max-w-lg text-center lg:text-left order-2 lg:order-1">
                  <h2 className="mb-6 text-3xl font-bold uppercase leading-[38px] tracking-[2px] md:text-4xl">ZX7 Speaker</h2>
                  <p className="mb-6 max-w-md text-[15px] font-medium leading-[25px] text-black/60">
                     Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker
                     uses high-end audiophile
                     components that represents the top of the line powered speakers for home or studio use.
                  </p>
                  <Link href="/speakers/zx7">
                     <Button variant="primary">See Product</Button>
                  </Link>
               </div>

               <div>
                  <div className="mx-auto w-full max-w-[480px] rounded-lg bg-gray-light p-8">
                     <div className="relative h-[320px] w-full">
                        <Image
                           src="/assets/home/desktop/image-speaker-zx77.jpg"
                           alt="ZX7 Speaker"
                           fill
                           className="object-contain object-center"
                        />
                     </div>
                  </div>
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
