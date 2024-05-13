import Hero from "@/components/hero/hero";
import CompOv from "@/components/comp-overview";
import ListProd from "@/components/lists/list-prod";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <main className="bg-ragewhite w-full selection:text-white selection:bg-ragered">
      <Hero />
      <CompOv />
      <ListProd />
      <Testimonials />
    </main>
  );
}
