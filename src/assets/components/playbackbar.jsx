import React from "react";
import binla from "../images/playbar.jpg";
import "./styles/header.css";
const PlaybackBar=() =>{
    return (
        <div className="playbar"> 
            <img src={binla}/>
        </div>
    )
};
export default PlaybackBar;
