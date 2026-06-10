"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import s from "./Sections.module.css";

export default function ContactSection() {
  const { person, socials } = portfolioData;
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      (e.target as HTMLFormElement).reset();
    }, 2500);
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className={s.contactGrid}>
          <div className="reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Let&apos;s build something together</h2>
            <p className={s.muted}>
              Got a project idea, investment opportunity, or just want to say hello? I&apos;d love to hear from you.
            </p>

            <div className={s.contactLinks}>
              <a href={`mailto:${person.email}`} className={s.contactItem}>
                <span className={s.contactIcon}>✉</span>
                {person.email}
              </a>
              {socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.contactItem}
                >
                  <span className={s.contactIcon}>{soc.short}</span>
                  {soc.label} Profile
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`glass reveal ${s.contactForm}`}
            style={{ padding: 36 }}
          >
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="c-name"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text-dim)",
                  marginBottom: 8,
                }}
              >
                Your name
              </label>
              <input
                id="c-name"
                required
                placeholder="John Doe"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="c-email"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text-dim)",
                  marginBottom: 8,
                }}
              >
                Email address
              </label>
              <input
                id="c-email"
                type="email"
                required
                placeholder="john@example.com"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="c-msg"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text-dim)",
                  marginBottom: 8,
                }}
              >
                Message
              </label>
              <textarea
                id="c-msg"
                required
                rows={5}
                placeholder="Write your message here..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              disabled={sent}
            >
              {sent ? "✓ Message sent!" : "Send message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontFamily: "inherit",
  fontSize: "0.95rem",
  outline: "none",
  transition: "border-color 0.3s",
};
