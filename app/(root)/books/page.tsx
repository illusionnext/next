const Page = async () => {
  const response = await fetch("https://localhost:3000/api/books", {});
  const book = await response.json();
  if (!response.ok) {
    return <div>Error loading books</div>;
  }
  return <>{JSON.stringify(book, null, 2)}</>;
};

export default Page;
