import React from "react";
import GameList from "../components/GameList";

const Library = ({ games }) => {
  return (
    <div className="library">
      <h1>Game Library</h1>
      <GameList games={games} />
    </div>
  );
};

export default Library;
