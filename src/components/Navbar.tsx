import { AlignJustify } from "lucide-react";
import Image from "next/image";

const links = [{ link: "" }, { link: "" }, { link: "" }, { link: "" }];

export const Navbar = () => {
  return (
    <nav className="absolute flex h-[75px] w-full bg-black/90 backdrop-blur-sm">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div className="">
          <Image src={"/logo.svg"} alt="codia logo" width={100} height={200} />
        </div>
        <div>
          <AlignJustify className="text-white" size={30} />
        </div>
        <div className="hidden">
          <ul className="flex">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Servicios</a>
            </li>
            <li>
              <a href="/">Proyectos</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
