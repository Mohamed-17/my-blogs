import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.textArea}>
        <h1 className={styles.logo}>My Blogs</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eius, est, amet iusto fuga quam esse suscipit fugiat explicabo,
          quibusdam veniam. Itaque libero doloremque quo sit quis eos quam at?
        </p>
        <div className={styles.icons}>
          <Image src={"/facebook.png"} alt="" width={25} height={25} />
          <Image src={"/instagram.png"} alt="" width={25} height={25} />
          <Image src={"/tiktok.png"} alt="" width={25} height={25} />
          <Image src={"/youtube.png"} alt="" width={25} height={25} />
        </div>
      </div>
      <div className={styles.links}>
        <div>
          <h4>Links</h4>
          <Link href={"/"}>HomePage</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div>
          <h4>Tags</h4>
          <Link href={"/style"}>Style</Link>
          <Link href={"/fashion"}>Fashion</Link>
          <Link href={"/coding"}>Coding</Link>
          <Link href={"/travel"}>Travel</Link>
        </div>
        <div>
          <h4>Social</h4>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Tiktok</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
