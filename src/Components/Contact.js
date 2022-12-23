import React from 'react'
import { Col, Container, Row, Form, Button, Image } from 'react-bootstrap'
import './Contact.css'
import { FaMailBulk, FaWhatsapp, FaAddressCard } from 'react-icons/fa';
import { GiIndiaGate } from 'react-icons/gi';
import map from'./img/road-map.jpg'


function Contact() {
    return (
        <div id='contact'>
            <h1 className='Contact-title'>Contacts</h1>
            <Container className='Contact-Container'>
                <Row>
                    <Col >
                        <h1 className='HContact'>HOW TO CONTACT</h1>
                        <div class="Contact-detail">
                            <h6><GiIndiaGate size={28} color="IndianRed" /> India :- <span> +91987654321</span></h6>
                            <h6><FaWhatsapp size={28} color="green" /> WhatsApp :- <span> 1234567890</span></h6>
                            <h6><FaMailBulk size={28} color="red" /> E-mail :- <span> email@.com</span></h6>
                            <h6> <FaAddressCard size={28} color="skyblue" /> Address :- <span> bhusawal</span></h6>

                        </div>
                    </Col>
                    <Col className='Contact-colm'>
                        <h1 className='Contact-Massage'>WRITE A MASSAGE</h1>
                        <div>
                            <Form.Control className='Contact-form' type="text" placeholder=" Your Name" />
                            <Form.Control className='Contact-form' type="text" placeholder="Phone Number" />
                            <Form.Control className='Contact-form' type="email" placeholder=" YourEmail" />
                            <div className='Form-text'>
                                <Form.Control className='Form-textarea' as="textarea" rows={3} placeholder="Add your massage" />
                            </div>
                            <Button className='Contact-button'>SEND MASSAGE</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 className='HContact'>OFFICE PHOTOS</h1>
                <Row>
                    <Col className='office-col'>
                        <Image className='asdg' src='https://images.pexels.com/photos/11869159/pexels-photo-11869159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                        <Image className='asdg' src='https://images.pexels.com/photos/11869159/pexels-photo-11869159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                        <Image className='asdg' src='https://images.pexels.com/photos/11869159/pexels-photo-11869159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                        <Image className='asdg' src='https://images.pexels.com/photos/11869159/pexels-photo-11869159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                    </Col>
                </Row>
                <Row>
                    <Col className='office-col'>
                        <Image className='asdg' src='https://images.pexels.com/photos/11869159/pexels-photo-11869159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                        <Image className='asdg' src='https://images.pexels.com/photos/11869159/pexels-photo-11869159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                        <Image className='asdg' src='https://images.pexels.com/photos/11869159/pexels-photo-11869159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                        <Image className='asdg' src='https://images.pexels.com/photos/11869159/pexels-photo-11869159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                    </Col>
                </Row>
            </Container>
            <Container className='office-col'>
                     <h1 className='HContact'>ROAD MAP</h1>
                     <Row>
                         <Image src={map}/>
                     </Row>
            </Container>
        </div>
    )
}

export default Contact