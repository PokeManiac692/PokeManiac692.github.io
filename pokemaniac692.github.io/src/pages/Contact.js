import { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, ButtonGroup, Offcanvas, Image, Toast} from 'react-bootstrap';
import { Robot, Linkedin, Github, EnvelopeFill, RocketTakeoffFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showToast, setShowToast] = useState(false);

    const handleCloseToast =() => setShowToast(false);
    const handleShowToast = () => {
        setShowToast(true);
        navigator.clipboard.writeText('jabuan.eth');
    };

    return (
        <div>
        <Button variant="outline-secondary" onClick={handleShow} className="ml-auto">
                        Contact
        </Button>

        <Offcanvas show={show} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Contact</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Image src = "MB404.gif" roundedCircle = "true" fluid = "true" style={{ width: '200px', }}/>
                            <br />
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>Jeremy Abuan</h5>
                        </Col>
                        <Col>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="light" href="https://github.com/PokeManiac692" target="_blank"><Github /></Button>
                                <Button variant="light" href="http://www.linkedin.com/in/jeremyabuan" target="_blank"><Linkedin /></Button>
                                <Button variant="light" href="mailto:jeremyabuan@gmail.com?subject=Hey Jeremy I'd Like to Connect!" target="_blank"><EnvelopeFill /></Button>
                                <Button variant="light" onClick={handleShowToast}> <RocketTakeoffFill /></Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                                <Toast.Header>
                                    <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                    />
                                    <strong className="me-auto"><RocketTakeoffFill /> Ethereum Address</strong>
                                </Toast.Header>
                                <Toast.Body>Address copied to clipboard. <br />Send me some ETH 😊</Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                    
                    <Row>
                        <p>A problem solver and strong communicator super psyched to advance and expand my digital growth.</p>
                    </Row>

                </Container>
            </Offcanvas.Body>
        </Offcanvas>
        </div>
    );
}

export default Contact;