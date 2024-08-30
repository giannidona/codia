"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_5yenlwn",
        "template_ppcz5ds",
        templateParams,
        "DHkLCwDQIMuqr03Ty",
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setError("Something went wrong, please try again.");
    }
  };

  return (
    <div className="my-5 xl:w-[500px]">
      <form onSubmit={handleSubmit} className="grid gap-4 text-black">
        <input
          className="rounded px-3 py-2 outline-gray-950"
          placeholder="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="rounded px-3 py-2 outline-gray-950"
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="rounded px-3 py-2 outline-gray-950"
          placeholder="Asunto"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          className="min-h-[100px] rounded px-3 py-2 outline-gray-950"
          placeholder="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          className="w-full rounded border-2 border-white bg-white px-3 py-2 font-semibold text-black transition duration-300 ease-in-out hover:bg-transparent hover:text-white"
          type="submit"
        >
          Enviar mensaje
        </button>
        {submitted && (
          <p className="text-white">¡Gracias! Tu mensaje ha sido enviado.</p>
        )}
        {error && <p className="text-white">{error}</p>}
      </form>
    </div>
  );
};
