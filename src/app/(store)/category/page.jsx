"use client";
import ProductCard from "@/components/cards/ProductCard";
import Banner from "@/components/Category/Banner";
import SubCategory from "@/components/Category/SubCategory";
import PageContainer from "@/components/container/PageContainer";
import { apiGetProductsByCategory } from "@/lib/api/products.api";

export default async function Home({ params, searchParams }) {

  const response = await apiGetProductsByCategory(searchParams?.id);
  const products = response.data;

  return (
    <div className="my-8">
      <PageContainer>
        <div className="flex gap-3 w-full ">
          <div className="w-[28vw]">
            <SubCategory data={products?.subCategories} />
          </div>
          <div className="w-[72vw]">
            <Banner data={products?.products} />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
