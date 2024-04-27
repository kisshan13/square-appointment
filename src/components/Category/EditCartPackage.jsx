"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./styles.css";

const editPackageData = [
  {
    title: "Waxing",
    features: [
      { fea: "Full arms (including Underarms)", price: "499" },
      { fea: "Full legs (No bikini and no braziian)", price: "499" },
      { fea: "Half arms", price: "499" },
      { fea: "Half legs", price: "499" },
    ],
  },
  {
    title: "Facial Hair Removal",
    features: [
      { fea: "Eyebrow", price: "499" },
      { fea: "Upper lip", price: "499" },
    ],
  },
];

export default function EditCartPackage() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Edit your package
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle ">Complete </Dialog.Title>
          {/* <Dialog.Description className="DialogDescription">
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description> */}
          <form>
            <div className="flex flex-col gap-3">
              {editPackageData?.map((data) => {
                return (
                  <div className="flex flex-col gap-3 ">
                    <h1 className="font-medium text-lg text-black">
                      {data?.title}
                    </h1>
                    {data?.features?.map((fea, i) => {
                      return (
                        <div
                          key={i}
                          style={{ display: "flex", alignItems: "center" }}
                          className="flex gap-8 items-center"
                        >
                          <Checkbox.Root
                            className="CheckboxRoot"
                            defaultChecked
                            id="c1"
                          >
                            <Checkbox.Indicator className="CheckboxIndicator">
                              <CheckIcon />
                            </Checkbox.Indicator>
                          </Checkbox.Root>
                          <div className="flex flex-col ">
                            <label className="font-semibold" htmlFor="c1">
                              {fea?.fea}
                            </label>
                            <span className="font-light text-gray-800 text-sm">
                              ₹ {fea?.price}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </form>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
