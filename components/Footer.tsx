import React from "react";
import { portfolioData } from "@/data/portfolioData";
import s from "./Footer.module.css";

export default function Footer() {
  const { socials, footer } = portfolioData;

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.socials}>
          {socials.map((soc) => (
            <a
              key={soc.label}
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={soc.label}
              className={s.socialLink}
            >
              {soc.short}
            </a>
          ))}
        </div>
        <p className={s.copy}>
          © {new Date().getFullYear()} {footer.text}
        </p>
      </div>
    </footer>
  );
}
