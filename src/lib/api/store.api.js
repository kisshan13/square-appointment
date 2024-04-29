import client from "./config";

export async function apiStoreConfig(data) {
    const api = client(true);
    return api.put("/store", data);
}