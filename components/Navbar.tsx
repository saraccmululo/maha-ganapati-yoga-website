"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/logo.jpeg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background] border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-14 md:h-20 flex items-center justify-between">
          {/* LOGO + NAME */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Maha Ganapati Yoga logo"
              width={50}
              height={50}
              className="rounded-full md:w-16 md:h-16"
              priority
            />
            <span className="text-lg md:text-2xl font-semibold tracking-wide text-foreground]">
              Maha Ganapati Yoga
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/schedule"
              className="text-lg text-(--foreground)]/70 hover:text-primary transition"
            >
              Aulas
            </Link>
            <Link
              href="/events"
              className="text-lg text-(--foreground)]/70 hover:text-primary transition"
            >
              Eventos
            </Link>
            <Link
              href="/about"
              className="text-lg text-(--foreground)]/70 hover:text-primary transition"
            >
              Sobre mim
            </Link>
            <Link
              href="/contact"
              className="text-lg text-(--foreground)]/70 hover:text-primary transition"
            >
              Contato
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-(--foreground)]/70 hover:text-(--primary)] transition"
            aria-label="Abrir menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/schedule"
              className=" block text-base text-(--foreground)]/70 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Aulas
            </Link>
            <Link
              href="/events"
              className=" block text-base text-(--foreground)]/70 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link
              href="/about"
              className="block text-base  text-(--foreground)]/70 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mim
            </Link>
            <Link
              href="/contact"
              className="block text-base text-(--foreground)]/70 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
