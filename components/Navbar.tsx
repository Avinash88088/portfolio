"use client";

import React, { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const y = window.scrollY + 130;
      let current = "";
      document.querySelectorAll<HTMLElement>("section[id]").forEach((sec) => {
        if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
          current = sec.id;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo} onClick={close}>
          Avinash Kumar<span className="dot" style={{ marginLeft: 4 }} />
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {portfolioData.nav.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                onClick={close}
                className={active === l.href.slice(1) ? styles.activeLink : ""}
              >
                {l.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={styles.cta} onClick={close}>
              Collaborate
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${open ? styles.burgerActive : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
