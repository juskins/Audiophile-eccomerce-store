import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AboutSection } from "./about-section";

export function FeaturedProducts() {
  return (
    <section className="container mx-auto px-6 pb-24 lg:pb-32">
      <div className="space-y-8 lg:space-y-12">
        {/* ZX9 Speaker - Primary Feature */}
        <div className="relative overflow-hidden rounded-lg bg-primary px-6 py-14 md:px-16 lg:flex lg:justify-center lg:items-end lg:gap-16 lg:px-24 lg:pt-24 lg:pb-0">
          {/* Background Circles Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[558px] w-[558px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 lg:left-auto lg:right-[50%] lg:top-1/2 lg:h-[944px] lg:w-[944px] lg:-translate-y-1/2 lg:translate-x-1/2"></div>
            <div className="absolute left-1/2 top-0 h-[472px] w-[472px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 lg:left-auto lg:right-[50%] lg:top-1/2 lg:h-[790px] lg:w-[790px] lg:-translate-y-1/2 lg:translate-x-1/2"></div>
            <div className="absolute left-1/2 top-0 h-[386px] w-[386px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 lg:left-auto lg:right-[50%] lg:top-1/2 lg:h-[636px] lg:w-[636px] lg:-translate-y-1/2 lg:translate-x-1/2"></div>
          </div>

          {/* Speaker Image */}
          <div className="relative -bottom-4 z-10 mx-auto mb-8 h-52 w-44 md:h-[237px] md:w-[197px] lg:mx-0 lg:mb-0 lg:h-[493px] lg:w-[410px] lg:flex-shrink-0">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center lg:max-w-[349px] lg:pb-[124px] lg:text-left">
            <h2 className="mb-6 text-4xl font-bold uppercase leading-[40px] tracking-[1.3px] text-white md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              ZX9
              <br />
              SPEAKER
            </h2>
            <p className="mb-6 text-[15px] font-medium leading-[25px] text-white/75 md:mb-10 lg:mb-10">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href="/speakers/zx9">
              <Button variant="secondary" size="lg">
                See Product
              </Button>
            </Link>
          </div>
        </div>

        {/* ZX7 Speaker - Secondary Feature */}
        <div className="relative overflow-hidden rounded-lg bg-gray px-6 py-24 md:px-16 lg:px-24">
          <div className="absolute inset-0">
            <Image
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt="ZX7 Speaker"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <h3 className="mb-8 text-[28px] font-bold uppercase leading-[38px] tracking-[2px] text-black">
              ZX7 Speaker
            </h3>
            <Link href="/speakers/zx7">
              <Button variant="outline" size="lg">
                See Product
              </Button>
            </Link>
          </div>
        </div>

        {/* YX1 Earphones - Tertiary Feature */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Image */}
          <div className="relative h-52 overflow-hidden rounded-lg md:h-80">
            <Image
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex items-center rounded-lg bg-gray-light px-6 py-10 md:px-10 lg:px-24">
            <div>
              <h3 className="mb-8 text-[28px] font-bold uppercase leading-[38px] tracking-[2px] text-black">
                YX1 Earphones
              </h3>
              <Link href="/earphones/yx1">
                <Button variant="outline" size="lg">
                  See Product
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <AboutSection />
      </div>
    </section>
  );
}
