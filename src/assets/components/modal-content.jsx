import React, { useState } from "react";
import Modal from "./modal";


function Inputs({enGuardado}){
    const [isModalOpen, setModalOpen]= useState(false);
    const [ndescripcion, setnDescripcion]= useState('');
    const [nPlaylist, setnPlaylist]= useState('')
    const [nimagen, setnImagen]= useState('')

    function Guardado(){
        console.log(enGuardado);
        if (typeof enGuardado === 'function'){
            enGuardado({nombre: nPlaylist, descripcion: ndescripcion, imagen: nimagen})
            setModalOpen(false)
            setnPlaylist('')
            setnDescripcion('')
            setnImagen('')
        } else {console.error ('en guardado no es una funcion')}
        

    }
    function handleOpenModal(){
      setModalOpen(true)
    }
    function CerrarModal(){
      setModalOpen(false)
    }
    
    return (
        <>
            <button onClick={handleOpenModal}>Crear playlist</button>
            <Modal isOpen={isModalOpen} onClose={CerrarModal}>
                <div>
                    <div>
                        <label>
                            Nombre de la playlist
                            <input 
                                type="text"
                                value={nPlaylist}
                                onChange={(e)=> setnPlaylist(e.target.value)}
                            />
                        </label>
                        <label>
                            El nombre de su playlist es:
                            <span>{nPlaylist}</span>
                        </label>
                        <label>
                            Descripcion
                            <input 
                                type="text"
                                value={ndescripcion}
                                onChange={(e)=> setnDescripcion(e.target.value)}
                            />
                        </label>
                        <label>
                            Descripcion:
                            <span>{ndescripcion}</span>
                        </label>
                        <label>
                            URL de imagen
                            <input 
                                type="text" 
                                value={nimagen}
                                onChange={(e)=> setnImagen(e.target.value)}
                            />
                        </label>
                        <label>
                            {nimagen && <img src={nimagen} className="playlistimg"/>}
                        </label>
                    </div>
                    <button onClick={Guardado}>Agregar nueva playlist</button>
                </div>
            </Modal>
        </>
    )
}

function Input({label, value, onChange, editable}){
    return (
        <label>
            {label}
            {' '}
            {editable ? (
                <input type="text" value={value} onChange={onChange}/>
            ):(
                <span>{value}</span>
            )}

                
        </label>
    )
}

export default Inputs;
