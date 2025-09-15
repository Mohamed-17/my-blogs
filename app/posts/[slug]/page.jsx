import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import MenuList from "@/components/Menu/MenuList";
import Comment from "@/components/comment/Comment";
import { auth } from "@/auth";
import CreateComment from "@/components/comment/CreateComment";

const getData = async (slug) => {
  const data = await fetch(`${process.env.NEXTAUTH_URL}api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!data.ok) return new Error("fetching error");

  return data.json();
};
async function page({ params }) {
  const { slug } = await params;
  const post = await getData(slug);
  const session = await auth();

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className={styles.post}>
        <div className={styles.postInfo}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.writer}>
            {post?.user?.image && (
              <Image
                src={post?.user?.image}
                alt="Single Post Photo "
                width={50}
                height={50}
                loading="lazy"
                quality={60}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            )}
            <div className={styles.details}>
              <h5 className={styles.name}>{post.user.name}</h5>
              <p className={styles.date}>{post.createdAt.slice(0, 10)}</p>
            </div>
          </div>
        </div>
        {post.img && (
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              fill
              alt="image culture"
              quality={70}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        )}
      </div>
      <div className={styles.postDetails}>
        <div className={styles.postDesc}>
          <div className={styles.description}>
            <div
              className={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: post.desc }}
            />
          </div>
          {session?.user ? (
            <>
              <CreateComment slug={slug} />
              {post.comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </>
          ) : (
            <p className={styles.noComment}>
              You need to login to see & add comments
            </p>
          )}
        </div>
        <MenuList />
      </div>
    </>
  );
}

export default page;
