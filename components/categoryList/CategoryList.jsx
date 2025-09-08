import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";
const data = [
  {
    id: 1,
    name: "style",
    image: "/style.png",
  },
  {
    id: 2,
    name: "fashion",
    image: "/fashion.png",
  },
  {
    id: 3,
    name: "food",
    image: "/food.png",
  },
  {
    id: 4,
    name: "travel",
    image: "/travel.png",
  },
  {
    id: 5,
    name: "culture",
    image: "/culture.png",
  },
  {
    id: 6,
    name: "coding",
    image: "/coding.png",
  },
];
function CategoryList() {
  return (
    <div className={styles.categories}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.catSection}>
        {data.map((category) => (
          <Link
            href={`/blog?cat=${category.name}`}
            key={category.id}
            className={`${styles.category}`}
          >
            <Image
              src={category.image}
              alt={category.name}
              style={{ objectFit: "cover", borderRadius: "50%" }}
              width={30}
              height={30}
              loading="lazy"
            />

            <span className={styles.categoryName}>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
