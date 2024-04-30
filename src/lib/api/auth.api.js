import client from "./config";

export async function apiAuthLogin(data) {
    const api = client(false);
    return api.post("/auth", data);
}

export async function apiAuthSignup(data) {
    const api = client(false);
    return api.post("/user", data);
}