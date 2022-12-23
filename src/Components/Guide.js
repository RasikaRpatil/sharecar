import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import './Guide.css'
import {MdDoubleArrow } from 'react-icons/md';
import rent from './img/rent.jpg'
import fine from './img/fine.jpg'
import parking from './img/parking.jpg'

function Guide() {
  return (
    <div id='guide'>
      <h1 className='Guiud-title'>Guide</h1>
      <Container className='Guide-Container'>
        <Row>
          <Col>
            <Card>
              <Card.Img className='Guide-Img' src={rent} />
              <Card.Body>
                <Card.Title className='Guide-Ctitle'>Rent Term in India</Card.Title>
                <Button className='Guide-Butts'><MdDoubleArrow size={30}/></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className='Guide-Img' src={fine} />
              <Card.Body>
                <Card.Title className='Guide-Ctitle'>Fines in India</Card.Title>
                <Button className='Guide-Butts'><MdDoubleArrow size={30}/></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className='Guide-Img' src={parking} />
              <Card.Body>
                <Card.Title className='Guide-Ctitle'>Parking in India</Card.Title>
                <Button className='Guide-Butts'><MdDoubleArrow size={30}/></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Guide 