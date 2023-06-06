import React from "react";
import '../stylesheet/footer.css'
import twitter from '../imagenes/twitter.png';
import instagram from '../imagenes/instagram.png';
import github from '../imagenes/github.png';
import linkedin from '../imagenes/linkedin.png';

function Footer() {
  return (
    <div className="Footer">

        <ul class="Imagenes">
            <li> <a href="https://github.com/FacundoMedina09" target="_blank"><img src={github} alt="" target="_blank"/></a></li>
            <li> <a href="https://www.instagram.com/facuu_.okk/?hl=es-la" target="_blank"><img src={instagram} alt=""/></a></li>
            <li> <a href="https://www.linkedin.com/in/facundo-medina-cabrera-86320a225/" target="_blank"><img src={linkedin} alt=""/></a></li>
            <li> <a href="https://twitter.com/FsMc09" target="_blank"><img src={twitter} alt="" /></a></li>
        </ul>

        <ul class="texto-footer">
            <li>
                <p class="Parrafo-Footer">@Desarrollado por Facundo Medina</p>
            </li>
        </ul>
        
        

    </div>
  );
}
export default Footer;