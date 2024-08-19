import React from "react";
import Artistasimi from "./artistassimilares";
import Header from "./header";
import ListenAgain from "./listenagain";
import QuickPicks from "./quickpicks";
import PlaybackBar from "./playbackbar";
import Recomendacion from "./recomendados";
const Main = () => {
    return (
      <div className="main-content">
        <Header />
        <Artistasimi />
        <ListenAgain />
        <Artists />
        <QuickPicks />
        <PlaybackBar />
        <Recomendacion />
      </div>
    );
  };
  
  export default Main;