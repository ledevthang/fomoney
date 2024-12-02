import { mockRankings } from "@/mock";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockRankings, { status: 200 });
}
