"use client";
import React, { useContext } from "react";
import styles from "./toggleMood.module.css";
import Image from "next/image";
import { MoodContext } from "@/providers/MoodToggling";
function ToggleMood() {
  const { mood, onChangeMood } = useContext(MoodContext);

  return (
    <div className={styles.toggle} onClick={onChangeMood}>
      <Image src={"/sun.png"} alt="" width={15} height={15} />
      <span
        className={styles.sircle}
        style={mood === "light" ? { left: "1px" } : { right: "1px" }}
      ></span>
      <Image src={"/moon.png"} alt="" width={15} height={15} />
    </div>
  );
}

export default ToggleMood;
