import React, { useEffect, useState } from "react";
import Header from "./assets/components/header";
import ListaPodcast from "./assets/components/listapodcast";
import PlayBackBar from "./assets/components/playbackbar";


const Main = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [suenaPodcast, setSuenaPodcast] = useState(null);

  useEffect(() => {
    fetch('https://api.audioboom.com/audio_clips')
    .then((response) => response.json())
    .then((data) => {
      setPodcasts(data.body.audio_clips)
    })
    .catch((error) => console.error("ERROR EN FETCH", error))
  }, []) 
  const handlePodcastClick = (podcast) => {
    setSuenaPodcast(podcast.urls.high_mp3)
  }
    return (
      <div>
        <Header/>
        <div>
          <ListaPodcast podcasts={podcasts} PodcastClick={handlePodcastClick}/>
        </div>
        {suenaPodcast && <PlayBackBar audioUrl={suenaPodcast}/>}
      </div>
    );
  };

export default Main;