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
    </footer>
  );
};
