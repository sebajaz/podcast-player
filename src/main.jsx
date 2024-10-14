import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import Header from "./assets/components/header";
import ListaPodcast from "./assets/components/listapodcast";
import PlayBackBar from "./assets/components/playbackbar";

const AudioContext = createContext();
export const usarAudio = () => useContext(AudioContext);

const AudioProvider = ({ children }) => {
  const [sonando, setSonando] = useState(null);
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef(null);

  return (
    <AudioContext.Provider value={{ sonando, setSonando, reproduciendo, setReproduciendo, audioRef }}>
      {children}
    </AudioContext.Provider>
  );
};

const Main = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch('https://api.audioboom.com/audio_clips')
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(data.body.audio_clips);
      })
      .catch((error) => console.error("ERROR EN FETCH", error));
  }, []);

  return (
    <AudioProvider>
      <Header />
      <ListaPodcast podcasts={podcasts} />
      <PlayBackBar />
    </AudioProvider>
  );
};

export default Main;
