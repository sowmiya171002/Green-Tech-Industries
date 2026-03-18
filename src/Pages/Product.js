
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

function Product() {
  const navigate = useNavigate();

  const products = [
    {
      id: 0,
      icon: "🗑️",
      title: "Napkin Destroyers",
      short: "Safe & hygienic disposal of sanitary napkins",
      detail: "Safe and efficient disposal with odour-free operation.",
      features: [
        "Electric incinerator technology",
        "Odour-free, smoke-free operation",
        "Compact wall-mount design",
        "Easy to maintain & clean"
      ]
    },
    {
      id: 1,
      icon: "🏧",
      title: "Sanitary Napkin Vending Machines",
      short: "Automated sanitary napkin dispensing",
      detail: "Dispenses sanitary napkins automatically.",
      features: [
        "Easy refill system",
        "Durable body",
        "Low maintenance",
        "User friendly"
      ]
    },
    {
      id: 2,
      icon: "♻️",
      title: "Plastic Shredders",
      short: "Efficient shredding of plastic waste",
      detail: "Eco-friendly shredders for waste reduction.",
      features: [
        "High efficiency motor",
        "Low noise",
        "Heavy-duty blades",
        "Safe operation"
      ]
    },
    {
      id: 3,
      icon: "🔥",
      title: "Incinerators",
      short: "Eco-friendly waste incineration",
      detail: "Modern incineration technology.",
      features: [
        "High temperature burning",
        "Low emissions",
        "Energy efficient",
        "Auto control"
      ]
    },
    {
      id: 4,
      icon: "⚙️",
      title: "Agglo Machines",
      short: "Converting waste into reusable blocks",
      detail: "Compress waste into reusable form.",
      features: [
        "Compact design",
        "High output",
        "Energy saving",
        "Easy operation"
      ]
    },
    {
      id: 5,
      icon: "🌱",
      title: "Custom Solutions",
      short: "Tailored eco-machinery",
      detail: "Custom-built machinery solutions.",
      features: [
        "Custom design",
        "Scalable system",
        "Advanced tech",
        "Full support"
      ]
    }
  ];

  return (
    <div>
      <Navbar />

      <div className="about-header">
        <h1>Products</h1>
        <p>Eco-Machinery Manufacturer</p>
      </div>

      <div className="product-section">
        {products.map((product, index) => (
          <div className="product-card" key={index}>

            {/* CLICKABLE ICON */}
            <div
              className="icon-use"
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: "pointer", fontSize: "40px" }}
            >
              {product.icon}
            </div>

            <h3>{product.title}</h3>
            <p className="short">{product.short}</p>
            <p className="detail">{product.detail}</p>

            <ul className="features">
              {product.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;