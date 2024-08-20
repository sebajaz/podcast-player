import React from "react";
import fotologo from "../images/logo.png";
import fotoperfil from "../images/fotodeperfil.png";
import "./styles/header.css";

const Header = ()=>{
    return (
        <header className="header">
            <img src={fotologo} className="imagen"/>
            <input type="text" placeholder="Buscar musica..." className="busqueda"/>
            <img src={fotoperfil} className="perfill" alt="perfil"/>
        </header>
    )
};
export default Header;