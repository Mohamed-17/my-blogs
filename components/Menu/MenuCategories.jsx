import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";
function MenuCategories() {
  return (
    <div className={styles.categoryContainer}>
      <Link href={"/style"} className={styles.category}>
        Style
      </Link>
      <Link href={"/fashion"} className={styles.category}>
        Fashion
      </Link>
      <Link href={"/food"} className={styles.category}>
        Food
      </Link>
      <Link href={"/travel"} className={styles.category}>
        Travel
      </Link>
      <Link href={"/culture"} className={styles.category}>
        Culture
      </Link>
      <Link href={"/coding"} className={styles.category}>
        coding
      </Link>
    </div>
  );
}

export default MenuCategories;
