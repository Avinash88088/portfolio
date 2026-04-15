import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section 
      className="section animate-in" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center' 
      }}>
      <p className="subtitle" style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>
        {hero.greeting}
      </p>
      <h1 className="title">
        {hero.name}<br />
        <span className="hero-gradient-text">{hero.title}</span>
      </h1>
      <p className="subtitle delay-1 animate-in" style={{ maxWidth: '600px' }}>
        {hero.subtitle}
      </p>
      
      <div className="delay-2 animate-in" style={{ marginTop: '2rem' }}>
        <a href={`mailto:${hero.contactEmail}`} className="button">Get In Touch</a>
        <a href={hero.companyUrl} target="_blank" rel="noopener noreferrer" className="button-outline">Visit TapToTravel</a>
      </div>
    </section>
  );
}
