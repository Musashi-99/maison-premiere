import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HeirloomCollections from './components/HeirloomCollections';
import Categories from './components/Categories';
import Philosophy from './components/Philosophy';
import ArtisanFocus from './components/ArtisanFocus';
import HeritageEdit from './components/HeritageEdit';
import FinalStatement from './components/FinalStatement';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div className="luxury-texture-overlay" />
      <div className="cinematic-grain" />
      <NavBar cartCount={0} />
      <Hero />
      <main className="w-full max-w-[1800px] mx-auto px-10 overflow-hidden">
        <HeirloomCollections />
        <Categories />
        <Philosophy />
        <ArtisanFocus />
        <HeritageEdit />
        <FinalStatement />
      </main>
      <Footer />
    </>
  );
}

export default App;