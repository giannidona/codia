"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";

const links = [
  { slug: "/", text: "Inicio" },
  { slug: "#servicios", text: "Servicios" },
  { slug: "#precios", text: "Precios" },
  { slug: "#proyectos", text: "Proyectos" },
  { slug: "#contacto", text: "Contacto" },
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
    <nav className="sticky top-0 z-40 flex h-[75px] w-full flex-col bg-gray-950 backdrop-blur-sm">
      <div className="z-50 w-full bg-gray-950 py-3">
        <div className="mx-auto flex w-[90%] items-center justify-between lg:w-[70%]">
          <Link href={"./"}>
            <Image src="/logo.svg" alt="codia logo" width={100} height={50} />
          </Link>
          <div className="flex text-white md:hidden">
            <button
              role="button"
              className="hamburger-react"
              aria-label="Alternar menú de navegación"
              onClick={() => setOpen(!Open)}
            >
              <Hamburger toggled={Open} toggle={setOpen} />
            </button>
          </div>
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              {links.map((link) => (
                <li key={link.slug}>
                  <a
                    href={link.slug}
                    className="text-white hover:text-gray-400"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[75px] z-40 min-h-screen transform bg-gray-950/95 p-4 text-right text-3xl ${
          Open ? "translate-y-0" : "-translate-y-[110%]"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex h-auto w-full flex-col space-y-8 pt-5 text-center">
          {links.map((link) => (
            <li key={link.slug}>
              <a
                href={link.slug}
                className="text-white hover:text-gray-400"
                onClick={() => setOpen(false)}
                aria-label={`Ir a la sección ${link.text}`}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center gap-x-5">
          <Link
            className="text-white"
            href="https://www.instagram.com/codiawebs/"
            target="_blank"
            aria-label="Visítanos en Instagram"
          >
            <SiInstagram />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            className="text-white"
            href="https://www.tiktok.com/@codiawebs"
            target="_blank"
            aria-label="Síguenos en TikTok"
          >
            <SiTiktok />
            <span className="sr-only">TikTok</span>
          </Link>
          <Link
            className="text-white"
            href="https://www.youtube.com/@codia-webs"
            target="_blank"
            aria-label="Mira nuestros videos en YouTube"
          >
            <SiYoutube />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
      </div>
      <hr className="z-50 w-full border-l-gray-900 opacity-10" />
    </nav>
  );
};
