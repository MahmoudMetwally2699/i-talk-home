import React from 'react';
//import '../home_right/style.css';
import Foad from '../../assets/img/foad_logo.jpg';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Image from 'next/image';


function Home_Right() {
  return (
    <Container className="home-right pt-5">
      <Row className="home-right-main">
        <Col xl={12}>
          <br />
        </Col>
        <Row className="home-right-footer" >
        </Row>
      </Row>
    </Container>
  );
}

export default Home_Right;
