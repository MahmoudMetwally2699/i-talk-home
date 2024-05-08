"use client"
import React from 'react';
//import './style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../../const/particle';
import ReactGa from 'react-ga';






//--Motasim Foads Portfolio website Google analytics--
//--Replace with your own key !!

//--Motasim Foads Portfolio website Google analytics--

function Home() {
  return (
 
    <div id="Home">
     
      <Animate to="1" from="0" attributeName="opacity">

        <Particles
          params={particles}
          className="particle opacity-50"
        />
        <Container className="Apps-header" fluid={true}>
        {/* <Wrapper id="Home" {...getSectionAnimation}> */}


          <Row className="Apps-main opacity-100" >
            <Col xl={7} className="Apps-left">
              <HomeLeft />

            </Col>
            <Col xl={5} className="Apps-right">

              <HomeRight />

            </Col>
          </Row>
          {/* </Wrapper> */}


        </Container>
      

      </Animate>

    </div>
  );
}

export default Home;
