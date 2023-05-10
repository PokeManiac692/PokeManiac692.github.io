import { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { Robot } from 'react-bootstrap-icons';

function Navibar() {

    const handleLogout = () => {
        
    };

return (
      <Container>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href=".">
                    <Robot size={30}/> JA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href=".">Home</Nav.Link>
                    <Nav.Link href="/example">Example</Nav.Link>
                    <Button variant="outline-secondary" onClick={handleLogout} className="ml-auto">
                        Contact
                    </Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </Container>
  );

}

export default Navibar;