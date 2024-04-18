import square from "@/lib/square";
import { NextRequest } from "next/server";

BigInt.prototype.toJSON = function () {
    return this.toString();
};

/**
 * 
 * @param {NextRequest} request 
 * @returns 
 */
export async function GET(request) {
    const categorys = await square.catalogApi.listCatalog("", "CATEGORY");

    const images = await Promise.all(categorys.result.objects.map((object) => square.catalogApi.retrieveCatalogObject(object?.categoryData?.imageIds?.at(0))));

    categorys.result.objects.forEach((object, index) => {
        object.image = images[index]?.result?.object.imageData.url;
    });

    return Response.json({ category: categorys.result.objects }, { status: 200 });
}