

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    { name: "Waste Bin", icon: "🗑️", category: "Products" },
    { name: "ATM Unit", icon: "🏧", category: "Products" },
    { name: "Recycling", icon: "♻️", category: "Projects" },
    { name: "Incinerator", icon: "🔥", category: "Installation" },
    { name: "Machinery", icon: "⚙️", category: "Products" },
    { name: "Eco System", icon: "🌱", category: "Projects" },
    { name: "Incinerator", icon: "🏥", category: "Installation" },
    { name: "Machinery", icon: "🔒", category: "Products" },
    { name: "Eco System", icon: "🤝", category: "Projects" }
  ];

  return (
    <div>
      <Navbar />

      <div className="about-header">
        <h1>Government & Institutional Projects</h1>
        <p>Kerala Agro Industries Empanelled Eco-Machinery Manufacturer</p>
      </div>
      <div className="catalog-header">
        <h2>Photo Gallery</h2>
        <h3>Our Products in Action</h3>
        <p>
        A look at Green Tech Industries machinery installed across schools, hospitals, and project sites.
        </p>
      </div>

       
      <div className="filter-buttons">
        {["All", "Products", "Installation", "Projects"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

    
      <div className="gallery-section">
        {products
          .filter((item) => activeFilter === "All" || item.category === activeFilter)
          .map((item, index) => (
            <div className="gallery-card" key={index}>
              <div className="gallery-icon">{item.icon}</div>
              <h3>{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Gallery;