import AdminAuth from "@/components/auth/AdminAuth";
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation";

export default async function Page() {

    const adminUser = await prisma.adminUser.findMany();

    if (adminUser?.length) {
        redirect("/admin/login");
    }

    return (
        <>
            <div className=" max-w-[850px] mx-auto my-[100px]">
                <h2 className=" text-center">Create an Admin User</h2>

                <div>
                    <AdminAuth type={"signup"} />
                </div>
            </div>
        </>
    )
}