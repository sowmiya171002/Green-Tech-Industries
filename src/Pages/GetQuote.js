 
import React from "react";
import "../App.css"; 

function GetQuote() {
  return (
    
    <div className="quote-page">
    
      <div className="about-header">
        <h1>Government & Institutional Projects</h1>
        <p>Kerala Agro Industries Empanelled Eco-Machinery Manufacturer</p>
      </div>
      <div className="quote-container">
        <h1 className="quote-title">Get a Quote</h1>
        <form className="quote-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Address" />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit" className="quote-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GetQuote;