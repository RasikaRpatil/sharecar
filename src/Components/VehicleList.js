import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import DatePicker from "react-datepicker";
import './VehicleList.css'
import 'react-datepicker/dist/react-datepicker.css'


function VehicleList() {
    const [show, setShow] = useState(false);
    const [BookingDate, setBookingDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());

    const [VehicleList, setVehicleList] = useState([])
    const { vBrand } = useParams()


    const [BName, setBName] = useState("")
    const [BMobile, setBMobile] = useState("")
    const [BAddress, setBAddress] = useState("")
    const [Booking, setBooking] = useState("")
    const [selectVehi, setselectVehi] = useState({})



    useEffect(() => {

        const paramData = {
            cName: vBrand
        }
        axios.post("http://localhost:5000/getVehiclesByCompany", paramData)
            .then((result) => {
                console.log(result.data)
                setVehicleList(result.data)
            }).catch((err) => {
                console.log(err)

            });
    }, [])



    function handleShow(index) {
        setShow(true)
        setselectVehi(VehicleList[index])
    }
    function handleClose() {
        setShow(false)
    }
    function vehicleBooking() {
        const bookingData = {

            CustomerName: BName,
            CustomerMobile: BMobile,
            CustomerAddress: BAddress,
            FromDate: startDate,
            ToDate: endDate,
            VehicleId: selectVehi._id

        }
        axios.post("http://localhost:5000/AddBooking", bookingData)
            .then((result) => {
                console.log(result.data)


            }).catch((err) => {

            });
    }


    return (
        <div>
            <Container className='VehicleList-Container'>
                <Row>
                    {
                        VehicleList.map((Vehicle, idx) => {
                            return (
                                <Col sm={12} md={6} lg={3}>
                                    <Card className='Card'>
                                        <Card.Img className='Carimage' variant="top" src={"http://localhost:5000".concat(Vehicle.Image)} />
                                        <Card.Body>
                                            <Card.Title>Company : {Vehicle.Company}</Card.Title>
                                            <Card.Subtitle> Model : {Vehicle.Model}</Card.Subtitle>
                                            <h6> Rent : &#8377; {Vehicle.Rent}</h6>
                                            <Button variant="primary" onClick={() => { handleShow(idx) }}>Book Now</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )

                        })
                    }
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>BOOK NOW</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form onSubmit={vehicleBooking}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => setBName(e.target.value)} />
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" onChange={(e) => setBMobile(e.target.value)} />
                        <Form.Label >Address</Form.Label>
                        <Form.Control type="text" onChange={(e) => setBAddress(e.target.value)} />

                        <Row>
                            <Col>
                                <h6>From</h6>
                                <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                            </Col>
                            <Col>
                                <h6>To</h6>
                                <DatePicker selected={endDate} onChange={(date: Date) => setendDate(date)} />
                            </Col>
                        </Row>

                        <div className='Modelinfo'>
                            <h6>Company : {selectVehi.Company}</h6>
                            <h6>Model : {selectVehi.Model}</h6>
                            <h6>Rent : {selectVehi.Rent}</h6>
                        </div>
                        <Button variant="primary" type='submit' onClick={handleClose}>BOOK</Button>
                        <Button variant="primary" onClick={handleClose}>CANCEL</Button>

                    </Form>

                </Container>

            </Modal>

        </div >
    )
}

export default VehicleList