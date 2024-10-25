import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import About from "./pages/About";
import GameDetail from "./pages/GameDetail"; // Import the GameDetail component
import "./App.css";
import "./animations.css";

const App = () => {
  // Sample games data
  const gamesData = [
    {
      id: 1,
      name: "Shape like a snake",
      genre: "Simulation",
      platform: "PC",
      image:
        "https://play-lh.googleusercontent.com/S9ZmNx5LYCj7h2IJZb0QqkXAGki6JRaMQ25ycKfrngDkNBA6jk7rM87YcAH1prV_OA",
      url: "https://bismaydey.github.io/Snake-Game/",
      description: "A legendary RPG game...",
    },
    {
      id: 2,
      name: "Dino Game",
      genre: "Simulation",
      platform: "PC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1qoWL7bmnFqyaeYYrkHe0Th4w-eDsE91IA&s",
      url: "https://bismaydey.github.io/DINO-GAME/",
      description: "A legendary RPG game...",
    },
    {
      id: 3,
      name: "Tik Tak Toe",
      genre: "Puzzle",
      platform: "PC",
      image:
        "https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU",
      url: "https://bismaydey.github.io/Tic-Tak-Toe/",
      description: "A legendary RPG game...",
    },
    {
      id: 4,
      name: "Pac Man",
      genre: "Simulation",
      platform: "PC",
      image:
        "https://static.tvtropes.org/pmwiki/pub/images/pac_man_official_pacman_video_game.png",
      url: "https://pac-man-neon.vercel.app/",
      description: "A legendary RPG game...",
    },
    {
      id: 5,
      name: "Puzzle Game",
      genre: "Puzzle",
      platform: "PC",
      image:
        "https://cf.geekdo-images.com/EmV_En4YbBfHUFV3gPSV4w__itemrep/img/XJQBnruneOgVO5gqB-hmYIj3ePk=/fit-in/246x300/filters:strip_icc()/pic8061461.jpg",
      url: "https://bismaydey.github.io/PUZZLE-GAME/",
      description: "A legendary RPG game...",
    },
    // Add more games here...
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library games={gamesData} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/games/:id"
            element={<GameDetail games={gamesData} />}
          />{" "}
          {/* Dynamic route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
