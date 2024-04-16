"use client";

import * as Dialog  from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";


export default function Login() {
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
                    <Dialog.Title className="DialogTitle ">
                        Login/Sign up
                    </Dialog.Title>
                    {/* <Dialog.Description className="DialogDescription">
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description> */}
                    <fieldset className="Fieldset mt-8">
                        <label className="Label" >
                            Email
                        </label>
                        <input
                            className="Input"
                            type="email"
                            defaultValue="Pedro@gmail.com "
                        />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" >
                            Password
                        </label>
                        <input className="Input" type="password" />
                    </fieldset>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 25,
                            justifyContent: "flex-end",
                        }}
                    >
                        <Dialog.Close asChild>
                            <button className="Button green">Save changes</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}