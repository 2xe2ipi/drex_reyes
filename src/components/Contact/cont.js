import React, { useState } from 'react';
import './cont.css';

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            alert('Name is required.');
        } else if (!email) {
            alert('Email is required.');
        } else if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
        } else if (!message) {
            alert('Message cannot be empty.');
        } else {
            alert('Message successfully submitted!');
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <section id='contacts'>
            <h1 className="contactTitle">Contact</h1> <br     />
           
            <form className="contactForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    className="msg"
                    rows="5"
                    placeholder="Message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <br />
                <button type='submit' className="submitBtn">Submit</button>
            </form>
        </section>
    );
}

export default Contacts;
