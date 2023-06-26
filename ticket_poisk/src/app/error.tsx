"use client";

import { useEffect } from "react";
import Button from "@/components/Button/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h2>Something went wrong!</h2>
      <Button text="Try again" onClick={() => reset()} variant="primary" />
    </div>
  );
}
