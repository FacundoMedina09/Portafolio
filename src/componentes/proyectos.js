import React from "react";
import '../stylesheet/proyectos.css';
import store from '../imagenes/store_main.png';
import wave from '../imagenes/wave.png';


function Proyectos() {
  return (
    <div className="Proyectos" id="Proyectos">
        
        <h2 className="Titulo-Principal-Proyecto Titulo"> Proyectos</h2>

            
            <div className="Encriptador-Proyecto">
                <div className="Img-Proyectos Proyecto-Img-Encriptador"></div>

                <div className="Contenedor-Boton-Titulo">
                    <h4 className="Titulo-del-Proyecto">Encriptador de Texto</h4>
                    <div className="Contenedor-Boton">
                        <a href="https://github.com/FacundoMedina09/Encriptador-de-Texto" target="_blank"><button className="Boton" >Repositorio</button></a>
                        <a href="https://facundomedina09.github.io/Encriptador-de-Texto/" target="_blank" ><button className="Boton" >Ver</button></a>
                        
                        
                    </div>

                </div>
            </div>
            <img src={wave} className="Wave"/> 
            <div className="Ahorcado-Proyecto">
                 
                <div className="Img-Proyectos Proyecto-Img-Ahorcado" ></div>

                <div className="Contenedor-Boton-Titulo">
                    <h4 className="Titulo-del-Proyecto Titulo-Ahorcado">Hangman Game</h4>
                    <div className="Contenedor-Boton">
                        <a href="https://github.com/FacundoMedina09/HangManGame" target="_blank"><button className="Boton Boton-Azul" >Repositorio</button></a>
                        <a href="https://github.com/FacundoMedina09/HangManGame" target="_blank" ><button className="Boton Boton-Azul" >Ver</button></a>
                        
                    </div>
                </div>
                
            </div>
            <img src={wave} className="Wave Wave-Bottom"/>
            <div className="Store-Proyecto">
                
                <div className="Img-Proyectos Proyecto-Img-Store" ></div>

                <div className="Contenedor-Boton-Titulo">
                    <h4 className="Titulo-del-Proyecto">Funko Store</h4>
                    <div className="Contenedor-Boton">
                        <a href="https://github.com/FacundoMedina09/Store" target="_blank"><button className="Boton" >Repositorio</button></a>
                        <a href="https://github.com/FacundoMedina09/Store" target="_blank" ><button className="Boton" >Ver</button></a>
                        
                    </div>

                </div>
            </div>
            <img src={wave} className="Wave"/>
            <div className="ContadorClic-Proyecto">
                
                <div className="Img-Proyectos Proyecto-Img-ContadorClic" ></div>

                <div className="Contenedor-Boton-Titulo">
                    <h4 className="Titulo-del-Proyecto Titulo-ContadorClic">Contador de Clic</h4>
                    <div className="Contenedor-Boton">
                        <a href="https://github.com/FacundoMedina09/Contador-de-Clics" target="_blank"><button className="Boton Boton-Azul" >Repositorio</button></a>
                        <a href="https://facundomedina09.github.io/Contador-de-Clics/" target="_blank" ><button className="Boton Boton-Azul" >Ver</button></a>
                        
                    </div>

                </div>
            </div>
            <img src={wave} className="Wave Wave-Bottom"/>
            <div className="Calculadora-Proyecto">
                
                <div className="Img-Proyectos Proyecto-Img-Calculadora" ></div>

                <div className="Contenedor-Boton-Titulo">
                    <h4 className="Titulo-del-Proyecto">Calculadora</h4>
                    <div className="Contenedor-Boton">
                        <a href="https://github.com/FacundoMedina09/Calculadora" target="_blank"><button className="Boton" >Repositorio</button></a>
                        <a href="https://facundomedina09.github.io/Calculadora/" target="_blank" ><button className="Boton" >Ver</button></a>
                        
                    </div>

                </div>
            </div>
      


    </div>
  );
}
export default Proyectos