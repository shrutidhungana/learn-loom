"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navbarLinks } from "@/config";
import { PrimaryButton, SecondaryButton } from "../Buttons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 top-0 bg-[#1E3A8A]/70 backdrop-blur-md shadow-md px-6 md:px-12 py-4 flex items-center justify-between text-white">
      <div className="text-2xl font-bold">📘 LearnLoom</div>

      <nav className="hidden md:flex gap-8 items-center">
        {navbarLinks?.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="hover:text-[#FACC15] transition-colors text-sm font-medium"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex gap-4">
        <SecondaryButton>Login</SecondaryButton>
        <PrimaryButton>Register</PrimaryButton>
      </div>

      {/* Mobile menu */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#0F172A] flex flex-col items-center gap-6 py-6 md:hidden transition-all">
          {navbarLinks?.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-white hover:text-[#FACC15]"
            >
              {label}
            </Link>
          ))}
          <SecondaryButton>Login</SecondaryButton>
          <PrimaryButton>Register</PrimaryButton>
        </div>
      )}
    </header>
  );
};

export default Navbar;
