import React from "react";
import { portfolioData } from "@/data/portfolioData";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass" style={{
      position: "fixed",
      top: "1rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: "90%",
      maxWidth: "1200px",
      zIndex: 100,
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--foreground)" }}>
        <Link href="/" style={{ all: 'unset', cursor: 'pointer' }}>
          {portfolioData.header.logo}
        </Link>
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        {portfolioData.header.navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9rem"
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
