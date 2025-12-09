import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const { newTitle: title, newDescription: description } = await request.json();

  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });

  return NextResponse.json({ topic }, { status: 200 });
}
