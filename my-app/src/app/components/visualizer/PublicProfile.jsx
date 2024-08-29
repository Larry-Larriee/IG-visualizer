"use client";

import React, { useMemo } from "react";
import Image from "next/image";

export default function PublicProfile({ convertedData }) {
  const profilePicture = useMemo(() => {
    console.log(convertedData);

    console.log("obtained JS objects file", convertedData[1]);

    convertedData[1].forEach((object) => {
      console.log("working");

      // if (file["ig_profile_picture"]) {
      //   return URL.createObjectURL(file["ig_profile_picture"][0]);
      // }
    });
  }, [convertedData]);

  return (
    <>
      <section className="bg-prim-5 shadow-rough min-h-182 flex w-full flex-col gap-16 rounded-xl px-10 py-8">
        <div className="flex gap-16">
          <div className="bg-prim-9 w-116 flex h-56 items-center justify-center rounded-xl transition duration-200 ease-in-out hover:scale-105">
            {profilePicture && (
              <Image
                src={profilePicture}
                alt="User Image"
                width={500}
                height={500}
                className="h-full w-full"
              />
            )}
          </div>

          <div className="flex min-h-56 flex-col">
            <article className="flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="text-prim-2 font-league text-4xl font-bold">
                  Larry Le
                </p>
                <div className="flex gap-5">
                  <p className="text-prim-2 font-league text-lg">
                    Followers: 216
                  </p>
                  <p className="text-prim-2 font-league text-lg">
                    Following: 234
                  </p>
                </div>
              </div>

              <p className="text-prim-2 font-league text-xl">
                Your Instagram bio, which may include hyperlinks, emojis, etc.
              </p>
            </article>

            <div className="flex h-full flex-col justify-end">
              <p className="text-prim-2 font-league text-xl">
                Followed by <span className="font-bold">Johnson</span> and{" "}
                <span className="font-bold">Dean</span>
              </p>
            </div>
          </div>
        </div>

        {/* you are able to add flex-grow or flex-shrink to children of a flexbox. setting it to 1/4 rounded each div to almost 1/3, the equivalent of setting width to 1/3 and accounting for the gap-3 */}
        <div className="flex flex-wrap gap-3">
          <div className="bg-prim-6 h-32 w-1/4 flex-grow rounded-sm" />
          <div className="bg-prim-6 h-32 w-1/4 flex-grow rounded-sm" />
          <div className="bg-prim-6 h-32 w-1/4 flex-grow rounded-sm" />
          <div className="bg-prim-6 h-32 w-1/4 flex-grow rounded-sm" />
          <div className="bg-prim-6 h-32 w-1/4 flex-grow rounded-sm" />
          <div className="bg-prim-6 h-32 w-1/4 flex-grow rounded-sm" />
        </div>
      </section>
    </>
  );
}
