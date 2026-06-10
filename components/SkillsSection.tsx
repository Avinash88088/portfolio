import React from "react";
import { portfolioData } from "@/data/portfolioData";
import s from "./Sections.module.css";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">My toolbox</h2>
        </div>

        <div className={`${s.skillsGrid} reveal`} style={{ marginTop: 36 }}>
          {skills.map((group) => (
            <div key={group.group} className={`card ${s.skillCard}`}>
              <div className={s.skillGroup}>{group.group}</div>
              <div className={s.chips}>
                {group.items.map((item) => (
                  <span key={item} className={s.chip}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
