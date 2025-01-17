import Header from './header';
import Intro from './Intro';
import About from './About';
// import Projects from './Projects';
// import Model from './Model';
// import Cycle from './Cycle';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="w-auto">
        <Intro />
        <div id="about"><About /></div>
        {/* <div id="audience"><Projects /></div> */}
        {/* <div id="model"><Model /></div> */}
        {/* <div id="cycle"><Cycle /></div> */}
        <div id="contact"><Contact /></div>
      </main>
      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-700">&copy; 2024 Smedes</p>
        </div>
      </footer>
    </div>
  );
}
