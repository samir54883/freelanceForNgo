import { useEffect, useState } from 'react';
import './Home.css';

import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

function Home() {
    const [slideIndex, setSlideIndex] = useState(0);

    const captions = [
        "We solemnly observe 18th March as Martyrdom Day, honoring the valiant sacrifice of Vinod Kumar Mehta (IPS) and Mukhtar Ali (Constable). Their courage, integrity, and unwavering commitment to communal harmony continue to inspire generations. Through the Memory of Martyrdom of Mehta & Mukhtar, we not only keep their legacy alive but strive to carry forward their ideals — of service before self, fearless justice, and unity beyond all divides.",
        "In a heartfelt initiative led by V. Soleman Nisakumar, IPS, Additional Commissioner of Police (STF, Kolkata), warm blankets and school bags were distributed to children in need. Organized by our NGO in memory of Martyrs Mehta & Mukhtar, the event was more than just a donation—it was a powerful reflection of our commitment to carry forward their legacy through compassion, dignity, and hope.",
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
        }, 9000);
        return () => clearTimeout(timer);
    }, [slideIndex]);

    const showSlide = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className="home">
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
                    <button className={slideIndex === 0 ? 'active' : ''} onClick={() => showSlide(0)}>Home</button>
                    <button className={slideIndex === 1 ? 'active' : ''} onClick={() => showSlide(1)}>Blanket & School Bag Distribution</button>
                    <button className={slideIndex === 2 ? 'active' : ''} onClick={() => showSlide(2)}>Medical Health Checkup</button>
                    <button className={slideIndex === 3 ? 'active' : ''} onClick={() => showSlide(3)}>Basic Necessity Distribution</button>
                    <button className={slideIndex === 4 ? 'active' : ''} onClick={() => showSlide(4)}>Football Tournament</button>
                </div>
            </section>
<section className="whiteSpace">

</section>
            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    We are committed to serving communities through education, health, and
                    empowerment programs. Join us in creating lasting impact.
                </p>
            </section>

            <section className="cta">
                <button onClick={() => window.location.href = '/donate'}>
                    Donate Now
                </button>
                <button onClick={() => window.location.href = '/events'}>
                    View Events
                </button>
            </section>
        </div>
    );
}

export default Home;
