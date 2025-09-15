import React from "react";
import styles from "./menuPost.module.css";
import Image from "next/image";

function MenuPost({ isImage }) {
  return (
    <>
      {" "}
      <div className={styles.post}>
        <div className={styles.postContainer}>
          {isImage && (
            <div className={styles.imgContainer}>
              <Image
                src={"/culture.png"}
                alt="culture"
                width={60}
                quality={60}
                loading="lazy"
                height={60}
                style={{ objectFit: "cover" }}
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textArea}>
            <div className={`${styles.travel} ${styles.poster}`}>Travel</div>
            <h4 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className={styles.content}>
              <span className={styles.name}>Mo Ash - </span>
              <span className={styles.date}>07.06.2025</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.postContainer}>
          {isImage && (
            <div className={styles.imgContainer}>
              <Image
                src={"/culture.png"}
                alt="culture"
                width={60}
                loading="lazy"
                height={60}
                style={{ objectFit: "cover" }}
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textArea}>
            <div className={`${styles.culture} ${styles.poster}`}>culture</div>
            <h4 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className={styles.content}>
              <span className={styles.name}>Mo Ash - </span>
              <span className={styles.date}>07.06.2025</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.postContainer}>
          {isImage && (
            <div className={styles.imgContainer}>
              <Image
                src={"/culture.png"}
                alt="culture"
                width={60}
                loading="lazy"
                height={60}
                style={{ objectFit: "cover" }}
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textArea}>
            <div className={`${styles.food} ${styles.poster}`}>food</div>
            <h4 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className={styles.content}>
              <span className={styles.name}>Mo Ash - </span>
              <span className={styles.date}>07.06.2025</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.postContainer}>
          {isImage && (
            <div className={styles.imgContainer}>
              <Image
                src={"/culture.png"}
                alt="culture"
                width={60}
                loading="lazy"
                height={60}
                style={{ objectFit: "cover" }}
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textArea}>
            <div className={`${styles.fashion} ${styles.poster}`}>fashion</div>
            <h4 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className={styles.content}>
              <span className={styles.name}>Mo Ash - </span>
              <span className={styles.date}>07.06.2025</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPost;
