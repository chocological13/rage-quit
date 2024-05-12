import Hero from "@/components/hero/hero";
import CompOv from "@/components/comp-overview";
import ListProd from "@/components/lists/list-prod";
import { Suspense } from "react";
import { Skeleton } from "@mui/material";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <main className="bg-ragewhite w-full h-screen selection:text-white selection:bg-ragered">
      <Hero />
      <CompOv />
      <ListProd />
      <Testimonials />
    </main>
  );
}
