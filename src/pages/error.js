import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-page" style={{ paddingTop: '100px' }}>
      {/* Error Hero Section */}
      <section className="error-hero-section">
        <div className="error-overlay">
          <div className="error-content">
            {/* Glitch Effect Container */}
            <div className="error-code-container">
              <div className="error-code glitch" data-text="404">
                404
              </div>
              <div className="error-subcode">ACCESS DENIED</div>
            </div>

            <h1 className="error-title">MISSION FAILED</h1>
            <p className="error-subtitle">
              Target Not Found - Area Compromised
            </p>

            <div className="error-description">
              <p className="error-message">
                <span className="error-icon">⚠️</span>
                The requested intel has been classified or destroyed.
              </p>
              <p className="error-details">
                Our surveillance systems cannot locate the specified target. The
                area may have been compromised or the coordinates are invalid.
              </p>
            </div>

            {/* Mission Status Display */}
            <div className="mission-status">
              <div className="status-item">
                <span className="status-label">THREAT LEVEL:</span>
                <span className="status-value critical">CRITICAL</span>
              </div>
              <div className="status-item">
                <span className="status-label">LOCATION STATUS:</span>
                <span className="status-value unknown">UNKNOWN</span>
              </div>
              <div className="status-item">
                <span className="status-label">BACKUP PROTOCOL:</span>
                <span className="status-value active">ACTIVE</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="error-buttons">
              <button className="btn-error-primary" onClick={handleGoHome}>
                RETURN TO BASE
              </button>
              <button className="btn-error-secondary" onClick={handleGoBack}>
                TACTICAL RETREAT
              </button>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="error-background">
          <div className="scan-lines"></div>
          <div className="static-noise"></div>
        </div>
      </section>

      {/* Emergency Protocols Section */}
      <section className="emergency-protocols">
        <div className="container">
          <h2 className="protocols-title">EMERGENCY PROTOCOLS</h2>
          <div className="protocols-grid">
            <div className="protocol-card">
              <div className="protocol-icon">🔴</div>
              <h3>Code Red</h3>
              <p>
                If you believe this is an error, contact Command immediately.
              </p>
              <span className="protocol-status">STANDBY</span>
            </div>
            <div className="protocol-card">
              <div className="protocol-icon">📡</div>
              <h3>Recon Mission</h3>
              <p>Verify target coordinates and attempt alternate route.</p>
              <span className="protocol-status">READY</span>
            </div>
            <div className="protocol-card">
              <div className="protocol-icon">🛡️</div>
              <h3>Safe Extraction</h3>
              <p>Return to secure location and await further orders.</p>
              <span className="protocol-status">AVAILABLE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="error-footer">
        <div className="container">
          <div className="error-footer-content">
            <div className="error-footer-logo">
              <h3>CREATURE COMMANDOS</h3>
              <p>Error Code: 404 | Mission Classification: FAILED</p>
            </div>
            <div className="error-footer-info">
              <p>If this error persists, contact Task Force X Command</p>
              <p className="footer-classification">
                CLASSIFIED - AUTHORIZED PERSONNEL ONLY
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Error;