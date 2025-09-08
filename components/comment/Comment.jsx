import React from "react";
import styles from "./comment.module.css";
import Image from "next/image";
function Comment() {
  return (
    <div className={styles.comment}>
      <h1 className={styles.commentLetter}>Comment</h1>
      <div className={styles.write}>
        <textarea
          name="newPost"
          className={styles.textInput}
          placeholder="write a comment..."
        />
        <button className={styles.send}>Send</button>
      </div>
      <div className={styles.newComment}>
        <div className={styles.commentMaker}>
          <Image
            src={"/culture.png"}
            alt="Single Post Photo "
            width={50}
            height={50}
            loading="lazy"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <div className={styles.writer}>
            <h5>John Doe</h5>
            <p>09.07.2025</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          obcaecati sint id ad omnis molestias cumque esse, debitis assumenda.
          Voluptatem pariatur enim aspernatur officiis quia nemo et saepe dolor
          natus?
        </p>
      </div>
      <div className={styles.newComment}>
        <div className={styles.commentMaker}>
          <Image
            src={"/culture.png"}
            alt="Single Post Photo "
            width={50}
            height={50}
            loading="lazy"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <div className={styles.writer}>
            <h5>John Doe</h5>
            <p>09.07.2025</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          obcaecati sint id ad omnis molestias cumque esse, debitis assumenda.
          Voluptatem pariatur enim aspernatur officiis quia nemo et saepe dolor
          natus?
        </p>
      </div>
      <div className={styles.newComment}>
        <div className={styles.commentMaker}>
          <Image
            src={"/culture.png"}
            alt="Single Post Photo "
            width={50}
            height={50}
            loading="lazy"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <div className={styles.writer}>
            <h5>John Doe</h5>
            <p>09.07.2025</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          obcaecati sint id ad omnis molestias cumque esse, debitis assumenda.
          Voluptatem pariatur enim aspernatur officiis quia nemo et saepe dolor
          natus?
        </p>
      </div>
      <div className={styles.newComment}>
        <div className={styles.commentMaker}>
          <Image
            src={"/culture.png"}
            alt="Single Post Photo "
            width={50}
            height={50}
            loading="lazy"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <div className={styles.writer}>
            <h5>John Doe</h5>
            <p>09.07.2025</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          obcaecati sint id ad omnis molestias cumque esse, debitis assumenda.
          Voluptatem pariatur enim aspernatur officiis quia nemo et saepe dolor
          natus?
        </p>
      </div>
      <div className={styles.newComment}>
        <div className={styles.commentMaker}>
          <Image
            src={"/culture.png"}
            alt="Single Post Photo "
            width={50}
            height={50}
            loading="lazy"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <div className={styles.writer}>
            <h5>John Doe</h5>
            <p>09.07.2025</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          obcaecati sint id ad omnis molestias cumque esse, debitis assumenda.
          Voluptatem pariatur enim aspernatur officiis quia nemo et saepe dolor
          natus?
        </p>
      </div>
      <div className={styles.newComment}>
        <div className={styles.commentMaker}>
          <Image
            src={"/culture.png"}
            alt="Single Post Photo "
            width={50}
            height={50}
            loading="lazy"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <div className={styles.writer}>
            <h5>John Doe</h5>
            <p>09.07.2025</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          obcaecati sint id ad omnis molestias cumque esse, debitis assumenda.
          Voluptatem pariatur enim aspernatur officiis quia nemo et saepe dolor
          natus?
        </p>
      </div>
    </div>
  );
}

export default Comment;
