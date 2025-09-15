"use client";
import React, { useState } from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import User from "./User";

function Menu() {
  const [open, isOpen] = useState(false);
  return (
    <div>
      <div className={styles.menu} onClick={() => isOpen(!open)}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {open && (
        <div className={styles.menuElements}>
          <Link href={"/"} onClick={() => isOpen(false)}>
            HomePage
          </Link>
          <Link href={"/"} onClick={() => isOpen(false)}>
            Contact
          </Link>
          <Link href={"/"} onClick={() => isOpen(false)}>
            About
          </Link>
          <div onClick={() => isOpen(false)} className={styles.user}>
            <User />
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
