import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Col, Row, Button, Container, Stack } from 'react-bootstrap';
import Navibar from './components/Navibar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Container fluid>
            <Navibar />
      </Container>
      <Container fluid>
        {/* <Row>
          <Col md={1} />
          <Col md={10}>
            <Dashboard />
          </Col>
          <Col md={1} />
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
