"use client";

import React, { useEffect, useMemo } from "react";
import Logs from "../Logs";

export default function LoginInfo({
  images,
  objects,
  changeSubSection,
  subsection,
}) {
  // on mount, change the subsection to "Login," which is the default subsection for the "Login Information" section
  useEffect(() => {
    changeSubSection("Logged In");
  }, []);

  const logins = useMemo(() => {
    let result;

    if (objects.length !== 0) {
      objects.forEach((object) => {
        if (object["account_history_login_history"]) {
          result = object["account_history_login_history"];
        }
      });
    }

    let reversedResult = [];
    for (let i = result.length - 1; i >= 0; i -= 1) {
      reversedResult.push(result[i]);
    }

    return reversedResult;
  }, [objects]);

  const logouts = useMemo(() => {
    let result;

    if (objects.length !== 0) {
      objects.forEach((object) => {
        if (object["account_history_logout_history"]) {
          result = object["account_history_logout_history"];
        }
      });
    }

    let reversedResult = [];
    for (let i = result.length - 1; i >= 0; i -= 1) {
      reversedResult.push(result[i]);
    }

    return reversedResult;
  }, [objects]);

  return (
    <section className="bg-prim-5 shadow-rough min-h-182 flex w-full flex-col gap-16 rounded-xl px-10 py-8">
      <p className="text-prim-2 font-league text-3xl">Login Information</p>
      {subsection === "Logged In" &&
        logins &&
        logins.map((login, index) => {
          return (
            <Logs
              key={login["title"] + index}
              time={login["title"]}
              address={login["string_map_data"]["IP Address"]["value"]}
              device={login["string_map_data"]["User Agent"]["value"]}
            />
          );
        })}
      {subsection === "Logged Out" &&
        logouts &&
        logouts.map((login, index) => {
          return (
            <Logs
              key={login["title"] + index}
              time={login["title"]}
              address={login["string_map_data"]["IP Address"]["value"]}
              device={login["string_map_data"]["User Agent"]["value"]}
            />
          );
        })}{" "}
    </section>
  );
}
