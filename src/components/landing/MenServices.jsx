"use client";
import ServiceCard from "../cards/ServiceCard";
import ServiceContainer from "../shared/ServiceContainer";

function MenServices({ data }) {

  return (
    <ServiceContainer title={data?.secondaryCategory?.title} button={"See All"} href={`/category?id=${data?.secondaryCategory?.category?.at(0)?.id}`}>
      <div className="grid grid-cols-5 gap-5 overflow-x-scroll scrollbar-hide">
        {data?.secondaryCategory?.category?.map((service, i) => (
          <div className="flex-1 max-w-[250px]">
            <ServiceCard
              src={service?.image}
              alt={service?.categoryData?.name}
              title={service?.categoryData?.name}
              href={"#"}
            />
          </div>
        ))}
      </div>
    </ServiceContainer>
  );
}

export default MenServices;
