import React from "react";
import styles from "./comment.module.css";
import Image from "next/image";
function Comment({ comment }) {
  return (
    <>
      <div className={styles.comment} key={comment.id}>
        <div className={styles.newComment}>
          <div className={styles.commentMaker}>
            {comment.user?.image && (
              <Image
                src={comment.user.image}
                alt="Single Post Photo "
                width={50}
                height={50}
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            )}
            <div className={styles.writer}>
              <h5>{comment.user.name}</h5>
              <p>{comment.createdAt.slice(0, 10)}</p>
            </div>
          </div>
          <p>{comment.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Comment;
