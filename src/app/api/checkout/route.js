import { NextRequest } from "next/server";
import { errorHandler } from "@/lib/errors";
import square from "@/lib/square";
import { createCheckoutLinkSchema } from "@/utils/schema";
import {apiIsAuthenticated} from "@/utils/apiUtils";

/**
 *  @param {NextRequest} request
 */
export async function POST(request) {
  try {
    const rawPayload = await request.json();
    const payload = createCheckoutLinkSchema.parse(rawPayload);

        const isAuthenticated = await apiIsAuthenticated(request);

        if(!isAuthenticated.status) {
            return isAuthenticated.response
        }

        const checkout = await square.checkoutApi.createPaymentLink({
            order: {
                lineItems: [{itemType: "ITEM", catalogObjectId: payload.productId}],
                customerId: payload.customerId
            }
        });

        return Response.json({checkout : checkout.result.paymentLink}, {status: 201})
    } catch (error) {
        console.log(error);
        return errorHandler(error);
    }
}
