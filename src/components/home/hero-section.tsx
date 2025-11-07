import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-black bg-[url('/assets/home/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay for better text readability */}
      <div className="bg-black/40">
        <div className="container mx-auto px-6 py-28 md:px-10 md:py-32 lg:px-[165px] lg:py-40">
          <div className="mx-auto max-w-[398px] text-center lg:mx-0 lg:text-left">
            {/* Overline */}
            <p className="mb-4 text-sm uppercase tracking-[10px] text-white/50 md:mb-6">
              New Product
            </p>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold uppercase leading-[40px] tracking-[1.3px] text-white md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              XX99 Mark II Headphones
            </h1>

            {/* Description */}
            <p className="mb-7 text-[15px] font-medium leading-[25px] text-white/75 md:mb-10">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music <br /> enthusiast.
            </p>

            {/* CTA Button */}
            <Link href="/headphones/xx99-mark-two">
              <Button variant="primary" size="lg">
                See Product
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
