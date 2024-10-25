import React from "react";
import "./GameCard.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <a href={game.url} target="_blank" rel="noopener noreferrer">
        <img className="game-image" src={game.image} alt={game.name} />
        <div className="game-info">
          <h3>{game.name}</h3>
          <p>{game.genre}</p>
        </div>
      </a>
    </div>
  );
};

export default GameCard;
