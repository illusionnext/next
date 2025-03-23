"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p className="text-red-500">
          {error.message && `(Error: ${error.message})`}{" "}
          {error.digest && `(Digest: ${error.digest})`}
        </p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
