"use client";

import React, { useEffect, useState } from "react";

export default function SpanLink({ link, text = "Here" }) {
  return (
    <>
      <span
        className="text-prim-14 hover:cursor-pointer"
        onClick={() => window.open(link, "_blank")}
      >
        {text}
      </span>
    </>
  );
}
