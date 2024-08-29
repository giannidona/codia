"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { Squash as Hamburger } from 'hamburger-react'

const links = [
  { slug: "/awd", text: "Inicio" },
  { slug: "/aa", text: "Servicios" },
  { slug: "/ww", text: "Proyectos" },
  { slug: "/dd", text: "Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute flex h-[75px] w-full bg-black/90 backdrop-blur-sm flex-col z-50">
      <div className="mx-auto flex w-[90%] items-center justify-between py-3">
        <div>
          <Image src="/logo.svg" alt="codia logo" width={100} height={50} />
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className="text-white" size={30} />
            ) : (
              <AlignJustify className="text-white" size={30} />
            )}
          </button>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.slug}>
                <a href={link.slug} className="text-white hover:text-gray-400">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`fixed inset-0 top-[75px] z-50 bg-black/90 p-4 text-right min-h-[900px] text-3xl ${isOpen ? "flex" : "hidden"
          }`}
      >
        <ul className="flex w-full flex-col space-y-8 text-center h-auto">
          {links.map((link) => (
            <li key={link.slug}>
              <a
                href={link.slug}
                className="text-white hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="opacity-10 border-l-stone-800 w-full" />
    </nav>
  );
};
