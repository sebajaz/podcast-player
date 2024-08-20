import React from "react";
import { similar } from "./data/data";
const QuickPicks= ()=>{
    return (
        <section className="repetir"> 
            <h2> Gustos Similares </h2>
            <ul className="columnas">
                {similar.map((similar)=>(
                    <li key={similar.id}>  
                    <img src={similar.imagen} className="fotos"/>
                        <div className="info">
                            {similar.nombre} {similar.artista}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
};
export default QuickPicks;
