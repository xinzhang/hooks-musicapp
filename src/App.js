import React from 'react';
import TrackList from "./TrackList";
import PlayerControls from "./PlayerControls";
import { MusicPlayerProvider } from "./MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;