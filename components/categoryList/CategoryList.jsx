import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}api/categories`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Somthing went wrong!");

  return response.json();
};
async function CategoryList() {
  const data = await getData();

  return (
    <div className={styles.categories}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.catSection}>
        {data?.map((category) => (
          <Link
            href={`/blog?cat=${category.title.toLowerCase()}`}
            key={category.id}
            className={`${styles.category}`}
          >
            {category.img && (
              <Image
                src={category.img}
                alt={category.title}
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width={30}
                height={30}
                loading="lazy"
              />
            )}

            <span className={styles.categoryName}>{category.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
