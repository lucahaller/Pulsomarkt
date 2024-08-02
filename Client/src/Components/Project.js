import React, { useEffect } from "react";
import first from "../Assets/Images/first.png";
import second from "../Assets/Images/2section.png";
import third from "../Assets/Images/3section.png";
import forth from "../Assets/Images/4section.png";
import fith from "../Assets/Images/5section.png";
import sixth from "../Assets/Images/6section.png";
import service1 from "../Assets/Images/service1.png";
import service2 from "../Assets/Images/service2.png";
import unique from "../Assets/Images/unique.png";
import espiral from "../Assets/Images/espiral.png";
import texto from "../Assets/Images/DIGITAL.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      once: false,
    });
  });
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Nav className="bg-transparent" />
      <section
        id="#landing"
        className="flex justify-start items-center bg-cover bg-center overflow-x-hidden h-screen w-full"
        style={{ backgroundImage: `url(${first})` }}
      >
        <div className="text-white lg:ml-40 ml-10 lg:gap-6 gap-4">
          <div className="lg:text-8xl text-6xl md:text-7xl flex flex-col gap-0 p-0 leading-none">
            <p className="m-0 text-shadow font-raleway">DIGITAL</p>
            <p className="m-0 text-shadow font-raleway">MARKETING</p>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-mono mt-2 lg:mt-4">
            AND WEB SOLUTIONS
          </p>
        </div>
      </section>

      <section
        id="about"
        style={{ backgroundImage: `url(${second})` }}
        className="flex h-screen items-center justify-end w-full bg-center bg-no-repeat  bg-cover md:bg-center lg:bg-center lg:bg-cover"
      >
        <div className="w-full lg:w-[650px] lg:mr-80 lg:gap-14 gap-8 px-8 lg:px-0 flex flex-col">
          <div className="text-white text-4xl md:text-5xl font-sans">
            <p>Potencia tu presencia</p>
            <p className="flex flex-row gap-3">
              digital con{" "}
              <span
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                className="font-semibold"
              >
                Pulsomarkt
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:gap-14 lg:pr-28">
            <p className="text-white text-lg md:text-xl lg:text-2xl font-sans">
              Especializados en SEO, páginas web y marketing en redes sociales,
              tenemos la solución perfecta para cada necesidad.
            </p>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-sans">
              Únete a nosotros y descubre cómo podemos aumentar tu visibilidad,
              atraer a tu público objetivo y hacer crecer tu negocio de manera
              sostenible.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${third})` }}
        className="flex flex-col lg:flex-row h-screen items-center justify-start w-full bg-cover bg-center"
      >
        <div className="w-full h-full lg:w-[600px] lg:ml-80  gap-10 flex flex-col items-center lg:items-start p-5">
          <div
            className="text-white text-3xl lg:text-5xl font-sans font-bold text-center lg:text-left"
            data-aos="fade-down-right"
            data-aos-anchor-placement="center-bottom"
          >
            <p>Tu éxito es nuestra prioridad </p>
          </div>
          <div
            className="flex flex-col gap-5 text-justify text-center lg:text-left"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            <p className="text-white text-lg lg:text-2xl font-sans">
              En Pulsomarkt, entendemos que cada negocio es único y merece una
              estrategia de marketing digital a su medida.
            </p>
            <p className="text-white text-lg lg:text-2xl font-sans">
              Por eso trabajamos estrechamente contigo para entender tus
              objetivos y diseñar un plan que se ajuste perfectamente a tus
              necesidades.
            </p>
          </div>
          <a
            data-aos="flip-right"
            data-aos-anchor-placement="center-bottom"
            href="/#contacto"
            className="px-6 py-2 lg:px-8 lg:py-3 bg-white hover:bg-gray-400 hover:text-gray-200 text-black font-sans font-semibold text-lg lg:text-xl w-fit"
          >
            Contactar
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          className="hidden lg:block ml-auto mr-10"
        >
          <img src={espiral} alt="Espiral" />
        </div>
      </section>
      <section
        id="services"
        style={{
          backgroundImage: `url(${forth})`,
          backgroundSize: "cover", // Asegura que cubra todo el contenedor
          backgroundPosition: "center", // Ajusta la posición de la imagen
          backgroundRepeat: "no-repeat", // Evita repetir la imagen
        }}
        className="flex h-screen w-full items-start justify-center"
      >
        <div className="flex flex-col mt-3 gap-16">
          <div className="flex flex-col items-center mt-40 px-4 lg:px-0 lg:items-start lg:mt-40 lg:flex-col gap-5 lg:justify-start">
            <div
              data-aos="fade-down-right"
              data-aos-anchor-placement="center-bottom"
              className="text-center lg:text-left w-full lg:w-auto"
            >
              <p className="text-4xl text-white">
                Explora nuestros servicios personalizados para cada necesidad
                digital.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              className="text-center lg:text-left mt-8 lg:mt-0 w-full lg:w-auto"
            >
              <p className="text-6xl text-white font-semibold">
                ¡Tenemos la estrategia perfecta para ti!
              </p>
            </div>
          </div>

          <div
            className="flex flex-row gap-20"
            data-aos="flip-left"
            data-aos-anchor-placement="center-bottom"
          >
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
              className="bg-white flex flex-col gap-4 py-10 p-5 w-96"
            >
              <p className="text-4xl font-bold text-fuchsia-500">*SEO & SEM</p>
              <p className="text-2xl font-extralight">
                Aumenta tu visibilidad online con nuestras estrategias de SEO y
                SEM. Mejoramos tu posicionamiento en los motores de búsqueda.
              </p>
              <a
                href="/#SEO&SEM"
                className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white  w-full items-center justify-center flex  mt-auto text-2xl py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg"
              >
                Saber más
              </a>
            </div>
            <div
              data-aos="flip-up"
              data-aos-anchor-placement="center-bottom"
              className="bg-white flex flex-col gap-4 py-10 p-5 w-96"
            >
              <p className="text-4xl font-bold  text-fuchsia-500">
                *DESARROLLO Y DISEÑO WEB
              </p>
              <p className="text-2xl font-extralight">
                Desarrollamos sitios web efectivos e impactantes que promueven
                tu marca y atraen a los usuarios.
              </p>
              <a
                href="/#Desarrollo&DiseñoWeb"
                className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white  w-full items-center justify-center flex  mt-auto text-2xl py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg"
              >
                Saber más
              </a>
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="center-bottom"
              className="bg-white flex flex-col gap-4 py-10 p-5 w-96"
            >
              <p className="text-4xl font-bold text-fuchsia-500">
                *SOCIAL MEDIA MAGNAMENT
              </p>
              <p className="text-2xl font-extralight">
                Gestionamos tus redes sociales para construir y mantener una
                fuerte presencia online.
              </p>
              <a
                href="/#SocialMediaMagnament"
                className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white  w-full items-center justify-center flex  mt-auto text-2xl py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg"
              >
                Saber más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        style={{
          backgroundImage: `url(${fith})`,
          backgroundSize: "cover", // Asegura que cubra todo el contenedor
          backgroundPosition: "center", // Ajusta la posición de la imagen
          backgroundRepeat: "no-repeat", // Evita repetir la imagen
        }}
        className="flex items-start h-screen flex-col gap-40 w-full   "
      >
        <div className="flex flex-col gap-52 items-center ml-96 justify-center">
          <div className="flex flex-row ml-10 gap-60">
            <div
              className="bg-white flex flex-col gap-4 py-10 p-5 w-96"
              data-aos="flip-down"
              data-aos-anchor-placement="center-bottom"
            >
              <p className="text-4xl font-bold text-fuchsia-500">
                *DIGITAL MARKETING
              </p>
              <p className="text-2xl font-extralight">
                Desarrollamos estrategias integrales de marketing digital. Desde
                campañas de email marketing hasta publicidad digital y marketing
                de contenidos.
              </p>
              <a
                href="/#DigitalMarketing"
                className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white  w-full items-center justify-center flex  mt-auto text-2xl py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg"
              >
                Saber más
              </a>
            </div>
            <div
              className="bg-white flex flex-col justify-center gap-4 py-10 p-5 w-96"
              data-aos="flip-up"
              data-aos-anchor-placement="center-bottom"
            >
              <p className="text-4xl font-bold py-5 text-fuchsia-500">
                *CONSULTING
              </p>
              <p className="text-2xl font-extralight ">
                Ofrecemos consultoría en marketing digital para ayudarte a
                identificar oportunidades y diseñar estrategias efectivas.
              </p>
              <a
                href="/#Consulting"
                className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white  w-full items-center justify-center flex  mt-auto text-2xl py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg"
              >
                Saber más
              </a>
            </div>
          </div>
        </div>
        <div
          className="text-white text-3xl mx-60 "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Nuestra misión es proporcionar soluciones de marketing digital
          accesibles y efectivas para pequeñas y medianas empresas.
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${sixth})` }}
        className="flex h-screen pt-40 justify-end w-full bg-cover bg-center"
      >
        <div className="flex flex-col ">
          <p
            data-aos="fade-down-left"
            data-aos-anchor-placement="center-bottom"
            className="text-6xl font-raleway font-bold text-shadow shadow-3xl text-white ml-auto mr-40"
          >
            NUESTROS VALORES
          </p>
          <div className="mt-16 flex flex-col gap-48">
            <div className="flex flex-row items-center justify-center ml-auto h-20 w-2/4 mr-72">
              <p
                data-aos="fade-down-right"
                data-aos-anchor-placement="center-bottom"
                className="text-3xl font-raleway mr-60 px-8 py-5 flex items-center justify-center rounded-full font-bold text-white bg-purple-700"
              >
                TRANSPARENCIA
              </p>
              <p
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                className="h-full italic font-sans w-3/4 pr-30 mr-0 text-white text-xl font-semibold"
              >
                Damos prioridad a la honestidad y la claridad en todas nuestras
                interacciones, asegurándonos de que estés informado y cómodo con
                cada paso del proceso.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center ml-auto h-20 w-2/4 mr-72">
              <p
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                className="text-3xl font-raleway mr-60 px-14 py-5 flex items-center justify-center rounded-full font-bold text-white bg-purple-700"
              >
                COMPROMISO
              </p>
              <p
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                className="h-full italic font-sans w-3/4 pr-30 mr-0 text-white text-xl font-semibold"
              >
                Nos dedicamos a cada proyecto con la misma pasión y
                determinación que si fuera nuestro propio negocio.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center ml-auto h-20 w-2/4 mr-72">
              <p
                data-aos="fade-up-right"
                data-aos-anchor-placement="center-bottom"
                className="text-3xl font-raleway mr-60 px-16 py-5 flex items-center justify-center rounded-full font-bold text-white bg-purple-700"
              >
                INNOVACIÓN
              </p>
              <p
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                className="h-full italic font-sans w-3/4 pr-30 mr-0 text-white text-xl font-semibold"
              >
                Siempre buscamos nuevas formas de mejorar y mantenernos al día
                con las últimas tendencias y tecnologías del marketing digital.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="SEO&SEM"
        style={{ backgroundImage: `url(${service1})` }}
        className="flex h-screen pt-60 justify-start  w-full bg-cover bg-center"
      >
        <div className="ml-28 flex flex-col gap-20">
          <p className="text-5xl flex flex-col font-raleway font-bold text-white ">
            ¡Deja de ser Invisible con Nuestros Servicios de
            <p> SEO & SEM!</p>
          </p>
          <div className="w-3/6 gap-10 flex flex-col">
            <p className="text-3xl font-raleway font-semibold text-white ">
              {" "}
              SEO & SEM. Anuncios y Optimización para motores de búsqueda.
            </p>
            <p className="text-2xl font-sans text-white">
              ¿Quieres aparecer en los primeros lugares de Google? Nuestro
              servicio de SEO optimiza tu sitio web para atraer tráfico
              orgánico. Mejora tu posicionamiento, aumenta tu credibilidad y
              disfruta de un flujo constante de visitantes en tu página web.
            </p>
            <button class="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white text-lg w-fit px-5 py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg">
              Contratar este servicio
            </button>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${service2})` }}
        id="Desarrollo&DiseñoWeb"
        className="flex h-screen flex-col justify-center items-center w-full bg-cover bg-center"
      >
        <div className=" flex flex-col ml-56 justify-center w-3/5 items-center gap-20">
          <div className=" gap-10 flex flex-col ">
            <p className="text-5xl flex flex-col font-raleway font-bold text-white ">
              Transforma Tu Presencia Online con Nuestro
              <p> Desarrollo y Diseño Web</p>
            </p>
            <div className="pr-48 flex flex-col gap-5 text-justify">
              <p className="text-2xl font-sans text-white ">
                {" "}
                ¿Necesitas una web que refleje la esencia de tu negocio, capte
                la atención y convierta visitantes en clientes? Nuestro servicio
                de diseño web crea sitios atractivos, intuitivos y adaptados a
                tu marca.
              </p>
              <p className="text-2xl font-sans text-white">
                Además, construimos plataformas robustas, seguras y escalables
                que funcionan a la perfección en todos los dispositivos. Desde
                e-commerce hasta soluciones personalizadas, hacemos realidad tus
                ideas.
              </p>
            </div>

            <button class="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white text-lg w-fit px-5 py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg">
              Contratar este servicio
            </button>
          </div>
        </div>
      </section>
      <section
        id="SocialMediaMagnament"
        style={{ backgroundImage: `url(${service1})` }}
        className="flex h-screen pt-60 justify-start  w-full bg-cover bg-center"
      >
        <div className="ml-28 flex flex-col gap-20">
          <p className="text-5xl flex flex-col font-raleway font-bold text-white ">
            Social Media Management: Conecta
            <p> con Tu Audiencia</p>
          </p>
          <div className="w-3/6 gap-10 flex flex-col">
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-sans  text-white ">
                {" "}
                Quieres destacar en redes sociales? Gestionamos tus redes
                sociales y nos encargamos de crear contenido atractivo,
                interactuar con tu audiencia y construir una comunidad leal.
                Aumenta tu presencia en plataformas como Facebook, Instagram y
                Twitter.
              </p>
              <p className="text-2xl font-sans text-white">
                Transforma tus redes sociales en una poderosa herramienta de
                marketing y descubre cómo podemos ayudarte a conectar y crecer.
              </p>
            </div>

            <button class="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white text-lg w-fit px-5 py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg">
              Contratar este servicio
            </button>
          </div>
        </div>
      </section>
      <section
        id="DigitalMarketing"
        style={{ backgroundImage: `url(${service2})` }}
        className="flex h-screen flex-col justify-center items-center w-full bg-cover bg-center"
      >
        <div className=" flex flex-col ml-56 justify-center w-3/5 items-center gap-20">
          <div className=" gap-10 flex flex-col ">
            <p className="text-5xl flex flex-col font-raleway font-bold text-white ">
              Digital Marketing: Maximiza Tu Impacto
              <p> en Línea</p>
            </p>
            <div className="pr-48 flex flex-col gap-5 text-justify">
              <p className="text-2xl font-sans text-white ">
                {" "}
                Lleva tu negocio al siguiente nivel con nuestras estrategias de
                Digital Marketing. Diseñamos estrategias eficientes que
                maximizan tu retorno de inversión, monitoreamos y ajustamos tus
                campañas para asegurar el éxito continuo.
              </p>
              <p className="text-2xl font-sans text-white">
                Desde campañas de correo electrónico hasta marketing de
                contenidos y publicidad online, creamos estrategias
                personalizadas que generan resultados medibles.
              </p>
            </div>

            <button class="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white text-lg w-fit px-5 py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg">
              Contratar este servicio
            </button>
          </div>
        </div>
      </section>
      <section
        id="Consulting"
        style={{ backgroundImage: `url(${service1})` }}
        className="flex h-screen pt-60 justify-start  w-full bg-cover bg-center"
      >
        <div className="ml-28 flex flex-col gap-20">
          <p className="text-5xl flex flex-col font-raleway font-bold text-white ">
            Consulting: Asesoría para tu
            <p> Crecimiento Digital</p>
          </p>
          <div className="w-3/6 gap-10 flex flex-col">
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-sans  text-white pr-48">
                {" "}
                ¿Necesitas orientación para mejorar tu estrategia digital?
                Evaluamos tu situación actual y diseñamos un plan de acción
                efectivo. Nuestro servicio de Consulting ofrece una asesoría
                personalizada para ayudarte a identificar oportunidades,
                resolver desafíos y maximizar tu crecimiento.
              </p>
            </div>

            <button class="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white text-lg w-fit px-5 py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg">
              Contratar este servicio
            </button>
          </div>
        </div>
      </section>
      <section
        id="contacto"
        style={{ backgroundImage: `url(${unique})` }}
        className="min-h-screen flex flex-col justify-center pl-40 p-8 text-white bg-cover bg-center relative"
      >
        <div className="bg-opacity-10 w-full">
          <div className=" h-full">
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold mb-4 font-nunito">
                CONTACTO
              </h2>
              <p className="mb-8 text-xl font-sans">
                ¿Listo para transformar tu marketing digital?
                <br />
                Ponte en contacto con nosotros hoy mismo. Estamos aquí para
                ayudarte a alcanzar tus metas.
              </p>
            </div>

            <form className="space-y-4 ">
              <div className="max-w-sm">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-2"
                  >
                    Nombre y apellido*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2"
                  >
                    Correo electrónico*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium mb-2"
                  >
                    Teléfono*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-2"
                  >
                    Su mensaje*
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center mt-auto ">
                <button
                  type="submit"
                  className="rounded-full w-96 flex items-center justify-center font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white text-lg px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  ENVIAR CONSULTA
                </button>
                <div className="justify-end flex items-end space-x-6 ml-auto   pr-8">
                  <a
                    href="#"
                    className="text-4xl hover:text-pink-500 transition duration-300 ease-in-out"
                  >
                    <FaFacebookF />
                  </a>
                  <a
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
      </section> */}
    </div>
  );
};

export default Project;
