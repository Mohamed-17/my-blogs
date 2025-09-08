import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import MenuList from "@/components/Menu/MenuList";
import Comment from "@/components/comment/Comment";
async function page({ params }) {
  const { slug } = await params;
  return (
    <>
      <div className={styles.post}>
        <div className={styles.postInfo}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.writer}>
            <Image
              src={"/culture.png"}
              alt="Single Post Photo "
              width={50}
              height={50}
              loading="lazy"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
            <div className={styles.details}>
              <h5 className={styles.name}>William Randolph</h5>
              <p className={styles.date}>9 July 2025</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/culture.png"}
            fill
            alt="image culture"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className={styles.postDetails}>
        <div className={styles.postDesc}>
          <div className={styles.description}>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non
              laborum exercitationem odit deserunt libero ut temporibus ullam
              saepe? Repellendus accusantium saepe incidunt. Labore, ad ipsam
              sit laboriosam quibusdam voluptatibus!
            </p>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non
              laborum exercitationem odit deserunt libero ut temporibus ullam
              saepe? Repellendus accusantium saepe incidunt. Labore, ad ipsam
              sit laboriosam quibusdam voluptatibus!
            </p>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non
              laborum exercitationem odit deserunt libero ut temporibus ullam
              saepe? Repellendus accusantium saepe incidunt. Labore, ad ipsam
              sit laboriosam quibusdam voluptatibus!
            </p>
          </div>
          <Comment />
        </div>
        <MenuList />
      </div>
    </>
  );
}

export default page;
