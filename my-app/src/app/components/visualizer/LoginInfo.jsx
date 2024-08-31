"use client";

import React, { useEffect, useMemo } from "react";

export default function LoginInfo({
  images,
  objects,
  changeSubSection,
  subsection,
}) {
  // on mount, change the subsection to "Login," which is the default subsection for the "Login Information" section
  useEffect(() => {
    changeSubSection("Direct Messages");
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
    return result;
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
    return result;
  }, [objects]);

  useEffect(() => {
    console.log("logins", logins);
  }, [logins]);

  useEffect(() => {
    console.log("logouts", logouts);
  }, [logouts]);

  return (
    <section className="bg-prim-5 shadow-rough min-h-182 flex w-full flex-col gap-16 rounded-xl px-10 py-8">
      <p className="text-prim-2 font-league text-3xl">Login Information</p>

      {subsection === "Logged In" && <></>}

      {subsection === "Logged Out" && <></>}
    </section>
  );
}
