import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
          alt="Microsoft Logo"
          className="footer-logo"
        />
      </div>
      <div style={{ margin: "0.5rem 0 1rem 0" }}>
        <span style={{ color: "#666" }}>
          This site is part of a Microsoft student partnership project.
        </span>
      </div>
      <div className="footer-links">
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
      <div style={{ marginTop: "0.5rem", color: "#999" }}>
        © {new Date().getFullYear()} Microsoft Empower Portal
      </div>
    </footer>
  );
}

export default Footer;