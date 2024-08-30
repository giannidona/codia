import Link from "next/link";
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="h-[75px] text-center">
      <p className="mb-3">
        Desarrollado por{" "}
        <Link className="underline" href={"#"}>
          Codia
        </Link>
      </p>
      <div className="flex justify-center gap-x-5">
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
    </footer>
  );
};
