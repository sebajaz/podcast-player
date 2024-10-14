import React, { useRef, useState, useEffect } from "react";
import { usarAudio } from "../../main";

const PlayBackBar = () => {
  const { reproduciendo, setReproduciendo, sonando, audioRef } = usarAudio();
  const [progreso, setProgreso] = useState(0);
  const [duracion, setDuracion] = useState(0);

  useEffect(() => {
    if (sonando && audioRef.current) {
      if (reproduciendo) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [reproduciendo, sonando]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.play();
    }
  }, [sonando]);

  const botonPausa = () => {
    setReproduciendo(!reproduciendo);
  };

  const botonAdelantar = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 15;
    }
  };

  const botonRetroceder = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 15;
    }
  };

  const tiempoActualizado = () => {
    if (audioRef.current){
        setProgreso(audioRef.current.currentTime)
    }
  }

  const tiempoPodcast = () => {
    if (audioRef.current){
        setDuracion(audioRef.current.duration)
    }
  }

  const manejadorTiempo = () =>{
    const nuevoTiempo = event.target.value;
    audioRef.current.currentTime = nuevoTiempo;
    setProgreso(nuevoTiempo);
  }

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours > 0 ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const truncarTexto = (texto, limite) => {
    if (!texto) return "";
    if (texto.length > limite) {
      return texto.slice(0, limite) + "...";
    }
    return texto;
  };

  if (!sonando) {
    return <p>NO HAY PODCAST SELECCIONADO</p>;
  }

  return (
    <div className="playbar">
      {sonando.channel && sonando.channel.urls ? (
        <div>
          <img
            src={sonando.channel.urls.logo_image.original}
            alt={sonando.title}
            className="playbar-image"
          />
          <div className="playbar-info">
            <p title={sonando.title}>{truncarTexto(sonando.title, 50)}</p>
            <audio 
                ref={audioRef} 
                src={sonando.urls.high_mp3} 
                onTimeUpdate={tiempoActualizado}
                onLoadedMetadata={tiempoPodcast}
            />
            <button onClick={botonPausa}>
              {reproduciendo ? "PAUSAR" : "REPRODUCIR"}
            </button>
            <button onClick={botonAdelantar}>+15</button>
            <button onClick={botonRetroceder}>-15</button>
            <input 
                type="range" 
                min="0" 
                max={duracion}  
                value={progreso}
                onChange={manejadorTiempo}
                className="progress-bar"
            />
            <span>{formatTime(progreso)} / {formatTime(duracion)}</span>
          </div>
        </div>
      ) : (
        <p>No hay información del podcast.</p>
      )}
    </div>
  );
};

export default PlayBackBar;
