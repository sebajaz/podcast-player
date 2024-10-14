import React from "react";
import { usarAudio } from "../../main";

const ListaPodcast = ({ podcasts }) => {
  const { setSonando, sonando, reproduciendo, setReproduciendo, audioRef } = usarAudio();

  const truncarTexto = (texto, limite) => {
    if (!texto) return "";
    if (texto.length > limite) {
      return texto.slice(0, limite) + "...";
    }
    return texto
  };

  const podcastClick = (podcast) => {
    if (sonando && sonando.id === podcast.id) {
 
      setReproduciendo(prevReproduciendo => !prevReproduciendo);
    } else {

      setSonando(podcast);
      setReproduciendo(true);
      
      if (audioRef.current) {
        audioRef.current.src = podcast.urls.high_mp3; 
        audioRef.current.play().catch(error => console.error("Error al reproducir:", error));
      }
    }
  };

  return (
    <section className="podcast-list">
      <h2 className="titulo">PODCASTS</h2>
      <ul className="lista">
        {podcasts.map((podcast) => (
          <li key={podcast.id} onClick={() => podcastClick(podcast)}>
            {podcast.channel?.urls?.logo_image?.original && (
              <img
                src={podcast.channel.urls.logo_image.original}
                alt={podcast.title}
                className="imagen-podcast"
              />
            )}
            <div className="info">
              <h3 title={podcast.title}>{truncarTexto(podcast.title, 30)}</h3>
              <p title={podcast.description}>
                {truncarTexto(podcast.description, 100)}
              </p>
              <button onClick={(e) => {
                e.stopPropagation();
                podcastClick(podcast);
              }}>
                {sonando && sonando.id === podcast.id && reproduciendo ? "Pausar" : "Reproducir"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListaPodcast;
