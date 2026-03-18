import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import gov from "../image/govt.png";
import install from "../image/installation.png";
import recycle from "../image/recycle.png";
import support from "../image/support.png";



export default function HomePage() {
    const [openCard, setOpenCard] = useState(null);

    const toggleCard = (index) => {
        setOpenCard(openCard === index ? null : index);
    };



    const products = [
        {
            icon: "🗑️",
            title: "Napkin Destroyers",
            short: "Safe & hygienic disposal of sanitary napkins",
            detail: "High-performance machines for safe disposal of sanitary napkins, designed for hospitals and schools."
        },
        {
            icon: "🏧",
            title: "Sanitary Napkin Vending Machines",
            short: "Automated sanitary napkin dispensing",
            detail: "Dispenses sanitary napkins automatically for convenience in schools and public facilities."
        },
        {
            icon: "♻️",
            title: "Plastic Shredders",
            short: "Efficient shredding of plastic waste",
            detail: "Compact and eco-friendly shredders that reduce plastic volume safely."
        },
        {
            icon: "🔥",
            title: "Incinerators",
            short: "Eco-friendly waste incineration",
            detail: "Safe and efficient disposal of waste using modern incineration technology."
        },
        {
            icon: "⚙️",
            title: "Agglo Machines",
            short: "Converting waste into reusable blocks",
            detail: "Machines that compress waste into reusable agglomerated blocks."
        },
        {
            icon: "🌱",
            title: "Custom Solutions",
            short: "Tailored eco-machinery for unique needs",
            detail: "Custom-designed machinery solutions for specific client requirements."
        }
    ];

    const clients = [
        {
            img: gov,
            title: "Govt. Empanelled",
            description: "Officially empanelled with Kerala Agro Industries for state & central government procurement."
        },
        {
            img: install,
            title: "Eco-Certified",
            description: "All machinery meets environmental compliance norms set by pollution control boards."
        },
        {
            img: recycle,
            title: "Full Support",
            description: "1-month post-launch technical support, installation, and operator training included."
        },
        {
            img: support,
            title: "100+ Installations",
            description: "Successfully installed across schools, hospitals, and government facilities across Kerala."
        }
    ];

    const ClientLogo = ({ img, title, description }) => (
        <div
            className="client-logos"
            style={{
                border: "1px solid #2d6a4f",
                borderRadius: "10px",
                padding: "15px",
                margin: "10px",
                textAlign: "center",
                width: "250px",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <img src={img} alt={title} style={{ width: "50px", marginBottom: "20px" }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );

    const ClientLogosSection = () => (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "20px"
            }}
        >
            {clients.map((client, index) => (
                <ClientLogo
                    key={index}
                    img={client.img}
                    title={client.title}
                    description={client.description}
                />
            ))}
        </div>
    );

    const horizontalClients = [
        "Taluk Hospital, Nenmara",
        "Sai Hospital, Olavakkode",
        "Lakshmi Hospital, Tiruppur",
        "Nims Hospital, Vandur, Malappura",
        "Muthu Hospital, Thirunelveli",
        "Grace Apartment, Pathanamthitta",
        "Club 7, Keralasserry",
        "Umamaheswari Kalyana Mandapam, Palakkad",
        "Alfred Place, Kochi",
        "Moyans School, Palakkad",
        "Telichery Kitchen, Vytila, Kochi",
        "Life School, Mulamthuruthy",
        "Caps Restaurant, Koduvayur",
        "Keerthy Auditorium, Pallassena",
        "Moolayil Auditorium, Pudussery"
    ];

    const ClientsSection = () => (

        <div className="divider">
            <p>Our Clients</p>
            <h2>Trusted by Businesses</h2>
            <p>Companies that trust our technology and solutions</p>


            <div className="clients-scroll">
                <div className="clients-track">
                    {horizontalClients.map((client, index) => (
                        <div key={index} className="client-item">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div>

            <div>



                <section className="hero-section">
                    <div class=" fadeIn">


                        <div className="hero-content">
                            <div className="hero-top">🏅 Kerala Agro Industries Empanelled Company</div>
                            <h1>
                                Eco-Friendly Machinery for a <span className="highlight">Greener Tomorrow</span>
                            </h1>
                            <p>
                                NAPKIN DESTROYER, NAPKIN VENDING MACHINE, PLASTIC SHREDDER, INCINERATORS, AGLO MACHINE & ETC.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/Gallery" className="btn-green">
                                    Explore Products
                                </Link>

                                <Link to="/GetQuote" className="btn-light">
                                    Request a Quote
                                </Link>
                            </div>
                            {/* <div className="hero-buttons">
                    <link to="/Product">
                       <button className="btn-green">Explore Products</button>
                       </link>
                       <link to="/GetQuote">
                       <button className="btn-light">Request a Quote</button>
                       </link>
                   </div> */}
                        </div>
                    </div>
                </section>

                <div className="feature-box-container">
                    <span className="feature-box">✔ Mobile Responsive Design</span>
                    <span className="feature-box">✔ Government Approved</span>
                    <span className="feature-box">✔ ISO Quality Standards</span>
                    <span className="feature-box">✔ After-Sales Support</span>
                    <span className="feature-box">✔ Pan India Delivery</span>
                </div>

                <div className="content">
                    <div className="left-content">
                        <h2 className="section-title1">Who We Are</h2>
                        <p>
                            Green Tech Industries India Pvt Ltd is a Kerala Agro Industries empanelled company committed to manufacturing and supplying eco-friendly machinery.
                        </p>
                        <ul className="feature-list">
                            <li>Empanelled with Kerala Agro Industries</li>
                            <li>Government & Institutional Supplier</li>
                            <li>End-to-End Installation Support</li>
                            <li>Dedicated After-Sales Service</li>
                        </ul>
                        <div className="small-box">
                            <div className="box-icon">🏛️</div>
                            <p className="box-title">Kerala Agro Industries</p>
                            <strong className="box-subtitle">Empanelled Vendor</strong>
                        </div>
                    </div>

                    <div className="right-content">
                        <h4 className="about-title">ABOUT US</h4>
                        <h2 className="about-heading">
                            Building a Sustainable Future Through Innovation
                        </h2>
                        <p className="about-text">
                            Established in the year 2011 we <strong className="company-highlight">"Green Tech Solution."</strong> is a Manufacturer of a wide spectrum of eco-machinery. We use premium grade raw material and deliver products within promised timelines.
                        </p>
                        <p className="about-text">
                            We have a quality control unit and a skilled team to ensure high-quality products and services.
                        </p>
                        {/* <Link to="/pages/Aboutpages">
                            <button className="btn-us">Learn More About Us</button>
                        </Link> */}
                        <Link to="/about" className="btn-us">
                            Learn More About Us
                        </Link>
                    </div>

                </div>

                <div className="testimonial-section">
                    <div className="section-header">
                        <p className="section-subtitle">Our Products</p>
                        <h2 className="section-title">Complete Eco-Machinery Catalog</h2>
                        <p className="section-text">
                            Designed for durability, ease of use, and maximum eco-efficiency — suitable for <br />
                            schools, hospitals, and government bodies.
                        </p>
                    </div>


                    <div className="testimonial-container">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="testimonial-card"
                                onClick={() => toggleCard(index)}
                            >
                                <div className="testimonial-image">{product.icon}</div>
                                <h3>{product.title}</h3>
                                <p className="card-short">{product.short}</p>
                                {openCard === index && <p className="card-detail">{product.detail}</p>}
                                <p className="view-detail">View Details →</p>
                            </div>
                        ))}
                    </div>
                    <Link to="/products">
                        <button className="btn-view-all">View All Products</button>
                    </Link>
                </div>

                <ClientsSection />

                <div className="testimonial-section">
                    <p className="section-subtitle">Why Choose Us</p>
                    <h2 className="section-title">Trusted. Certified. Reliable.</h2>
                    <ClientLogosSection />
                </div>


                <div className="footer-section">
                    <h3>Ready to Go Green?</h3>
                    <p>Contact us for product quotations, government procurement, or installation enquiries.</p>
                    {/* <div className="hero-buttons">
                        <button className="btn-green">Get a Free Quote</button>
                        <button className="btn-light">Browse Products</button>
                    </div> */}
                      <div className="hero-buttons">
                                <Link to="/Gallery" className="btn-green">
                                    Get To Quote
                                </Link>

                                <Link to="/GetQuote" className="btn-light">
                                    Request a Quote
                                </Link>
                            </div>
                </div>


            </div>
        </div>
    )
}
