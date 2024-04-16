import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

import { verifyAuth } from "@/lib/jwt";

const { JsonWebTokenError, TokenExpiredError } = jwt;

/**
@param {NextRequest} request
**/
export async function apiParseAuthToken(request) {
    const authToken = request.headers.get("Authorization");

    if (authToken) {
        return authToken.split(" ")[1];
    }
}

/**
@param {NextRequest} request
**/
export async function apiIsAuthenticated(request) {
    try {
        const token = await apiParseAuthToken(request);

        if (!token) {
            return {
                status: false,
                response: Response.json({
                    error: "No auth token present.",
                }, { status: 401 }),
            };
        }

        const decoded = verifyAuth(token);

        return {
            status: true,
            response: decoded?.id,
        };
    } catch (error) {
        if (
            error instanceof JsonWebTokenError ||
            error instanceof TokenExpiredError
        ) {
            return {
                status: false,
                response: Response.json({
                    error: "Invalid auth token.",
                }),
            };
        }
    }
}
