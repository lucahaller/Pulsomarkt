import React, { useEffect } from "react";
import first from "../Assets/Images/first.png";
import second from "../Assets/Images/2section.png";
import third from "../Assets/Images/3section.png";
import forth from "../Assets/Images/4section.png";
import fith from "../Assets/Images/5section.png";
import sixth from "../Assets/Images/6section.png";
import espiral from "../Assets/Images/espiral.png";
import texto from "../Assets/Images/DIGITAL.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      once: false,
    });
  });
  return (
    <div className="h-full">
      <Nav className="bg-transparent" />
      <section
        id="#landing"
        className="flex justify-start  items-center bg-cover bg-center overflow-x-hidden  h-screen w-full "
        style={{ backgroundImage: `url(${first})` }}
      >
        <div className="text-white lg:ml-40 ml-10">
          <div className="lg:text-8xl text-8xl flex flex-col gap-0 p-0 leading-none">
            <p className="m-0 text-shadow font-raleway  ">DIGITAL</p>
            <p className="m-0 text-shadow font-raleway  ">MARKETING</p>
          </div>

          <p className="text-3xl font-mono">AND WEB SOLUTIONS</p>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${second})` }}
        className="flex h-screen items-center justify-end w-full bg-cover bg-center"
      >
        <div className="w-[650px] mr-80 gap-5 flex flex-col">
          <div className="text-white text-5xl font-sans ">
            <p>Potencia tu presencia </p>
            <p className="flex flex-row gap-3">
              {" "}
              digital con {""} <p className="font-semibold "> Pulsomarkt</p>
            </p>
          </div>
          <div className="flex flex-col gap-5 text-justify">
            <p className="text-white text-2xl font-sans">
              Especializados en SEO, páginas web y marketing en redes sociales,
              tenemos la solución perfecta para cada necesidad.
            </p>
            <p className="text-white text-2xl font-sans">
              Únete a nosotros y descubre cómo podemos aumentar tu visibilidad,
              atraer a tu público objetivo y hacer crecer tu negocio de manera
              sostenible.
            </p>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${third})` }}
        className="flex h-screen items-center justify-start w-full bg-cover bg-center"
      >
        <div className="w-[600px] ml-80 gap-10 flex flex-col">
          <div className="text-white text-5xl font-sans font-bold">
            <p>Tu éxito es nuestra prioridad </p>
          </div>
          <div className="flex flex-col gap-5 text-justify">
            <p className="text-white text-2xl font-sans">
              En Pulsomarkt, entendemos que cada negocio es único y merece una
              estrategia de marketing digital a su medida.
            </p>
            <p className="text-white text-2xl font-sans">
              Por eso trabajamos estrechamente contigo para entender tus
              objetivos y diseñar un plan que se ajuste perfectamente a tus
              necesidades.
            </p>
          </div>
          <button className="px-8 py-3 bg-white hover:bg-gray-400 hover:text-gray-200 text-black font-sans font-semibold text-xl w-fit">
            Contactar
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          className="ml-auto mr-44"
        >
          <img src={espiral} />
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${forth})` }}
        className="flex h-screen items-start  justify-center w-full bg-cover bg-center"
      >
        <div className="flex flex-col mt-40 gap-16">
          <div>
            <p className="text-4xl text-white ">
              {" "}
              Explora nuestros servicios personalizados para cada necesidad
              digital.
            </p>
          </div>
          <div>
            <p className="text-6xl text-white font-semibold">
              ¡Tenemos la estrategia perfecta para ti!
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <div className="bg-white flex flex-col gap-4 py-10 p-5 w-96">
              <p className="text-4xl font-bold text-fuchsia-500">*SEO & SEM</p>
              <p className="text-2xl font-extralight">
                Aumenta tu visibilidad online con nuestras estrategias de SEO y
                SEM. Mejoramos tu posicionamiento en los motores de búsqueda.
              </p>
              <button className="py-3 bg-gradient-to-r text-3xl mt-auto text-white rounded-full border from-violet-600 to-fuchsia-500">
                Saber más
              </button>
            </div>
            <div className="bg-white flex flex-col gap-4 py-10 p-5 w-96">
              <p className="text-4xl font-bold  text-fuchsia-500">
                *DESARROLLO Y DISEÑO WEB
              </p>
              <p className="text-2xl font-extralight">
                Desarrollamos sitios web efectivos e impactantes que promueven
                tu marca y atraen a los usuarios.
              </p>
              <button className="py-3 bg-gradient-to-r mt-auto text-3xl text-white rounded-full border from-violet-600 to-fuchsia-500">
                Saber más
              </button>
            </div>
            <div className="bg-white flex flex-col gap-4 py-10 p-5 w-96">
              <p className="text-4xl font-bold text-fuchsia-500">
                *SOCIAL MEDIA MAGNAMENT
              </p>
              <p className="text-2xl font-extralight">
                Gestionamos tus redes sociales para construir y mantener una
                fuerte presencia online.
              </p>
              <button className="py-3 bg-gradient-to-r mt-auto text-3xl text-white rounded-full border from-violet-600 to-fuchsia-500">
                Saber más
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${fith})` }}
        className="flex h-screen items-start  justify-center w-full bg-no-repeat bg-cover  "
      >
        <div className="flex flex-col gap-52 items-center justify-center">
          <div className="flex flex-row gap-10">
            <div className="bg-white flex flex-col gap-4 py-10 p-5 w-96">
              <p className="text-4xl font-bold text-fuchsia-500">
                *DIGITAL MARKETING
              </p>
              <p className="text-2xl font-extralight">
                Desarrollamos estrategias integrales de marketing digital. Desde
                campañas de email marketing hasta publicidad digital y marketing
                de contenidos.
              </p>
              <button className="py-3 bg-gradient-to-r text-3xl mt-auto text-white rounded-full border from-violet-600 to-fuchsia-500">
                Saber más
              </button>
            </div>
            <div className="bg-white flex flex-col justify-center gap-4 py-10 p-5 w-96">
              <p className="text-4xl font-bold py-5 text-fuchsia-500">
                *CONSULTING
              </p>
              <p className="text-2xl font-extralight ">
                Ofrecemos consultoría en marketing digital para ayudarte a
                identificar oportunidades y diseñar estrategias efectivas.
              </p>
              <button className="py-3 bg-gradient-to-r mt-auto text-3xl text-white rounded-full border from-violet-600 to-fuchsia-500">
                Saber más
              </button>
            </div>
          </div>
          <div className="text-white text-3xl mx-64">
            Nuestra misión es proporcionar soluciones de marketing digital
            accesibles y efectivas para pequeñas y medianas empresas.
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${sixth})` }}
        className="flex h-screen items-start  justify-center w-full bg-cover bg-center"
      ></section>
    </div>
  );
};

export default Project;
