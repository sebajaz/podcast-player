import React from "react";
import { repetirdenuevo } from "./data/data";
const ListenAgain=()=>{
    return (
        <section className="repetir">
            <h2> Escuchar de nuevo </h2>
            <ul className="columnas">
                {repetirdenuevo.map((repetirdenuevo)=>(
                    <li key={repetirdenuevo.id}>  
                    <img src={repetirdenuevo.imagen} className="fotos"/>
                        <div className="info">
                            {repetirdenuevo.nombre} {repetirdenuevo.artista}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
};
export default ListenAgain;
