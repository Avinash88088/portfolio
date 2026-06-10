import React from "react";
import { portfolioData } from "@/data/portfolioData";
import s from "./Sections.module.css";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">The journey so far</h2>
        </div>

        <div className={`${s.timeline} reveal`} style={{ marginTop: 36 }}>
          {experience.map((job, i) => (
            <div key={i} className={`card ${s.tItem}`}>
              <div className={s.tRole}>{job.role}</div>
              <div className={s.tCompany}>{job.company}</div>
              <div className={s.tMeta}>{job.timeframe}</div>
              <p className={s.tDesc}>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
