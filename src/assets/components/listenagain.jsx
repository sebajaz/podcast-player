import React from "react";
import { repetirdenuevo } from "./data/data";
const ListenAgain=()=>{
    return (
        <section className="repetir">
            <h2> Escuchar de nuevo </h2>
            <ul>
                {repetirdenuevo.map((repetirdenuevo)=>(
                    <li key={repetirdenuevo.id}> {repetirdenuevo.nombre}</li>
                ))}
            </ul>
        </section>
    )
};
export default ListenAgain;
