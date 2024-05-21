import Hero from "@/components/hero/hero";
import CompOv from "@/components/comp-overview";
import ListProd from "@/components/lists/list-prod";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <main className="w-full bg-bgblack">
      <Hero />
      <CompOv />
      <ListProd />
      <Testimonials />
    </main>
  );
}
