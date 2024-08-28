import React from "react";

export default function EditorUI({ title, text }) {
  return (
    <>
      <div className="bg-prim-3 w-169 flex h-80 flex-col gap-3 rounded-2xl">
        <p className="font-league bg-prim-4 w-full rounded-t-2xl px-5 py-1 text-lg text-white">
          {title}
        </p>
        <pre>
          <p className="font-league leading-5-important px-5 text-base font-semibold text-white">
            {text}
          </p>
        </pre>
      </div>
    </>
  );
}
