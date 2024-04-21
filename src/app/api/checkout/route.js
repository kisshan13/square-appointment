import { errorHandler } from "@/lib/errors";
import square from "@/lib/square";
import { createCheckoutLinkSchema } from "@/utils/schema";
import { NextRequest } from "next/server";

/**
 *  @param {NextRequest} request
 */
export async function POST(request) {
    try {
        const rawPayload = await request.json();
        const payload = createCheckoutLinkSchema.parse(rawPayload);

        const checkout = await square.checkoutApi.createPaymentLink({
            order: {
                // lineItems: [{}]
            }
        })

    } catch (error) {
        console.log(error);
        return errorHandler(error);
    }
}