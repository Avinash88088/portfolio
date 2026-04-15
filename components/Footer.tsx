import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer id="contact" style={{ padding: '4rem 0 2rem 0', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <a href={`mailto:${portfolioData.hero.contactEmail}`} className="button-outline" style={{ display: 'inline-block' }}>
          Say Hello
        </a>
      </div>
      <p>© {new Date().getFullYear()} {portfolioData.footer.text}</p>
    </footer>
  );
}
