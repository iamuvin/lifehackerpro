import React from 'react';
import Header from '../Header';
import HeroSection from '../HeroSection';
import Features from '../Features';
import Footer from '../Footer';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </>
  );
}