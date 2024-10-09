import HeroSection from "@/components/Section/HeroSection";
import MenuSection from "@/components/Section/MenuSection";
import PopularCatagories from "@/components/Section/PopularCatagories";
import ServicesSection from "@/components/Section/ServicesSection";
import Testimonials from "@/components/Section/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCatagories />
      <MenuSection />
      <Testimonials />
      <ServicesSection />
    </>
  );
}
