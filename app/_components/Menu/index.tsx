"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50">
      <button
        onClick={handleToggle}
        ref={buttonRef}
        className="flex flex-col items-center justify-center w-8 h-8 space-y-1 relative z-50"
      >
        <div
          className={`w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <div
          className={`w-8 h-0.5 bg-gray-600 transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <Link href="/" className="text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-gray-800">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
