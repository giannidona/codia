import Link from "next/link";
import { MdMailOutline, MdWhatsapp } from "react-icons/md";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <section className="mx-auto my-20 w-[90%] lg:flex lg:justify-between xl:w-[50%]" id="contacto">
      <div className="flex flex-col justify-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tighter sm:text-5xl">
          Contáctanos
        </h2>
        <div className="mb-3 text-gray-500 lg:w-[70%]">
          <p>Estamos aca para convertir tus ideas a la realidad.</p>
          <p>
          Llevá tu negocio al mundo digital y da el primer paso con nosotros.
          </p>
        </div>
        <div>
          <Link
            href={"mailto:codiawebs@gmail.com"}
            target="_blank"
            className="flex w-fit items-center gap-x-2 text-lg hover:underline"
          >
            <MdMailOutline />
            codiawebs@gmail.com
          </Link>
          <Link
            href={"https://wa.me/541173617314"}
            target="_blank"
            className="flex w-fit items-center gap-x-2 text-lg hover:underline"
          >
            <MdWhatsapp />
            +54 9 11 7361-7314
          </Link>
        </div>
      </div>

      <Form />
    </section>
  );
};
