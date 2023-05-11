import './App.css';
import React, { useState } from 'react';
import { Col, Row, Button, Container, Stack } from 'react-bootstrap';
import Navibar from './components/Navibar';
import Splash from './pages/Splash';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Container fluid>
            <Navibar />
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Splash />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
