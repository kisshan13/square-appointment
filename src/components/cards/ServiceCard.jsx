import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ src, alt, title, href }) {
    return (
        <Link href={href}>
            <div className=" flex flex-col gap-3">
                <Image src={src} alt={alt} className="rounded-lg" />

                <div>
                    <p className=" text-lg font-medium max-w-full whitespace-nowrap">{title}</p>
                </div>
            </div>
        </Link>
    )
}