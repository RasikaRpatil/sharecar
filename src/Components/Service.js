import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './Service.css'
import ser1 from './img/aircar.jpg';
import ser2 from './img/full.jpg';
import ser3 from './img/asdf.jpg';
import ser4 from './img/hourimg.jpg';
import ser5 from './img/houring.jpg';
import ser6 from './img/taxi.png';



function Service() {
  return (
    <div id='service'>

      <h1 className='Service-title'>Services</h1>
      <Container>
        <p>Cabio Limo provides world-class luxurious transportation services for our clients. We cater to all your travel desires and luxury options.
          Experience a seamless journey from your doorstep to your destination with special touches along the way.
          Our drivers are more than just drivers. We provide a unique experience for clients who wish to choose a luxury travel service.
          Sit back and enjoy your ride as you are safely driven wherever you need to go, no matter how many stops you need to make.
          Our trademark is our unsurpassed personal service.
          We follow up every request and make it as easy as possible for you to travel in style and comfort par excellence.
        </p>
      </Container>
      <Container className='service-Container'>
        <Row>
          <Col>
            <Card className='Service-card'>
              <Card.Img variant="top" src={ser3} />
              <Card.Body>
                <Card.Title>Airport Transfers</Card.Title>
                <Card.Text>
                  CabioLimo provides an attractive and affordable rate for most pickup and drop service from or to Dubai,
                   Sharjah and Abu Dhabi airports. The airport transfer rates are purely based on a pickup and drop. The charges are not relying on delay or waiting time.
                   We provide you with the best quality services. Your vehicle will be heading to the airport accordingly by the estimated time of arrival provided to CabioLimo by each respective airline. Billing may vary if the event is delayed by the client further than the agreed schedule.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={ser1} />
              <Card.Body>
                <Card.Title>Hourly Service</Card.Title>
                <Card.Text>
                  CabioLimo provides an attractive and affordable rate for most pickup and drop service from or to Dubai,
                   Sharjah and Abu Dhabi airports. The airport transfer rates are purely based on a pickup and drop. The charges are not relying on delay or waiting time.
                   We provide you with the best quality services. Your vehicle will be heading to the airport accordingly by the estimated time of arrival provided to CabioLimo by each respective airline. Billing may vary if the event is delayed by the client further than the agreed schedule.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={ser2} />
              <Card.Body>
                <Card.Title> 24/7 Service</Card.Title>
                <Card.Text>
                  CabioLimo provides an attractive and affordable rate for most pickup and drop service from or to Dubai,
                   Sharjah and Abu Dhabi airports. The airport transfer rates are purely based on a pickup and drop. The charges are not relying on delay or waiting time.
                   We provide you with the best quality services. Your vehicle will be heading to the airport accordingly by the estimated time of arrival provided to CabioLimo by each respective airline. Billing may vary if the event is delayed by the client further than the agreed schedule.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={ser5} />
              <Card.Body>
                <Card.Title>Corporate Services</Card.Title>
                <Card.Text>
                  CabioLimo provides an attractive and affordable rate for most pickup and drop service from or to Dubai,
                   Sharjah and Abu Dhabi airports. The airport transfer rates are purely based on a pickup and drop. The charges are not relying on delay or waiting time.
                   We provide you with the best quality services. Your vehicle will be heading to the airport accordingly by the estimated time of arrival provided to CabioLimo by each respective airline. Billing may vary if the event is delayed by the client further than the agreed schedule.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={ser4} />
              <Card.Body>
                <Card.Title>Event Transportation Service</Card.Title>
                <Card.Text>
                  CabioLimo provides an attractive and affordable rate for most pickup and drop service from or to Dubai,
                   Sharjah and Abu Dhabi airports. The airport transfer rates are purely based on a pickup and drop. The charges are not relying on delay or waiting time.
                   We provide you with the best quality services. Your vehicle will be heading to the airport accordingly by the estimated time of arrival provided to CabioLimo by each respective airline. Billing may vary if the event is delayed by the client further than the agreed schedule.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={ser6} />
              <Card.Body>
                <Card.Title>Professionally trained and uniformed chauffeur service</Card.Title>
                <Card.Text>
                  CabioLimo provides an attractive and affordable rate for most pickup and drop service from or to Dubai,
                   Sharjah and Abu Dhabi airports. The airport transfer rates are purely based on a pickup and drop. The charges are not relying on delay or waiting time.
                   We provide you with the best quality services. Your vehicle will be heading to the airport accordingly by the estimated time of arrival provided to CabioLimo by each respective airline. Billing may vary if the event is delayed by the client further than the agreed schedule.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          
          
        </Row>
      </Container>
    </div>
  )
}

export default Service