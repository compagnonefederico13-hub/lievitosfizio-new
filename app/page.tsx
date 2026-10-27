import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SignaturePizzas } from "@/components/sections/SignaturePizzas";
import { DoughPhilosophy } from "@/components/sections/DoughPhilosophy";
import { Gallery } from "@/components/sections/Gallery";
import { Visit } from "@/components/sections/Visit";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SignaturePizzas />
      <DoughPhilosophy />
      <Gallery />
      <Visit />
    </>
  );
}
