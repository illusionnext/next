import { books } from "@/app/api/db/db";
import { NextRequest } from "next/server";

// This is a Next.js API route that returns a list of books in JSON format.
export async function GET() {
  return Response.json({ books });
}

export async function POST(request: NextRequest) {
  const book = await request.json();

  books.push(book);
  return Response.json({ message: "Book added successfully", book: book });
}
