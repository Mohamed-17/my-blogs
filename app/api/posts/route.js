import prisma from "@/utils/client";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");
  const POST_PER_PAGE = 2;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify(`Something went wrong!`), {
      status: 500,
    });
  }
};
