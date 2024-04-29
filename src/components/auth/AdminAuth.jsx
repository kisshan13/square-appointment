"use client";

import { Button, TextField } from "@radix-ui/themes";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { apiAdminSignUp, apiAdminSignIn } from "@/lib/api/admin.api";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const schema = yup.object({
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required")
})

export default function AdminAuth({ type }) {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("")
    const router = useRouter();

    const handleAuth = (data) => (type === "signup" ? apiAdminSignUp(data) : apiAdminSignIn(data));

    async function handleAdminAuth(data) {
        setIsLoading(true);
        try {
            const response = await handleAuth(data);

            localStorage.setItem("token", response.data.token);
            router.push("/admin/dashboard");
        } catch (error) {
            setError(error?.response?.data?.message)
            console.log(error)
        }
        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit(handleAdminAuth)} className=" grid gap-5">
            <>
                <TextField.Root disabled={isLoading} placeholder="Email" type="email" {...register("email")} />
                {errors.email && <span className=" text-red-400 text-xs">{errors.email?.message}</span>}
            </>
            <>
                <TextField.Root disabled={isLoading} placeholder="Password" type="password" {...register("password")} />
                {errors.password && <span className=" text-red-400 text-xs">{errors.password?.message}</span>}
            </>

            <div>
                {error && <p className=" text-red-400 text-sm">{error}</p>}
            </div>

            <Button loading={isLoading} type="submit">{type === "signup" ? "Sign Up" : "Sign In"}</Button>
        </form>
    );
}
