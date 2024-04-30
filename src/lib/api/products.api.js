import client from "./config";

export async function apiGetProductsByCategory(id) {
    const api = client();
    return api.get(`/products?categoryId=${id}`)
}