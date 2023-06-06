import React from "react";
import '../stylesheet/skills.css';
import js from '../imagenes/js.png';
import csharp from '../imagenes/c.png';
import python from '../imagenes/python.png';
import html from '../imagenes/html.png';
import css from '../imagenes/css.png';
import java from '../imagenes/java.png';
import mysql from '../imagenes/mysql.png';
import linux from '../imagenes/linux.png';
import bootstrap from '../imagenes/bootstrap.png';
import react from '../imagenes/react.png';
import wave from '../imagenes/wave.png';

function Skills() {
  return (
    <div className="Skills" id="Skills">
        
        <img src={wave} className="Wave"/>

        <div className="Contenedor-Skills">
            
            <h2 className="Titulo-Skills Titulo">Skills</h2>

            <ul className="Lista-Skills">
                
                
                <li className=""> <img src={html}alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills" >Html</h4>
                </li>
                <li className=""> <img src={java}alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills">Java</h4>
                </li>
                <li className=""> <img src={css}alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills">Css</h4>
                </li>

                <li className=""> <img src={mysql}alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills">MySQL</h4>
                </li>

                <li className=""> <img src={csharp}alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills">C#</h4>
                </li>

                <li className=""> <img src={linux}alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills">Linux</h4>
                </li>

                <li className=""> <img src={python} alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills">Python</h4>
                </li>

                <li className=""> <img src={bootstrap}alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills">Bootstrap</h4>
                </li>
                <li className=""> <img src={js}alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills">JavaScript</h4>
                </li>

                <li className=""> <img src={react}alt="" className="Img-Skills"/>
                    <h4 className="Data-Skills">React</h4>
                </li>
            </ul>
        </div>
        <img src={wave} className="Wave Wave-Bottom"/>
    </div>
  );
}
export default Skills;