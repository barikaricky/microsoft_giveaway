import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <h1>Join the Microsoft Empower Giveaway for Students and Business Owners!</h1>
        <button className="cta-btn" onClick={() => navigate("/register")}>
          Register Now
        </button>
      </section>

      <section className="section">
        <div className="section-title">Highlights</div>
        <div className="highlights">
          <div className="highlight-card">
            <h3>For Students</h3>
            <p>
              <b>Microsoft pays your $50 registration fee</b><br />
              Get access to premium Microsoft tools, resources, and global visibility.
            </p>
          </div>
          <div className="highlight-card">
            <h3>For Business Owners</h3>
            <p>
              <b>Microsoft funds and promotes your business</b><br />
              Gain sponsorship, promotion, and support for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-title">Supported Countries</div>
        <div className="flags">
          <span className="flag" title="United Kingdom" role="img">🇬🇧</span>
          <span className="flag" title="United States" role="img">🇺🇸</span>
          <span className="flag" title="Korea" role="img">🇰🇷</span>
          <span className="flag" title="Other American Countries" role="img">🌎</span>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-title">Why Join?</div>
        <ul style={{ maxWidth: 500, margin: "0 auto", textAlign: "left" }}>
          <li>Access Microsoft tools &amp; support</li>
          <li>Global visibility for businesses</li>
          <li>Free registration for eligible participants</li>
        </ul>
      </section>
    </>
  );
}

export default Home;