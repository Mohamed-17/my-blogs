import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";

import CardItem from "./cardItem/CardItem";
const getPosts = async (page, cat) => {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}api/posts?page=${page}&cat=${cat || ""}`
  );
  return response.json();
};
async function CardList({ page, cat }) {
  const { posts, count } = await getPosts(page, cat);

  return (
    <>
      <div className={styles.cardList}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          {posts?.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}
        </div>
        <Pagination page={page} count={count} />
      </div>
    </>
  );
}

export default CardList;
