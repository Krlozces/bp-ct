import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";
import IntroTransition from "@/components/IntroTransition";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div>
      <main>
        <IntroTransition title="PetuCode SAC" /> {/*No se pq sale error, no se que hacer */}
        <Navbar />
        <Hero />
        <Features />
        <Solutions />
      </main>
      <Footer />      
    </div>
  );
}
