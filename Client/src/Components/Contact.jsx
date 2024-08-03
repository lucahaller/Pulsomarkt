import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import unique from "../Assets/Images/unique.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      once: false,
    });
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s5m0vix",
        "template_i7ekoth",
        formData,
        "ph4GO5j8iOkS5OG1c"
      )
      .then(
        (result) => {
          setSuccess("Tu mensaje ha sido enviado exitosamente.");
          setError("");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setError(
            "Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde."
          );
          setSuccess("");
        }
      );
  };

  return (
    <section
      id="contacto"
      style={{ backgroundImage: `url(${unique})` }}
      className="min-h-screen flex flex-col justify-center lg:pl-40 p-8 text-white bg-cover bg-center relative"
    >
      <div className="bg-opacity-10 w-full">
        <div className="h-full">
          <div className="lg:max-w-xl ">
            <div className="mb-4 flex flex-row items-center ">
              <h2
                data-aos="fade-down-right"
                data-aos-anchor-placement="center-bottom"
                className="text-4xl font-semibold font-nunito"
              >
                CONTACTO
              </h2>
              <div className="  justify-end flex items-end space-x-6 ml-auto pr-8 lg:hidden ">
                <a
                  data-aos="fade-up-left"
                  data-aos-anchor-placement="center-bottom"
                  href="#"
                  className="lg:text-4xl text-2xl hover:text-pink-500 transition duration-300 ease-in-out"
                >
                  <FaFacebookF />
                </a>
                <a
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  href="#"
                  className="lg:text-4xl text-2xl hover:text-pink-500 transition duration-300 ease-in-out"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <p
              data-aos="fade-down-right"
              data-aos-anchor-placement="center-bottom"
              className="mb-8 text-xl font-sans"
            >
              ¿Listo para transformar tu marketing digital?
              <br />
              Ponte en contacto con nosotros hoy mismo. Estamos aquí para
              ayudarte a alcanzar tus metas.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="max-w-sm">
              <div
                data-aos="fade-down-right"
                data-aos-anchor-placement="center-bottom"
              >
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Nombre y apellido*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                  required
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
              >
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Correo electrónico*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                  required
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
              >
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium mb-2"
                >
                  Teléfono*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                  required
                />
              </div>
              <div
                data-aos="fade-up-right"
                data-aos-anchor-placement="center-bottom"
              >
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Su mensaje*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                  required
                ></textarea>
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <div className="flex items-center mt-auto">
              <button
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                type="submit"
                className="rounded-full w-96 flex items-center justify-center font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white text-lg px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                ENVIAR CONSULTA
              </button>
              <div className="justify-end lg:flex items-end space-x-6 ml-auto pr-8 hidden ">
                <a
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  href="#"
                  className="text-4xl hover:text-pink-500 transition duration-300 ease-in-out"
                >
                  <FaFacebookF />
                </a>
                <a
                  data-aos="fade-up-left"
                  data-aos-anchor-placement="center-bottom"
                  href="#"
                  className="text-4xl hover:text-pink-500 transition duration-300 ease-in-out"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
