import React from "react";

export default function Interactions({ interactionsUser, date }) {
  // converting date in seconds to milliseconds (ms)
  let fomattedDate = new Date(date * 1000).toDateString();

  return (
    <>
      <article className="flex flex-col">
        <p className="text-prim-2 font-league text-lg">
          You gave a story like to {interactionsUser}
        </p>

        <p className="font-league text-sm text-gray-400">{fomattedDate}</p>
      </article>
    </>
  );
}
