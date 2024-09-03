import React, { useState } from "react";
import Artistasimi from "./assets/components/artistassimilares";
import Header from "./assets/components/header";
import ListenAgain from "./assets/components/listenagain";
import QuickPicks from "./assets/components/quickpicks";
import PlaybackBar from "./assets/components/playbackbar";
import Recomendacion from "./assets/components/recomendados";
import Inputs from "./assets/components/modal-content";
import ListaPlaylist from "./assets/components/playlist";
import PGuardadas from "./assets/components/playlistguardadas";

const Main = () => {
    return (
      <div className="App"> 
        <Header/>
        <div className="main-content">
          <PGuardadas />
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