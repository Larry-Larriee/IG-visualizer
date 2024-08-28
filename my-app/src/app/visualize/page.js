import React from "react";
import SpanLink from "../components/helper/SpanLink";

export default function Page() {
  return (
    <>
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
    </>
  );
}
