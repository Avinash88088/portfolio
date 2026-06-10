import React from "react";
import { portfolioData } from "@/data/portfolioData";
import s from "./Sections.module.css";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic journey</h2>
        </div>

        <div className={`${s.timeline} reveal`} style={{ marginTop: 36 }}>
          {education.map((edu, i) => (
            <div key={i} className={`card ${s.tItem}`}>
              <div className={s.tRole}>{edu.degree}</div>
              <div className={s.tCompany}>{edu.school}</div>
              <div className={s.tMeta}>{edu.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
