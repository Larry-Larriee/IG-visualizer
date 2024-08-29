import React from "react";

export default function PubProfAside({ changeSection }) {
  return (
    <>
      <section className="bg-prim-5 shadow-rough flex w-96 flex-none flex-col gap-5 rounded-xl px-10 py-8">
        <p
          onClick={() => changeSection("Public Profile")}
          className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
        >
          Public Profile
        </p>
        <p
          onClick={() => changeSection("Activity")}
          className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
        >
          Activity
        </p>
        <p
          onClick={() => changeSection("Login Information")}
          className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
        >
          Login Information
        </p>
        <p
          onClick={() => changeSection("Your IG Feed")}
          className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
        >
          Your IG Feed
        </p>
        <p
          onClick={() => changeSection("Ad Information")}
          className="text-prim-2 hover:text-prim-9 font-league text-2xl transition duration-200 hover:scale-105 hover:cursor-pointer"
        >
          Ad Information
        </p>
      </section>
    </>
  );
}
