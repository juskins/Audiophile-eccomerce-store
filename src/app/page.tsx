import {
  HeroSection,
  CategoryCards,
  FeaturedProducts,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="md:px-10 lg:px-[165px]">
        <CategoryCards />
        <FeaturedProducts />
      </div>
    </main>
  );
}
