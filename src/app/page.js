// "use client";
import PageContainer from "@/components/container/PageContainer";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import Header from "@/components/shared/Header";
import Image from "next/image";
import banner1 from "../../public/banner/banner1.webp";
import banner2 from "../../public/banner/banner2.webp";
import MenServices from "@/components/landing/MenServices";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/store");
  const data = await res.json();

  return (
    <>
      <main>
        <PageContainer>
          <HeroSection data={data?.hero} />
          <ServicesSection data={data?.hero} />
          <Image src={banner1} className="w-full rounded-lg" />
          <MenServices data={data?.hero} />
          <Image src={banner2} className=" mt-8 w-full rounded-lg" />
        </PageContainer>
      </main>
    </>
  );
}