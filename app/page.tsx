import NavBar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Image from "next/image";
import CompOv from "@/components/comp-overview";

export default function Home() {
  return (
    <main className="bg-ragewhite w-full h-screen">
      <NavBar />
      <Hero />
      <CompOv />
    </main>
  );
}
