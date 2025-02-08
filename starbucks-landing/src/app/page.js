import NavBar from "./components/NavBar";
import BannerSection from "./components/BannerSection";
import ContentGridSection from "./components/ContentGridSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <NavBar />
        <BannerSection />
        <ContentGridSection />
        <Footer />
      </main>
    </div>
  );
}
