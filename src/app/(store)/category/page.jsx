import ProductCard from "@/components/cards/ProductCard";
import Banner from "@/components/Category/Banner";
import SubCategory from "@/components/Category/SubCategory";
import PageContainer from "@/components/container/PageContainer";

export default function Home({ params }) {
  return (
    <div className="my-8">
      <PageContainer>
        <div className="flex gap-3 w-full ">
          <div className="w-[28vw]">
            <SubCategory />
          </div>
          <div className="w-[72vw]">
            <Banner />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
