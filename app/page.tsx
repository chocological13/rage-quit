import NavBar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import CompOv from "@/components/comp-overview";
import ListProd from "@/components/lists/list-prod";
import CTAProd from "@/components/lists/components/cta-prod";

export default function Home() {
  return (
    <main className="bg-ragewhite w-full h-screen selection:text-white selection:bg-ragered">
      <NavBar />
      <Hero />
      <CompOv />
      <ListProd />
    </main>
  );
}
