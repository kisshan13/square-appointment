import { errorHandler } from "@/lib/errors";
import { signAuth } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { createAdminSchema } from "@/utils/schema";
import { NextRequest } from "next/server";

/**
 *
 * @param {NextRequest} request
 */
export async function POST(request) {
    try {
        const rawPayload = await request.json();
        const payload = createAdminSchema.parse(rawPayload);

        const admin = await prisma.adminUser.findFirst({ where: { email: payload.email } });

        if (!admin) {
            return Response.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const admimToken = signAuth({ id: admin.id, role: "admin" });

        return Response.json({ token: admimToken }, { status: 200 });
    } catch (error) {
        return errorHandler(error);
    }
}