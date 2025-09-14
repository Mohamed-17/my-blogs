import React from "react";
import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Pagination from "@/components/pagination/Pagination";
import MenuList from "@/components/Menu/MenuList";

function HomePage({ searchParams }) {
  console.log(searchParams.page);
  const page = parseInt(searchParams.page) || 1;
  return (
    <>
      <Featured />
      <CategoryList img={true} />
      <div className={styles.categoryList}>
        <CardList page={page} />
        <MenuList />
      </div>
    </>
  );
}

export default HomePage;
