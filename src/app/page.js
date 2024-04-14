import PageContainer from "@/components/container/PageContainer";
import Services from "@/components/landing/Services";
import Header from "@/components/shared/Header";
import ServiceContainer from "@/components/shared/ServiceContainer";

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
          <Services />
        </PageContainer>
      </main>
    </>
  );
}