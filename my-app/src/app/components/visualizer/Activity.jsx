"use client";

import React, { useEffect } from "react";
import Speech from "../Speech";
import Comment from "../Comment";

// import Image from "next/image";

export default function Activity({
  convertedData,
  changeSubSection,
  subsection,
}) {
  // on mount, change the subsection to "Direct Messages," which is the default subsection for the "Activity" section
  useEffect(() => {
    changeSubSection("Direct Messages");
  }, []);

  return (
    <section className="bg-prim-5 shadow-rough min-h-182 flex w-full flex-col gap-5 rounded-xl px-10 py-8">
      {subsection === "Posts" && (
        <>
          <p className="text-prim-2 font-league text-3xl">Posts</p>

          <div className="flex h-full w-full flex-wrap gap-2">
            <div className="bg-prim-6 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
            <div className="bg-prim-6 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
            <div className="bg-prim-6 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
            <div className="bg-prim-6 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
            <div className="bg-prim-6 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
            <div className="bg-prim-6 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
            <div className="bg-prim-6 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
          </div>
        </>
      )}

      {subsection === "Stories" && (
        <>
          <p className="text-prim-2 font-league text-3xl">Stories</p>

          <div className="flex h-full w-full flex-wrap gap-2">
            <div className="bg-prim-6 relative h-72 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <section className="absolute left-1/2 top-10 flex -translate-x-1/2">
                <p className="w-48 rounded-xl bg-gray-400 px-2 py-2 font-league text-base font-bold text-white">
                  She looks so cool @jess
                </p>
              </section>
            </div>
            <div className="bg-prim-6 h-48 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
            <div className="bg-prim-6 relative h-72 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <section className="absolute bottom-10 left-1/2 flex -translate-x-1/2">
                <p className="w-48 rounded-xl bg-black px-2 py-2 font-league text-base font-bold text-white">
                  @fortnite W clip 😎
                </p>
              </section>
            </div>
            <div className="bg-prim-6 h-48 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
            <div className="bg-prim-6 h-64 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer" />
            <div className="bg-prim-6 relative h-56 w-1/4 flex-grow rounded-sm transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <section className="absolute bottom-10 left-1/2 flex -translate-x-1/2">
                <p className="bg-prim-9 w-40 rounded-xl px-2 py-2 font-league text-base font-bold text-white">
                  @look at this dude! what a silly goose
                </p>
              </section>
            </div>
          </div>
        </>
      )}

      {subsection === "Direct Messages" && (
        <>
          <p className="text-prim-2 font-league text-3xl">Direct Messages</p>

          <div className="flex h-full w-full gap-10">
            <section className="flex h-full w-64 flex-none flex-col gap-4 rounded-lg bg-gray-200 p-5">
              <p className="text-prim-2 hover:text-prim-9 font-league text-xl transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                Group Chat
              </p>
              <p className="text-prim-2 hover:text-prim-9 font-league text-xl transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                Group Chat
              </p>
              <p className="text-prim-2 hover:text-prim-9 font-league text-xl transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                Group Chat
              </p>
              <p className="text-prim-2 hover:text-prim-9 font-league text-xl transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                Friend
              </p>
              <p className="text-prim-2 hover:text-prim-9 font-league text-xl transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                Friend
              </p>
              <p className="text-prim-2 hover:text-prim-9 font-league text-xl transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                Friend
              </p>
            </section>

            <section className="flex w-full flex-col gap-9">
              <Speech
                orientation={"left"}
                text={"WHY WAS THAT TEST SO HARD?"}
              />
              <Speech
                orientation={"right"}
                text={"It's cuz you didn't do the hw"}
              />
              <Speech
                orientation={"left"}
                text={
                  "This is the only time the test actually had questions from the homework"
                }
              />
              <Speech orientation={"right"} text={"💀"} />
            </section>
          </div>
        </>
      )}

      {subsection === "Comments" && (
        <>
          <p className="text-prim-2 font-league text-3xl">Comments</p>

          <div className="flex h-full w-full flex-col gap-8">
            <section className="flex h-48 w-full flex-col gap-1 rounded-lg bg-gray-200 p-4">
              <p className="text-prim-2 font-league text-2xl">Statistics:</p>
              <p className="text-prim-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105">
                You&apos;ve typed 2399 comments in your IG career{" "}
              </p>
              <p className="text-prim-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105">
                You&apos;ve sent the most comments to{" "}
                <span className="text-prim-9">@kani</span>
              </p>
              <p className="text-prim-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105">
                Your first comment ever was made in September 3rd, 2021 to{" "}
                <span className="text-prim-9">@kani</span>
              </p>
            </section>

            <div className="flex flex-col gap-5">
              <Comment
                comment={"You replied to @kani: That makes me hungry"}
                date={"September 3rd, 2024"}
                atHandle={"@kani"}
              />

              <Comment
                comment={"You replied to @rachel: WOO I LOVE BIRDS"}
                date={"September 13rd, 2024"}
                atHandle={"@rachel"}
              />

              <Comment
                comment={
                  "You replied to @mike: have fun in college. wish me luck in application szn!!"
                }
                date={"September 14th, 2024"}
                atHandle={"@mike"}
              />

              <Comment
                comment={"You replied to @kani: what the dog doin"}
                date={"September 29th, 2024"}
                atHandle={"@kani"}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
