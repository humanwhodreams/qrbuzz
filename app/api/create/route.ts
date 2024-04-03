import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return Response.json(data);
  } catch (error) {
    return NextResponse.json("Internal Server error", { status: 500 });
  }
}
