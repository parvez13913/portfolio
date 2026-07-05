import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/shared/navbar";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
    </div>
  );
}
