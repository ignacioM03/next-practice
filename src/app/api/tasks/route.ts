import { prisma } from "@/libs/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json({ tasks }, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const task = await prisma.task.create({
    data: {
      title: body.title,
      description: body?.description,
      status: body?.status,
      type: body?.type,
    },
  });
  if (!task) {
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 404 }
    );
  }
  return NextResponse.json({ message: "success" }, { status: 200 });
}
