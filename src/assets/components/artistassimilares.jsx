import React from "react";
import { similar } from "./data/data";
const Artistasimi=() =>{
    return (
        <section>
            <h2>  Artistas Similares  </h2>
            <ul> {similar.map((similar)=> (
                <li key={similar.id}>{similar.artista} </li>
            ))}

            </ul>
        </section>
    )
};
export default Artistasimi;
