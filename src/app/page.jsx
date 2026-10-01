import dynamic from "next/dynamic";
import AboutSection from "@/components/HomePage/AboutSection";
import CampusSection from "@/components/HomePage/CampusSection";
import DirectorsMessageSection from "@/components/HomePage/DirectorsMessageSection";
import HeroSection from "@/components/HomePage/HeroSection";

const PromoVideo = dynamic(() => import("@/components/HomePage/PromoVideo"), {
  ssr: false,
  loading: () => (
    <div className="max-w-6xl mx-auto my-10 h-[360px] rounded-xl bg-gray-200 animate-pulse" />
  ),
});

const TestimonialsSlider = dynamic(() => import("@/components/HomePage/TestimonialsSlider"), {
  ssr: false,
  loading: () => (
    <div className="max-w-6xl mx-auto my-10 h-[260px] rounded-xl bg-gray-200 animate-pulse" />
  ),
});

const ContactSection = dynamic(() => import("@/components/HomePage/ContactSection"), {
  ssr: false,
  loading: () => (
    <div className="max-w-6xl mx-auto my-10 h-[420px] rounded-xl bg-gray-200 animate-pulse" />
  ),
});

export const revalidate = 3600;

const page = () => {
  return (
    <>
      <HeroSection />
      <PromoVideo />
      <AboutSection />
      <CampusSection />
      <DirectorsMessageSection />
      <TestimonialsSlider />
      <ContactSection />
    </>
  );
};

export default page;
