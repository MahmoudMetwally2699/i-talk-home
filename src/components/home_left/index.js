"use client"
import React from 'react';
//import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import AnimatedTextWord from '../AnimatedTextWord';




function Home_Left() {
  
  

  return (
    <>
    <Container className="home-left mt-20" >

      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">
          <h1 className="first-line">
            <AnimatedTextWord text="Hello There! " animate={true} />
            
          </h1>
          <h2 className="second_line">
          <AnimatedTextWord text=" I'm " animate={true} />
          <AnimatedTextWord text=" Mahmoud Ahmed" animate={true} />

            {/* <AnimatedTextWord text="I'm Mahmoud Ahmed" animate={true} /> */}
          </h2>

          <h3 className="typical"
          >

            <Typewriter
              className="typical"
              options={{
                strings: ['Software Engineer', 'Full Stack Developer', 'Web Developer', 'Desiner'],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>


        </Col>
      </Row>

      
    </Container>

</>
  );
}

export default Home_Left;
