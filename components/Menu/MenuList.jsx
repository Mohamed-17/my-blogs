import React from "react";
import styles from "./menuList.module.css";
import Image from "next/image";
import CategoryList from "../categoryList/CategoryList";
import MenuCategories from "./MenuCategories";
import MenuPost from "./MenuPost";
function MenuList() {
  return (
    <div className={styles.menuList}>
      <div className={styles.popular}>
        <div className={styles.titleSection}>
          <h2> {"What's hot"}</h2>
          <h1 className={styles.title}>Most Popular</h1>
        </div>
        <MenuPost isImage={false} />
      </div>
      <div className={styles.categories}>
        <div className={styles.titleSection}>
          <h2> {"Discover by topic"}</h2>
          <h1 className={styles.title}>Categories</h1>
        </div>
        <div className={styles.catHolder}>
          <MenuCategories />
        </div>
      </div>
      <div className={styles.titleSection}>
        <h2> {"Chosen by the editor"}</h2>
        <h1 className={styles.title}>Editors Pick</h1>
      </div>
      <MenuPost isImage={true} />
    </div>
  );
}

export default MenuList;
