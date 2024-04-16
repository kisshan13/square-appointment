import { NextRequest } from "next/server";

/**
 * @param {(request: NextRequest) => any} handler
 */
export default function asyncHandler(handler) {
    return async (request) => {
        try {
            return await handler(request);
        } catch (error) {
            return new Response(error.message, { status: 500 });
        }
    };
}