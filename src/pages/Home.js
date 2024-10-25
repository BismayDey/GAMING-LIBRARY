import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the Ultimate Gaming Library</h1>
          <p>
            Discover, play, and explore the best games across all platforms.
          </p>
          <Link to="/library" className="cta-button">
            Explore Library
          </Link>
        </div>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Featured Games</h2>
          <p>
            Check out the latest and greatest games from all genres. Whether
            you're into action, RPGs, or puzzle games, we’ve got something for
            you!
          </p>
          <Link to="/library" className="cta-button secondary">
            View All Games
          </Link>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          <p>&copy; 2024 Gaming Library. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
