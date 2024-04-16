import PageContainer from "@/components/container/PageContainer";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import Header from "@/components/shared/Header";

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
        </PageContainer>
      </main>
    </>
  );
}
