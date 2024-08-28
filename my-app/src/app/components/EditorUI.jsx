import React from "react";

export default function EditorUI({
  title,
  text,
  textOptional,
  position = "static",
}) {
  return (
    <>
      {position === "static" && (
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
      )}

      {position === "absolute" && (
        <div className="bg-prim-5 w-169 absolute -right-0 bottom-16 flex h-80 flex-col gap-3 rounded-2xl">
          <p className="font-league bg-prim-6 text-prim-2 w-full rounded-t-2xl px-5 py-1 text-lg">
            {title}
          </p>
          <section className="flex flex-col gap-5">
            <p className="font-league leading-5-important text-prim-2 px-5 text-xl font-medium">
              {text}
            </p>
            {textOptional && (
              <p className="font-league leading-5-important text-prim-2 px-5 text-xl font-medium">
                {textOptional}
              </p>
            )}
          </section>
        </div>
      )}
    </>
  );
}
