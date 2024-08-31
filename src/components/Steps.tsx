import { CodeXml, MessageSquare, Rocket } from "lucide-react";

export const Steps = () => {
  return (
    <section className="mx-auto my-20 w-[90%] xl:w-[70%] lg:h-[50vh]">
      <h2 className="mb-3 text-3xl font-bold tracking-tighter sm:text-5xl">
        Como trabajamos
      </h2>
      <div>
        <div className="mb-5 rounded-2xl border-2 border-gray-500/50 px-3 py-2">
          <div>
            <p className="mb-2 flex items-center gap-x-2">
              <MessageSquare size={20} />
              Dialogamos
            </p>
            <p className="font-thin">
              Escuchamos atentamente tus necesidades y objetivos para comprender
              completamente tu visión del proyecto.
            </p>
          </div>
        </div>
        <div className="mb-5 rounded-2xl border-2 border-gray-500/50 px-3 py-2">
          <div>
            <p className="mb-2 flex items-center gap-x-2">
              <CodeXml size={20} />
              Desarrollamos
            </p>
            <p className="font-thin">
              Transformamos tus ideas en soluciones digitales innovadoras y
              efectivas, aplicando las últimas tecnologías.
            </p>
          </div>
        </div>
        <div className="mb-5 rounded-2xl border-2 border-gray-500/50 px-3 py-2">
          <div>
            <p className="mb-2 flex items-center gap-x-2" id="servicios">
              <Rocket size={20} />
              Entregamos
            </p>
            <p className="font-thin">
              Presentamos el producto final, asegurando tu satisfacción y el
              éxito de tu proyecto en el mercado digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
