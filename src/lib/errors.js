import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { ZodError } from "zod";

/**
 *
 * @param error {Error}
 * @returns {{message: string, status: number}}
 */

function zodError(error) {
    if (error instanceof ZodError) {
        const message = JSON.parse(error.message);
        const errorMessages = message.map((errorMsg) => {
            const fieldName =
                errorMsg.path?.length === 2 ? errorMsg.path[1] : errorMsg.path[0];
            const errorMessage = errorMsg.message;
            return `${fieldName}: ${errorMessage}`;
        });

        return { message: errorMessages, status: 422 };
    }
}

function jwtError(error) {
    console.log(error)
    const response = { message: "Invalid token", status: 403 }

    if (error instanceof JsonWebTokenError) {
        return response
    }

    if (error instanceof TokenExpiredError) {
        return { message: "Session expired", status: 401 }
    }
}

const errorHandlers = [zodError, jwtError];


export function errorHandler(error) {
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

export default errorHandlers;