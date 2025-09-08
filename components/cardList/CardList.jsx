import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Link from "next/link";
function CardList() {
  return (
    <>
      <div className={styles.cardList}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          <Link href={"/culture"} className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={"/culture.png"} alt="post" fill />
            </div>
            <div className={styles.textArea}>
              <p className={styles.desc}>
                <span className={styles.date}>09.06.2025 -</span>
                <span className={styles.type}>Culture</span>
              </p>
              <h1 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h1>
              <p className={styles.postDesc}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae laudantium ex, placeat inventore, iusto molestiae
                quasi nostrum voluptate officiis possimus quibusdam architecto
                ratione? Laborum iste rerum placeat temporibus nisi ratione?
              </p>
              <button className={styles.link}>Read More</button>
            </div>
          </Link>
          <Link href={"/food"} className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={"/culture.png"} alt="post" fill />
            </div>
            <div className={styles.textArea}>
              <p className={styles.desc}>
                <span className={styles.date}>09.06.2025 -</span>
                <span className={styles.type}>Culture</span>
              </p>
              <h1 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h1>
              <p className={styles.postDesc}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae laudantium ex, placeat inventore, iusto molestiae
                quasi nostrum voluptate officiis possimus quibusdam architecto
                ratione? Laborum iste rerum placeat temporibus nisi ratione?
              </p>
              <button className={styles.link}>Read More</button>
            </div>
          </Link>
          <Link href={"/fashion"} className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={"/culture.png"} alt="post" fill />
            </div>
            <div className={styles.textArea}>
              <p className={styles.desc}>
                <span className={styles.date}>09.06.2025 -</span>
                <span className={styles.type}>Culture</span>
              </p>
              <h1 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h1>
              <p className={styles.postDesc}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae laudantium ex, placeat inventore, iusto molestiae
                quasi nostrum voluptate officiis possimus quibusdam architecto
                ratione? Laborum iste rerum placeat temporibus nisi ratione?
              </p>
              <button className={styles.link}>Read More</button>
            </div>
          </Link>
          <Link href={"/coding"} className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={"/culture.png"} alt="post" fill />
            </div>
            <div className={styles.textArea}>
              <p className={styles.desc}>
                <span className={styles.date}>09.06.2025 -</span>
                <span className={styles.type}>Culture</span>
              </p>
              <h1 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h1>
              <p className={styles.postDesc}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae laudantium ex, placeat inventore, iusto molestiae
                quasi nostrum voluptate officiis possimus quibusdam architecto
                ratione? Laborum iste rerum placeat temporibus nisi ratione?
              </p>
              <button className={styles.link}>Read More</button>
            </div>
          </Link>
          <Link href={"/travel"} className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={"/culture.png"} alt="post" fill />
            </div>
            <div className={styles.textArea}>
              <p className={styles.desc}>
                <span className={styles.date}>09.06.2025 -</span>
                <span className={styles.type}>Culture</span>
              </p>
              <h1 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h1>
              <p className={styles.postDesc}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae laudantium ex, placeat inventore, iusto molestiae
                quasi nostrum voluptate officiis possimus quibusdam architecto
                ratione? Laborum iste rerum placeat temporibus nisi ratione?
              </p>
              <button className={styles.link}>Read More</button>
            </div>
          </Link>
          <Link href={"/style"} className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={"/culture.png"} alt="post" fill />
            </div>
            <div className={styles.textArea}>
              <p className={styles.desc}>
                <span className={styles.date}>09.06.2025 -</span>
                <span className={styles.type}>Culture</span>
              </p>
              <h1 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h1>
              <p className={styles.postDesc}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae laudantium ex, placeat inventore, iusto molestiae
                quasi nostrum voluptate officiis possimus quibusdam architecto
                ratione? Laborum iste rerum placeat temporibus nisi ratione?
              </p>
              <button className={styles.link}>Read More</button>
            </div>
          </Link>
        </div>
        <Pagination />
      </div>
    </>
  );
}

export default CardList;
