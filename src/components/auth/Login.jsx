"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { createRef, useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { apiAuthSignup, apiAuthLogin } from "@/lib/api/auth.api";

const loginSchema = yup.object({
  email: yup.string().email("Must be an email").required("Required"),
  password: yup.string().required("Required"),
});

const signupSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Must be an email").required("Required"),
  password: yup.string().required("Required"),
});

// Todo manage the loading states

export default function Login() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [open, setOpen] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const buttonRef = createRef();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(isNewUser ? signupSchema : loginSchema),
  });

  async function handleUserAuth(data) {
    setIsLoading(true);
    try {
      const response = await (isNewUser
        ? apiAuthSignup(data)
        : apiAuthLogin(data));

      localStorage.setItem("token", response.data?.token);

      buttonRef.current?.click();
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message || "Something went wrong");
    }
    setIsLoading(false);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Login
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle ">Login/Sign up</Dialog.Title>
          <form onSubmit={handleSubmit(handleUserAuth)}>
            {isNewUser && (
              <fieldset className="Fieldset mt-8">
                <label className="Label">Name</label>
                <div>
                  <input
                    className="Input"
                    type=""
                    disabled={isLoading}
                    {...register("name")}
                  />
                  <p className=" text-sm text-red-400">
                    {errors?.name?.message}
                  </p>
                </div>
              </fieldset>
            )}
            <fieldset className={`Fieldset ${isNewUser ? "mt-0" : "mt-8"}`}>
              <label className="Label">Email</label>
              <div>
                <input
                  className="Input"
                  type="email"
                  placeholder="Pedro@gmail.com "
                  disabled={isLoading}
                  {...register("email")}
                />
                <p className=" text-sm text-red-400">
                  {errors?.email?.message}
                </p>
              </div>
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label">Password</label>
              <div>
                <input
                  disabled={isLoading}
                  className="Input"
                  type="password"
                  {...register("password")}
                />
                <p className=" text-sm text-red-400">
                  {errors?.password?.message}
                </p>
              </div>
            </fieldset>
            <div>
              <p className="text-red-400 text-sm">{error}</p>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "space-between",
              }}
            >
              <span
                className=" font-medium text-sm cursor-pointer"
                onClick={() => setIsNewUser(!isNewUser)}
              >
                {!isNewUser ? "New User ?" : "Already a user ?"}
              </span>

              <button disabled={isLoading} className="Button green">
                {!isNewUser ? "Login" : "Signup"}
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              ref={buttonRef}
              className="IconButton"
              aria-label="Close"
              disbaled={isLoading}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
