<<<<<<< HEAD
import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">CREATURE COMMANDOS</h1>
            <p className="hero-subtitle">
              Task Force X's Most Dangerous Squadron
            </p>
            <p className="hero-description">
              When conventional military fails, when the supernatural threatens
              humanity, when monsters roam the earth - we deploy the ultimate
              solution: monsters of our own.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Join the Mission</button>
              <button className="btn-secondary">About Us</button>
            </div>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Mission Overview */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>OPERATION: SUPERNATURAL</h2>
              <p className="mission-lead">
                In a world where threats come from beyond human understanding,
                traditional military forces aren't enough.
              </p>
              <div className="mission-stats">
                <div className="stat">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Missions Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">0</span>
                  <span className="stat-label">Civilian Casualties</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Threats Neutralized</span>
                </div>
              </div>
              <p>
                The Creature Commandos operate in the shadows, handling
                supernatural threats that would break conventional forces. We
                are expendable. We are effective. We are the monsters that hunt
                monsters.
              </p>
            </div>
            <div className="mission-logo">
              <img
                src="/cc_logo.jpg"
                alt="Creature Commandos Logo"
                className="cc-logo-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Contact */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>CREATURE COMMANDOS</h3>
              <p>Task Force X - Supernatural Division</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Operations</h4>
                <button className="footer-link">Mission Reports</button>
                <button className="footer-link">Threat Assessment</button>
                <button className="footer-link">Personnel Files</button>
              </div>
              <div className="footer-column">
                <h4>Intelligence</h4>
                <button className="footer-link">Supernatural Database</button>
                <button className="footer-link">Training Protocols</button>
                <button className="footer-link">Equipment Arsenal</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>CLASSIFIED - AUTHORIZED PERSONNEL ONLY</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
=======
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const proceedCharacters = () => {
        navigate('/characters');
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button type="button" class="btn btn-success" onClick={proceedCharacters}>Characters</button>
        </div>
    );
}

export default Home;
>>>>>>> e38a55194a1b844f881006f2dba46ec49a615b88
