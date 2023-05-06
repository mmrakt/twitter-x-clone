"use client";

import Header from "./components/Header";
import Timeline from "./components/Tweet";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Timeline />
      </main>
    </>
  );
}
