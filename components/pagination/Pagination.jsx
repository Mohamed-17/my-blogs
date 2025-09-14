"use client";
import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
function Pagination({ page, count }) {
  const router = useRouter();
  const POST_PER_PAGE = 2;
  const hasPrev = page <= 1;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  console.log(page);
  return (
    <div className={styles.pagination}>
      <button
        className={styles.btn}
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={hasPrev}
      >
        Previous
      </button>
      <button
        className={styles.btn}
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
