"use client";
import ServiceCard from "../cards/ServiceCard";
import ServiceContainer from "../shared/ServiceContainer";
import Image from "next/image";
import serv1 from "../../../public/services/serv1.webp";
import serv2 from "../../../public/services/serv2.webp";
import serv3 from "../../../public/services/serv3.webp";
import serv4 from "../../../public/services/serv4.webp";
import serv5 from "../../../public/services/serv5.webp";
import { useRouter } from "next/navigation";

const services = [
  { title: "Waxing", img: serv1 },
  { title: "Facial & cleanup", img: serv2 },
  { title: "Manicure", img: serv3 },
  { title: "Pedicure", img: serv4 },
  { title: "Threading & Face wax", img: serv5 },
];

function ServicesSection() {
  const router = useRouter();

  return (
    <ServiceContainer
      title={"Salon And Women"}
      button={"See All"}
      onClick={() => router.push("/women_salon")}
    >
      <div className="grid grid-cols-5 gap-5 overflow-x-scroll scrollbar-hide">
        {services?.map((service, i) => (
          <div
            key={i}
            className="flex-1 max-w-[250px]"
            onClick={() => router.push("/women_salon")}
          >
            <ServiceCard
              src={service?.img}
              alt={service.title}
              title={service.title}
              href={"#"}
            />
          </div>
        ))}
      </div>
    </ServiceContainer>
  );
}

export default ServicesSection;
