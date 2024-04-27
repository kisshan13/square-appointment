import prisma from "@/lib/prisma";
import square from "@/lib/square";
import { NextRequest } from "next/server";

BigInt.prototype.toJSON = function () {
    return this.toString();
};

/**
 *
 * @param {NextRequest} request
 */
export async function GET(request) {
    try {
        const [categories, pageCategory] = await Promise.all([
            square.catalogApi.listCatalog("", "CATEGORY"),
            prisma.category.findFirst()
        ]);

        const [mainCategoryId, secondaryCategoryId] = pageCategory.categories;

        const images = await Promise.all(
            categories.result.objects.map((object) =>
                square.catalogApi.retrieveCatalogObject(
                    object?.categoryData?.imageIds?.at(0)
                )
            )
        );

        images.forEach((image) => {
            const object = categories.result.objects.find((obj) => obj.categoryData.imageIds.at(0) === image.result.object.id);
            object.image = image.result.object.imageData.url;
        });

        const mainCategory = [];
        const secondaryCategory = [];

        const category = categories.result.objects.filter((c) => {

            if (c.categoryData?.parentCategory?.id === mainCategoryId) {
                mainCategory.push(c);
            }

            if (c.categoryData?.parentCategory?.id === secondaryCategoryId) {
                secondaryCategory.push(c);
            }

            return !c.categoryData.parentCategory?.id;
        });

        return Response.json(
            {
                landing: {
                    heading: "Home services at your doorstep",
                    categoryText: "What are you looking for ?",
                    category: category,
                    mainCategory: mainCategory,
                    secondaryCategory
                },
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json({ message: "Internal server error" }, { status: 500 });
    }
}