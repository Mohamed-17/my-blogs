"use client";
import React from "react";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";

function page() {
  const { data, status } = useSession();

  console.log(status);
  if (status === "loading")
    return (
      <div className={styles.loginContainer}>
        <p>Loading...</p>
      </div>
    );
  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapperContainer}>
        {status === "authenticated" ? (
          <p>
            Your already login, {data.user.name.split(" ")[0]} enjoy the app
          </p>
        ) : (
          <>
            {" "}
            <button
              className={styles.socialButtons}
              onClick={() => signIn("google")}
            >
              Sign in with Google
            </button>
            <button
              className={styles.socialButtons}
              onClick={() => signIn("github")}
            >
              Sign in with Github
            </button>
            {/* <button
              className={styles.socialButtons}
              onClick={() => signIn("facebook")}
            >
              Sign in with facebook
            </button> */}
          </>
        )}
      </div>
    </div>
  );
}

export default page;
