import square from "@/lib/square";
import { NextRequest } from "next/server";

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

        const images = await Promise.all(
            categories.result.objects.map((object) =>
                square.catalogApi.retrieveCatalogObject(
                    object?.categoryData?.imageIds?.at(0)
                )
            )
        );

        categories.result.objects.forEach((object, index) => {
            object.image = images[index]?.result?.object.imageData.url;
        });

        return Response.json(
            {
                hero: {
                    heading: "Home services at your doorstep",
                    categoryText: "What are you looking for ?",
                    category: categories.result.objects,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json({ message: "Internal server error" }, { status: 500 });
    }
}