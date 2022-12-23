import React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from "react-scroll"
import './Mynavbar.css'
import { GiCityCar } from 'react-icons/gi'
import {useNavigate} from 'react-router-dom'

function Mynavbar() {

    const navi = useNavigate()
    return (
        <div>

            <Navbar className='Car-Nav' collapseOnSelect expand="lg" fixed='top' variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">CarShare...<GiCityCar color='yellow' size={45} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-nav-bar' />
                    <Navbar.Collapse id='responsive-nav-bar'>
                        <Nav className="ms-auto">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='clink'>Home</Link>
                            <Link to="brands" spy={true} smooth={true} offset={-100} duration={500} className='clink'>Brands</Link>
                            <Link to="fleet" spy={true} smooth={true} offset={-100} duration={500} className='clink' >Fleet</Link>
                            <Link to="clients" spy={true} smooth={true} offset={-100} duration={500} className='clink'>Clients</Link>
                            <Link to="service" spy={true} smooth={true} offset={-100} duration={500} className='clink'>Services</Link>
                            <Link to="guide" spy={true} smooth={true} offset={-100} duration={500} className='clink'>Guide</Link>
                            <Link to="aboutus" spy={true} smooth={true} offset={-10} duration={500} className='clink'>AboutUs</Link>
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='clink'>Contact</Link>
                            <Link to="login" spy={true} smooth={true} offset={-100} duration={500} className='clink' onClick={()=>navi("/login")}>Login</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Mynavbar