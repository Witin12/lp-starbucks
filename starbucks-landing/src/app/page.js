import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-blue-700">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </main>
    </div>
  );
}
