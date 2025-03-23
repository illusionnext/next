"use server";
import "server-only";

const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const albums = await response.json();

  console.group("Albums");
  console.table(albums);
  console.groupEnd();

  return (
    <main className="grid h-vh w-vw grid-cols-4 gap-4 place-content-center m-4 p-4 place-items-center bg-white text-black dark:bg-black dark:text-white font-[family-name:var(--font-inter-sans)] shadow-sm shadow-fuchsia-500 dark:shadow-fuchsia-500/50 border-2 border-fuchsia-500 dark:border-fuchsia-500/50 rounded-lg">
      {albums.map((album: { id: number; title: string }) => (
        <section
          key={album.id}
          className="grid place-content-center place-items-center"
        >
          <h2 className="text-2xl font-bold">{album.title}</h2>
          <p className="text-sm text-purple-500">Album ID: {album.id}</p>
        </section>
      ))}
    </main>
  );
};
export default Home;
