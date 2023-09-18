import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  try {
    return NextResponse.json(
      {
        message: "Hello from the NextJS API",
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "*",
          // "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    return NextResponse.error();
  }
}
