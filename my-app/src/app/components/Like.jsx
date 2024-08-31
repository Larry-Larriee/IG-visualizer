import React from "react";

export default function Like({ likeLink, date }) {
  // converting date in seconds to milliseconds (ms)
  let fomattedDate = new Date(date * 1000).toDateString();

  return (
    <>
      <article className="flex flex-col">
        <p className="text-prim-2 font-league text-lg">
          You gave a like to{" "}
          {likeLink !== "a deleted post" && (
            <span className="text-prim-9">
              <a href={likeLink} target="_blank" rel="noreferrer">
                {likeLink}
              </a>
            </span>
          )}
          {likeLink === "a deleted post" && <>{likeLink}</>}
        </p>

        <p className="font-league text-sm text-gray-400">{fomattedDate}</p>
      </article>
    </>
  );
}
