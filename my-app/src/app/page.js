import Image from "next/image";
import EditorUI from "./components/EditorUI";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-36">
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
        </div>

        <div className="w-full">
          <EditorUI
            title={"instagram.json {}"}
            text={
              'Last Login": {\n\t"href": "",\n\t"value": "",\n\t"timestamp": 1723011002\n},\n"Last Logout": {\n\t"href": "",\n\t"value": "",\n\t"timestamp": 1711728147\n},\n"First Story Time": {\n\t"href": "",'
            }
          />
        </div>
      </section>
    </main>
  );
}
