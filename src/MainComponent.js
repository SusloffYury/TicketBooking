
import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from './CardContainer'
import Content from './Content'
import InputPanel from './InputPanel'
import OrderCall from './OrderCall'



class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            registration: true,
            email: '',
            password: '',
            cards: Content,
            order: false,
            id: '',
            modalShow: false,
            setModalShow: false,
        }
    }
    handleChange = (e) => {
        const { name, value, id } = e.target
        this.setState({
            [name]: value

        })
        if (name === 'login' && this.state.email && this.state.password) {
            this.setState({
                registration: false
            })
        }

        if (name === 'logout') {
            this.setState({
                registration: true,
                email: '',
                password: '',
            })
        }

        if (name === 'orderCall') {
            this.setState(state => {
                return {
                    order: !state.order,
                    setModalShow: true
                }

            })
        }
        if (id) {
            this.setState({
                id: id - 1
            })
        }

    }

    OrdersContainer() {
        return this.state.cards.map((el) => {
            return <>
                <Col>
                    <CardContainer
                        id={el.id}
                        title={el.title}
                        text={el.text}
                        registration={this.state.registration}
                        handleChange={this.handleChange}
                    />
                </Col></>
        })
    }
    render() {
        let addModalClose = () => this.setState({
            setModalShow: false,
            order: false
        })
        let switchOrder = () => this.setState({
            order: true
        })
        console.log(
            `id =${this.state.id};
         registration =${this.state.registration};
         order -${this.state.order}; `)
        return (
            <Fragment>
                <InputPanel
                    handleChange={this.handleChange}
                    email={this.state.email}
                    registration={this.state.registration}
                />
                <Container>
                    <Row>
                        {(this.state.order) ?
                            <OrderCall onHide={addModalClose}
                                show={this.state.setModalShow}
                                id={this.state.cards[this.state.id].id}
                                title={this.state.cards[this.state.id].title}
                                text={this.state.cards[this.state.id].text}
                                registration={this.state.registration}
                                switchOrder={switchOrder}
                                handleChange={this.handleChange}
                            /> :
                            this.OrdersContainer()
                        }
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default MainComponent;