"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";
import IntroTransition from "@/components/IntroTransition";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Demo from "@/components/Demo";
// import Team from "@/components/Team";
// import Comparison from "@/components/Comparison";

export default function Home() {
  // Estado para controlar cuándo mostrar el contenido
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <main>
        {/* Mostrar Intro solo si no se ha mostrado el contenido */}
        {!showContent && (
          <IntroTransition title="CobalTech" setShowContent={setShowContent} />
        )}

        {/* El resto del contenido se muestra después */}
        {showContent && (
          <>
            <Navbar />
            <Hero />
            <Features />
            <section id="services">
              <Solutions />
            </section>
            <section id="clients">
              <Testimonials />
            </section>
            {/* <Comparison /> */}
            <Demo />
            {/* <section id="about">
              <Team />
            </section> */}
            <section id="contact">
              <Contact />
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
