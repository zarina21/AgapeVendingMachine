"use client"; // Permite usar React en el cliente
import { useState } from "react"; // Importa useState
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // Estado para manejar el estado del menú

  // Función para alternar el estado del menú
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/" className="ml-6">
            <Image src="/logo.jpg" alt="logo" width={45} height={45} />
          </Link>
          <button
            onClick={toggleNavbar} // Llama a la función al hacer clic
            className={`navbar-burger ${isActive ? "is-active" : ""}`} // Cambia la clase dinámicamente
            aria-label="menu"
            aria-expanded={isActive ? "true" : "false"}
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" className="has-text-white"></span>
            <span aria-hidden="true" className="has-text-white"></span>
            <span aria-hidden="true" className="has-text-white"></span>
            <span aria-hidden="true" className="has-text-white"></span>
          </button>
        </div>
        {/* Menú desplegable */}
        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end"> 
            <Link href="/" className="navbar-item has-text-white">
              Home
            </Link>
            <Link href="/terms-and-conditions" className="navbar-item has-text-white">
              terms and conditions
            </Link>
            <Link href="/about-us" className="navbar-item has-text-white">
              About Us
            </Link>
            <Link href="/contact" className="navbar-item has-text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
