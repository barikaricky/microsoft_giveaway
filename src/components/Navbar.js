import React from "react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { label: "Home", path: "/" },
  { label: "About Giveaway", path: "/about" },
  { label: "Who Can Apply", path: "/who-can-apply" },
  { label: "Register", path: "/register" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" }
];

function Navbar() {
  const location = useLocation();
  return (
    <header>
      <nav className="navbar">
        <span className="navbar-logo">Microsoft Empower Portal</span>
        <div className="navbar-menu">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: location.pathname === item.path ? "#005fa3" : undefined,
                textDecoration: location.pathname === item.path ? "underline" : undefined
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;