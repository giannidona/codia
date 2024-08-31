import { Mails } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    
    <section className="mx-auto flex h-[90vh] w-[90%] flex-col items-center justify-center text-center lg:w-[70%] xl:w-[45%] animate-fadeIn transition-all">
      
      <h1 className="text-5xl font-bold leading-[3.5rem] text-white">
        La página web <span className="text-eLightBlue">ideal</span> para tu
        negocio, a tan solo <span className="text-eLightBlue">un click</span>.
      </h1>

      <div className="group relative mt-12 cursor-pointer rounded px-3 py-2 text-xl font-normal text-white">
        <div className="absolute inset-0 rounded bg-gradient-to-r from-cyan-500 to-eLightBlue text-transparent blur-md" />
        <div className="absolute inset-0 rounded bg-gradient-to-r from-cyan-500 to-eLightBlue text-transparent" />
        <Link
          href={"/"}
          className="relative z-10 flex items-center justify-around gap-x-2"
        >
          <Mails />
          Consulta gratis
        </Link>
      </div>
    </section>
    
  );
};
