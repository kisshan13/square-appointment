"use client";

import { apiStoreCategoryConfig, apiUpdateStoreCategoryConfig } from "@/lib/api/store.api";
import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

function CategoryConfigForm({ category, reset }) {

    const [activeCates, setActiveCates] = useState();
    const [isLoading, setIsLoading] = useState();

    const active = activeCates?.categories;

    async function getActiveCategories() {
        try {
            const res = await apiStoreCategoryConfig();

            setActiveCates(res?.data?.categories);

            console.log(res)
        } catch (err) { }
    }

    async function handleDisplayCategoryChange(data) {
        setIsLoading(true)
        try {
            const res = await apiUpdateStoreCategoryConfig({
                category: data,
                id: activeCates?.id
            });
            setActiveCates();
            reset();
        } catch (err) { }
        setIsLoading(false)
    }

    useEffect(() => {
        if (!activeCates) {
            getActiveCategories();
        }
    }, [activeCates]);

    return (
        <div className=" grid grid-cols-2 gap-10">
            <Select isLoading={isLoading} onChange={(e) => handleDisplayCategoryChange([e.target.value, active?.at(1)])} defaultSelectedKeys={[active?.at(0)]} label="Primary Category" placeholder="Select a category to display">
                {category?.map((cat) => (
                    <SelectItem key={cat?.id} value={cat?.id}>
                        {cat?.categoryData?.name}
                    </SelectItem>
                ))}
            </Select>
            <Select isLoading={isLoading} onChange={(e) => handleDisplayCategoryChange([active?.at(0), e.target.value])} defaultSelectedKeys={[active?.at(1)]} label="Secondary Category" placeholder="Select a category to display">
                {category?.map((cat) => {
                    return (
                        <SelectItem key={cat?.id} value={cat?.id}>
                            {cat?.categoryData?.name}
                        </SelectItem>
                    )
                })}
            </Select>
        </div>
    );
}

export default CategoryConfigForm;