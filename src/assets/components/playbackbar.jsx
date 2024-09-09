import React from "react";
import "./styles/header.css";
import atras from "../images/atras.png";
import on from "../images/on.png";
import adelante from "../images/adelante.png";
import musica from "../images/musica.png";
import volume from "../images/volumen.png";
import tiempo from "../images/tiempo.png";

const PlaybackBar=() =>{
    return (
        <div className="playbar"> 
            <img src={tiempo} className="barratiempo"/>
            <img src={musica} className="barra"/>
            <img src={atras} className="barra"/>
            <img src={on} className="barra"/>
            <img src={adelante} className="barra"/>
            <img src={volume} className="barra"/>
        </div>
    )
};
export default PlaybackBar;
