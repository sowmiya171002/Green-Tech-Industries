import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo-icon">🌿</span>
        <div className="company-text">
          <span className="company-name">Green Tech Industries</span>
          <span className="company-country">INDIA PVT LTD</span>
        </div>
      </div>

      
      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/govproject" onClick={() => setMenuOpen(false)}>Govproject</Link></li>
          <li><Link to="/certification" onClick={() => setMenuOpen(false)}>Certification</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li>
      <Link to="/getquote" onClick={() => setMenuOpen(false)}>
        <button className="quote-btn">Get Quote</button>
      </Link>
    </li>
        </ul>
      </div>

     
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>
    </nav>
 
  );
}

export default Navbar;




 

   