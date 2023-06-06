import React from "react";
import Presentacion from "./presentacion";
import Formacion from "./formacion";
import Skills from "./skills";
import Proyectos from "./proyectos";
import Contacto from "./contacto";

function Main() {
  return (
    <div className="Main">
        <Presentacion/>
        <Formacion/>
        <Skills/>
        <Proyectos/>
        <Contacto/>
    </div>
  );
}
export default Main;