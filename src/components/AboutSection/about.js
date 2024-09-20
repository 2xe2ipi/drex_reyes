import React, { useState } from 'react';
import './about.css';

const About = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index); 
    };

    const faqItems = [
        {
            question: "LORE",
            answer: "2XE2IPI is equal to two. Two times euler's number raised to two times the imaginary unit i times pi is equal to 2."
        },
        {
            question: "CODE",
            answer: "I enjoy competitive programming where I mainly use C++. CodeChum Nationals is nearing!"
        },
        {
            question: "GAME",
            answer: "I play a lot of Wild Rift and League of Legends. I reached Grandmaster a few times."
        },
        {
            question: "TRAV",
            answer: "I've visited over 10 countries and love experiencing different cultures."
        },
        {
            question: "TECH",
            answer: "I'm passionate about AI and machine learning, and I love experimenting with new tech."
        },
        {
            question: "FOOD",
            answer: "I enjoy trying out new cuisines, especially Asian and Mediterranean dishes."
        }
    ];
    

    return (
        <section id="about">
            <h2 className="aboutTitle">ABOUT ME</h2>
            <br />
            
            <div className="accordion">
                {faqItems.map((item, index) => (
                    <div className="faq-item" key={index} onClick={() => toggleFaq(index)}>
                        <div className="faq-question">
                            {item.question}
                        </div>
                        {openFaq === index && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
