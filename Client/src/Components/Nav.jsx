import { Navbar } from "flowbite-react";
import logo from "../Assets/Images/logo.png";

export default function Nav() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed avsolute z-20 w-full bg-blue-700 dark:bg-blue-800 dark:backdrop-blur-lg" // Aquí añadimos la clase de desenfoque
    >
      <Navbar.Brand className="ml-10">
        <img
          src={logo}
          className="sm:w-60 sm:h-16 w-40 h-10"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-32 ">
        <Navbar.Link className="text-lg  dark:text-white text-white" href="/">
          Inicio
        </Navbar.Link>
        <Navbar.Link
          className="text-lg dark:text-white text-white"
          href="/#services"
        >
          Servicios
        </Navbar.Link>
        <Navbar.Link
          className="text-lg dark:text-white text-white"
          href="/#about"
        >
          Sobre Nosotros
        </Navbar.Link>
        <Navbar.Link
          className="text-lg dark:text-white text-white"
          href="/#contacto"
        >
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
