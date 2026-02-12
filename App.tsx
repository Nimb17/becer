import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import MapSection from './components/MapSection';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import SercotecBanner from './components/SercotecBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <MapSection />
        <Portfolio />
        <Process />
        <Pricing />
        <SercotecBanner />
      </main>
      <Footer />
    </div>
  );
}