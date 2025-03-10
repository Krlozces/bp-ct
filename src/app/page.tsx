import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";
import IntroTransition from "@/components/IntroTransition";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Demo from "@/components/Demo";
import Support from "@/components/Support";
import ChatBot from "@/components/ChatBot";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";
import Comparison from "@/components/Comparison";
export default function Home() {
  return (
    <div>
      <main>
        <IntroTransition title="PetuCode SAC" /> {/*No se pq sale error, no se que hacer */}
        <Navbar />
        <Hero />
        <Features />
        <Solutions />
        <Testimonials />
        <Comparison />
        <Demo />
        <Technologies />
        <FAQ />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
