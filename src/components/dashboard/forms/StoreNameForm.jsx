"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { PencilIcon } from "@primer/octicons-react";
import { Input, Button, Textarea } from "@nextui-org/react";
import { createRef, useEffect, useState } from "react";

import toast from "react-hot-toast";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { apiStoreConfig } from "@/lib/api/store.api";

const schema = yup.object({
    name: yup.string().required("Required"),
    hero: yup.string().required('Required'),
    categoryDisplay: yup.string().required('Required'),
})

export default function StoreNameForm({ reset, data }) {

    const [open, setOpen] = useState();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { formState: { errors }, handleSubmit, register, setValue } = useForm({ resolver: yupResolver(schema) });

    const closeRef = createRef();

    async function handleStoreUpdate(data) {
        setLoading(true);
        try {
            const response = await apiStoreConfig(data);

            toast.success("Store updated successfully");
            setOpen(false);
            reset();
            // closeRef.current?.click();
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }

    useEffect(() => {
        setValue("name", data?.landing?.store)
    }, [data]);

    return (
        <>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <Button variant="outline" className="cursor-pointer">
                        <PencilIcon size={16} />
                    </Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                        <div className="flex items-center justify-between">
                            <Dialog.Title className="DialogTitle">Store Name</Dialog.Title>
                        </div>
                        <form className=" my-3 grid gap-3" onSubmit={handleSubmit(handleStoreUpdate)}>
                            <Input placeholder="Store name" disabled={loading} {...register("name")} errorMessage={errors?.name?.message} />
                            <Textarea placeholder="Store hero text" disabled={loading} {...register("hero")} errorMessage={errors?.hero?.message} />
                            <Textarea placeholder="Store category text" disabled={loading} {...register("categoryDisplay")} errorMessage={errors?.categoryDisplay?.message} />
                            <div className="flex items-center justify-center mt-5">
                                <Button isLoading={loading} type="submit">Save</Button>
                            </div>
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
