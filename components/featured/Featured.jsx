import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
function Featured() {
  return (
    <div className={styles.featured}>
      <h1 className={styles.title}>
        <b>Hey, Mo Blog here! </b>
        Discover my stories and creative ideas
      </h1>
      <div className={styles.feature}>
        <div className={styles.imgContaienr}>
          <Image
            style={{ objectFit: "cover" }}
            src={"/culture.png"}
            alt="culture"
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.secondTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            porro adipisci odio soluta nostrum quaerat dolore, nulla cum?
            Explicabo repellat veniam, itaque fuga saepe tempora exercitationem
            odio reiciendis quisquam consectetur?
          </p>
          <button className={styles.btn}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
