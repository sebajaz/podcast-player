import React from "react";
import { ALbum } from "./data/data";
const Recomendacion=() =>{
    return(
        <section>
            <h2>   Albumes Recomendados </h2>
            <ul> {ALbum.map((ALbum)=>(
                <li key={ALbum.id}> {ALbum.album}</li>
            ))}
            </ul>
        </section>
    )
};
export default Recomendacion;
