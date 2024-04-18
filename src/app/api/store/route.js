import square from "@/lib/square";
import { NextRequest } from "next/server";

BigInt.prototype.toJSON = function () {
    return this.toString();
};

const dummyData = {
    hero: {
        heading: "Book your appointments with ease.",
    },
};

/**
 *
 * @param {NextRequest} request
 */
export async function GET(request) {
    try {
        const categories = await square.catalogApi.listCatalog("", "CATEGORY");


        const mainCategoryId = "ULKZ3VBRG3XQD3HAETV2SYHD";

        const mainCategory = [];

        const category = categories.result.objects.filter((c) => {

            if (c.categoryData?.parentCategory?.id === mainCategoryId) {
                mainCategory.push(c);
            }

            return !c.categoryData.parentCategory?.id
        });

        const images = await Promise.all(
            category.map((object) =>
                square.catalogApi.retrieveCatalogObject(
                    object?.categoryData?.imageIds?.at(0)
                )
            )
        );

        const mainCategoryImages = await Promise.all(
            mainCategory.map((object) =>
                square.catalogApi.retrieveCatalogObject(
                    object?.categoryData?.imageIds?.at(0)
                )
            )
        )

        mainCategory.forEach((object, index) => {
            object.image = mainCategoryImages[index]?.result?.object?.imageData?.url;
        })

        category.forEach((object, index) => {
            object.image = images[index]?.result?.object.imageData.url;
        });

        return Response.json(
            {
                hero: {
                    heading: "Home services at your doorstep",
                    categoryText: "What are you looking for ?",
                    category: category,
                    mainCategory: mainCategory
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.log(error)
        return Response.json({ message: "Internal server error" }, { status: 500 });
    }
}