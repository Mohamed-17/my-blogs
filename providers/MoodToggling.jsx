"use client";
import React, { createContext, useState } from "react";
export const MoodContext = createContext();
function MoodToggling({ children }) {
  const [mood, setMood] = useState("dark");
  function onChangeMood() {
    setMood(mood === "light" ? "dark" : "light");
  }
  return (
    <MoodContext.Provider
      value={{
        mood,
        onChangeMood,
      }}
    >
      <div className={`${mood}`}>{children}</div>
    </MoodContext.Provider>
  );
}

export default MoodToggling;
