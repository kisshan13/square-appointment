"use client"

import { Button } from "@radix-ui/themes";
import Link from "next/link";

function ServiceContainer({ title, children, button, href }) {
  return (
    <section className=" my-10">
      <div className="flex items-center justify-between">
        <h3 className=" text-2xl font-medium">{title}</h3>
        {button ? (
          <Link href={href} className=" p-2 rounded-md font-medium text-sm border  border-solid">

            {/* <Button variant="outline" onClick={(e) => e.preventDefault()}> */}
            {button}
            {/* </Button> */}
          </Link>
        ) : (
          false
        )}
      </div>

      <div className="mt-5">{children}</div>
    </section>
  );
}

export default ServiceContainer;
