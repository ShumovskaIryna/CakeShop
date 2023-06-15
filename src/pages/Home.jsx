import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap"
import heroImg from '../assets/images/logo.png'

const Home = () => {
  const year = new Date().getFullYear()
  return <Helmet title={'Home'}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">The most popular things with PANDA in {year}
              </p>
              <h2>Make Your Life Panda-Minimalistic</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam a commodi quis porro doloremque vel ea est natus ut recusandae!</p>
            </div>
            <button className='buy__btn'>Shop Now</button>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt=''></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home;
