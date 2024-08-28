import Image from "next/image";
import EditorUI from "./components/EditorUI";
import Icons from "./components/Icons";
import SpanLink from "./components/helper/SpanLink";
import Linky from "./components/helper/Linky";

export default function Home() {
  return (
    <>
      <section className="flex w-10/12 items-center gap-16">
        <div className="w-144 flex flex-none flex-col gap-10">
          <p className="text-prim-2 font-league text-7xl font-semibold">
            Make your Instagram Data Easy to Read.
          </p>

          <div className="flex">
            <Linky
              styling={
                "font-league bg-prim-11 rounded-lg px-10 py-3 text-2xl font-medium text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
              }
              text={"Get Started"}
              link={"/visualize"}
            />
          </div>
        </div>

        <div className="h-144 relative w-full">
          <EditorUI
            title={"instagram.json {}"}
            text={
              'Last Login": {\n\t"href": "",\n\t"value": "",\n\t"timestamp": 1723011002\n},\n"Last Logout": {\n\t"href": "",\n\t"value": "",\n\t"timestamp": 1711728147\n},\n"First Story Time": {\n\t"href": "",'
            }
          />

          <EditorUI
            title={"Result"}
            text={
              "According to Instagram, you last logged in on Wednesday, August 7th, 2024, at 6:10 AM"
            }
            textOptional={"You also logged out later that day at 3:43 PM"}
            position="absolute"
          />
        </div>
      </section>

      <section className="relative mt-20 flex w-5/6 items-center">
        <div className="bg-prim-5 flex w-80 flex-none flex-col gap-3 rounded-xl p-8">
          <p className="font-league text-lg font-semibold text-gray-500">
            [Sort By]
          </p>
          <p className="text-prim-2 font-league text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Followers
          </p>
          <p className="text-prim-2 font-league text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Logins
          </p>
          <p className="text-prim-2 font-league text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Advertisements
          </p>
          <p className="text-prim-2 font-league text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Media
          </p>
          <p className="text-prim-2 font-league text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Preferences
          </p>
          <p className="text-prim-2 font-league text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Notifications
          </p>
          <p className="text-prim-2 font-league text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            and More...
          </p>
        </div>

        <article className="flex w-full justify-end">
          <div className="flex flex-col gap-5">
            <p className="w-116 text-prim-2 font-league text-6xl">
              Customize what you want to see
            </p>
            <p className="w-116 text-prim-2 text-3xxl font-league">
              and filter out what you don&apos;t
            </p>
          </div>
        </article>

        <Icons icon={"bell"} left={"35rem"} top={"5rem"} />
        <Icons icon={"person"} left={"24rem"} top={"1rem"} />
        <Icons icon={"restart"} left={"25rem"} top={"10rem"} />
        <Icons icon={"@"} left={"28rem"} bottom={"2rem"} />
        <Icons icon={"camera"} left={"18rem"} bottom={"5rem"} />
        <Icons icon={"desktop"} left={"32rem"} bottom={"7rem"} />
      </section>

      <section className="mt-36 flex w-10/12 items-center justify-between gap-16">
        <div className="w-128 flex flex-col gap-5">
          <p className="text-prim-2 font-league text-8xl font-semibold">
            Built with Privacy in mind
          </p>
          <p className="text-prim-2 w-116 text-3xxl font-league">
            Open Source Project. Forever. Find our Github{" "}
            <SpanLink link={"https://github.com/Larry-Larriee/IG-visualizer"} />
          </p>
        </div>

        <div className="w-116 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-prim-6 h-80 w-80"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </section>

      <section className="mt-36 flex w-10/12 items-center justify-between gap-16">
        <div className="w-169 bg-prim-5 flex h-72 items-center justify-center border-4 border-dashed border-gray-500 transition duration-200 ease-in-out hover:scale-105">
          <p className="text-prim-13 font-league text-2xl">Upload Image Here</p>
        </div>

        <div className="w-128 flex flex-col gap-5">
          <p className="text-prim-2 font-league text-6xl font-semibold">
            As Simple as 1... 2...that&apos;s it
          </p>
          <p className="text-prim-2 font-league text-3xl">
            Upload your IG Folder and visualize your data. Read Instagram&apos;s{" "}
            <SpanLink
              link={"https://help.instagram.com/519522125107875"}
              text={"step by step here."}
            />
          </p>
        </div>
      </section>
    </>
  );
}
