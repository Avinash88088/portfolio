import React from "react";
import { portfolioData } from "@/data/portfolioData";
import s from "./Sections.module.css";

export default function AboutSection() {
  const { person, stats } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className={`${s.aboutGrid} reveal`}>
          <div className={s.bio}>
            <span className="eyebrow">About</span>
            <h2 className="section-title">A builder at heart</h2>
            {person.bio.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(
                /TapToTravel|AKTU Lucknow/g,
                (m) => `<strong>${m}</strong>`
              ) }} />
            ))}
          </div>

          <div className={s.statGrid}>
            {stats.map((st) => (
              <div key={st.label} className={`card ${s.statCard}`}>
                <div className={s.statValue}>{st.value}</div>
                <div className={s.statLabel}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
