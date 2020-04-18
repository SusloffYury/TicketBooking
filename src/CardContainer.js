import React  from 'react';
import{Card, Button} from 'react-bootstrap'


function CardContainer(props) {
    const button = <>
        <Button variant="danger"
            id={props.id}
            name='orderCall'
            onClick={props.handleChange}
        >Submit order</Button>
    </>
    return (
        <>
            {console.log(`id = ${props.id}`)}
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={props.image} />
                <Card.Body >
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {`${props.text} ${props.id}`}
                    </Card.Text>
                    {(props.registration) ? 'Please Sign Up' : button}

                </Card.Body>
            </Card>
        </>

    )
}

export default CardContainer;
