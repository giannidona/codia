"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";

const links = [
  { slug: "/awd", text: "Inicio" },
  { slug: "/aa", text: "Servicios" },
  { slug: "/ww", text: "Proyectos" },
  { slug: "/dd", text: "Contacto" },
];

export const Navbar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <nav className="absolute z-50 flex h-[75px] w-full flex-col bg-black/90 backdrop-blur-sm">
      <div className="mx-auto flex w-[90%] items-center justify-between py-3">
        <div>
          <Image src="/logo.svg" alt="codia logo" width={100} height={50} />
        </div>
        <div className="flex text-white md:hidden">
          <Hamburger toggled={Open} toggle={setOpen} />
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
        className={`fixed inset-0 top-[75px] z-50 min-h-screen bg-black/90 p-4 text-right text-3xl transform ${
          Open ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex h-auto w-full flex-col space-y-8 text-center">
          {links.map((link) => (
            <li key={link.slug}>
              <a
                href={link.slug}
                className="text-white hover:text-gray-400"
                onClick={() => setOpen(false)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="w-full border-l-stone-800 opacity-10" />
    </nav>
  );
};