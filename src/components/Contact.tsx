import Link from "next/link";
import { MdMailOutline, MdWhatsapp } from "react-icons/md";

export const Contact = () => {
  return (
    <section className="mx-auto my-20 w-[90%] lg:flex lg:justify-between xl:w-[50%]">
      <div className="flex flex-col justify-center lg:pb-5">
        <h2 className="mb-3 text-3xl font-bold tracking-tighter sm:text-5xl">
          Contáctanos
        </h2>
        <div className="mb-3 text-gray-500 lg:w-[70%]">
          <p>Estamos aquí para convertir tus ideas en realidad digital.</p>
          <p>
            Cuéntanos sobre tu proyecto y comencemos a crear algo extraordinario
            juntos.
          </p>
        </div>
        <div>
          <Link
            href={"/"}
            target="_blank"
            className="flex w-fit items-center gap-x-2 text-lg hover:underline"
          >
            <MdMailOutline />
            codiawebs@gmail.com
          </Link>
          <Link
            href={"/"}
            target="_blank"
            className="flex w-fit items-center gap-x-2 text-lg hover:underline"
          >
            <MdWhatsapp />
            +54 9 11 7361-7314
          </Link>
        </div>
      </div>

      <div className="my-5 xl:w-[500px]">
        <form className="grid gap-4 text-black">
          <input
            className="rounded px-3 py-2 outline-gray-950"
            placeholder="Nombre"
          />
          <input
            className="rounded px-3 py-2 outline-gray-950"
            placeholder="Email"
            type="email"
          />
          <input
            className="rounded px-3 py-2 outline-gray-950"
            placeholder="Asunto"
          />
          <textarea
            className="min-h-[100px] rounded px-3 py-2 outline-gray-950"
            placeholder="Mensaje"
          />
          <button
            className="w-full rounded border-2 border-white bg-white px-3 py-2 font-semibold text-black transition duration-300 ease-in-out hover:bg-transparent hover:text-white"
            type="submit"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};
