import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { InteractiveDemo, Personas } from "@/components/landing/showcase";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <InteractiveDemo />
        <Features />
        <Personas />
      </main>
      <Footer />
    </div>
  );
}
