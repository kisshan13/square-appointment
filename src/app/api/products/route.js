import square, { getSubCategory } from "@/lib/square";
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

    const url = new URL(request.url);
    const category = url.searchParams.get("categoryId");
    const id = url.searchParams.get("id");

    const categories = await square.catalogApi.listCatalog("", "CATEGORY");

    const images = await Promise.all(
      categories.result.objects.map((object) =>
        square.catalogApi.retrieveCatalogObject(
          object?.categoryData?.imageIds?.at(0)
        )
      )
    );

    images.forEach((image) => {
      const object = categories.result.objects.find(
        (obj) => obj.categoryData.imageIds.at(0) === image.result.object.id
      );
      object.image = image.result.object.imageData.url;
    });

    const baseCategory = categories.result?.objects?.find((obj) => obj.id === category);

    console.log(baseCategory)
    
    const parentId = baseCategory?.categoryData?.parentCategory?.id;
    console.log(parentId)

    const subCategory = await getSubCategory(parentId, categories?.result?.objects);

    if (category) {
      const products = await square.catalogApi.searchCatalogItems({
        ...(category && { categoryIds: [category] }),
      });

      if (products.result?.items) {

        const images = await Promise.all(
          products?.result?.items?.map((object) =>
            square.catalogApi.retrieveCatalogObject(
              object?.itemData?.imageIds?.at(0)
            )
          )
        );

        products.result.items.forEach((object, index) => {
          object.image = images[index]?.result?.object.imageData.url;
        });
      }

      return Response.json({ products: products?.result?.items, subCategories: subCategory }, { status: 200 });
    }

    const products = await square.catalogApi.retrieveCatalogObject(id);

    const image = await square.catalogApi.retrieveCatalogObject(
      products.result.object.itemData.imageIds?.at(0)
    );

    products.result.object.image = image.result.object.imageData.url;

    return Response.json({ products: [products.result.object] }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: 'Something went wrong' }, { status: 500 })
  }
}
