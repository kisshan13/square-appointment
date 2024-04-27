import { NextRequest } from "next/server";
import createReadStreamFromBuffer from "@/lib/streams";
import uploadFile from "@/lib/aws";
import prisma from "@/lib/prisma";

/**
 *
 * @param {NextRequest} request
 */
export async function POST(request) {
    const formdata = await request.formData();

    const file = formdata.get("file");

    if (!file) {
        return Response.error("No file found", { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const stream = createReadStreamFromBuffer(buffer);


    const filename = file.name.replaceAll(" ", "_");

    try {
        const upload = await uploadFile(stream, `${Math.ceil(Math.random() * 100000)}_${filename}`)

        prisma.banners.create({ data: { banners: [upload.Location] } })

        return Response.json({ message: upload.Location }, { status: 201 });
    } catch (error) {
        return Response.json("Failed to save file", { status: 500 });
    }
}