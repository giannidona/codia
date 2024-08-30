"use client";

import { Check } from "lucide-react";
import { useState } from "react";

interface PricingPlan {
  title: string;
  price: number;
  features: string[];
}

interface PricingData {
  landing: PricingPlan[];
  ecommerce: PricingPlan[];
}

export const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState<"landing" | "ecommerce">(
    "landing",
  );

  const pricingData: PricingData = {
    landing: [
      {
        title: "Básico",
        price: 999,
        features: [
          "Diseño personalizado",
          "Hasta 5 secciones",
          "Formulario de contacto",
          "Optimización SEO básica",
        ],
      },
      {
        title: "Profesional",
        price: 1999,
        features: [
          "Todo lo del plan Básico",
          "Hasta 10 secciones",
          "Animaciones personalizadas",
          "Optimización SEO avanzada",
          "Integración de redes sociales",
        ],
      },
    ],
    ecommerce: [
      {
        title: "Tienda Básica",
        price: 1999,
        features: [
          "Hasta 50 productos",
          "Carrito de compras",
          "Pasarela de pago",
          "Gestión de inventario básica",
        ],
      },
      {
        title: "Tienda Avanzada",
        price: 3999,
        features: [
          "Hasta 500 productos",
          "Sistema de cupones y descuentos",
          "Múltiples pasarelas de pago",
          "Gestión de inventario avanzada",
          "Integración con marketplaces",
        ],
      },
      {
        title: "Tienda Empresarial",
        price: 7999,
        features: [
          "Productos ilimitados",
          "Sistema de suscripciones",
          "Personalización avanzada de productos",
          "Integración con ERP",
          "Soporte prioritario 24/7",
        ],
      },
    ],
  };

  return (
    <section className="mx-auto my-20 w-[90%] xl:w-[70%]">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Nuestros Planes
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Elige el plan perfecto para tu negocio. Todos los planes incluyen
            soporte técnico y actualizaciones gratuitas.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveCategory("landing")}
              className={`${
                activeCategory === "landing"
                  ? "border-2 border-white bg-white px-3 py-2 text-black"
                  : "border-2 border-white bg-transparent text-white"
              } rounded-md px-4 py-2`}
            >
              Landing Page
            </button>
            <button
              onClick={() => setActiveCategory("ecommerce")}
              className={`${
                activeCategory === "ecommerce"
                  ? "border-2 border-white bg-white px-3 py-2 text-black"
                  : "border-2 border-white bg-transparent text-white"
              } rounded-md px-4 py-2`}
            >
              E-commerce
            </button>
          </div>
        </div>
        <div
          className={`mt-8 grid grid-cols-1 gap-6 ${activeCategory === "landing" ? "md:grid-cols-2" : "md:grid-cols-3"} md:gap-8`}
        >
          {pricingData[activeCategory].map((plan, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between overflow-hidden rounded-lg border-2 border-white bg-black/5 p-6 shadow-lg"
            >
              <div>
                <h3 className="text-center text-2xl font-bold">{plan.title}</h3>
                <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                  <span className="text-4xl font-bold">${plan.price}</span>/ mes
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 ${
                  index === 1
                    ? "border-2 border-white bg-white px-3 py-2 text-black transition duration-300 ease-in-out hover:bg-transparent hover:text-white"
                    : "border-2 border-white bg-transparent text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
                } rounded-md px-4 py-2`}
              >
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
