import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import KnowledgeCard from "./KnowledgeCard";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const { person, hero } = portfolioData;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.watermark} aria-hidden="true">AVINASH</div>
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.text}>
          <span className="pill">
            <span className="dot" /> {hero.status}
          </span>

          <span className={styles.tag}>{person.shortRole}</span>

          <h1 className={`display ${styles.name}`}>{person.name}</h1>
          <p className={styles.subtitle}>{person.role}</p>
          <p className={styles.desc}>{person.tagline}</p>

          <div className={styles.buttons}>
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {hero.primaryCta.label} →
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className={styles.trust}>
            {hero.trust.map((t, i) => (
              <React.Fragment key={t}>
                {i > 0 && <span className={styles.trustDot} />}
                <span>{t}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.photoWrap}>
            <Image
              src={person.photo}
              alt="Avinash Kumar — Founder of TapToTravel"
              fill
              priority
              sizes="(max-width: 900px) 280px, 380px"
              className={styles.photo}
            />
          </div>
          <KnowledgeCard />
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span>Scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  );
}
