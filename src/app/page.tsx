import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import EnquirySection from "@/components/home/EnquirySection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* OUR SERVICES */}
      <ServicesSection />
      <WelcomeSection />
      <EnquirySection />
      <WhyChooseUs />
    </main>
  );
}
