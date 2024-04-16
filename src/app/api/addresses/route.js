import { errorHandler } from "@/lib/errors";
import square from "@/lib/square";
import { apiIsAuthenticated } from "@/utils/apiUtils";
import { userAddressSchema } from "@/utils/schema";
import { NextRequest } from "next/server";

/**
 *
 * @param {NextRequest} request
 */
export async function POST(request) {
  try {
    const rawPayload = await request.json();
    const payload = userAddressSchema.parse(rawPayload);

    const isAuthenticated = await apiIsAuthenticated(request);

    if (!isAuthenticated.status) {
      return isAuthenticated.response;
    }

    const updatedCustomer = await square.customersApi.updateCustomer(
      isAuthenticated.response,
      { address: { ...payload } }
    );

    return Response.json(
      { message: "Address added to the customer." },
      { status: 201 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
