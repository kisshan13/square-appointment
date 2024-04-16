import { NextRequest } from "next/server";

const dummyData = {
    hero: {
        heading: "Book your appointments with ease.",
    }
}

/**
 * 
 * @param {NextRequest} request 
 */
export async function GET(request) {
    try {
        return Response.json(dummyData, { status: 200 });
    } catch (error) {
    }
}