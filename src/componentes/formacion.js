import React from "react";
import '../stylesheet/formacion.css';
import unaj from '../imagenes/unaj.png';
import alura from '../imagenes/alura.png';

function Formacion() {
  return (
    <div className="Formacion" id="Formacion">
        
        <div className="Contenedor-Formacion">

            <h2 className="Titulo-Formacion Titulo">Formacion Academica</h2>

            <ul>

                <li> <img src={alura} alt=""/>
                    <h4 className="Estado-Curso">Oracle Next Education (Alura Latam) <br/>Finalizado</h4>
                </li>
                <li> <img src={unaj} alt=""/>
                    <h4 className="Estado-Curso">Universidad Nacional Arturo Jauretche <br/>En curso</h4>
                </li>

            </ul>
        </div>
      


    </div>
  );
}
export default Formacion;