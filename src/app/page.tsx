import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";
import IntroTransition from "@/components/IntroTransition";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
      <main>
      <IntroTransition title="PetuCode SAC" /> 
        <Navbar />
        <Hero />
        <Solutions />
      </main>
      <Footer />      
    </div>
  );
}
