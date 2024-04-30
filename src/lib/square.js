import { Client, Environment, ApiError } from "square";

const square = new Client({
  bearerAuthCredentials: {
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
  },
  environment: Environment.Sandbox,
});

export async function getSubCategory(parentId, category) {

  const subCategory = category?.filter((c) => c.categoryData.parentCategory?.id === parentId);
  return subCategory;
}

export default square;

