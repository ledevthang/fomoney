import { createAccessToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AuthRequest } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AuthRequest;
    const { credential, provider } = body;

    const existed = await prisma.user.findUnique({
      where: {
        wallet: credential,
      },
    });

    // Create new user if not existed
    if (!existed) {
      await prisma.user.create({
        data: {
          wallet: credential,
          provider,
        },
      });
    }
    const accessToken = createAccessToken({
      provider,
      userId: credential,
    });

    return NextResponse.json({ accessToken }, { status: 200 });
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || "An unexpected error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
