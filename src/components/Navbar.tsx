"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (Open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [Open]);

  return (
    <nav className="sticky top-0 z-40 flex h-[75px] w-full flex-col backdrop-blur-sm bg-gray-950">
      <div className="w-full py-3 z-50 bg-gray-950">
        <div className="w-[90%] mx-auto flex items-center justify-between ">
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
      </div>

      <div
        className={`fixed inset-0 top-[75px] z-40 min-h-screen bg-gradient-to-b from-black/90 to-black/60 p-4 text-right text-3xl transform ${Open ? "translate-y-0" : "-translate-y-[110%]"
          } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex h-auto w-full pt-5 flex-col space-y-8 text-center">
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
      <hr className="w-full border-l-gray-900 opacity-10 z-50" />
    </nav>
  );
};