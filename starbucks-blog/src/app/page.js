import NavBar from "./components/NavBar";
import ContentBlog from "./components/ContentBlog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-0 row-start-2 items-center sm:items-start">
        <NavBar />
        <ContentBlog />
        <Footer />
      </main>
    </div>
  );
}
