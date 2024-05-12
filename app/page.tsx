import NavBar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import CompOv from "@/components/comp-overview";
import GamesList from "@/components/lists/games-list";
import ListProd from "@/components/lists/list-prod";

export default function Home() {
  return (
    <main className="bg-ragewhite w-full h-screen selection:text-white selection:bg-ragered">
      <NavBar />
      <Hero />
      <CompOv />
      {/* <GamesList /> */}
      <ListProd />
    </main>
  );
}
