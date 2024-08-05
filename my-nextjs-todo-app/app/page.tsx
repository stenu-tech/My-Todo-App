import Image from "next/image";
import Todo from "./components/todo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 " style={{ fontFamily: "'__Inter_36bd41', '__Inter_Fallback_36bd41'" }}>
          Welcome to my Todo App <br />
          Built by Sten Uuesoo <br />
          In tandem with Copilot
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center h-full" style={{ margin: "auto", }}>
        <Todo />
      </div>
    </main>
  );
}
