import React from "react";
import { gustossimilares } from "./data/data";
const QuickPicks= ()=>(
    <section className="gustsimilares"> 
        <h2> Gustos Similares </h2>
        <ul> {gustossimilares.map((gustossimilares)=>(
            <li key={gustossimilares.id}> {gustossimilares.nombre} </li>
        ))}
        </ul>
    </section>
);
export default QuickPicks;
