import Link from "next/link";

const Page = () => {
  return (
    <article className="flex flex-col gap-4 font-[family-name:var(--font-inter-sans)]">
      <h1 className="text-2xl font-bold">Users</h1>
      <p>Users page content goes here.</p>
      <ol className="list-decimal list-inside">
        <li>
          <Link href="/dashboard/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">User 3</Link>
        </li>
        <li>
          <Link href="/dashboard/users/4">User 4</Link>
        </li>
      </ol>
    </article>
  );
};
export default Page;
