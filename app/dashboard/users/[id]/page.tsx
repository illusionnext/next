const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <section className="grid h-dvh w-dvw place-content-center place-items-center bg-white text-black dark:bg-black dark:text-white font-[family-name:var(--font-inter-sans)] shadow-sm shadow-fuchsia-500 dark:shadow-fuchsia-500/50">
      <h1>
        User ID : <strong className="text-red-500">{id}</strong>
      </h1>
      <p>
        This is the user <strong className="text-fuchsia-400">{id}</strong>{" "}
        page.
      </p>
    </section>
  );
};
export default Page;
