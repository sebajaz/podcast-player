import React, { useState } from "react";
import Inputs from "./modal-content";
import Modal from "./modal";

function ListaPlaylist({playlist}){
    const safePlaylist= Array.isArray(playlist) ? playlist : [];
    return (
        <div>
            <h2>Tus playlists</h2>
            {safePlaylist.length === 0 ? (
                <p> No creaste ninguna playlist</p>

            ) : (
                safePlaylist.map((item, index)=> (
                    <div key={index}> 
                        <h4> {item.nombre} </h4>
                        <p> {item.descripcion} </p>
                        {item.imagen && <img src={item.imagen} className="playlistimg"/>}
                    </div>
                ))
            )}
        </div>
    )
}

export default ListaPlaylist;

