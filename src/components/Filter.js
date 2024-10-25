import React from "react";
import "./Filter.css";

const Filter = ({ genres, platforms, onFilter }) => {
  return (
    <div className="filter-container">
      <select onChange={(e) => onFilter("genre", e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select onChange={(e) => onFilter("platform", e.target.value)}>
        <option value="">All Platforms</option>
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
