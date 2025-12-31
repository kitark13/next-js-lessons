import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

import { Todo, TodoPayload } from "@/types/todo";

export async function GET() {
  const { data } = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log("HERE");

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as TodoPayload;
  const { data } = await axios.post<Todo>(
    "https://jsonplaceholder.typicode.com/todos",
    payload
  );
  return NextResponse.json(data);
}
