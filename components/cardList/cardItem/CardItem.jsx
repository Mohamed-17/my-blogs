import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./cardItem.module.css";
function CardItem({ item, key }) {
  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <Link href={`/posts/${item.slug}`} className={styles.post} key={key}>
      {item.img && (
        <div className={styles.imgContainer}>
          <Image src={item.img} alt="post" fill />
        </div>
      )}
      <div className={styles.textArea}>
        <p className={styles.desc}>
          <span className={styles.date}>{formatDate(item.createdAt)}</span>
          <span className={styles.type}>- {item.catSlug}</span>
        </p>
        <h1 className={styles.postTitle}>{item.title}</h1>
        <p className={styles.postDesc}>{item.desc}</p>
        <button className={styles.link}>Read More</button>
      </div>
    </Link>
  );
}

export default CardItem;
