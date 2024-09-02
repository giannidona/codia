"use client";

import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import useIntersectionObserver from "../../app/hooks/useIntersectionObserver"; // Ajusta la ruta según tu estructura de archivos
import Link from "next/link";

interface PricingPlan {
  title: string;
  features: string[];
  link: string;
  featureMas?: string;
  featureTooltip?: { text: string; index: number };
}

interface PricingData {
  landing: PricingPlan[];
  ecommerce: PricingPlan[];
}

export const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState<"landing" | "ecommerce">(
    "landing",
  );
  const [animationClass, setAnimationClass] = useState("fade-in");

  const pricingData: PricingData = {
    landing: [
      {
        title: "Básico",
        features: [
          "Hasta 5 secciones",
          "Formulario de Contacto + Botón de Whatsapp",
          "Adaptacion Mobile",
          "Optimización SEO básica",
          "Integración de Redes Sociales",
        ],
        featureTooltip: {
          text: "Ayuda a los usuarios a encontrar tu contenido.",
          index: 3,
        },
        link: "https://api.whatsapp.com/send?phone=+541173617314&text=Hola!%20Estoy%20interesado%20en%20una%20*Landing%20Page%20B%C3%A1sica*,%20%C2%BFMe%20podr%C3%ADan%20brindar%20m%C3%A1s%20informaci%C3%B3n?%20Muchas%20gracias.",
      },
      {
        title: "Profesional",
        features: [
          "Landing Basica ",
          "Secciones Ilimitadas",
          "Animaciones personalizadas",
          "Optimización de SEO y Rendimiento Avanzada",
          "Soporte 24/7",
        ],
        featureMas: "(+)",
        link: "https://api.whatsapp.com/send?phone=+541173617314&text=Hola!%20Estoy%20interesado%20en%20un%20*Landing%20Page%20Profesional*,%20%C2%BFMe%20podr%C3%ADan%20brindar%20m%C3%A1s%20informaci%C3%B3n?%20Muchas%20gracias.",
      },
    ],
    ecommerce: [
      {
        title: "Tienda Básica",
        features: [
          "Carrito de compra",
          "Compras via Whatsapp",
          "Gestión de inventario Básica",
        ],
        link: "https://api.whatsapp.com/send?phone=+541173617314&text=Hola!%20Estoy%20interesado%20en%20una%20*Tienda%20B%C3%A1sica*,%20%C2%BFMe%20podr%C3%ADan%20brindar%20m%C3%A1s%20informaci%C3%B3n?%20Muchas%20gracias.",
      },
      {
        title: "Tienda Avanzada",
        features: [
          "Tienda Básica",
          "Integración con WooCommerce",
          "Sistemas de Cupones",
          "Gestión de inventario Avanzada",
          "Sistema de Usuarios",
          "Soporte 24/7",
        ],
        featureMas: "(+)",
        link: "https://api.whatsapp.com/send?phone=+541173617314&text=Hola!%20Estoy%20interesado%20en%20una%20*Tienda%20Avanzada*,%20%C2%BFMe%20podr%C3%ADan%20brindar%20m%C3%A1s%20informaci%C3%B3n?%20Muchas%20gracias.",
      },
      {
        title: "Tienda Empresarial",
        features: [
          "Tienda Avanzada",
          "Integración con Mercado Libre",
          "Integracion con Chatbot",
          "Integracion con Dashboard (CRM)",
          "Soporte prioritario 24/7",
        ],
        featureMas: "(+)",
        link: "https://api.whatsapp.com/send?phone=+541173617314&text=Hola!%20Estoy%20interesado%20en%20una%20*Tienda%20Empresarial*,%20%C2%BFMe%20podr%C3%ADan%20brindar%20m%C3%A1s%20informaci%C3%B3n?%20Muchas%20gracias.",
      },
    ],
  };

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    setAnimationClass("fade-in");
  }, [activeCategory]);

  const handleCategoryChange = (category: "landing" | "ecommerce") => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setActiveCategory(category);
      setAnimationClass("fade-in");
    }, 500);
  };

  return (
    <section
      className="mx-auto my-20 w-[90%] lg:flex lg:h-[100vh] lg:items-center lg:justify-center xl:w-[70%]"
      id="precios"
    >
      <div className="w-full">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nuestros Planes
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elige el plan perfecto para tu negocio. Todos los planes incluyen
              diseño personalizado y cotización gratuita.
            </p>
            <div className="xs:space-x-4 flex space-x-2">
              <button
                onClick={() => handleCategoryChange("landing")}
                className={`${
                  activeCategory === "landing"
                    ? "border-2 border-white bg-white px-3 py-2 text-black"
                    : "border-2 border-white bg-transparent text-white"
                } min-w-[145px] max-w-[155px] rounded-md py-2`}
              >
                Landing Page
              </button>
              <button
                onClick={() => handleCategoryChange("ecommerce")}
                className={`${
                  activeCategory === "ecommerce"
                    ? "border-2 border-white bg-white px-3 py-2 text-black"
                    : "border-2 border-white bg-transparent text-white"
                } min-w-[145px] max-w-[155px] rounded-md py-2`}
              >
                E-Commerce
              </button>
            </div>
          </div>
          <div
            ref={ref}
            className={`mt-8 grid grid-cols-1 gap-6 ${activeCategory === "landing" ? "md:grid-cols-2" : "md:grid-cols-3"} md:gap-8 ${
              isVisible ? "animate-fadeIn" : ""
            } ${animationClass}`}
          >
            {pricingData[activeCategory].map((plan, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between overflow-hidden rounded-lg border-2 border-white bg-black/5 p-6 shadow-lg"
              >
                <div>
                  <h3 className="text-center text-2xl font-bold">
                    {plan.title}
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        {feature}
                        {plan.featureMas && featureIndex === 0 && (
                          <span className="ml-1 text-xs opacity-50">
                            {plan.featureMas}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={plan.link}
                  target="_blank"
                  className="mt-6 border-2 border-white bg-white px-3 py-2 text-center text-black transition duration-300 ease-in-out hover:bg-transparent hover:text-white"
                >
                  Seleccionar Plan
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>
              Si ninguno de los planes te convence,{" "}
              <Link
                className="underline"
                target="_blank"
                href={
                  "https://api.whatsapp.com/send?phone=+541173617314&text=Hola!%20Estoy%20interesado%20en%20hacer%20*Un%20Proyecto%20Personalizado*%20con%20ustedes."
                }
              >
                hacé click acá
              </Link>{" "}
              y comentanos tus necesidades.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
