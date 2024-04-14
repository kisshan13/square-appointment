import PageContainer from "@/components/container/PageContainer";
import HeroSection from "@/components/landing/HeroSection";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <PageContainer>
        <div>
          <Header />
        </div>
      </PageContainer>
      <main>
        <PageContainer>
          <HeroSection />
        </PageContainer>
      </main>
    </>
  );
}
