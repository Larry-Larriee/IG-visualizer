import React from "react";

export default function Advertisers({ author, date = null }) {
  let fomattedDate = new Date(date * 1000).toDateString();

  return (
    <div className="flex flex-col">
      <p className="text-prim-2 font-league text-xl">{author}</p>

      {date && (
        <p className="font-league text-sm text-gray-400">{fomattedDate}</p>
      )}
    </div>
  );
}
