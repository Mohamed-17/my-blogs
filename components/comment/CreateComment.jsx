"use client";

import React, { useState, useTransition } from "react";
import styles from "./comment.module.css";
import { addNewComment } from "./actions";

function CreateComment({ slug }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (formData) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        await addNewComment(formData, slug);
        setSuccess("Comment added successfully!");

        const form = document.querySelector("form");
        if (form) form.reset();
      } catch (err) {
        setError(err.message || "Failed to create comment");
      }
    });
  };

  return (
    <div className={styles.sendComment}>
      <h1 className={styles.commentLetter}>Comment</h1>
      <form action={handleSubmit} className={styles.write}>
        <textarea
          name="newPost"
          className={styles.textInput}
          placeholder="write a comment..."
          required
        />
        <button className={styles.send} disabled={isPending}>
          {isPending ? "Sending..." : "Send"}
        </button>
      </form>
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
      {success && (
        <div style={{ color: "green", marginTop: "10px" }}>{success}</div>
      )}
    </div>
  );
}

export default CreateComment;
