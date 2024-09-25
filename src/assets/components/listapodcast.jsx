import React from "react";

const ListaPodcast = ({ podcasts, PodcastClick }) => {

    const truncarTexto = (texto, limite) => {
        if (!texto) return ""; 
        if (texto.length > limite) {
            return texto.slice(0, limite) + '...';
        }
        return texto;
    }


    return (
        <section className="podcast-list">
            <h2 className="titulo"> PODCASTS </h2>
            <ul className="lista">
                {podcasts.map(podcast => (
                    <li key={podcast.id} onClick={() => PodcastClick(podcast)}>
                        <img 
                            src={podcast.channel.urls.logo_image.original}
                            alt={podcast.title} 
                            className="imagen-podcast"
                        />
                        <div className="info">
                            <h3 title={podcast.title}>{truncarTexto(podcast.title, 30)}</h3> 
                            <p title={podcast.description}>{truncarTexto(podcast.description, 100)}</p>
                        </div>
                    </li>                   
                ))}
            </ul>
        </section>
    )
}

export default ListaPodcast;

