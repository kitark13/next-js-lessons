import { NextRequest, NextResponse } from "next/server";
import API from "../../api";
import { Todo } from "@/types/todo";

interface TodoProp {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: TodoProp) {
  const { id } = await params;
  const { data } = await API.get<Todo>(`/todos/${id}`);
  return NextResponse.json(data);
}
