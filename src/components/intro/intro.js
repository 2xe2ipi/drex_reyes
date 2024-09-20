import React from 'react';
import './intro.css';
import newDrexImage from '../../assets/drex3.jpg'; 
const Intro = () => {
  return (
    <section id="intro" className="hero-section"> {}
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Exploring the world of game development and programming.</p>
        <br />
        <a href="#projects" className="cta-button">View My Projects</a>
      </div>
      <img src={newDrexImage} alt="Drexler" className="hero-image" />
    </section>
  );
};

export default Intro;
