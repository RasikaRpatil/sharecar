import React, { useState } from 'react'
import { Container, Image, Row, Col, Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import './Home.css'
import { BsSpeedometer2 } from 'react-icons/bs';
import img from "./img/home.jpeg"
import formcar from "./img/form-car.jpg"

function Home() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div id='home'>
            <div className='Home-div'>
                <Image className='Home-img' src={img} />
                <div className='Home-t'>
                    <span className='name'>RENT A</span><br />
                    <span className='name'>CAR</span><br />
                    <span className='name'>IN INDIA</span>
                </div>
            </div>

            <div>
                <h1 className='Home-findcar'>FIND ME A CAR</h1>
                <BsSpeedometer2 className="icon" size={50} color='green' /><br />
                <span className='span'>Indicate your wishes and trip data and we will pick you a car for your conditions!</span>
                <Container className='Home-Container'>
                    <Row>
                        <Col>
                            <Image className='HImage' src={formcar} />
                        </Col>
                        <Col className='Home-col'>
                            <div>
                                <Form.Control className='Home-form' type="text" placeholder=" Your Name" />
                                <Form.Control className='Home-form' type="text" placeholder="Phone Number" />
                                <Form.Control className='Home-form' type="email" placeholder=" Your Email" />
                                <Form.Control className='Home-form' type="text" placeholder="Desired budget" />
                                <div className='Home-text'>
                                    <DatePicker className='Date' selected={startDate} onChange={(date: from) => setStartDate(date)} />
                                    <DatePicker className='Date' selected={startDate} onChange={(date: to) => setStartDate(date)} />
                                    <Form.Control className='Home-textarea' as="textarea" rows={3} placeholder="Add your massage" />
                                </div>

                                <Button className='Home-Button'>Send Request</Button>
                            </div>
                        </Col>

                    </Row>

                </Container>
                <section className="Ssection-background Ssection-quote Sbackground-overlay Stext-center">
                    <div >
                        <p>We make our <span>work look good</span> &amp; have experience in the creation of brand identities for
                            <span>print &amp; web</span>, with a difference.</p>
                    </div>
                </section>
                

            </div>



        </div>
    )
}

export default Home