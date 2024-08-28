"use client";

import React from "react";

// Linky is a helper component that creates paragraph element links, because the server does not support window.open
export default function Linky({ text, link, styling }) {
  return (
    <>
      <p onClick={() => (window.location.href = link)} className={styling}>
        {text}
      </p>
    </>
  );
}
