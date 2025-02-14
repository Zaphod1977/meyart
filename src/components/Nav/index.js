import React, { useState, useEffect } from "react";
import './HamburgerMenu.css';

const Nav = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { currentPage, setCurrentPage } = props;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  return (
    <header className="flex-row px-1 space">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span>Meyart
        </a>
      </h2>
      
      {/* Hamburger Menu */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>

        <nav className={`menu-items ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li className={currentPage === "About" ? "currentPage" : ""}>
              <a href="#About" onClick={() => { setCurrentPage("About"); toggleMenu(); }}>
                synapse
              </a>
            </li>
            <li className={currentPage === "Portfolio" ? "currentPage" : ""}>
              <a href="#Portfolio" onClick={() => { setCurrentPage("Portfolio"); toggleMenu(); }}>
                galeria de puentes
              </a>
            </li>
            <li className={currentPage === "Resume" ? "currentPage" : ""}>
              <a href="#Resume" onClick={() => { setCurrentPage("Resume"); toggleMenu(); }}>
                photography
              </a>
            </li>
            <li className={currentPage === "Contact" ? "currentPage" : ""}>
              <a href="#Contact" onClick={() => { setCurrentPage("Contact"); toggleMenu(); }}>
                art
              </a>
            </li>
            <li className={currentPage === "LULz" ? "currentPage" : ""}>
              <a href="#LULz" onClick={() => { setCurrentPage("LULz"); toggleMenu(); }}>
                LULz
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
