import AdminAuth from "@/components/auth/AdminAuth";

export default function page() {
    return (
        <div className=" max-w-[850px] mx-auto my-[100px]">
            <h2 className=" text-center">Create an Admin User</h2>

            <div>
                <AdminAuth />
            </div>
        </div>
    )
}
