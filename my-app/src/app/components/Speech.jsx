import React from "react";

export default function Speech({
  text = "WHY WAS THAT TEST SO HARD",
  date,
  orientation,
}) {
  return (
    <>
      {orientation === "left" && (
        <div className="flex w-full justify-start">
          <div className="flex w-3/4 gap-5">
            <article className="order-1 flex size-10 flex-none items-center justify-center rounded-full bg-gray-200 p-2">
              {/* having padding can decrease the fixed size of images */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-prim-9 size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </article>

            <article className="order-2 flex flex-col gap-1">
              <div className="min-h-10 w-full rounded-lg bg-gray-200 py-1 pl-1 pr-3">
                <p className="text-prim-2 font-league text-base">{text}</p>
              </div>

              <p className="text-prim-13 font-league text-sm">
                September 12th, 5:32 PM
              </p>
            </article>
          </div>
        </div>
      )}

      {orientation === "right" && (
        <div className="flex w-full justify-end">
          <div className="flex w-3/4 justify-end gap-5">
            <article className="order-2 flex size-10 flex-none items-center justify-center rounded-full bg-gray-200 p-2">
              {/* having padding can decrease the fixed size of images */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-prim-13 size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </article>

            <article className="order-1 flex flex-col gap-1">
              <div className="min-h-10 w-full rounded-lg bg-gray-200 py-1 pl-1 pr-3">
                <p className="text-prim-2 font-league text-base">{text}</p>
              </div>

              <p className="text-prim-13 font-league text-sm">
                September 12th, 5:32 PM
              </p>
            </article>
          </div>
        </div>
      )}
    </>
  );
}
