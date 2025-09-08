import React from "react";
import styles from "./login.module.css";
function page() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapperContainer}>
        <button className={styles.socialButtons}>Sign in with Google</button>
        <button className={styles.socialButtons}>Sign in with Github</button>
        <button className={styles.socialButtons}>Sign in with facebook</button>
      </div>
    </div>
  );
}

export default page;
