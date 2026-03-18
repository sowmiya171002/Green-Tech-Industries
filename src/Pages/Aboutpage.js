import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import mis from "../image/mis.svg";
import vid from "../image/vid.svg";
import "../App.css"; 



export default function Aboutpage() {


    return (
        <div>

             
            <Navbar />

            
            <div className="about-header slide-in-left">
                <h1>About Us</h1>
                <p>Kerala Agro Industries Empanelled Eco-Machinery Manufacturer</p>
            </div>

            <div className="about-section slide-up-fade">
                <div className="text-content">
                    <h2>Company Background</h2>
                    <h3>Green Tech Industries India Pvt Ltd</h3>
                    <p>
                        Established in the year 2011, we <span className="company-highlight">“Green Tech Solution.”</span> are a manufacturer of a wide spectrum of Diesel Fuel Filters, Plastic Shredders, Diesel Incinerators, etc. We manufacture these products using premium grade raw material procured from authentic vendors. We offer these products at reasonable rates and deliver them within the promised time-frame.
                    </p>
                    <p>
                        We have hired an adroit team of employees, which keeps themselves abreast with advanced manufacturing techniques and designs. Further, we also have a quality control unit, wherein we check our entire range on defined parameters like design, quality, and finish. All units are equipped with all the essential tools, machines, and technology in order to manufacture a high-quality range of products.
                    </p>
                    <p>
                        Under the valuable guidance of our mentor, < span className="company-highlight">Mr. Vinish</span> ,we are growing at a notable rate in the market. He has spent long years in the industry to gain rich industrial experience, enabling us to understand the varied requirements of our clients.
                    </p>
                    <Link to="/getquote"  >
                    <button className="quote-btn">Get Quote</button>
                    </Link>
                </div>

                <div className="right-icon">
                    <span className="large-icon">🌿</span>
                </div>
            </div>
            <div className="icon-container zoom-in-bounce">
                
                <div className="iconbox">
                    <img src={mis} alt="MIS Icon" className="icon-image" />
                    <h2>Our Mission</h2>
                    <p>
                        To provide accessible, efficient, and eco-conscious machinery that addresses
                        modern sanitary and waste management challenges — delivering solutions that work
                        for both people and the planet. We strive to make every school, clinic, and
                        government facility a cleaner, greener space.
                    </p>
                </div>

                
                <div className="icon-boxs">
                    <img src={vid} alt="VID Icon" className="icon-image" />
                    <h2>Our Vision</h2>
                    <p>
                        To be India's most trusted name in eco-technology and waste management equipment —
                        driving measurable environmental change through engineering excellence, government
                        empanelment, and a deep commitment to sustainable manufacturing practices.
                    </p>
                </div>
            </div>
            <div className="achievements-section">
                <h2>Achievements</h2>
                <p>Our milestones and accomplishments</p>

                <div className="achievements">
                    <div className="achievement-box pulse-glow">
                        <h2>10+</h2>
                        <h3>Government Empanelments</h3>
                    </div>
                    <div className="achievement-box">
                        <h2>100+</h2>
                        <h3>Installations Completed</h3>
                    </div>
                    <div className="achievement-box">
                        <h2>50+</h2>
                        <h3>Eco-Machinery Models</h3>
                    </div>
                    <div className="achievement-box">
                        <h2>5+</h2>
                        <h3>Years in Operation</h3>
                    </div>
                </div>
            </div>
    
            <div className="smalls-box horizontal rotate-in">
  <div className="box-icon">🏛️</div>
  <div className="box-content">
    <p className="box-title">Kerala Agro Industries</p>
    <strong className="box-subtitle">Empanelled Vendor</strong>
    <p>
      Green Tech Industries India Pvt Ltd is officially empanelled with Kerala Agro Industries, 
      qualifying us as an approved vendor for government supply contracts and institutional procurement. 
      This empanelment validates our quality standards, financial standing, and capacity to execute 
      government projects across Kerala. Our empanelled status enables schools, hospitals, and government 
      offices to procure our machinery directly under government schemes and tender processes.
    </p>
  </div>
</div>
        </div>
    )
}
