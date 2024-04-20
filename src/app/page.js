import PageContainer from "@/components/container/PageContainer";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import Image from "next/image";
import MenServices from "@/components/landing/MenServices";

import banner2 from "../../public/banner/banner2.webp";
import banner1 from "../../public/banner/banner1.webp";

export default async function Home() {

  const response = await fetch("http://localhost:3000/api/store");
  const data = await response.json();


  return (
    <>
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
