import Hero from "./components/hero";
import Navbar from "./components/shared/navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
    </div>
  );
}
