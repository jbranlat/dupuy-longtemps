'use client';

import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import GoogleReviews from './components/sections/GoogleReviews';
import Hero from './components/sections/Hero';
import Realisation from './components/sections/Realisations';
import Services from './components/sections/Services';
import Solutions from './components/sections/Solutions';
import Nettoyage from './components/sections/Nettoyage';


export default function Home() {
  return (
    <main>
      <Hero/>
      <GoogleReviews />
      <Services />
      <Solutions />
      <Realisation />
      <Nettoyage />
      <Contact />
      <Footer />
    </main>
  );
}