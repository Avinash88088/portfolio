import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '5rem' }}>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
