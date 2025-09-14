"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function User() {
  const { data, status } = useSession();
  if (status === "unauthenticated") return <Link href={"/login"}>Login</Link>;
  return (
    <>
      {" "}
      <Link href={"/write"}>Write</Link>
      <Link href={"/"} onClick={() => signOut()}>
        Logout
      </Link>
    </>
  );
}

export default User;
