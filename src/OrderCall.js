
import React from 'react';
import {Modal, Button} from 'react-bootstrap'


function OrderCall(props) {
          return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {props.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <p>
               {props.text + props.id}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
               name = 'confirm'
               onClick={props.handleChange}>
                 Confirm
               </Button>
              <Button onClick={props.onHide} 
              >Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      
     export default OrderCall;
      