import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section animate-in delay-3">
      <h2 className="title" style={{ fontSize: '2.5rem' }}>Core Stack</h2>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
        {skills.map((tech, index) => (
          <div key={index} className="card glass" style={{ textAlign: 'center', padding: '1.5rem' }}>
            <h4 style={{ color: 'var(--foreground)' }}>{tech}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
