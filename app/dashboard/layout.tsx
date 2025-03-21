import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid h-dvh w-dvw place-items-center bg-white text-black dark:bg-black dark:text-white font-[family-name:var(--font-inter-sans)] shadow-sm shadow-fuchsia-500 dark:shadow-fuchsia-500/50">
      <article className="flex flex-col gap-4 font-[family-name:var(--font-inter-sans)]">
        <Link
          href="/dashboard/users"
          className="absolute top-4 left-4 text-sm font-bold text-blue-500 hover:underline"
        >
          Users
        </Link>
      </article>
      {children}
    </main>
  );
};
export default Layout;
