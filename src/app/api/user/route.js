import { NextRequest } from "next/server";
import bcrypt from "bcrypt";

import square from "@/lib/square";
import errorHandlers from "@/lib/errors";

import * as jwt from "@/lib/jwt";

import { userCreateSchema } from "@/utils/schema";
import { apiIsAuthenticated } from "@/utils/apiUtils";

/**
 * @param {NextRequest} request
 */
export async function POST(request) {
    try {
        const rawPayload = await request.json();
        const payload = userCreateSchema.parse(rawPayload);

        const isCustomerExists = await square.customersApi.searchCustomers({ query: { filter: { emailAddress: { exact: payload.email } } } });

        if (isCustomerExists.result.customers) {
            return new Response("User already exists", { status: 400 });
        }

        const password = bcrypt.hashSync(payload.password, bcrypt.genSaltSync(10));

        const customer = await square.customersApi.createCustomer({ emailAddress: payload.email, note: password, givenName: payload.name });

        const userToken = jwt.signAuth({ id: customer.result.customer.id })

        return Response.json({ token: userToken }, { status: 201 })
    } catch (error) {
        const response = { message: 'Internal server error', status: 500 }
        console.log(error);

        errorHandlers.forEach((handler) => {
            const errorResponse = handler(error);
            if (errorResponse) {
                response.message = errorResponse.message;
                response.status = errorResponse.status;
            }
        });

        return new Response(response.message, { status: response.status })
    }
}

/**
 * @param {NextRequest} request
 */
export async function GET(request) {
    try {
        const isAuthenticated = await apiIsAuthenticated(request);

        if (!isAuthenticated.status) {
            return isAuthenticated.response;
        }

        const customer = await square.customersApi.retrieveCustomer(isAuthenticated.response);

        const response = customer.result.customer;

        delete response["note"];
        delete response["version"];
        console.log(response)

        return Response.json({ customer: response }, { status: 200 });
    } catch (error) {
        const response = { message: 'Internal server error', status: 500 }

        errorHandlers.forEach((handler) => {
            const errorResponse = handler(error);
            if (errorResponse) {
                response.message = errorResponse.message;
                response.status = errorResponse.status;
            }
        });

        return new Response(response.message, { status: response.status })
    }
}