"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";

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
    <nav className="sticky top-0 z-40 flex h-[75px] w-full flex-col bg-gray-950 backdrop-blur-sm">
      <div className="z-50 w-full bg-gray-950 py-3">
        <div className="mx-auto flex w-[90%] items-center justify-between lg:w-[70%]">
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
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center gap-x-5">
          <Link className="text-white" href={"/"} target="_blank">
            <SiInstagram />
          </Link>
          <Link className="text-white" href={"/"} target="_blank">
            <SiTiktok />
          </Link>
          <Link className="text-white" href={"/"} target="_blank">
            <SiYoutube />
          </Link>
        </div>
      </div>
      <hr className="z-50 w-full border-l-gray-900 opacity-10" />
    </nav>
  );
};
