import React, { useState, useEffect, useCallback } from "react";
import './works.css';
import Comics from '../../assets/jinx.jpg';
import arnis from '../../assets/malphite.jpg';
import spotify from '../../assets/thresh.jpg';

const Works = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      image: Comics,
      title: "Loose Cannon",
      description: "Loose Cannon is an immersive online RPG set in a chaotic, post-apocalyptic world where players embody eccentric characters navigating a realm filled with danger and absurdity. Players can choose from a variety of classes, each with unique abilities and quirks, such as the Mischievous Trickster, the Mad Scientist, and the Rugged Survivor.",
    },
    {
      image: arnis,
      title: "Rock Solid ",
      description: "Rock Solid is an engaging sandbox survival game set in a rugged, mountainous terrain where players must build, explore, and survive against the elements and various challenges. Players assume the role of a lone adventurer tasked with establishing a thriving settlement in a hostile environment filled with hidden treasures and lurking dangers.",
    },
    {
      image: spotify,
      title: "Janitor Hook",
      description: "Janitor Hook is a quirky, fast-paced arcade game where players take on the role of an overworked janitor tasked with cleaning up a chaotic, cluttered environment filled with mischievous objects and unpredictable challenges. With a trusty hook tool in hand, players must navigate various levels, using their skills to tidy up while avoiding obstacles and completing bizarre tasks.",
    }
  ];

  const handleNext = useCallback(() => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, [projects.length]);

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) => 
      (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const nextProjectIndex = (currentProjectIndex + 1) % projects.length;
  const prevProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;

  return (
    <section id='works'>
    
      <div className="container">
        <div className="box prev">
          <img src={projects[prevProjectIndex].image} alt={projects[prevProjectIndex].title} />
          <h3>{projects[prevProjectIndex].title}</h3>
          <p>{projects[prevProjectIndex].description}</p>
        </div>
        <div className="box current">
          <img src={projects[currentProjectIndex].image} alt={projects[currentProjectIndex].title} />
          <h3>{projects[currentProjectIndex].title}</h3>
          <p>{projects[currentProjectIndex].description}</p>
        </div>
        <div className="box next">
          <img src={projects[nextProjectIndex].image} alt={projects[nextProjectIndex].title} />
          <h3>{projects[nextProjectIndex].title}</h3>
          <p>{projects[nextProjectIndex].description}</p>
        </div>
        <div className="navigation">
          <button className="nav-btn" onClick={handlePrev}>&lt;</button>
          <button className="nav-btn" onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </section>
  );
}

export default Works;
