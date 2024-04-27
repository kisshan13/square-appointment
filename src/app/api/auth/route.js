import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { errorHandler } from "@/lib/errors";
import { signAuth } from "@/lib/jwt";
import square from "@/lib/square";

import { userAuthSchema } from "@/utils/schema";

/**
 *
 * @param {NextRequest} request
 */

export async function POST(request) {
  try {
    const rawPayload = await request.json();
    const payload = userAuthSchema.parse(rawPayload);

    const customer = await square.customersApi.searchCustomers({
      query: { filter: { emailAddress: { exact: payload.email } } },
    });

    if (!customer.result.customers) {
      return Response.json({ error: "Invalid credentials" }, { status: 400 });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      payload.password,
      customer.result.customers.at(0)?.note
    );

    if (!isPasswordCorrect) {
      return Response.json({ error: "Invalid credentials" }, { status: 400 });
    }

    const userToken = signAuth({ id: customer.result.customers.at(0)?.id });

    return Response.json({ token: userToken }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
