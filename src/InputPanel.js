import React from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

function InputPanel(props)  {
           const inputForm =
            <>
                <Form.Control type="email"
                    placeholder="Enter email"
                    className='inputForm'
                    name='email'
                    onChange={props.handleChange}
                />

                <Form.Control type="password"
                    placeholder="Password"
                    className='inputForm'
                    name='password'
                    onChange={props.handleChange}
                />
            </>
        const Label = <><p className="Label">{props.email}</p>
        </>

        return (
            <header>
                <>
                    <Navbar bg="primary" expand="lg">
                        <Navbar.Brand href="#home">Ticket Booking</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Button
                                    onClick={props.handleChange}
                                    name='history'>
                                    History</Button>
                            </Nav>
                            <Form inline>
                                {props.registration ? inputForm : Label}
                                <Button
                                    variant="primary"
                                    name={props.registration ? 'login' : 'logout'}
                                    type="button"
                                    onClick={props.handleChange}
                                >{props.registration ? 'Sign Up' : 'Log Out'}</Button>

                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </>

            </header>



        )
    }




export default InputPanel;
