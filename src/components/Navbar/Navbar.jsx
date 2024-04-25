import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import menu_icon from "../../assets/images/hambuger.png";
import { Link } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Edu-logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li className="link">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="link"><Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link></li>
        <li className="link"><Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link></li>
        <li className="link"><Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link></li>
        <li className="link"><Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link></li>
        <li>
          <Link className="btn"to="contact" smooth={true} offset={-260} duration={500}>
            Contact Us</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
//npm i --save-dev @types/react-scroll
//service_rax1p0l
