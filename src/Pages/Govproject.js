import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

function Govproject() {

  const clients = [
    {
      imgs: "🏫",
      titles: "School Installations",
      descriptions:
        "Napkin destroyers and vending machines installed in government and aided schools, promoting menstrual hygiene management among adolescent girls. Empanelled and approved under state education schemes.."
    },
    {
      imgs: "🏥",
      titles: "Healthcare Facilities",
      descriptions:
        "Medical waste incinerators and bio-waste management solutions deployed at PHCs, hospitals, and health centres — ensuring safe and compliant waste disposal per regulatory standards.."
    },
    {
      imgs: "🏛️",
      titles: "Full Support",
      descriptions:
        "We actively participate in government tenders and are empanelled with Kerala Agro Industries, making us a pre-approved vendor for state and central government procurement programmes.."
    },
    {
      imgs: "📋",
      titles: "Case Studies & Success",
      descriptions:
        "Multiple successful deployments with documented impact on waste reduction, sanitary hygiene awareness, and environmental sustainability across institutions in Kerala.."
    },
    {
      imgs: "🏘️",
      titles: "Panchayat & Municipal Projects",
      descriptions:
        "Eco-machinery installations for local self-government bodies, supporting Kerala's Haritha Keralam mission and clean village initiatives with plastic shredders and incinerators."
    },
    {
      imgs: "📚",
      titles: "Awareness & Training",
      descriptions:
        "Beyond supply, we conduct awareness sessions on menstrual hygiene, plastic waste management, and eco-technology use for students, teachers, and institutional staff.."
    }
  ];

  return (
    <div>
      <Navbar />

      <div className="about-header">
        <h1>Government & Institutional Projects</h1>
        <p>Trusted by schools, hospitals, and government bodies across Kerala</p>
      </div>

      <div className="about-section">
        <div className="text-content">
          <h2>Company Background</h2>
          <h3>Green Tech Industries India Pvt Ltd</h3>

          <p>
            Established in the year 2011, we{" "}
            <span className="company-highlight">Green Tech Solution</span>
            are a manufacturer of a wide spectrum of Diesel Fuel Filters,
            Plastic Shredders, Diesel Incinerators, etc.
          </p>

          <button className="quote-btn">Get Quote</button>
        </div>

        <div className="right-icon">
          <span className="large-icon">🏛️</span>
        </div>
      </div>


      <div className="clients-section">
        {clients.map((item, index) => (
          <div className="client-card" key={index}>
            <span className="client-icon">{item.imgs}</span>
            <h3>{item.titles}</h3>
            <p>{item.descriptions}</p>
          </div>
        ))}
      </div>
      <div className="smalls-box horizontal">

        <div className="box-contents">
          <h2 className="box-title">Looking to Procure for Government Institutions?</h2>

          <p>
            We are fully equipped to handle bulk orders, government tender requirements, and installation across multiple locations. Contact us to discuss your requirements.
          </p>
          <div className="hero-buttons">
            <button className="btn-green">Explore Products</button>
            <button className="btn-light">Request a Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Govproject;













