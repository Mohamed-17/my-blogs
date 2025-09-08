import CardList from "@/components/cardList/CardList";
import MenuList from "@/components/Menu/MenuList";
import styles from "./blog.module.css";
import React from "react";

async function BlogPage() {
  return (
    <>
      <div className={styles.blogName}>Style Blog</div>
      <div className={styles.categoryList}>
        <CardList />
        <MenuList />
      </div>
    </>
  );
}

export default BlogPage;
