import React, { Suspense } from "react";
import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Pagination from "@/components/pagination/Pagination";
import MenuList from "@/components/Menu/MenuList";
import Loading from "@/loading";

async function HomePage({ searchParams }) {
  const patams = await searchParams;
  const page = parseInt(patams?.page) || 1;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Featured />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <CategoryList img={true} />
      </Suspense>

      <div className={styles.categoryList}>
        <Suspense fallback={<Loading />}>
          <CardList page={page} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <MenuList />
        </Suspense>
      </div>
    </>
  );
}

export default HomePage;
