import Image from "next/image";

export function AboutSection() {
  return (
    <section className="container mx-auto px-6 pb-24 lg:pb-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image - Order changes on desktop */}
        <div className="relative h-80 overflow-hidden rounded-lg lg:order-2 lg:h-[588px]">
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Person enjoying high-quality audio"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center text-center lg:order-1 lg:text-left">
          <h2 className="mb-8 text-[28px] font-bold uppercase leading-[38px] tracking-[1px] text-black md:text-[40px] md:leading-[44px] md:tracking-[1.5px]">
            Bringing you the{" "}
            <span className="text-primary">best</span> audio gear
          </h2>
          <p className="text-[15px] font-medium leading-[25px] text-black/50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
