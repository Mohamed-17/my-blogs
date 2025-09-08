import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import User from "./User";
import Menu from "./Menu";
import ToggleMood from "../toggleMood/ToggleMood";
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.icons}>
          <Image src={"/facebook.png"} alt="" width={25} height={25} />
          <Image src={"/instagram.png"} alt="" width={25} height={25} />
          <Image src={"/tiktok.png"} alt="" width={25} height={25} />
          <Image src={"/youtube.png"} alt="" width={25} height={25} />
        </div>
        <div className={styles.title}>
          <Link href={"/"}>My Blogs</Link>
        </div>
        <div className={styles.toggle}>
          <ToggleMood />
        </div>
        <div className={styles.links}>
          <ToggleMood />
          <Link className={styles.link} href={"/"}>
            HomePage
          </Link>
          <Link className={styles.link} href={"/"}>
            Contact
          </Link>
          <Link className={styles.link} href={"/"}>
            About
          </Link>
          <User />
        </div>

        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
