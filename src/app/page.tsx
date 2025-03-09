import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";
export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Solutions />
      </main>
      <Footer />      
    </div>
  );
}
