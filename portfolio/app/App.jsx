import React from 'react';
import Header from './header';
import Intro from './intro';
import About from './about';
import Audience from './audience';
import Model from './model';
import Cycle from './cycle';
import Contact from './contact';
import SEO from './seo';
//this is 
const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO />
      <Header />
      <main className="w-auto">
        <Intro />
        <div id="about"><About /></div>
        <div id="audience"><Audience /></div>
        <div id="model"><Model /></div>
        <div id="cycle"><Cycle /></div>
        <div id="contact"><Contact /></div>
      </main>
      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-700">&copy; 2024 Bellinger</p>
        </div>
      </footer>
    </div>
  );
};

export default App;