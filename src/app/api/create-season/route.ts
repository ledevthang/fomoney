import { SEASON_DURATION } from "@/constants";
import { validateAuthorizationHeader } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CreateSeasonRequest } from "@/types/season";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { decoded } = validateAuthorizationHeader(request);
    if (!decoded) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body: CreateSeasonRequest = await request.json();
    const { name } = body;

    const existed = await prisma.season.findUnique({
      where: {
        name,
      },
    });

    if (existed) {
      return NextResponse.json(
        { message: "Season already existed" },
        { status: 400 },
      );
    }

    await prisma.season.create({
      data: {
        name,
        endtime: new Date(new Date().getTime() + SEASON_DURATION),
      },
    });

    return NextResponse.json(
      { message: "Create season success" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
