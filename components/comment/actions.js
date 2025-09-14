"use server";

import { auth } from "@/auth";
import prisma from "@/utils/client";
import { revalidatePath } from "next/cache";

export async function addNewComment(formData, slug) {
  const newComment = formData.get("newPost");

  if (!newComment) {
    throw new Error("Comment content is required");
  }

  const session = await auth();
  if (!session?.user) {
    throw new Error("User not logged in");
  }

  try {
    const comment = await prisma.comment.create({
      data: {
        desc: newComment,
        postSlug: slug,
        userEmail: session.user.email,
      },
    });

    revalidatePath(`/posts/${slug}`);

    return { success: true, comment };
  } catch (error) {
    console.error("Error creating comment:", error);
    throw new Error("Failed to create comment");
  }
}
