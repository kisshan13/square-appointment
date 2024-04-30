import { errorHandler } from "@/lib/errors";
import prisma from "@/lib/prisma";
import { categoryAddSchema, categoryEditSchema } from "@/utils/schema";

import { NextRequest, NextResponse } from "next/server";

/**
 *
 * @param {NextResponse} request
 */
export async function POST(request) {
  try {
    const rawPayload = await request.json();
    const payload = categoryAddSchema.parse(rawPayload);

    // do things for adding that

    await prisma.category.create({ data: { categories: payload.category } });

    return Response.json(
      { message: "Category added successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return errorHandler(error);
  }
}

/**
 *
 * @param {NextRequest} request
 * @returns
 */
export async function PUT(request) {
  try {
    const rawPayload = await request.json();
    const payload = categoryEditSchema.parse(rawPayload);

    

    await prisma.category.update({
      where: { id: payload.id },
      data: { categories: payload.category },
    });

    return Response.json(
      { message: "Category updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

/**
 *
 * @param {NextRequest} request
 */
export async function GET(request) {
  try {
    const categories = await prisma.category.findFirst();

    return Response.json({ categories: categories }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
