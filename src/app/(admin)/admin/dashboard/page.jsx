"use client";

import { useState, useEffect } from "react";

import { Card } from "@radix-ui/themes"

import StoreNameForm from "@/components/dashboard/forms/StoreNameForm";
import CategoryConfigForm from "@/components/dashboard/forms/CategoryConfigForm";

import DashboardContainer from "@/components/container/DashboardContainer";
import { PencilIcon } from "@primer/octicons-react";

export default function Page() {
  const [store, setStore] = useState();
  const [category, setCategory] = useState();

  async function getStoreData() {
    const res = await fetch("http://localhost:3000/api/store");
    const data = await res.json();
    setStore(data);
  }

  async function getCategoryData() {
    const res = await fetch("http://localhost:3000/api/category");
    const data = await res.json();
    setCategory(data?.category)
  }

  useEffect(() => {
    if (!store) {
      getStoreData();
    }
  }, [store]);

  useEffect(() => {
    if (!category) {
      getCategoryData();
    }
  }, [category])

  return (
    <DashboardContainer>
      <div className="grid gap-10">
        <Card>
          <div className=" flex items-center gap-4">
            <h1 className={"text-3xl font-semibold"}>
              {store?.landing?.store}
            </h1>

            <StoreNameForm data={store} reset={() => setStore()} />
          </div>
          <p>{store?.landing?.heading}</p>
          <p>{store?.landing?.categoryText}</p>
        </Card>
      </div>

      <div>
        <Card>
          <p className=" text-sm font-medium mb-5 ">Select Categories to display</p>
          <div>
            <CategoryConfigForm reset={() => setCategory()} category={category} />
          </div>

        </Card>
      </div>
    </DashboardContainer>
  );
}
