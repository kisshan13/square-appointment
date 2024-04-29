import {
    ChecklistIcon,
    ContainerIcon,
    GearIcon,
    HomeIcon,
    KeyIcon,
    PackageIcon,
    PeopleIcon
} from "@primer/octicons-react";
import Link from "next/link";

const navigation = [
    { icons: <HomeIcon />, name: "Home", href: "#" },
    {
        icons: <PackageIcon
        />, name: "Orders", href: "/dashboard/orders"
    },
    { icons: <PeopleIcon />, name: "Clients", href: "/dashboard/clients" },
    { icons: <ContainerIcon />, name: "Products", href: "/dashboard/products" },
    { icons: <ChecklistIcon />, name: "Services", href: "/dashboard/services" },
    { icons: <KeyIcon />, name: "Digital Assets", href: "/dashboard/digital-assets" },
    { icons: <GearIcon />, name: "Settings", href: "/dashboard/settings" },
]

export default function DashboardSidebar() {
    return (
        <div>
            <div className={" grid w-[250px] fixed p-5  mt-5 border-r"}>
                <ul className={"grid gap-6"}>
                    {
                        navigation?.map((nav, i) => (
                            <Link href={nav.href} key={i} className={"p-2 hover:bg-indigo-100 rounded-lg transition-all"}>

                                <li className={"flex items-center gap-5 text-lg"}>
                                    <div>
                                        {nav.icons}
                                    </div>
                                    <p>
                                        {nav.name}
                                    </p>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}