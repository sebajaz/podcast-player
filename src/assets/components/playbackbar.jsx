import React, { useRef } from "react";

const PlayBackBar = ({audioUrl}) => {
    const audioRef = useRef (null);
    return (
        <div className="playbar">
            <audio ref={audioRef} src={audioUrl} controls/>
        </div>
    )
}

export default PlayBackBar;
