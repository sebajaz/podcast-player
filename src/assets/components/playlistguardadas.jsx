import React, { useState } from "react";
import ListaPlaylist from "./playlist";
import Inputs from "./modal-content";

function PGuardadas(){
    const [playlist, setPlaylist]= useState([]);

    function PlaylistGuardadas(nuevaPlaylist){
        setPlaylist([...playlist, nuevaPlaylist])
    }

    return (
        <div>
            <Inputs enGuardado={PlaylistGuardadas}/>
            <ListaPlaylist playlist={playlist}/>
        </div>
    )
}

export default PGuardadas;