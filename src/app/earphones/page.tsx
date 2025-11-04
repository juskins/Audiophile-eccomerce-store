import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { AboutSection, CategoryCards } from "@/components/home";

export default function EarphonesPage() {
  return (
    <main>
      <section className="bg-black">
        <div className="container mx-auto px-6 py-12 text-center md:py-20">
          <h1 className="text-2xl font-bold tracking-[6px] text-white md:text-[40px]">
            EARPHONES
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 md:px-10 lg:px-[165px]">
        <div className="grid gap-24 lg:grid-cols-2 lg:items-center">
          {/* YX1 - image left */}
          <div>
            <div className="mx-auto w-full max-w-[520px] rounded-lg bg-gray p-8">
              <div className="relative h-[320px] w-full">
                <Image
                  src="/assets/product-yx1-earphones/desktop/image-product.jpg"
                  alt="YX1 Earphones"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[10px] text-primary">New Product</p>
            <h2 className="mb-6 text-3xl font-bold uppercase leading-[38px] tracking-[2px] md:text-4xl">YX1 Wireless Earphones</h2>
            <p className="mb-6 max-w-lg text-[15px] font-medium leading-[25px] text-black/60">
              Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless
              Earphones. Enjoy incredible high-fidelity sound even in noisy environments with
              its active noise cancellation feature.
            </p>
            <Link href="/earphones/yx1">
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
