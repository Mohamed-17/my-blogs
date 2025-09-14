import { auth } from "@/auth";
import prisma from "@/utils/client";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const session = await auth();
  if (!session.user)
    return new NextResponse("User Not LogIn !", { status: 401 });
  try {
    const body = await request.json();
    const newComment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(newComment), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("fetching error!", { status: 500 });
  }
};
