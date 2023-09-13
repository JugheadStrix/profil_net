"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Docs", href: "/docs" },
];
import { usePathname } from "next/navigation";
export default function Nav() {
  const path = usePathname();

  return (
    <nav>
      <div className="tagName">Strix</div>
      <div className="links">
        {links.map((l) => (
          <Link
            href={l.href}
            key={l.label}
            className={path === l.href ? "href active" : "href"}
          >
            <label className="liens">{l.label}</label>
          </Link>
        ))}
      </div>
    </nav>
  );
}
