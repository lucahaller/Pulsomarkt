import React, { useEffect } from "react";
import first from "../Assets/Images/first.png";
import second from "../Assets/Images/2section.png";
import third from "../Assets/Images/3section.png";
import forth from "../Assets/Images/4section.png";
import fith from "../Assets/Images/5section.png";
import sixth from "../Assets/Images/6section.png";
import service1 from "../Assets/Images/service1.png";
import service2 from "../Assets/Images/service2.png";

import espiral from "../Assets/Images/espiral.png";
import texto from "../Assets/Images/DIGITAL.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";

import Contact from "./Contact";

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
        <div className="w-full  h-full lg:w-[600px] lg:ml-80 justify-center gap-10 flex flex-col items-center lg:items-start p-5">
          <div
            className="text-white text-3xl  lg:text-5xl font-sans font-bold text-center lg:text-left"
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col h-auto min-h-screen w-full items-center justify-center overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center h-full mt-3 gap-16">
          <div className="flex flex-col items-center justify-center mt-40 px-4 lg:px-0 gap-5">
            {/* Textos de Introducción */}
            <div
              data-aos="fade-down-right"
              data-aos-anchor-placement="center-bottom"
              className="text-center lg:text-left w-full lg:w-auto"
            >
              <p className="text-3xl sm:text-4xl text-white">
                Explora nuestros servicios personalizados para cada necesidad
                digital.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              className="text-center lg:text-left mt-8 lg:mt-0 w-full lg:w-auto"
            >
              <p className="text-4xl sm:text-6xl text-white font-semibold">
                ¡Tenemos la estrategia perfecta para ti!
              </p>
            </div>

            {/* Contenedor de Tarjetas */}
            <div
              className="p-6 gap-8 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 lg:mt-20"
              data-aos="flip-left"
              data-aos-anchor-placement="center-bottom"
            >
              {/* Tarjeta 1 */}
              <div
                data-aos="flip-right"
                data-aos-anchor-placement="center-bottom"
                className="bg-white flex flex-col gap-4 py-10 px-5 max-w-sm sm:max-w-md w-full"
              >
                <p className="text-3xl sm:text-4xl font-bold text-fuchsia-500">
                  *SEO & SEM
                </p>
                <p className="text-lg sm:text-2xl font-extralight">
                  Aumenta tu visibilidad online con nuestras estrategias de SEO
                  y SEM. Mejoramos tu posicionamiento en los motores de
                  búsqueda.
                </p>
                <a
                  href="/#SEO&SEM"
                  className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white w-full items-center justify-center flex mt-auto text-xl sm:text-2xl py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Saber más
                </a>
              </div>

              {/* Tarjeta 2 */}
              <div
                data-aos="flip-up"
                data-aos-anchor-placement="center-bottom"
                className="bg-white flex flex-col gap-4 py-10 px-5 max-w-sm sm:max-w-md w-full"
              >
                <p className="text-3xl sm:text-4xl font-bold text-fuchsia-500">
                  *DESARROLLO Y DISEÑO WEB
                </p>
                <p className="text-lg sm:text-2xl font-extralight">
                  Desarrollamos sitios web efectivos e impactantes que promueven
                  tu marca y atraen a los usuarios.
                </p>
                <a
                  href="/#Desarrollo&DiseñoWeb"
                  className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white w-full items-center justify-center flex mt-auto text-xl sm:text-2xl py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Saber más
                </a>
              </div>

              {/* Tarjeta 3 */}
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="center-bottom"
                className="bg-white flex flex-col gap-4 py-10 px-5 max-w-sm sm:max-w-md w-full"
              >
                <p className="text-3xl sm:text-4xl font-bold text-fuchsia-500">
                  *SOCIAL MEDIA MANAGEMENT
                </p>
                <p className="text-lg sm:text-2xl font-extralight">
                  Gestionamos tus redes sociales para construir y mantener una
                  fuerte presencia online.
                </p>
                <a
                  href="/#SocialMediaManagement"
                  className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white w-full items-center justify-center flex mt-auto text-xl sm:text-2xl py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${fith})`,
          backgroundSize: "cover", // Asegura que cubra todo el contenedor
          backgroundPosition: "center", // Ajusta la posición de la imagen
          backgroundRepeat: "no-repeat", // Evita repetir la imagen
        }}
        className="flex lg:items-start items-center h-screen flex-col gap-12 w-full" // Ajusta el espaciado con gap-12
      >
        <div className="flex flex-col gap-8 items-center lg:ml-96 ml-0 justify-center">
          {" "}
          {/* Ajusta gap-8 */}
          <div className="lg:gap-52 gap-16 grid grid-cols-1 mx-10  sm:grid-cols-2 lg:grid-cols-2 ">
            {" "}
            {/* Ajusta gap-12 */}
            {/* Tarjeta 1 */}
            <div
              className="bg-white flex flex-col gap-4 py-10 px-5 max-w-sm sm:max-w-md w-full lg:max-w-md"
              data-aos="flip-down"
              data-aos-anchor-placement="center-bottom"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-fuchsia-500">
                *DIGITAL MARKETING
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-extralight">
                Desarrollamos estrategias integrales de marketing digital. Desde
                campañas de email marketing hasta publicidad digital y marketing
                de contenidos.
              </p>
              <a
                href="/#DigitalMarketing"
                className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white w-full items-center justify-center flex mt-auto text-base sm:text-lg lg:text-xl py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg"
              >
                Saber más
              </a>
            </div>
            {/* Tarjeta 2 */}
            <div
              className="bg-white flex flex-col gap-4 py-10 px-5 max-w-sm sm:max-w-md w-full"
              data-aos="flip-up"
              data-aos-anchor-placement="center-bottom"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-fuchsia-500 py-2">
                *CONSULTING
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-extralight">
                Ofrecemos consultoría en marketing digital para ayudarte a
                identificar oportunidades y diseñar estrategias efectivas.
              </p>
              <a
                href="/#Consulting"
                className="rounded-full font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white w-full items-center justify-center flex mt-auto text-base sm:text-lg lg:text-xl py-3 transition duration-300 ease-in-out transform hover-bg hover:scale-105 hover:shadow-lg"
              >
                Saber más
              </a>
            </div>
          </div>
        </div>

        {/* Texto de Misión */}
        <div
          className="text-white text-xl sm:text-2xl lg:text-3xl text-center px-6 sm:px-20 lg:px-60 mt-12 lg:mt-16"
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
        <div className="flex flex-col ml-2 xl:ml-0">
          <p
            data-aos="fade-down-left"
            data-aos-anchor-placement="center-bottom"
            className="text-5xl md:text-6xl font-raleway font-bold text-shadow shadow-3xl text-white ml-auto mr-4 xl:mr-20 xxl:mr-40"
          >
            NUESTROS VALORES
          </p>

          <div className="mt-8 md:mt-16 flex flex-col gap-24 md:gap-32 lg:gap-48">
            <div className="flex flex-row items-center justify-center ml-auto h-20 w-full xxl:w-2/4 m-auto xxl:mr-40">
              <p
                data-aos="fade-down-right"
                data-aos-anchor-placement="center-bottom"
                className="text-xl md:text-2xl lg:text-3xl font-raleway mr-4 md:mr-10 lg:mr-20 px-4 md:px-6 lg:px-8 py-5 flex items-center justify-center rounded-full font-bold text-white bg-purple-700"
              >
                TRANSPARENCIA
              </p>
              <p
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                className="h-full italic font-sans text-sm md:text-base lg:text-lg xl:text-xl lg:w-3/4 w-full md:pr-4 lg:pr-10 mr-0 text-white font-semibold"
              >
                Damos prioridad a la honestidad y la claridad en todas nuestras
                interacciones, asegurándonos de que estés informado y cómodo con
                cada paso del proceso.
              </p>
            </div>

            <div className="flex flex-row items-center justify-center ml-auto h-20 w-full xxl:w-2/4 m-auto xxl:mr-40">
              <p
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                className="text-xl md:text-2xl lg:text-3xl font-raleway mr-4 md:mr-10 lg:mr-20 px-4 md:px-10 lg:px-14 py-5 flex items-center justify-center rounded-full font-bold text-white bg-purple-700"
              >
                COMPROMISO
              </p>
              <p
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                className="h-full italic font-sans text-sm md:text-base lg:text-lg xl:text-xl lg:w-3/4 w-full md:pr-4 lg:pr-10 mr-0 text-white font-semibold"
              >
                Nos dedicamos a cada proyecto con la misma pasión y
                determinación que si fuera nuestro propio negocio.
              </p>
            </div>

            <div className="flex flex-row items-center justify-center ml-auto h-20 w-full xxl:w-2/4 m-auto xxl:mr-40">
              <p
                data-aos="fade-up-right"
                data-aos-anchor-placement="center-bottom"
                className="text-xl lg:text-2xl xl:text-3xl font-raleway mr-4 md:mr-10 lg:mr-20 px-4 md:px-12 lg:px-16 py-5 flex items-center justify-center rounded-full font-bold text-white bg-purple-700"
              >
                INNOVACIÓN
              </p>
              <p
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                className="h-full italic font-sans text-sm md:text-base lg:text-lg xl:text-xl lg:w-3/4 w-full md:pr-4 lg:pr-10 mr-0 text-white font-semibold"
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
        className="flex h-screen pt-60 justify-start w-full bg-cover bg-center"
      >
        <div className="ml-6 md:ml-20 lg:ml-28 flex flex-col gap-8 md:gap-12 lg:gap-14 px-4 md:px-6 lg:px-8">
          <p
            data-aos="fade-down-right"
            data-aos-anchor-placement="center-bottom"
            className="text-3xl md:text-4xl lg:text-5xl flex flex-col font-raleway font-bold text-white mb-4 md:mb-6 xl:mb-6"
          >
            ¡Deja de ser Invisible con Nuestros Servicios de
            <p> SEO & SEM!</p>
          </p>
          <div className="w-full md:w-4/6 lg:w-3/6 gap-4 md:gap-8 lg:gap-5 flex flex-col">
            <p
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              className="text-xl ml:text-xl xxl:text-3xl font-raleway font-semibold text-white mb-4 md:mb-6 lg:mb-8"
            >
              SEO & SEM. Anuncios y Optimización para motores de búsqueda.
            </p>
            <p
              data-aos="fade-up-right"
              data-aos-anchor-placement="center-bottom"
              className="text-base md:text-lg lg:text-2xl font-sans text-white mb-4 md:mb-6 lg:mb-8"
            >
              ¿Quieres aparecer en los primeros lugares de Google? Nuestro
              servicio de SEO optimiza tu sitio web para atraer tráfico
              orgánico. Mejora tu posicionamiento, aumenta tu credibilidad y
              disfruta de un flujo constante de visitantes en tu página web.
            </p>
            <a
              href="/#contacto"
              data-aos="fade-down-right"
              data-aos-anchor-placement="center-bottom"
              className="rounded-full hover:border-2 hover:border-fuchsia-200 border-2 border-purple-600 text-white font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-base md:text-lg lg:text-xl w-fit px-4 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-700 hover:shadow-lg"
            >
              Contratar este servicio
            </a>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${service2})` }}
        id="Desarrollo&DiseñoWeb"
        className="relative flex h-screen flex-col justify-center items-center w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 "></div>{" "}
        {/* Agregué un overlay para mejorar la legibilidad del texto */}
        <div className="relative z-10 flex flex-col px-4 md:px-6 lg:px-8 justify-center w-full md:w-4/5 lg:w-3/5 items-center gap-6 md:gap-12 lg:gap-10">
          <div className="flex flex-col gap-6 md:gap-10 ">
            <p
              data-aos="fade-down-right"
              data-aos-anchor-placement="center-bottom"
              className="text-2xl md:text-4xl lg:text-5xl font-raleway font-bold text-white text-start md:text-start mb-4 md:mb-6"
            >
              Transforma Tu Presencia Online con Nuestro
              <p> Desarrollo y Diseño Web</p>
            </p>
            <div className="text-start md:text-left flex flex-col gap-4 md:gap-6 lg:gap-6">
              <p
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                className="text-base md:text-lg lg:text-2xl font-sans text-white mb-4 md:mb-6 lg:mb-8"
              >
                ¿Necesitas una web que refleje la esencia de tu negocio, capte
                la atención y convierta visitantes en clientes? Nuestro servicio
                de diseño web crea sitios atractivos, intuitivos y adaptados a
                tu marca.
              </p>
              <p
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                className="text-base md:text-lg lg:text-2xl font-sans text-white mb-4 md:mb-6 lg:mb-8"
              >
                Además, construimos plataformas robustas, seguras y escalables
                que funcionan a la perfección en todos los dispositivos. Desde
                e-commerce hasta soluciones personalizadas, hacemos realidad tus
                ideas.
              </p>
            </div>
            <a
              href="/#contacto"
              data-aos="fade-up-right"
              data-aos-anchor-placement="center-bottom"
              className="rounded-full hover:border-2 hover:border-fuchsia-200 border-2 border-purple-600 text-white font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-base md:text-lg lg:text-xl w-fit px-4 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-700 hover:shadow-lg"
            >
              Contratar este servicio
            </a>
          </div>
        </div>
      </section>

      <section
        id="SocialMediaManagement"
        style={{ backgroundImage: `url(${service1})` }}
        className="flex h-screen pt-60 justify-start w-full bg-cover bg-center"
      >
        <div className="ml-6 md:ml-20 lg:ml-28 flex flex-col gap-8 md:gap-12 lg:gap-14 px-4 md:px-6 lg:px-8">
          <p
            data-aos="fade-down-right"
            data-aos-anchor-placement="center-bottom"
            className="text-3xl md:text-4xl lg:text-5xl flex flex-col font-raleway font-bold text-white mb-4 md:mb-6 xl:mb-6"
          >
            Social Media Management: Conecta
            <p> con Tu Audiencia</p>
          </p>
          <div className="w-full md:w-4/6 lg:w-3/6 gap-4 md:gap-8 lg:gap-5 flex flex-col">
            <p
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              className="text-xl md:text-xl xxl:text-2xl font-sans  text-white mb-4 md:mb-6 lg:mb-8"
            >
              ¿Quieres destacar en redes sociales? Gestionamos tus redes
              sociales y nos encargamos de crear contenido atractivo,
              interactuar con tu audiencia y construir una comunidad leal.
              Aumenta tu presencia en plataformas como Facebook, Instagram y
              Twitter.
            </p>
            <p
              data-aos="fade-up-right"
              data-aos-anchor-placement="center-bottom"
              className="text-base md:text-lg lg:text-2xl font-sans text-white mb-4 md:mb-6 lg:mb-8"
            >
              Transforma tus redes sociales en una poderosa herramienta de
              marketing y descubre cómo podemos ayudarte a conectar y crecer.
            </p>
            <a
              href="/#contacto"
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
              className="rounded-full hover:border-2 hover:border-fuchsia-200 border-2 border-purple-600 text-white font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-base md:text-lg lg:text-xl w-fit px-4 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-700 hover:shadow-lg"
            >
              Contratar este servicio
            </a>
          </div>
        </div>
      </section>

      <section
        id="DigitalMarketing"
        style={{ backgroundImage: `url(${service2})` }}
        className="relative flex h-screen flex-col justify-center items-center w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 flex flex-col px-4 md:px-6 lg:px-8 justify-center w-full md:w-5/5 xl:w-4/6 items-center gap-6 md:gap-12 lg:gap-10">
          <div className="flex flex-col gap-6 md:gap-10 xxl:ml-32">
            <p
              data-aos="fade-down-right"
              data-aos-anchor-placement="center-bottom"
              className="text-2xl md:text-4xl lg:text-5xl font-raleway font-bold text-white text-start md:text-start mb-4 md:mb-6"
            >
              Digital Marketing: Maximiza Tu Impacto
              <p> en Línea</p>
            </p>
            <div className="text-start md:text-left pr-0 md:pr-48 flex flex-col gap-4 md:gap-6 lg:gap-6">
              <p
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                className="text-base md:text-lg lg:text-2xl font-sans text-white mb-4 md:mb-6 lg:mb-8"
              >
                Lleva tu negocio al siguiente nivel con nuestras estrategias de
                Digital Marketing. Diseñamos estrategias eficientes que
                maximizan tu retorno de inversión, monitoreamos y ajustamos tus
                campañas para asegurar el éxito continuo.
              </p>
              <p
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                className="text-base md:text-lg lg:text-2xl font-sans text-white mb-4 md:mb-6 lg:mb-8"
              >
                Desde campañas de correo electrónico hasta marketing de
                contenidos y publicidad online, creamos estrategias
                personalizadas que generan resultados medibles.
              </p>
            </div>
            <button
              href="/#contacto"
              data-aos="fade-up-right"
              data-aos-anchor-placement="center-bottom"
              className="rounded-full hover:border-2 hover:border-fuchsia-200 border-2 border-purple-600 text-white font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-base md:text-lg lg:text-xl w-fit px-4 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-700 hover:shadow-lg"
            >
              Contratar este servicio
            </button>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Project;
