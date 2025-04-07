import './Home.css'

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to Our NGO</h1>
                <p>Making a difference, one step at a time.</p>
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
