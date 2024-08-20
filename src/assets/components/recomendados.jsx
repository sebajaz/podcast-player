import React from "react";
import { ALbum } from "./data/data";
const Recomendacion=() =>{
    return(
        <section className="repetir">
            <h2>   Albumes Recomendados </h2>
            <ul className="columnas">
                {ALbum.map((ALbum)=>(
                    <li key={ALbum.id}>  
                    <img src={ALbum.imagen} className="fotos"/>
                        <div className="info">
                            {ALbum.album}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
};
export default Recomendacion;
