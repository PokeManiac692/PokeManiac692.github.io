import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typed from 'typed.js';

function Splash() {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a Full Stack Software Developer','I am a 👨‍💻 Computer Science Career and Technical Educator', 'I am an 🥋 International Judo Competitor and Instructor', 'I am a 🐾 Dog Dad 🐾', 'I am a 🎮 Casual Gamer', 'I am a 🖥 Programming and Tech Enthusiast', 'I am a 🤖 Passionate Builder and Systems Troubleshooter'],
      typeSpeed: 25,
      backSpeed: 0,
      startDelay: 300,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
return (
      <Container>
        <Row className="text-center row align-items-center">
            <Col>
                <h1>Hello, I'm Jeremy Abuan.</h1>
                <h3><span ref={el} /></h3>
            </Col>
        </Row>
      </Container>
  );

}

export default Splash;