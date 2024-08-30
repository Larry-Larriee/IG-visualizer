"use client";

import React, { useEffect } from "react";
import Speech from "../Speech";

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
    </section>
  );
}
