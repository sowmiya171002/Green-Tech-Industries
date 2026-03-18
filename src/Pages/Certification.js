import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

function Certification() {

  const methods = [
    {
      icon: "🏅",
      title: "School Installations",
      description:
        "Napkin destroyers and vending machines installed in government and aided schools promoting menstrual hygiene among adolescent girls."
    },
    {
      icon: "📜",
      title: "Healthcare Facilities",
      description:
        "Medical waste incinerators and bio-waste management solutions deployed at PHCs, hospitals and health centres."
    },
    {
      icon: "🌿",
      title: "Government Approved",
      description:
        "Empanelled with Kerala Agro Industries and approved vendor for government procurement programmes."
    },
    {
      icon: "🔒",
      title: "Case Studies & Success",
      description:
        "Multiple successful deployments with documented impact on waste reduction and environmental sustainability."
    },
    {
      icon: "🏢",
      title: "Panchayat & Municipal Projects",
      description:
        "Eco-machinery installations supporting Kerala's Haritha Keralam mission and clean village initiatives."
    },
    {
      icon: "🤝",
      title: "Awareness & Training",
      description:
        "We conduct awareness sessions on menstrual hygiene, plastic waste management and eco-technology use."
    }
  ];

  return (
    <div>

      <Navbar />

      <div className="about-header">
        <h1>Certifications & Approvals</h1>
        <p>Certified, Approved & Trusted</p>
      </div>

      <div className="catalog-header">
        <h2>Our Credentials</h2>
        <h3>Certified, Approved & Trusted</h3>
        <p>
        Every certification we hold reflects our commitment to quality manufacturing, environmental responsibility, and institutional trust.
        </p>
      </div>

      <div className="certification-section">

        {methods.map((item, index) => (

          <div className="certification-box" key={index}>

            <div className="cert-icon">
              {item.icon}
            </div>

            <div className="cert-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Certification;