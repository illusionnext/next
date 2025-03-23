import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid h-full w-full place-content-center place-items-center bg-white text-black dark:bg-black dark:text-white font-[family-name:var(--font-inter-sans)] shadow-sm shadow-fuchsia-500 dark:shadow-fuchsia-500/50">
      <article className="flex flex-col gap-4 font-[family-name:var(--font-inter-sans)]">
        <Link
          href="/dashboard/users"
          className="absolute top-4 left-4 text-sm font-bold text-blue-500 hover:underline"
        >
          Users
        </Link>
        <h1 className="text-2xl font-bold">(Dashboard)</h1>
      </article>
      {children}
    </main>
  );
};
export default Layout;
