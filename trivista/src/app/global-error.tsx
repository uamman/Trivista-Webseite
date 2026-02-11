"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de-CH">
      <body>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
          <h2>Etwas ist schief gelaufen</h2>
          <button onClick={() => reset()} style={{ marginTop: 16, padding: "8px 24px", cursor: "pointer" }}>
            Erneut versuchen
          </button>
        </div>
      </body>
    </html>
  );
}
