import React from "react";

export default function Comment({ comment, date, atHandle }) {
  let commentSplit = comment.split(atHandle);

  // converting date in seconds to milliseconds (ms)
  let fomattedDate = new Date(date * 1000).toDateString();

  return (
    <>
      {commentSplit && (
        <article className="flex flex-col">
          <p className="text-prim-2 font-league text-lg">
            {`${commentSplit[0]}`}{" "}
            <span className="text-prim-9">{atHandle}</span>
            {`${commentSplit[1]}`}
          </p>

          <p className="font-league text-sm text-gray-400">{fomattedDate}</p>
        </article>
      )}
    </>
  );
}
