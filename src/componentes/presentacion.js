import React from "react";
import '../stylesheet/presentacion.css';
import foto from '../imagenes/foto.png';
import wave from '../imagenes/wave.png';

function Presentacion() {
  return (
    <div className="Presentacion" id="Presentacion">
        

        <div className="Contenedor-Presentacion">
          <img src={foto} alt="Facundo Medina" className="Logo-Presentacion"/>
          <ul>
            <li>
                <h1 className="Titulo-Presentacion">Facundo Medina Cabrera, Desarrollador Web.</h1>
                <p className ="Parrafo-Presentacion">Soy estudiante de ingeniería de segundo año, apasionado por el desarrollo.
                  Busco encontrar soluciones aprovechando todos los recursos disponibles.
                  Participo en el trabajo en equipo y la colaboración, me apasiona estar en constante aprendizaje de nuevas tecnologías y herramientas.
                  Comprometido con la excelencia y ansioso por contribuir a proyectos desafiantes que me permitan poner en practica mis conocimientos.

                </p>
                
              </li>
          </ul>
        </div>

        <img src={wave} className="Wave Wave-Bottom"/>
    </div>
  );
}
export default Presentacion;