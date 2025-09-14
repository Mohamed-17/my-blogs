import CardList from "@/components/cardList/CardList";
import MenuList from "@/components/Menu/MenuList";
import styles from "./blog.module.css";
import React from "react";

async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;
  const { cat } = params;

  return (
    <>
      <div className={styles.blogName}>Style Blog</div>
      <div className={styles.categoryList}>
        <CardList page={page} cat={cat} />
        <MenuList />
      </div>
    </>
  );
}

export default BlogPage;
