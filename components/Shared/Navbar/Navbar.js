import React, { useState, useRef } from "react";
import logo from "../../../static/assets/ihd_logo.svg";
import globeIcon from "../../../static/assets/globe-icon.svg";
import Link from "next/link";
import SVGCursor from "../SVGCursor/SVGCursor";
import downArrow from "../../../public/down_arrow.svg";
import menuOpen from "../../../public/menu_open.svg";
import menuClose from "../../../public/menu_close.svg";

const Navbar = () => {
  const [mousePoint, setMousePoint] = useState({ x: 203.5, y: -83 });
  const menuRef = useRef(null);
  const HandleCursor = (e) => {
    setMousePoint({ x: e.clientX, y: e.clientY });
  };
  const handleMenuOpen = () => {
    menuRef.current.style.left = "0";
  };
  const handleMenuClose = () => {
    menuRef.current.style.left = "-100%";
  };
  return (
    <nav className="navbar_container" onMouseMove={HandleCursor}>
      <SVGCursor x={mousePoint.x} y={mousePoint.y} />
      <div className="navbar_grid">
        <div className="brand_logo">
          <Link href="/">
            <a>
              <img src={logo.src} />
            </a>
          </Link>
        </div>
        <div className="nav_list" ref={menuRef}>
          <div className="menu_open" onClick={handleMenuOpen}>
            <img src={menuOpen.src} alt="menu open" />
          </div>
          <div className="menu_close" onClick={handleMenuClose}>
            <img src={menuClose.src} alt="menu close" />
          </div>
          <ul>
            <li>
              About
              <span className="nav_list_arrow_container">
                <img src={downArrow.src} alt="arrow down" />
              </span>
              <ul>
                <li>
                  <Link href="/about/about-us">about us</Link>
                </li>
                <li>
                  <Link href="/about/partners">partners</Link>
                </li>
                <li>
                  <Link href="/about/global-network">global network</Link>
                </li>
                <li>
                  <Link href="/about/careers">careers</Link>
                </li>
                <li>
                  <Link href="/about/global-locations">global locations</Link>
                </li>
              </ul>
            </li>
            <li>
              Co-Working
              <span className="nav_list_arrow_container">
                <img src={downArrow.src} alt="arrow down" />
              </span>
              <ul>
                <li>
                  <Link href="/co-working/membership">membership</Link>
                </li>
                <li>
                  <Link href="/co-working/faq">FAQ</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">Office Space</Link>
            </li>
            <li>
              Event Space
              <span className="nav_list_arrow_container">
                <img src={downArrow.src} alt="arrow down" />
              </span>
              <ul>
                <li>
                  <Link href="/about">spaces</Link>
                </li>
                <li>
                  <Link href="/about">send enquire</Link>
                </li>
              </ul>
            </li>
            <li>
              Events
              <span className="nav_list_arrow_container">
                <img src={downArrow.src} alt="arrow down" />
              </span>
              <ul>
                <li>
                  <Link href="/about">upcoming events</Link>
                </li>
                <li>
                  <Link href="/about">past events</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">Stories</Link>
            </li>
          </ul>
        </div>
        <div className="language-container">
          <span className="language">
            <img src={globeIcon.src} />
            <p>english</p>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
