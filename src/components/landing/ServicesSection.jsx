"use client";
import ServiceCard from "../cards/ServiceCard";
import ServiceContainer from "../shared/ServiceContainer";
import { useRouter } from "next/navigation";

function ServicesSection({ data }) {
  const router = useRouter();

  return (
    <ServiceContainer
      title={"Salon And Women"}
      button={"See All"}
      onClick={() => router.push("/category")}
    >
      <div className="grid grid-cols-5 gap-5 overflow-x-scroll scrollbar-hide">
        {data?.mainCategory?.map((service, i) => (
          <div
            key={i}
            className="flex-1 max-w-[250px]"
            onClick={() => router.push("/category")}
          >
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

export default ServicesSection;
