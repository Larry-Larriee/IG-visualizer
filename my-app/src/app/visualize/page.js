"use client";

import React, { useState, useEffect } from "react";
import SpanLink from "../components/helper/SpanLink";

export default function Page() {
  const [folder, setFolder] = useState(true);
  const [section, setSection] = useState("Public Profile");

  const changeSection = (sectionButton) => {
    setSection(sectionButton);
  };

  useEffect(() => {
    console.log(section);
  }, [section]);

  return (
    <>
      {!folder && (
        <div className="bg-prim-5 relative my-24 flex h-80 w-1/2 items-center justify-center border-4 border-dashed border-gray-500 hover:cursor-pointer">
          <section flex="flex flex-col gap-3 w-3/4">
            <p className="text-center font-league text-2xl">
              Upload your Instagram folder given by Meta.
            </p>

            <p className="text-center font-league text-2xl">
              Refer to this{" "}
              <SpanLink
                text={"page"}
                link={"https://help.instagram.com/519522125107875"}
              />{" "}
              to obtain your Instagram folder
            </p>
          </section>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-prim-6 absolute bottom-12 left-1/2 right-0 h-16 w-16 -translate-x-1/2"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {folder && (
        <div className="flex w-10/12 gap-16">
          <section className="bg-prim-5 shadow-rough flex w-full flex-col gap-16 rounded-xl px-10 py-8">
            <div className="flex gap-16">
              <div className="bg-prim-9 w-116 flex h-56 items-center justify-center rounded-xl transition duration-200 ease-in-out hover:scale-105">
                <p className="font-league text-2xl text-white">User Image</p>
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
                    Your Instagram bio, which may include hyperlinks, emojis,
                    etc.
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
          <section className="bg-prim-5 shadow-rough flex w-96 flex-none flex-col gap-5 rounded-xl px-10 py-8">
            <p
              onClick={() => changeSection("Public Profile")}
              className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
            >
              Public Profile
            </p>
            <p
              onClick={() => changeSection("Activity")}
              className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
            >
              Activity
            </p>
            <p
              onClick={() => changeSection("Login Information")}
              className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
            >
              Login Information
            </p>
            <p
              onClick={() => changeSection("Your IG Feed")}
              className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
            >
              Your IG Feed
            </p>
            <p
              onClick={() => changeSection("Ad Information")}
              className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
            >
              Ad Information
            </p>
          </section>
        </div>
      )}
    </>
  );
}
