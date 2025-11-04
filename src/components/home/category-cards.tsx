import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "HEADPHONES",
    slug: "headphones",
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    name: "SPEAKERS",
    slug: "speakers",
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    name: "EARPHONES",
    slug: "earphones",
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

export function CategoryCards() {
  return (
    <section className="container mx-auto px-6 py-24 lg:py-32">
      <div className="grid gap-16 md:grid-cols-3 md:gap-3 lg:gap-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="group relative flex flex-col items-center"
          >
            {/* Card Container */}
              <div className="relative w-full rounded-lg bg-gray-light pt-24 pb-6 transition-all">
              {/* Category Image - Positioned to overflow top */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="relative h-40 w-40">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Category Name */}
              <h3 className="mb-4 text-center text-[18px] font-bold uppercase tracking-[1.3px] text-black">
                {category.name}
              </h3>

              {/* Shop Link */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-[13px] font-bold uppercase tracking-[1px] text-black/50 transition-colors group-hover:text-primary">
                  Shop
                </span>
                <ChevronRight className="h-4 w-4 text-primary" strokeWidth={3} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
