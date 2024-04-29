"use client";

import { useState, useEffect } from "react";

import StoreNameForm from "@/components/dashboard/forms/StoreNameForm";

import DashboardContainer from "@/components/container/DashboardContainer";
import { PencilIcon } from "@primer/octicons-react";

export default function Page() {
  const [store, setStore] = useState();

  async function getStoreData() {
    const res = await fetch("http://localhost:3000/api/store");
    const data = await res.json();
    setStore(data);
  }

  useEffect(() => {
    if (!store) {
      getStoreData();
    }
  }, [store]);

  return (
    <DashboardContainer>
      <div>
        <div>
          <div className=" flex items-center gap-4">
            <h1 className={"text-3xl font-semibold"}>
              {store?.landing?.store}
            </h1>
            <StoreNameForm data={store} reset={() => setStore()} />
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
}
