import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("GET log /api/hello/");
  return NextResponse.json("Hello, Next.js!");
}
