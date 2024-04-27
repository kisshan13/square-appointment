import client from "./config";

export async function apiAdminSignUp(data) {
    const api = client();
    return api.post("/store/admin/signup", data);
}