import { Client, Environment, ApiError } from "square";

const square = new Client({
    bearerAuthCredentials: {
        accessToken: process.env.SQUARE_ACCESS_TOKEN
    },
    environment: Environment.Sandbox,
});

export default square;
