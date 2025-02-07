import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    currentPage, setCurrentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <header className="flex-row px-1 space">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span>Meyart
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={currentPage === "About" ? "currentPage" : ""}>
            <a data-testid="about" href="#About" onClick={() => setCurrentPage("About")}>
              synapse
            </a>
          </li>
          <li className={currentPage === "Portfolio" ? "currentPage" : ""}>
            <a data-testid="Portfolio" href="#Portfolio" onClick={() => setCurrentPage("Portfolio")}>
              galeria de puentes
            </a>
          </li>
          <li className={currentPage === "Resume" ? "currentPage" : ""}>
            <a data-testid="Resume" href="#Resume" onClick={() => setCurrentPage("Resume")}>
              photography
            </a>
          </li>
          <li className={currentPage === "Contact" ? "currentPage" : ""}>
            <a data-testid="Contact" href="#Contact" onClick={() => setCurrentPage("Contact")}>
              art
            </a>
          </li>
          <li className={currentPage === "Contact" ? "currentPage" : ""}>
            <a data-testid="Contact" href="#Contact" onClick={() => setCurrentPage("Contact")}>
              LULz
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
