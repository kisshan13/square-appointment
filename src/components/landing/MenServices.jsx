"use client";
import ServiceCard from "../cards/ServiceCard";
import ServiceContainer from "../shared/ServiceContainer";
import serv1 from "../../../public/men-services/serv1.webp";
import serv2 from "../../../public/men-services/serv2.webp";
import serv3 from "../../../public/men-services/serv3.webp";
import serv4 from "../../../public/men-services/serv4.webp";

const services = [
  { title: "Haircut & Beard grooming shaving", img: serv1 },
  { title: "Facial & cleanup", img: serv2 },
  { title: "Manicure & Pedicure", img: serv3 },
  { title: "Hair color & Hair spa", img: serv4 },
];

function MenServices({ data }) {
  console.log(data);
  return (
    <ServiceContainer title={"Salon For Men"} button={"See All"}>
      <div className="grid grid-cols-5 gap-5 overflow-x-scroll scrollbar-hide">
        {services.map((service, i) => (
          <div className="flex-1 max-w-[250px]">
            <ServiceCard
              service={false}
              src={service?.img}
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

export default MenServices;
