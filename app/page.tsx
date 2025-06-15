import About from "./About";
import Contact from "./Contact";
import Header from "./header";
import Intro from "./Intro";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="w-auto">
        <Intro />
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-700">&copy; 2025 Smedes</p>
        </div>
      </footer>
    </div>
  );
}
