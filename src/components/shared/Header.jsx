"use client";
import { Button } from "@radix-ui/themes";
import HeaderToolbox from "@/components/shared/HeaderToolbox";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../Style/modalLogin.css";

function Header({ isLoggedIn }) {
  return (
    <header className=" py-3">
      <div className="  flex items-center justify-between">
        <h3 className=" font-semibold text-xl ">SquareApps</h3>
        <HeaderToolbox />
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
                <input className="Input"  type="password" />
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
      </div>
    </header>
  );
}

export default Header;
