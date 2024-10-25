import React from "react";
import "./About.css"; // Import the CSS file for styles
import {
  FaF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"; // Import icons

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Gaming Library</h1>
      <p className="about-description">
        Welcome to our Gaming Library! Here you can explore a vast collection of
        games from various genres, including action, adventure, strategy, and
        more. Our goal is to provide you with the best gaming experience,
        complete with detailed information, reviews, and links to gameplay.
      </p>

      <h2 className="about-subtitle">Our Mission</h2>
      <p className="about-mission">
        We strive to be the ultimate destination for gamers to discover and
        enjoy their favorite titles. Our mission is to curate an extensive
        library of games that caters to all interests and skill levels.
      </p>

      <h2 className="about-subtitle">Why Choose Us?</h2>
      <ul className="about-list">
        <li>✅ Comprehensive Game Database</li>
        <li>✅ User-Friendly Interface</li>
        <li>✅ Regular Updates and New Releases</li>
        <li>✅ Detailed Reviews and Ratings</li>
        <li>✅ Community Engagement and Support</li>
      </ul>

      <h2 className="about-subtitle">Get Involved</h2>
      <p className="about-involvement">
        We love hearing from our users! Join our community and share your
        thoughts on your favorite games, or suggest new titles to add to our
        library. Together, we can create a vibrant gaming environment!
      </p>

      <h2 className="about-subtitle">Meet the Team</h2>
      <div className="team-section">
        <div className="team-member">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06WGcqYuhTDZyN4y_f3y3Eml2ULYCDRTxkQ&s"
            alt="Team Member 1"
          />
          <h3>Mr.Beast</h3>
          <p>Project Manager</p>
        </div>
        <div className="team-member">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mld7tmrahAakzjDJwZ3N_bs18J4U4Str7A&s"
            alt="Team Member 2"
          />
          <h3>Johnny Sins</h3>
          <p>Game Curator</p>
        </div>
        {/* Add more team members as needed */}
      </div>

      <h2 className="about-subtitle">Frequently Asked Questions</h2>
      <div className="faq-section">
        <h3>1. How do I add a game?</h3>
        <p>You can suggest a game through our contact form!</p>
        <h3>2. Can I rate games?</h3>
        <p>Yes! Users can rate and review games in our library.</p>
        {/* Add more FAQs as needed */}
      </div>

      <h2 className="about-subtitle">Connect with Us</h2>
      <div className="social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/carbon_alternater/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default About;
