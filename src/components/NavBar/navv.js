import React from 'react';
import './navv.css';
import { Link,scroller } from 'react-scroll';
const scrollToContacts = () => {
    scroller.scrollTo('contacts', {
        smooth: true,
        duration: 500,
    });
};
const Navbar = () => {
    return (
        <nav className ="navbar">
        <div className="contactMenu"></div>
        <Link 
        to="intro"
        smooth={true}
        duration={500}
        className ="contactListItem">Home</Link>
        <Link 
        to="about"
        smooth={true}
        duration={500}
        className ="contactListItem">About</Link>
        <Link
        to="works"
        smooth={true}
        duration={500}
         className ="contactListItem">Projects</Link>

        <button className="contactBtn" onClick={scrollToContacts}>
            Contact Me
        </button>
        </nav>
    )
}

export default Navbar;