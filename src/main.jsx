import React from "react";
import Artistasimi from "./assets/components/artistassimilares";
import Header from "./assets/components/header";
import ListenAgain from "./assets/components/listenagain";
import QuickPicks from "./assets/components/quickpicks";
import PlaybackBar from "./assets/components/playbackbar";
import Recomendacion from "./assets/components/recomendados";
const Main = () => {
    return (
      <div className="App"> 
        <Header/>
        <div className="main-content">
          <Artistasimi />
          <ListenAgain />
          <QuickPicks />
          <Recomendacion />
        </div>
        <PlaybackBar/>
      </div>
    );
  };

export default Main;