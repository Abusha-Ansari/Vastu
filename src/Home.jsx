// src/VastuHome.jsx
import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css'
import Navbar from './NavBar';
import Footer from './Footer';


const Home = () => {

    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToId = useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    const handleNavClick = (e, path) => {
        e.preventDefault();
        navigate(path);
        setMobileMenuOpen(false); // close menu on mobile after click
    };



    const handleFiles = async (files) => {
        if (!files || !files.length) return;

        const f = files[0];
        setUploading(true);

        const formData = new FormData();
        formData.append("file", f);

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/floorplan/analyze/",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            setAnalysisResult(response.data); // store backend result

        } catch (err) {
            alert("Failed to analyze plan!");
            console.error(err);
        } finally {
            setUploading(false);
        }
    };





    const onFileInputChange = (e) => {
        handleFiles(e.target.files);
    };

    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add('drag-active');
    };

    const handelUpload = (e) => {
        scrollToId('upload')
        navigate("/UploadPlan");
    };

    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove('drag-active');
        const files = e.dataTransfer.files;
        handleFiles(files);
    };

    return (
        <div className="vh-root">
            <Navbar />
            <main className="container">
                {/* HERO */}
                <section id="home" className="hero">
                    <div className="hero-inner">
                        <h1 className="hero-title">
                            Apne Sapno Ka Ghar, <span className="highlight">Vastu</span> ke Hisaab Se ✨
                        </h1>


                        <p className="hero-sub">
                            Bring balance, energy & prosperity with guidance from verified Vastu experts.
                        </p>

                        <div className="hero-buttons">
                            <button className="hero-btn-main" onClick={() => scrollToId('experts')}>
                                🚀 Find Your Expert
                            </button>

                            <button className="hero-btn-sec" onClick={
                                handelUpload}>
                                📤 Upload Floor Plan
                            </button>
                        </div>
                    </div>
                </section>

                {/* EXPERTS */}
                <section id="experts">
                    <div className="section-title">
                        <h2>Our Verified Vastu Experts</h2>
                    </div>
                    <div className="cards-grid">
                        {/* Card 1 */}
                        <div className="card">
                            <div className="expert-top">
                                <img
                                    className="avatar"
                                    src="Kanchan%20B%20Sharma.jpeg"
                                    alt="Dr. Kanchan B Sharma"
                                />
                                <div>
                                    <div className="expert-name">Dr. Kanchan B Sharma</div>
                                    <ul className="expert-meta-list">
                                        <li>13+ Years Experience</li>
                                        <li>Vastu Shastra</li>
                                        <li>Hindi, English</li>
                                        <li>📍 Kharghar, Navi Mumbai</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="expert-buttons">
                                <a href="tel:0985432904" className="price-btn">Audio Call – ₹999</a>
                                <a href="tel:0985432904" className="price-btn">On-site Visit – ₹2499</a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="card">
                            <div className="expert-top">
                                <img
                                    className="avatar"
                                    src="Pandit%20Nitin%20Navratne%20Joshi.jpeg"
                                    alt="Pandit Nitin Navratne Joshi"
                                />
                                <div>
                                    <div className="expert-name">Pt. Nitin Navratne Joshi</div>
                                    <ul className="expert-meta-list">
                                        <li>14+ Years Experience</li>
                                        <li>Vastu Shastra, Hand Reading &amp; Numerology</li>
                                        <li>Hindi, Marathi</li>
                                        <li>📍 Kharghar, Navi Mumbai</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="expert-buttons">
                                <a href="tel:+919920397715" className="price-btn">Audio Call – ₹799</a>
                                <a href="tel:+919920397715" className="price-btn">On-site Visit – ₹1999</a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="card">
                            <div className="expert-top">
                                <img
                                    className="avatar"
                                    src="Amit%20Prakash%20Wadke.jpeg"
                                    alt="Dr. Amit Prakash Wadke"
                                />
                                <div>
                                    <div className="expert-name">Dr. Amit Prakash Wadke</div>
                                    <ul className="expert-meta-list">
                                        <li>21+ Years Experience</li>
                                        <li>Vastu Shastra, Kundli &amp; Numerology</li>
                                        <li>English, Hindi, Marathi</li>
                                        <li>📍 New Panvel City, Navi Mumbai</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="expert-buttons">
                                <a href="tel:0942685175" className="price-btn">Audio Call – ₹1299</a>
                                <a href="tel:0942685175" className="price-btn">On-site Visit – ₹2999</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY VASTU HOME */}
                {/* <section id="about">
                    <div className="section-title">
                        <h2>Why Vastu Home?</h2>
                    </div>
                    <div className="features">
                        <div className="feature">
                            <div className="icon">✔</div>
                            <div>
                                <strong>Verified Experts You Can Trust</strong>
                                <div className="muted">Background checks and verified testimonials.</div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="icon">📞</div>
                            <div>
                                <strong>Easy Booking – Video or Physical Meet</strong>
                                <div className="muted">Transparent pricing and secure payments.</div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="icon">⚙️</div>
                            <div>
                                <strong>Belief Meets Technology</strong>
                                <div className="muted">
                                    Modern UX with time-honored Vastu principles.
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* UPLOAD PLAN */}
                {/* <section id="upload">
                    <div className="section-title">
                        <h2>Get Personalized Vastu Feedback</h2>
                    </div>
                    <p>
                        Upload your floor plan and receive a professional Vastu review and suggestions.
                        (Paid Service)
                    </p>
                    <div className="upload-box">
                        <div
                            className="drag-area"
                            onDragOver={onDragOver}
                            onDragEnter={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                        >
                            <p className="muted">Drag &amp; drop your floor plan here, or</p>
                            <label className="btn-primary file-label" htmlFor="fileUpload">
                                Choose File
                            </label>
                            <input
                                id="fileUpload"
                                className="file-input"
                                type="file"
                                accept="image/*,application/pdf"
                                onChange={onFileInputChange}
                            />
                            <div className="muted">Upload Plan &amp; Get Feedback ₹499</div>
                        </div>
                    </div>
                </section> */}

                {/* VASTU APPROVED PROPERTIES */}
                <section id="products">
                    <div className="section-title">
                        <h2>Vastu Approved Properties</h2>
                    </div>

                    <div className="products-grid">
                        {/* Property 1 - Juhi Niharika */}
                        <div className="product">
                            <div className="product-img-wrapper">
                                <img
                                    src="property/Juhi%20Niharika.jpeg"
                                    alt="Juhi Niharika"
                                />
                                <button className="favorite-btn">♡</button>
                            </div>
                            <div className="product-content">
                                <div className="product-status">
                                    <span className="status-dot green"></span> Ready to Move
                                </div>
                                <div className="product-price-row">
                                    <h3 className="product-price">₹1.10 Cr+</h3>
                                </div>
                                <div className="product-specs">
                                    <span>1 &amp; 2 BHK</span>
                                    <span><strong>720</strong> sqft+</span>
                                </div>
                                <div className="product-address">
                                    <strong>Juhi Niharika</strong><br />
                                    Kharghar Sector 39, Navi Mumbai
                                </div>
                                <div className="product-actions">
                                    <button className="btn-call">CALL FOR DETAILS</button>
                                    <a href="brochure/Juhi%20Niharika.pdf" className="btn-brochure" download>Download Brochure</a>
                                </div>
                            </div>
                        </div>

                        {/* Property 2 - AK Sapphire */}
                        <div className="product">
                            <div className="product-img-wrapper">
                                <img
                                    src="property/Ak%20Sapphire.jpeg"
                                    alt="AK Sapphire"
                                />
                                <button className="favorite-btn">♡</button>
                            </div>
                            <div className="product-content">
                                <div className="product-status">
                                    <span className="status-dot yellow"></span> Under Construction
                                </div>
                                <div className="product-price-row">
                                    <h3 className="product-price">₹1.20 Cr+</h3>
                                </div>
                                <div className="product-specs">
                                    <span>2 &amp; 3 BHK</span>
                                    <span><strong>1,200</strong> sqft+</span>
                                </div>
                                <div className="product-address">
                                    <strong>AK Sapphire</strong><br />
                                    Kharghar Sector 34, Navi Mumbai
                                </div>
                                <div className="product-actions">
                                    <button className="btn-call">CALL FOR DETAILS</button>
                                    <a href="brochure/AK%20Sapphire.pdf" className="btn-brochure" download>Download Brochure</a>
                                </div>
                            </div>
                        </div>

                        {/* Property 3 - LK KT Saras Vatika */}
                        <div className="product">
                            <div className="product-img-wrapper">
                                <img
                                    src="property/LK%20KT%20Saras%20Vatika.jpeg"
                                    alt="LK KT Saras Vatika"
                                />
                                <button className="favorite-btn">♡</button>
                            </div>
                            <div className="product-content">
                                <div className="product-status">
                                    <span className="status-dot yellow"></span> Under Construction
                                </div>
                                <div className="product-price-row">
                                    <h3 className="product-price">₹58.6 L+</h3>
                                </div>
                                <div className="product-specs">
                                    <span>1, 2 &amp; 3 BHK</span>
                                    <span><strong>680</strong> sqft+</span>
                                </div>
                                <div className="product-address">
                                    <strong>LK KT Saras Vatika</strong><br />
                                    Panvel Sector 10, Navi Mumbai
                                </div>
                                <div className="product-actions">
                                    <button className="btn-call">CALL FOR DETAILS</button>
                                    <a href="brochure/LK%20KT%20Saras%20Vatika.pdf" className="btn-brochure" download>Download Brochure</a>
                                </div>
                            </div>
                        </div>

                        {/* Property 4 - Bhaveshwar Life Avinya */}
                        <div className="product">
                            <div className="product-img-wrapper">
                                <img
                                    src="property/Bhaveshwar%20Life%20Avinya.jpeg"
                                    alt="Bhaveshwar Life Avinya"
                                />
                                <button className="favorite-btn">♡</button>
                            </div>
                            <div className="product-content">
                                <div className="product-status">
                                    <span className="status-dot yellow"></span> Under Construction
                                </div>
                                <div className="product-price-row">
                                    <h3 className="product-price">₹61 L+</h3>
                                </div>
                                <div className="product-specs">
                                    <span>1 &amp; 2 BHK</span>
                                    <span><strong>700</strong> sqft+</span>
                                </div>
                                <div className="product-address">
                                    <strong>Bhaveshwar Life Avinya</strong><br />
                                    Panvel Sector 20, Navi Mumbai
                                </div>
                                <div className="product-actions">
                                    <button className="btn-call">CALL FOR DETAILS</button>
                                    <a href="brochure/Bhaveshwar%20Life%20Avinya.pdf" className="btn-brochure" download>Download Brochure</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Vaastu Essentials for Your Home */}
                <section id="decor-products">
                    <div className="section-title">
                        <h2>Vaastu Essentials for Your Home</h2>
                    </div>
                    <div className="decor-grid">
                        <div className="decor-card">
                            <div className="decor-img-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                    alt="Silver Plated Lotus Design with Copper Diya"
                                />
                            </div>
                            <div className="decor-content">
                                <div className="decor-meta-row">
                                    <div className="decor-rating">
                                        ⭐ 4.9 <span className="muted">| ( 36 )</span>
                                    </div>
                                    <div className="decor-colors muted">[+4 colors]</div>
                                </div>
                                <h3 className="decor-title">Silver Plated Lotus Design with Copper Diya</h3>
                                <div className="decor-price-row">
                                    <span className="decor-price-current">₹770.00</span>
                                    <span className="decor-price-old">₹1,730.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="decor-card">
                            <div className="decor-img-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                    alt="Clear Quartz Healing Crystal Tree"
                                />
                            </div>
                            <div className="decor-content">
                                <div className="decor-meta-row">
                                    <div className="decor-rating">
                                        ⭐ 4.8 <span className="muted">| ( 124 )</span>
                                    </div>
                                    <div className="decor-colors muted">[+2 colors]</div>
                                </div>
                                <h3 className="decor-title">Clear Quartz Healing Crystal Tree</h3>
                                <div className="decor-price-row">
                                    <span className="decor-price-current">₹599.00</span>
                                    <span className="decor-price-old">₹1,200.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="decor-card">
                            <div className="decor-img-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1692107112697-aca539554bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9vamElMjB0aGFsaXxlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Pure Brass  Swastik Design Pooja Thali ( 30 cm )"
                                />
                            </div>
                            <div className="decor-content">
                                <div className="decor-meta-row">
                                    <div className="decor-rating">
                                        ⭐ 4.7 <span className="muted">| ( 89 )</span>
                                    </div>
                                    <div className="decor-colors muted"></div>
                                </div>
                                <h3 className="decor-title">Pure Brass  Swastik Design Pooja Thali ( 30 cm )</h3>
                                <div className="decor-price-row">
                                    <span className="decor-price-current">₹1000.00</span>
                                    <span className="decor-price-old">₹1,499.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="decor-card">
                            <div className="decor-img-wrapper">
                                <img
                                    src="https://media.istockphoto.com/id/478053835/photo/brass-metal-wall-hanging-with-bells-aum-and-ganesha.webp?a=1&b=1&s=612x612&w=0&k=20&c=XiDeNLE5MuqxuzheL4zmSGYTBaHCUsvMpGeh8pIu9ME="
                                    alt="Shree Yantra Copper Wall Hanging"
                                />
                            </div>
                            <div className="decor-content">
                                <div className="decor-meta-row">
                                    <div className="decor-rating">
                                        ⭐ 4.9 <span className="muted">| ( 210 )</span>
                                    </div>
                                    <div className="decor-colors muted">[+1 color]</div>
                                </div>
                                <h3 className="decor-title">Shree Yantra Copper Wall Hanging</h3>
                                <div className="decor-price-row">
                                    <span className="decor-price-current">₹1,299.00</span>
                                    <span className="decor-price-old">₹2,500.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dummy sections for anchors (contact/login) */}
                <section id="contact" style={{ padding: '24px 0' }}>
                    {/* You can replace this with real contact form later */}
                </section>
                <section id="login" style={{ padding: '24px 0' }}>
                    {/* You can replace this with real login/signup later */}
                </section>
            </main>

            {/* FOOTER */}
            <Footer />

        </div>
    );
};

export default Home;

