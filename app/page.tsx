import TopBar          from "@/components/TopBar";
import Hero             from "@/components/Hero";
import Navbar           from "@/components/Navbar";
import About            from "@/components/About";
import Projects         from "@/components/Projects";
import Experience       from "@/components/Experience";
import Skills           from "@/components/Skills";
import Certifications   from "@/components/Certifications";
import Contact          from "@/components/Contact";
import Footer           from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 pb-28">
      <TopBar />
      <Hero />
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
