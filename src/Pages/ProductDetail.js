

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 0,
      icon: "🗑️",
      title: "Napkin Destroyers",
      description:
        "Napkin Destroyers provide safe and hygienic disposal of sanitary napkins using advanced incineration technology.",
      features: [
        "Beyond our core product lines, Green Tech Industries offers a range of additional eco-technology and waste management equipment. We work closely with institutions and government bodies to deliver custom-specified machinery for unique requirements."
      ]
    },
    {
      id: 1,
      icon: "🏧",
      title: "Sanitary Napkin Vending Machines",
      description:
        "Automated vending machines that dispense sanitary napkins easily in schools, colleges, and offices.",
      features: [
       
        "Our Sanitary Napkin Vending Machines provide easy, private access to sanitary napkins for women and girls in schools, colleges, and public spaces. Available in coin-operated and token-operated variants."
      ]
    },
    {
      id: 2,
      icon: "♻️",
      title: "Plastic Shredders",
      description:
        "Efficient shredding machines for reducing plastic waste into reusable material.",
      features: [
        "Our Napkin Destroyers offer a safe, hygienic, and efficient method of destroying used sanitary napkins. Designed for installation in schools, offices, hospitals, and public restrooms, they help promote menstrual hygiene management in a discreet and eco-responsible "
      ]
    },
    {
      id: 3,
      icon: "🔥",
      title: "Incinerators",
      description:
        "Eco-friendly incinerators designed for high-temperature waste disposal with low emissions.",
      features: [
        "Our Plastic Shredders offer reliable, high-torque shredding of plastic waste — reducing volume significantly for easier disposal or recycling. Suitable for factories, recycling centres, and waste management facilities."
      ]
    },
    {
      id: 4,
      icon: "⚙️",
      title: "Agglo Machines",
      description:
        "Machines used to convert waste materials into reusable blocks efficiently.",
      features: [
        "general waste. They comply with environmental regulations and feature pollution control systems for responsible disposal."
      ]
    },
    {
      id: 5,
      icon: "🌱",
      title: "Custom Solutions",
      description:
        "Custom-built eco machinery tailored to specific industrial requirements.",
      features: [
        "Our Agglo Machines convert waste plastic films, bags, and thin plastic sheets into dense, homogenous granules that are ready for re-processing. A critical piece of equipment for any plastic recycling operation."
      ]
    }
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="detail-container">

    

      <div className="detail-card">

        
        <div className="detail-left animate-left">
          <div className="detail-icon animate-icon">
            {product.icon}
          </div>
        </div>

        
        <div className="detail-right animate-right">
          <h1>{product.title}</h1>

          <p className="desc">{product.description}</p>

          <h3>Key Features</h3>
          <ul>
            {product.features.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>
          <Link to="/getquote" >
                    <button className="quote-btn">Get Quote</button>
                    </Link>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;