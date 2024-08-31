import React from "react";

export default function AdInfo({
  images,
  objects,
  changeSubSection,
  subsection,
}) {
  return (
    <section className="bg-prim-5 shadow-rough min-h-182 flex w-full flex-col gap-16 rounded-xl px-10 py-8">
      <p className="text-prim-2 font-league text-3xl">AD Info</p>
    </section>
  );
}
