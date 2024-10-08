import React from "react";

export default function IGFeedAside({ changeSection, changeSubSection }) {
  return (
    <section className="bg-prim-5 shadow-rough flex w-96 flex-none flex-col gap-5 rounded-xl px-10 py-8">
      <div className="flex justify-between">
        <p
          onClick={() => changeSection("Public Profile")}
          className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
        >
          IG Feed Information
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hover:text-prim-9 size-8 transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
          onClick={() => changeSection("Public Profile")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </div>
      {/* <p
        onClick={() => changeSubSection("Temporary")}
        className="text-prim-6 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
      >
        Temporary
      </p> */}
    </section>
  );
}
