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
          <ListenAgain />
          <QuickPicks />
          <Recomendacion />
          <Artistasimi />
        </div>
        <PlaybackBar/>
      </div>
    );
  };

export default Main;