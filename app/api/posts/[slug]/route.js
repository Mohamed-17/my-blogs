import prisma from "@/utils/client";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = await params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug: slug },
      include: {
        user: true,
        comments: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
};
