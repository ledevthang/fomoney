import { prisma } from "@/lib/prisma";
import { AuthProvider } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const provider =
    (searchParams.get("provider") as AuthProvider) ?? AuthProvider.sonicx;

  const result = await prisma.point.findMany({
    where: {
      User: {
        provider: provider,
      },
    },
    orderBy: {
      point: "desc",
    },
    take: 10,
    select: {
      point: true,
      User: {
        select: {
          id: true,
          wallet: true,
        },
      },
    },
  });

  return NextResponse.json(result, { status: 200 });
}
