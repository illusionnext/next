"use server";
import "server-only";

const Home = async () => {
  console.info("SSR");
  return (
    <main className="grid h-dvh w-dvw place-items-center bg-white text-black dark:bg-black dark:text-white font-[family-name:var(--font-inter-sans)] shadow-sm shadow-fuchsia-500 dark:shadow-fuchsia-500/50">
      Hello Next.js
    </main>
  );
};
export default Home;
