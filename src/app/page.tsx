"use client";

import Button from "@/components/button/Button";
import DarkModeToggle from "./Test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => console.log("test")} variant="secondary">
        click me
      </Button>

      <DarkModeToggle />
    </main>
  );
}
