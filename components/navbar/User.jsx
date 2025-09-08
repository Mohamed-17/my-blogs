"use client";
import Link from "next/link";
import React, { useState } from "react";

function User() {
  const [isUser, setIsUser] = useState(false);
  if (!isUser) return <Link href={"/login"}>Login</Link>;
  return (
    <>
      {" "}
      <Link href={"/"}>Write</Link>
      <Link href={"/"}>Logout</Link>
    </>
  );
}

export default User;
