import React, { Component, Fragment } from 'react'
import{Navbar,Nav,Form,Button} from 'react-bootstrap'

class InputPanel extends Component {
        render() {
         const inputForm = 
         <>
          <Form.Control type="email"
         placeholder="Enter email"
         className='inputForm'
         name='email'
         onChange={this.props.handleChange}
     />

     <Form.Control type="password"
         placeholder="Password"
         className='inputForm'
         name='password'
         onChange={this.props.handleChange}
     />
     </>
        const Label = <><p className = "Label">{this.props.email}</p>
        </>
        
        return (
            <header>
                <Fragment><Navbar bg="primary" expand="lg">
                    <Navbar.Brand href="#home">Ticket Booking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                        <Form inline>
                           { this.props.registration ? inputForm : Label}
                            <Button
                                variant="primary"
                                name={this.props.registration ? 'login': 'logout'}
                                type="button"
                                onClick={this.props.handleChange}
                            >{this.props.registration ? 'Sign Up': 'Log Out'}</Button>

                        </Form>
                    </Navbar.Collapse>
                </Navbar></Fragment>

            </header>



        )
    }

}


export default InputPanel;
