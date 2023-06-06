import React from "react";
import '../stylesheet/contacto.css';
import wave from '../imagenes/wave.png';

function Contacto() {
  return (
    <div className="Contenedor-Contacto">
      <img src={wave} className="Wave"/>
      <div className="Contacto" id="Contacto">
        <form action="https://formsubmit.co/medinafacundojobs@gmail.com" method="POST" className="formulario">

          <h2 className="tituloh2" id="titulo-contacto">Contacto</h2>
          <label  className="label">Nombre y Apellido</label>
          <input type="text" name="nombre" required className="input-form"/>

          <label  className="label">Email</label>
          <input type="email" name="email" required placeholder="Email@dominio.com" className="input-form"/>

          <label  className="label">Asunto</label>
          <input type="text" name="asunto" required className="input-form"/>

          <label  className="label">Mensaje</label>
          <textarea className="text-area" name="mensaje" id="textarea" cols="30" rows="10" required placeholder="Ingrese su mensaje"></textarea>

          <button className="Boton Boton-Azul">Enviar</button>
        </form>
      </div>
      <img src={wave} className="Wave Wave-Bottom"/>
    </div>
  );
}
export default Contacto;
