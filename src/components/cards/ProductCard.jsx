import haircut from "../../../public/men-services/serv1.webp"

import Image from "next/image";

function ProductCard({ title, price, description }) {
    return (
        <div className=" flex items-center justify-between max-w-[550px]">
            <div className="flex-1">
                <h2 className=" font-semibold mb-1">{title}</h2>
                <p className=" font-medium text-sm mb-1">{price}</p>

                <hr />

                <div className=" mt-1">
                    <ul className="  text-sm grid gap-1">
                        <li>Professional hair cut</li>
                        <li>Hygenic</li>
                    </ul>
                </div>
            </div>
            <div>
                <Image src={haircut} className=" w-[100px] rounded-md aspect-square object-cover " />
            </div>
        </div>
    );
}

export default ProductCard;