import PageContainer from "@/components/container/PageContainer";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import Header from "@/components/shared/Header";
import Image from "next/image";
import banner1 from "../../public/banner/banner1.webp";
import banner2 from "../../public/banner/banner2.webp";
import MenServices from "@/components/landing/MenServices";

export default function Home() {
  return (
    <>
      <div className="border-b">
        <PageContainer>
          <Header />
        </PageContainer>
      </div>
      <main>
        <PageContainer>
          <HeroSection />
          <ServicesSection />
          <Image src={banner1} className="w-full rounded-lg" />
          <MenServices />
          <Image src={banner2} className=" mt-8 w-full rounded-lg" />
        </PageContainer>
      </main>
    </>
  );
}
