import { AppWindow, ShoppingCart } from "lucide-react";

export const Services = () => {
  return (
    <section className="mx-auto my-20 w-[90%] xl:w-[70%]" id="servicios">
      <h2 className="mb-3 text-3xl font-bold tracking-tighter sm:text-5xl">
        Servicios
      </h2>
      <p className="mb-5 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Potenciando su presencia en línea con soluciones personalizadas para el
        crecimiento y el éxito.
      </p>
      <div className="lg:flex lg:gap-x-5">
        <div className="mb-5 rounded-2xl border-2 border-gray-500/50 px-3 py-2">
          <span>
            <AppWindow className="my-2" />
          </span>
          <p className="mb-5 text-2xl font-bold">Landing Pages</p>
          <p className="font-thin">
            Dé una primera impresión duradera con nuestras páginas de destino de
            alta conversión. Creamos diseños atractivos que atraen a su
            audiencia e impulsan la acción.
          </p>
        </div>
        <div className="mb-5 rounded-2xl border-2 border-gray-500/50 px-3 py-2">
          <span>
            <ShoppingCart className="my-2" />
          </span>
          <p className="mb-5 text-2xl font-bold">E-commerce</p>
          <p className="font-thin">
            Impulsa tus ventas online con nuestras plataformas de comercio
            electrónico personalizadas. Creamos experiencias de compra fluidas
            que convierten a los visitantes en clientes leales.
          </p>
        </div>
      </div>
    </section>
  );
};
