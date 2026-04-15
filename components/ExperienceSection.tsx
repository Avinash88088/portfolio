import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section animate-in delay-2">
      <h2 className="title" style={{ fontSize: '2.5rem' }}>Experience</h2>
      <div className="grid">
        {experience.map((job, index) => (
          <div key={index} className="card glass">
            <h3>{job.role}</h3>
            <p style={{ fontWeight: 'bold', color: 'var(--foreground)', marginBottom: '0.5rem' }}>
              {job.company} <span style={{ fontWeight: 'normal', fontSize: '0.9em', color: '#94a3b8', marginLeft: '8px' }}>({job.timeframe})</span>
            </p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
