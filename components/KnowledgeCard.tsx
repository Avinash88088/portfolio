import React from "react";
import { portfolioData } from "@/data/portfolioData";
import styles from "./KnowledgeCard.module.css";

export default function KnowledgeCard() {
  const { person, facts, socials } = portfolioData;

  return (
    <aside className={`glass ${styles.card}`} aria-label="Profile facts">
      <div className={styles.head}>
        <div>
          <p className={styles.name}>{person.name}</p>
          <p className={styles.role}>{person.role}</p>
        </div>
        <span className="pill" style={{ fontSize: "0.72rem" }}>
          <span className="dot" /> Live
        </span>
      </div>

      <dl className={styles.facts}>
        {facts.map((f) => (
          <div key={f.label} className={styles.factRow}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.socials}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
          >
            {s.short}
          </a>
        ))}
      </div>
    </aside>
  );
}
