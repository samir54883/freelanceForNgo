import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../assets/Memory.png'; // adjust path as needed
import heartIcon from '../assets/heart.png'; // adjust path as needed

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const handleToggle = (dropdown) => {
        setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const subDropdownMouseEvents = {
        onMouseEnter: (e) => e.currentTarget.querySelector('.sub-dropdown')?.classList.add('visible'),
        onMouseLeave: (e) => e.currentTarget.querySelector('.sub-dropdown')?.classList.remove('visible'),
    };

    return (
        <>
            <div className="header-wrapper">
            <div className="top-bar">
                <div className="left0ftopbar">
                    <span>Estd. 2000</span>
                </div>
                <div className="rightoftopbar">
                    <span>Email: mehtamukhtargr84@gmail.com</span>
                    <span> | </span>
                    <span>Contact No : 8420469039 / 9831322465</span>
                    <span> | </span>
                    <span>Regd. Govt Of W.B. Society Act, 1961</span>
                </div>
            </div>

            <header ref={dropdownRef}>
                <div className="logo-container">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                <div className="header-content">
                    <nav>
                        <div className="nav-links">
                            <div className="nav-item"><a href="#">Home</a></div>

                            <div className={`nav-item ${activeDropdown === 'who' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); handleToggle('who'); }} id="who-toggle">
                                Who We Are? ▾
                                <div className="dropdown" id="who-dropdown">
                                    <div className="dropdown-column">
                                        <a href="#">About Us</a>
                                        <div className="nav-item has-sub-dropdown" {...subDropdownMouseEvents}>
                                            Our Vision and Mission ▾
                                            <div className="sub-dropdown">
                                                <a href="#">Inspiration</a>
                                                <a href="#">Brief Biographies of Our Inspirations</a>
                                                <a href="#">The Making of Memory of the Martyrdom <br />of Mehta and Mukhtar</a>
                                            </div>
                                        </div>

                                        <div className="nav-item has-sub-dropdown" {...subDropdownMouseEvents}>
                                            Governance ▾
                                            <div className="sub-dropdown">
                                                <a href="#">Core Team</a>
                                                <a href="#">Advisory Committee</a>
                                                <a href="#">Founder Members In The Year 2000</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown-column">
                                        <div className="nav-item has-sub-dropdown" {...subDropdownMouseEvents}>
                                            From the Desks of Our Leaders ▾
                                            <div className="sub-dropdown">
                                                <a href="#">From the Chairman’s desk</a>
                                                <a href="#">From the General Secretary’s desk</a>
                                                <a href="#">From the desk of Joint Assistant Secretary</a>
                                            </div>
                                        </div>
                                        <a href="#">HONOUR, HUMANITY, HONESTY & MARTYRDOM</a>
                                        <div className="nav-item has-sub-dropdown" {...subDropdownMouseEvents}>
                                            Impactful Testimonials ▾
                                            <div className="sub-dropdown">
                                                <a href="#"> Sk. Auranzeb (Zoheb)</a>
                                                <a href="#">JOYSURYA MUKHERJEE</a>
                                                <a href="#">Fr. Rodney Borneo</a>
                                                <a href="#">Parvez Akhtar “Sabir”</a>
                                                <a href="#">Avinash Almal</a>
                                                <a href="#">Md. Irfan Khan</a>
                                                <a href="#">Md Wasim (M.Sc)</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown-column">
                                        <div className="nav-item has-sub-dropdown" {...subDropdownMouseEvents}>
                                            People With Us ▾
                                            <div className="sub-dropdown">
                                                <a href="#">Special Thanks and Gratitude</a>
                                                <a href="#">Special Hands that build this organization</a>
                                                <a href="#">We, The Well Wishers</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`nav-item ${activeDropdown === 'what' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); handleToggle('what'); }} id="menu-toggle">
                                What We Do? ▾
                                <div className="dropdown" id="dropdown-menu">
                                    <div className="dropdown-column">
                                        <a href="#" className="option1">Our Work</a>
                                        <div className="nav-item has-sub-dropdown" {...subDropdownMouseEvents}>
                                            Major Events of our Organisation ▾
                                            <div className="sub-dropdown">
                                                <a href="#">Road Safety/ Traffic Rules Awareness & Free Helmet Distribution Programme</a>
                                                <a href="#">Education and CHILD Health</a>
                                                <a href="#">National Integration</a>
                                                <a href="#">Social Programmes</a>
                                            </div>
                                        </div>
                                        <div className="nav-item has-sub-dropdown" {...subDropdownMouseEvents}>
                                            Our Awards ▾
                                            <div className="sub-dropdown">
                                                <a href="#">Recognition</a>
                                                <a href="#">Awards</a>
                                                <a href="#">Milestones</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown-column">
                                        <div className="nav-item has-sub-dropdown" {...subDropdownMouseEvents}>
                                            Noteworthy programmes ▾
                                            <div className="sub-dropdown">
                                                <a href="#">Issue of Postage Stamp</a>
                                            </div>
                                        </div>
                                        <div className="nav-item has-sub-dropdown" {...subDropdownMouseEvents}>
                                            Senior members views ▾
                                            <div className="sub-dropdown">
                                                <a href="#">Janab Gulam Kadir</a>
                                                <a href="#">Janab Rahat Hossain</a>
                                                <a href="#">Janab Md. Elias Islahi</a>
                                                <a href="#">Dr. Shakil Akhter</a>
                                            </div>
                                        </div>
                                        <a href="#" className="option4">Thoughts of eminent members and office bearers</a>
                                    </div>
                                </div>
                            </div>

                            <div className={`nav-item ${activeDropdown === 'visual' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); handleToggle('visual'); }}>
                                Visual Journey ▾
                                <div className="dropdown" id="visual-dropdown">
                                    <div className="dropdown-column">
                                        <a href="#">Complete Gallery</a>
                                        <a href="#">Photo Gallery of our Events</a>
                                        <a href="#">A Legacy in Newsprint</a>
                                        <a href="#">Festive Moments</a>
                                        <a href="#">Video Gallery</a>
                                    </div>
                                </div>
                            </div>

                            <div className={`nav-item ${activeDropdown === 'about' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); handleToggle('about'); }}>
                                Get Involved ▾
                                <div className="dropdown" id="about-dropdown">
                                    <div className="dropdown-column">
                                        <a href="#">Fundraiser With Us</a>
                                        <a href="#">Active Fundraiser</a>
                                    </div>
                                    <div className="dropdown-column">
                                        <a href="#">Online Donation</a>
                                        <a href="#">Donate Monthly</a>
                                        <a href="#">Donate In Memory</a>
                                    </div>
                                </div>
                            </div>

                            <div className="nav-item"><a href="#">Contact Us</a></div>
                        </div>
                    </nav>
                </div>

                <div style={{ marginLeft: 'auto' }}>
                    <button className="donate-button">
                        <img src={heartIcon} alt="Donate" />
                        Donate Now!
                    </button>
                </div>
            </header>
            </div>

        </>
    );
};

export default Header;
