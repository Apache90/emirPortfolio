"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle, FaTimes } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "+54 3865 761910",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "emirvalles90@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Ubicación",
    description: "Tucumán, Argentina",
  },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    href: "https://linkedin.com/in/emir-segovia-74b392113",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    href: "https://github.com/Apache90",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "Nuevo mensaje desde Portfolio",
          from_name: "Portfolio Emir Segovia",
          ...formData,
        }),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error al enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Modal de éxito */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
              >
                <FaTimes size={20} />
              </button>
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-accent text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                ¡Mensaje enviado! 🎉
              </h3>
              <p className="text-black/70 mb-6">
                Gracias por contactarme. He recibido tu mensaje y me comunicaré 
                contigo a la brevedad posible.
              </p>
              <Button
                onClick={() => setShowModal(false)}
                className="text-white"
              >
                ¡Entendido!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                className="flex flex-col gap-6 p-10 bg-accent/10 rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-black font-bold">Trabajemos juntos</h3>
                <p className="text-black/70">
                  Si estás buscando un QA Analyst comprometido con la calidad, 
                  no dudes en contactarme. Estoy disponible para proyectos remotos.
                </p>
                {/* input fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Nombre"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* textarea */}
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {/* btn */}
                <Button 
                  size="lg" 
                  className="max-w-40 text-white" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>
          {/* info */}
          <div className="flex-1 flex flex-col gap-8 order-1 xl:order-none xl:justify-center">
            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-semibold text-black">Información de contacto</h4>
              <ul className="flex flex-col gap-6">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-accent/20 text-accent rounded-md flex items-center justify-center">
                        <div className="text-[24px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-black/60">{item.title}</p>
                        <h3 className="text-lg text-black">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* social links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-black">Redes sociales</h4>
              <div className="flex gap-4">
                {socialLinks.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[52px] h-[52px] bg-accent/20 text-black/70 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <div className="text-[24px]">{item.icon}</div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.section>
    </>
  );
};

export default Contact;