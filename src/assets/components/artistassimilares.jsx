import React from "react";
import { gustossimilares, similar } from "./data/data";


const Artistasimi=() =>{
    return (
        <section className="repetir">
            <h2>  Artistas Similares  </h2>
            <ul className="columnas">
                {gustossimilares.map((gustossimilares)=>(
                    <li key={gustossimilares.id}>  
                    <img src={gustossimilares.imagen} className="fotos"/>
                        <div className="info">
                            {gustossimilares.nombre} {gustossimilares.artista}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
};
export default Artistasimi;
