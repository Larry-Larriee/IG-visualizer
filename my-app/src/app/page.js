import Image from "next/image";
import EditorUI from "./components/EditorUI";
import Icons from "./components/Icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20">
      <nav className="mt-5 flex w-10/12 items-center justify-start gap-10">
        <div className="bg-prim-13 h-16 w-16 rounded-lg" />
        <p className="font-league text-prim-2 text-4xl font-bold">
          IG Visualizer
        </p>
      </nav>

      <section className="flex w-10/12 items-center gap-16">
        <div className="w-144 flex flex-none flex-col gap-10">
          <p className="font-league text-prim-2 text-7xl font-semibold">
            Make your Instagram Data Easy to Read.
          </p>

          <div className="flex">
            <p className="font-league bg-prim-11 rounded-lg px-10 py-3 text-2xl font-medium text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              Get Started
            </p>
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

      <section className="mt-20 flex w-10/12 items-center justify-between gap-16">
        <div className="bg-prim-5 flex w-80 flex-col gap-3 rounded-xl p-8">
          <p className="font-league text-lg font-semibold text-gray-500">
            [Sort By]
          </p>
          <p className="font-league text-prim-2 text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Followers
          </p>
          <p className="font-league text-prim-2 text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Logins
          </p>
          <p className="font-league text-prim-2 text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Advertisements
          </p>
          <p className="font-league text-prim-2 text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Media
          </p>
          <p className="font-league text-prim-2 text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Preferences
          </p>
          <p className="font-league text-prim-2 text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            Notifications
          </p>
          <p className="font-league text-prim-2 text-2xl font-semibold transition duration-200 ease-in-out hover:scale-105">
            and More...
          </p>
        </div>

        <div className="w-116 flex flex-col gap-5">
          <p className="font-league text-prim-2 text-6xl">
            Customize what you want to see
          </p>
          <p className="font-league text-prim-2 text-3xl">
            and filter out what you don&apos;t
          </p>
        </div>

        <Icons icon={"bell"} />
      </section>
    </main>
  );
}
