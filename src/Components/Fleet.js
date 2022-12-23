import React, { useState } from 'react'
import { Container, Row, Card, Col, Image } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import './Fleet.css'
import car1 from './img/Luxury-Car.webp'
import car2 from './img/sports.webp'
import car3 from './img/tesla-electric-car-rental-lat.webp'
import car4 from './img/sedan-monthly-car-rental.webp'
import car5 from './img/ocd_suv.webp'
import car6 from './img/Muscle.webp'
import car7 from './img/Convertible.webp'
import car8 from './img/chauffeur-driver.webp'
import car9 from './img/commercial-vehicles.webp'
import car10 from './img/Economy2.webp'



function Fleet() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div id='fleet'>
            <h1 className='Fleet-title'>Cars For Rent India</h1>
            <Container className='Fleet-Container'>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car1} />
                    <span>Luxury</span><br />
                    <a>12 cars</a>

                </div>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car2} />
                    <span>Sport</span><br />
                    <a>12 cars</a>

                </div>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car3} />
                    <span>electric</span><br />
                    <a>12 cars</a>

                </div>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car4} />
                    <span>monthly</span><br />
                    <a>12 cars</a>

                </div>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car5} />
                    <span>xuv</span><br />
                    <a>12 cars</a>

                </div>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car6} />
                    <span>muscle</span><br />
                    <a>12 cars</a>

                </div>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car7} />
                    <span>Convertible</span><br />
                    <a>12 cars</a>

                </div>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car8} />
                    <span>car With Driver</span><br />
                    <a>12 cars</a>

                </div>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car9} />
                    <span>Commercial</span><br />
                    <a>12 cars</a>

                </div>
                <div className='Fleet-main'>
                    <img className="Fleet-image" src={car10} />
                    <span>Economy</span><br />
                    <a>12 cars</a>

                </div>

            </Container>


            <section className="section-background section-quote background-overlay text-center">
                <div >
                    <p>We make our <span>work look good</span> &amp; have experience in the creation of brand identities for
                        <span>print &amp; web</span>, with a difference.</p>
                </div>
            </section>


            <Container>
                <Row>
                    <Col className='Date-Col'>
                        <h1>Calculate The Cost</h1>
                        <div>
                            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                            <button>Calculate</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <Container className="aboutcontainer">
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Cards'>
                            <Card.Img className="timg" variant="top" src={'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                            <Card.Body className="t-box">
                                <Card.Title className='Ctitle'>C PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    C is an imperative procedural language supporting structured
                                    programming, lexical variable scope, and recursion, with a
                                    static type system.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Cards'>
                            <Card.Img className="timg" variant="top" src={'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                            <Card.Body className="t-box">
                                <Card.Title className='Ctitle'>C PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    C is an imperative procedural language supporting structured
                                    programming, lexical variable scope, and recursion, with a
                                    static type system.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Cards'>
                            <Card.Img className="timg" variant="top" src={'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                            <Card.Body className="t-box">
                                <Card.Title className='Ctitle'>C PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    C is an imperative procedural language supporting structured
                                    programming, lexical variable scope, and recursion, with a
                                    static type system.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container> */}
        </div >
    )
}

export default Fleet