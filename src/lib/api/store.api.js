import client from "./config";

export async function apiStoreConfig(data) {
    const api = client(true);
    return api.put("/store", data);
}

export async function apiStoreCategoryConfig() {
    const api = client(true);
    return api.get("/store/categories")
}

export async function apiUpdateStoreCategoryConfig(data) {
    const api = client(true);
    return api.put("/store/categories", data)
}