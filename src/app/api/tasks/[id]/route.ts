import { prisma } from "@/libs/prisma/prisma";
import { NextResponse } from "next/server";

interface Params {
  id: any;
}

export async function GET(request: any, { params }: { params: Params }) {
  // const { searchParams } = new URL(request.url);
  // const name = searchParams.get("name");
  // const lastName = searchParams.get("lastName");
  //const data = await request.json();
  if (params.id === "undefined") {
    return NextResponse.json({ error: "Failed to find task" }, { status: 404 });
  }
  const res = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!res) {
    return NextResponse.json({ error: "Failed to find task" }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: res }, { status: 200 });
}
export async function PUT(request: any, { params }: { params: Params }) {
  const body = await request.json();
  const { title, description, type } = body;
  const res = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title,
      description,
      type,
    },
  });
  if (!res) {
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 404 }
    );
  }
  return NextResponse.json({ success: true }, { status: 200 });
}

export async function DELETE(request: any, { params }: { params: Params }) {
  try {
    console.log(params.id);
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
