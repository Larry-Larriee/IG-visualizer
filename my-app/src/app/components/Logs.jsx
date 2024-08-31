import React from "react";

// logs component will return the logged in and logged out times of the users. it also displays their ip address they logged in/out from and their device
export default function Logs({ time, address, device }) {
  const date = new Date(time);

  // the toLocaleString can format the iso date (which is what instagram gave) into a more readable format
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });

  return (
    <>
      <article className="flex flex-col">
        <p className="text-prim-2 font-league text-lg">IP Address: {address}</p>
        <p className="text-prim-2 font-league text-lg">Device Info: {device}</p>

        <p className="font-league text-sm text-gray-400">{formattedDate}</p>
      </article>
    </>
  );
}
