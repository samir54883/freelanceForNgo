import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // make sure this is at the top of App.jsx
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './Home.jsx';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
