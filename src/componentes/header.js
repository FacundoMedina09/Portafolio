import React from "react";
import '../stylesheet/header.css';
import '../stylesheet/reset-copia.css';

function Header() {
  return (
    <div className="Header">
        
        <div className="Contenedor-Header">
            <nav className="Nav-Header" >

                <ul className="Lista-Nav-Header">
                    <li><a href="#Presentacion">Presentacion</a></li>
                    <li><a href="#Formacion">Formacion</a></li>
                    <li><a href="#Skills">Skills </a></li>
                    <li><a href="#Proyectos">Proyectos</a></li>
                    <li><a href="#Contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>


    </div>
  );
}
export default Header;