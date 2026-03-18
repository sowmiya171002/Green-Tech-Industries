import React from 'react'
 
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
       <div className="footer">

<div className="footer-container">
 
    <div className="footer-col">
        <h2>🌿 Green Tech Industries</h2>
        <p>
            Green Tech Industries India Pvt Ltd — Kerala Agro Industries empanelled
            manufacturer of eco-friendly machinery. Committed to sustainable waste
            management solutions for schools, hospitals, and government institutions
            across India.
        </p>

        <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>💼</span>
            <span>▶️</span>
        </div>
    </div>

    
    <div className="footer-col">
        <h3>Products</h3>
        <ul>
            <li>Napkin Destroyers</li>
            <li>Vending Machines</li>
            <li>Plastic Shredders</li>
            <li>Incinerators</li>
            <li>Agglo Machines</li>
            <li>View All</li>
        </ul>
    </div>

    
    {/* <div className="footer-col">
        <h3>Company</h3>
        <ul>
            <li>About Us</li>
            <li>Gov. Projects</li>
            <li>Certifications</li>
            <li>Gallery</li>
            <li>Contact Us</li>
        </ul>
    </div> */}
     <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/govproject">Gov. Projects</Link></li>
            <li><Link to="/certification">Certifications</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/products">products</Link></li>
          </ul>
        </div>

 
    <div className="footer-col">
        <h3>Contact</h3>

        <p>📍 Green Tech Industries India Pvt Ltd<br />Kerala, India</p>

        <p>📞 +91 XXXXX XXXXX</p>

        <p>✉️ info@greentechindustries.in</p>
    </div>

</div>

 
<div className="footer-bottom">
    <div className="footer-bottom-container">
        <p>
            © 2025 Green Tech Industries India Pvt Ltd. All Rights Reserved.
        </p>
    </div>
    <div className="footer-end">
        <p>🏅 Kerala Agro Industries Empanelled</p>
    </div>
</div>
</div>



    </div>
  )
}


