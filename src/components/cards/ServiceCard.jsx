import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ src, alt, title, href }) {
  return (
    <Link href={href}>
      <div className=" flex flex-col gap-3 h-full rounded-lg border   border-gray-200 hover:border-gray-400">
        <div className=" bg-white my-10 px-2">
          <p className="text-base font-medium max-w-full text-black/80">
            {title}
          </p>
        </div>
        <Image src={src} alt={alt} className="w-full" />
      </div>
    </Link>
  );
}
