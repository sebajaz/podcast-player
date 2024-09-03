import React, { useState } from "react";

function Modal ({isOpen, onClose, children}){
    if (!isOpen){
        return null
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">  
                <div className="modal-button">
                    <button type="button" onClick={onClose}>Cerrar</button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export  default Modal;

