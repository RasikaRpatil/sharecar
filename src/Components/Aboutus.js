import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Aboutus.css'
import abouth from './img/aboutimg1.jpg';

function Aboutus() {
  return (
    <div id='aboutus'>
      <Image className='About-img' src={abouth} />
       <h1 className='About-title'>About Us </h1>
      <Container>
        <p>Cabio Limo is an online luxury car b0oking service and a luxury car rental
          service operating in Dubai. We have with us a fleet of luxury cars and vehicles
          that will instantly induce a regal sensibility for anyone who enters our line of
          vehicles. Our service standards have been tested time and time again, and we
          have moulded ourselves into becoming a holistic luxury car rental Dubai traveller and citizens can reliably depend upon.
          Our experienced chauffeurs have ingrained in themselves an array of skills over their vast years of experience in serving the elite. They are well trained to handle all sorts of people, irrespective of where they come from and who they are. This way there is the highest service for everyone. They will bring to the fold, an exceptional service that will make you feel like you are really something special and your experience in travelling Cabio Limo an experience.</p>
      </Container>

      <section className="About-background About-quote About-overlay About-center">
        <div >
          <p>Why choose us?</p>
          <span>Our promise is not just a pickup and drop to your required destination, we are totally dedicated in providing you with the best service available in the market and that too in a very good affordable price.</span>
        </div>
      </section>
      <Container>
        <h1 className='About-titles'>Our Specialities</h1>
        <Row>
          <Col>
            <div className='Our-main1'>
              <div className='Our-div1'>
                <h1>Easy Booking</h1>
                <p>World has totally upgraded itself to the digital mode of doing things. So we bring our booking service to your figure tips. Now you can easily book the services according
                  to your preference through our website and also through our calling services.</p>

              </div>
            </div>
          </Col>
          <Col>
            <div className='Our-main2'>
              <div className='Our-div2'>
                <h1>Professional Drivers</h1>
                <p> Your safety is our primary concern. So, we are really conscious
                  of our hiring process. We only hire professionally experienced drivers
                  in our company. Our team is dedicated for taking you safely to the destined
                  place within the timeframe. They are trained enough to ensure that every passenger
                  who enters the vehicle is 100% satisfied with the experience.</p>
              </div>

            </div>

          </Col>
        </Row>
        <Row>
          <Col>
            <div className='Our-main2'>
              <div className='Our-div2'>
                <h1>Multi Branded Cars</h1>
                <p> For our passengers, there is a number of options regarding cars. We bring some of the best-made machines in the world. Be ready
                  to experience the sheer comfort and some best rides in great cars through Dubai.</p>
              </div>

            </div>

          </Col>
          <Col>
            <div className='Our-main1'>
              <div className='Our-div1'>
                <h1>Easy Pickup</h1>
                <p>Go book your car, we are ready to pick you anytime. Just drop your pickup location in the
                  booking details and wait. Some luxury on wheels will come, take you, and fly.</p>
              </div>

            </div>

          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Aboutus