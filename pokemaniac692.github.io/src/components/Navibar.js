import { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import { Robot } from 'react-bootstrap-icons';
import Contact from '../pages/Contact';

function Navibar() {

return (
      <Container fluid>
        <Navbar bg="light" variant="light" sticky="top">
            <Container fluid>
                <Navbar.Brand href=".">
                    <Robot size={30}/> J.Abuan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href=".">Home</Nav.Link>
                    <Nav.Link href="/example">Example</Nav.Link>
                    <Contact />

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </Container>
  );

}

export default Navibar;