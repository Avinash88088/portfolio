import React from "react";
import { portfolioData } from "@/data/portfolioData";
import s from "./Sections.module.css";

export default function VenturesSection() {
  const { ventures } = portfolioData;

  return (
    <section id="ventures" className="section">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Ventures</span>
          <h2 className="section-title">What I&apos;ve built</h2>
        </div>

        <div className="reveal" style={{ marginTop: 36 }}>
          {ventures.map((v) => (
            <div key={v.name} className={s.featured}>
              <span className={s.liveTag}>● {v.status}</span>
              <h3 className={s.ventureTitle}>{v.name}</h3>
              <p className={s.ventureDesc}>{v.description}</p>
              <div className={s.badges}>
                {v.tech.map((t) => (
                  <span key={t} className={s.badge}>{t}</span>
                ))}
              </div>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className={s.ventureLink}
              >
                Visit {v.url.replace("https://", "")} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
