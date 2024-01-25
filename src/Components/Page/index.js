import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import ProjectForm from '../ProjectForm';

function Page() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log(!isMenuOpen)
  };

  return (
    <div className="App">
      <div className="image">
          <img className="img" alt="bg" src="https://c.animaapp.com/eTiOpYCh/img/image.png" />
      </div>
      <header>
        <nav>
          <div className="text-wrapper">Madelyn Torff</div>
          <ul className='nav'>
            <li><a className={`tab-default-instance ${isMenuOpen ? 'hidden' : ''}`} href="#about">About</a></li>
            <li><a className={`tab-default-instance ${isMenuOpen ? 'hidden' : ''}`} href="#projects">Projects</a></li>
            <li><a className={`tab-default-instance ${isMenuOpen ? 'hidden' : ''}`} href="#contact">Contact</a></li>
            <FiMenu className={`menu-icon ${isMenuOpen ? '' : 'hidden'}`} onClick={toggleMenu}/>
            <ImCross className={`menu-icon ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}/>
          </ul>
          
        </nav>
      </header>

      <section id="about">
          <div className="intro">
            <div className="uiuxdesi">UI/UX DESIGNER</div>
              <div className="content">
                <p className="title">Hello, my name is <br/> Madelyn Torff</p>
                  <p className="text">
                    Short text with details about you, what you do or your professional career. You can add more
                    information on the about page.
                  </p>
                <div className="buttons">
                  <button className='proj-but'><a href="#projects">Projects</a></button>
                  <button className='lin-but'>LinkedIn</button>
                </div>
              </div>
          </div>
      </section>
      
          <ProjectForm/>

      <section id="contact">
      <footer>
        <RiInstagramFill className='icon'/>
        <FaLinkedin className='icon'/>
        <IoMdMail className='icon'/>
        <p>Copyright © 2024.  All rights reserved</p>
      </footer>
      </section>

      
    </div>
  );
}

export default Page;
