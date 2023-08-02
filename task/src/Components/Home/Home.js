import React from 'react'
import Component2 from './Component2'
import Components4 from './Components4'
import Component6 from './Component6'
import { Container, Col, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <>
    <Container style={{margin:"5rem"}}>
      <Row>
        <Col><Component2 /></Col>
        <Col> <Components4 /></Col>
      </Row>
      <Col> <Component6 /></Col>
    </Container>
    
    </>
  )
}

export default Home
