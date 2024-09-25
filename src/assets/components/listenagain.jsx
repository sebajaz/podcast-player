import React, { useEffect, useState } from "react";
import { repetirdenuevo } from "./data/data";
import fetchPodcast from "../services/audioServices";
const ListenAgain = () => {
    const [reproductor, setReproductor] = useState ([]);

    useEffect (() => {
        const cargaReproductor = async () => {
            const data = await fetchPodcast ();
            setReproductor(data)

        }
    cargaReproductor()


    },[]) 
    return (
        <div>
            {reproductor.map(reproductor => (
                <div key = {reproductor.id}>
                    <img 
                    src={reproductor.channel.urls.logo_image.original}
                    alt="similar"
                    />
                    <p>
                        {reproductor.title}
                    </p>
                </div>
            ))}
        </div>
    )
};

export default ListenAgain;
