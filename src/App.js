import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css';



function App() {
  const [currentPage, setCurrentPage] = useState(
    "About"
  );

  const switchPage = (page) => {
    switch (page) {
      case "About":
        return <About></About>;
      case "Portfolio":
        return <Portfolio currentPage={currentPage}></Portfolio>;
      case "Contact":
        return <ContactForm></ContactForm>;
      case "Resume":
        return <Resume></Resume>;
      default:
        return <About></About>;
    };
  }

  return (
    <div className='wrapper'>
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <div className="space">
      </div>
      <main>{switchPage(currentPage)}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;