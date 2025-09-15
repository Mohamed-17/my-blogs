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
          <Image
            src={item.img}
            alt="post"
            fill
            quality={60}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
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
