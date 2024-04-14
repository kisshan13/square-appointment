import ServiceCard from "../cards/ServiceCard";
import ServiceContainer from "../shared/ServiceContainer";
import Image from "next/image";
import serviceImage from "../../../public/services/service-one.webp";

const services = [
  { image: "", title: "Native Water Purifier" },
  { image: "", title: "Native Smart Lock" },
  { image: "", title: "Baathroom & Kitchen Cleaning" },
  { image: "", title: "AC Service and Repair" },
];

function ServicesSection() {
  return (
    <ServiceContainer title={"New and noteworthy"}>
      <div className="grid grid-cols-5 gap-5 overflow-x-scroll scrollbar-hide">
        {services?.map((service, i) => (
          <div className="flex-1 max-w-[200px] ">
            <ServiceCard
              src={serviceImage}
              alt={service.title}
              title={service.title}
              href={"#"}
              key={i}
            />
          </div>
        ))}
      </div>
    </ServiceContainer>
  );
}

export default ServicesSection;
