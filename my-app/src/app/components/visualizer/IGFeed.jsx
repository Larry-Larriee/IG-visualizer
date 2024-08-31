"use client";

import React, { useEffect, useMemo } from "react";

export default function IGFeed({
  images,
  objects,
  changeSubSection,
  subsection,
}) {
  // algorithm is an array used to get the topics that the user is interested in
  const algorithm = useMemo(() => {
    let result;

    if (objects) {
      objects.forEach((object) => {
        if (object["topics_your_topics"]) {
          result = object["topics_your_topics"];
        }
      });
    }

    return result;
  }, [objects]);

  return (
    <section className="bg-prim-5 shadow-rough min-h-182 flex w-full flex-col gap-8 rounded-xl px-10 py-8">
      <p className="text-prim-2 font-league text-3xl">
        Topics you may be Interested in:
      </p>

      <div className="flex flex-col gap-5">
        {algorithm &&
          algorithm.map((topic, index) => {
            return (
              <>
                <div className="flex" key={index}>
                  <p className="text-prim-2 hover:text-prim-9 font-league text-xl transition duration-200 ease-in-out hover:scale-105">
                    {topic["string_map_data"]["Name"]["value"]}
                  </p>
                </div>
              </>
            );
          })}
      </div>
    </section>
  );
}
