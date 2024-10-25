import React from "react";
import { useParams } from "react-router-dom";
import "./GameDetail.css"; // Add custom styling for this component

const GameDetail = ({ games }) => {
  const { id } = useParams();
  const game = games.find((game) => game.id === parseInt(id));

  if (!game) {
    return <h2>Game not found</h2>;
  }

  return (
    <div className="game-detail">
      <img src={game.image} alt={game.name} />
      <h1>{game.name}</h1>
      <p>Genre: {game.genre}</p>
      <p>Description: {game.description}</p>
      <a href={game.url} target="_blank" rel="noopener noreferrer">
        Visit Official Page
      </a>
    </div>
  );
};

export default GameDetail;
