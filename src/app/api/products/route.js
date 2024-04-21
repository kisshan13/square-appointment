import square from "@/lib/square";
import { NextRequest } from "next/server";

/**
 *
 * @param {NextRequest} request
 */
export async function GET(request) {
    const url = new URL(request.url);
    const category = url.searchParams.get("categoryId");
    const id = url.searchParams.get("id");

    if (category) {

        // const products = await square.catalogApi.searchCatalogItems({
        //     ...(category && { categoryIds: [category] }),
        // });

        const products = await square.catalogApi.searchCatalogItems({categoryIds : [category]});

        console.log(products.result);

        const images = await Promise.all(
            products.result.items.map((object) =>
                square.catalogApi.retrieveCatalogObject(
                    object?.itemData?.imageIds?.at(0)
                )
            )
        );

        products.result.items.forEach((object, index) => {
            object.image = images[index]?.result?.object.imageData.url;
        });

        return Response.json({ products: products.result.items }, { status: 200 });
    }

    const products = await square.catalogApi.retrieveCatalogObject(id);

    const image = await square.catalogApi.retrieveCatalogObject(products.result.object.itemData.imageIds?.at(0));

    products.result.object.image = image.result.object.imageData.url;

    return Response.json({ products: [products.result.object] }, { status: 200 });
}