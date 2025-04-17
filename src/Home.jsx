import { useEffect, useState, useRef } from 'react';
import './Home.css';

import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

function Home() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [counted, setCounted] = useState(false);
    const impactRef = useRef(null);

    const captions = [
        "We solemnly observe 18th March as Martyrdom Day, honoring the valiant sacrifice of Vinod Kumar Mehta (IPS) and Mukhtar Ali (Constable). Their courage, integrity, and unwavering commitment to communal harmony continue to inspire generations. Through the Memory of Martyrdom of Mehta & Mukhtar, we not only keep their legacy alive but strive to carry forward their ideals — of service before self, fearless justice, and unity beyond all divides.",
        "In a heartfelt initiative led by V.Soleman Nisakumar, IPS, Additional Commissioner of Police (STF, Kolkata), warm blankets and school bags were distributed to children in need. Organized by our NGO in memory of Martyrs Mehta & Mukhtar, the event was more than just a donation—it was a powerful reflection of our commitment to carry forward their legacy through compassion, dignity, and hope.",
        "As part of our ongoing mission to uplift lives, our NGO organized a Medical Health Checkup and Medicine Distribution camp for underserved communities. This initiative, held in memory of Martyrs Mehta & Mukhtar, aimed to provide essential healthcare access and promote well-being among those who need it most—because a healthy community is a strong community.",
        "In a heartfelt effort to meet basic needs with dignity, our NGO organized a distribution program of books, water bottles, clothes, and other essentials, graced by the presence of IAS Md Mahmood Hussain. Held in memory of Martyrs Mehta & Mukhtar, this initiative reaffirmed our commitment to supporting underprivileged lives through acts of compassion and community service.",
        "The Football Tournament in Memory of Mehta & Mukhtar was organized by our NGO as a tribute to the courageous sacrifice of the martyrs. This event not only celebrated their legacy but also brought together communities in a spirit of unity and sportsmanship. With the aim of fostering camaraderie and remembrance, the tournament highlighted the enduring strength and resilience of those who continue to serve their communities, in the name of those who gave everything."
    ];

    const captionLinks = [
        "Follow the Journey",
        "Check Out Our Work",
        "Meet the Impactful Testimonials",
        "See Our Legacy in Newsprint",
        "Make a Contribution With Us"
    ];

    const images = [image1, image2, image3, image4, image5];

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 15000);
        return () => clearTimeout(timer);
    }, [slideIndex]);

    const showSlide = (index) => {
        setSlideIndex(index);
    };

    // Counting effect
    const [counts, setCounts] = useState({ years: 0, lives: 0, programs: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const top = impactRef.current?.getBoundingClientRect().top;
            if (top && top < window.innerHeight && !counted) {
                setCounted(true);
                let start = 0;
                const endCounts = { years: 25, lives: 10000, programs: 100 };
                const interval = setInterval(() => {
                    setCounts((prev) => ({
                        years: Math.min(prev.years + 1, endCounts.years),
                        lives: Math.min(prev.lives + 250, endCounts.lives),
                        programs: Math.min(prev.programs + 5, endCounts.programs),
                    }));
                    if (
                        counts.years >= endCounts.years &&
                        counts.lives >= endCounts.lives &&
                        counts.programs >= endCounts.programs
                    ) {
                        clearInterval(interval);
                    }
                }, 40);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [counted]);

    return (
        <div className="home">
            {/* Slideshow Section */}
            <section className="hero slideshow-container">
                {images.map((src, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ display: index === slideIndex ? 'block' : 'none' }}
                    >
                        <img src={src} alt={`Slide ${index + 1}`} />
                    </div>
                ))}

                <div className="slideshow-caption">
                    <div>{captions[slideIndex]}</div>
                    <a href="#" className="caption-link">{captionLinks[slideIndex]}</a>
                </div>

                <div className="slideshow-buttons">
                    {captionLinks.map((_, i) => (
                        <button
                            key={i}
                            className={slideIndex === i ? 'active' : ''}
                            onClick={() => showSlide(i)}
                        >
                            {["Home", "Blanket & School Bag Distribution", "Medical Health Checkup", "Basic Necessity Distribution", "Football Tournament"][i]}
                        </button>
                    ))}
                </div>
            </section>

            {/* Home About Section */}
            <section className="home-about-section">
                <h2 className="ramillas-font">Memory of Martyrdom of Mehta & Mukhtar</h2>
                <p>
                    Established in 2000, Memory of Martyrdom of Mehta & Mukhtar is a non-political, Kolkata-based
                    social organization formed in tribute to the ultimate sacrifice of police officer Vinod Kumar
                    Mehta (IPS) and his bodyguard Mukhtar Ali, who laid down their lives in the line of duty on 18 March 1984.
                    <br /><br />
                    Over the past two decades, the organization has carried out a wide range of impactful initiatives
                    in road safety, education, public health, women’s empowerment, communal harmony, and senior
                    citizen welfare. From distributing thousands of helmets and school kits to hosting free medical
                    camps and anti-drug awareness drives, the NGO continues to inspire unity, service, and courage across communities.
                    <br /><br />
                    Through its consistent grassroots efforts, the organization complements public initiatives,
                    fosters police-public harmony, and champions the values of sacrifice, secularism, and service.
                    With programs reaching into underserved neighborhoods, it honors the legacy of its namesakes
                    not only in memory, but through action.
                </p>
                <div className="read-more-wrapper">
                    <button className="read-more-button">READ MORE &gt;</button>
                </div>
            </section>

            {/* Impact Section */}
            <section className="home-impact" ref={impactRef}>
                <h2 className="ramillas-font">Our Impact</h2>
                <div className="impact-metrics">
                    <div>
                        <div className="big-number">{counts.years}+</div>
                        <div>Years of Service</div>
                    </div>
                    <div>
                        <div className="big-number">{counts.lives}+</div>
                        <div>Lives Impacted</div>
                    </div>
                    <div>
                        <div className="big-number">{counts.programs}+</div>
                        <div>Programs Conducted</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
