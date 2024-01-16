"use client";

import Button from "@/components/button/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => console.log("test")}>click me</Button>
    </main>
  );
}
