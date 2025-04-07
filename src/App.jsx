import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // make sure this is at the top of App.jsx
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './Home.jsx';
import CoreTeam from './CoreTeam.jsx';
import Events from './Events.jsx';
import Donate from './Donate.jsx';
import ContactUs from './ContactUs.jsx';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/core-team" element={<CoreTeam />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/donate" element={<Donate />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
