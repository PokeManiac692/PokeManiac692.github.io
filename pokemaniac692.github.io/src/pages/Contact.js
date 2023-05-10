import { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Offcanvas, Image } from 'react-bootstrap';
import { Robot } from 'react-bootstrap-icons';


function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
        <Button variant="outline-secondary" onClick={handleShow} className="ml-auto">
                        Contact
        </Button>

        <Offcanvas show={show} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Contact Me</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Container class="text-center">
                    <Row>
                        <Col>
                            <Image src = "MB404.gif" roundedCircle = "true" fluid = "true" style={{ width: '200px', }}/>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>Jeremy Abuan</h5>
                            <p>Problem solver and strong communicator super psyched to advance and expand my digital growth.</p>
                        </Col>
                    </Row>

                </Container>
            </Offcanvas.Body>
        </Offcanvas>
        </div>
    );
}

export default Contact;