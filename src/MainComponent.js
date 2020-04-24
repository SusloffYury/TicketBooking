
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from './CardContainer'
import Content from './Content'
import InputPanel from './InputPanel'
import OrderCall from './OrderCall'
import History from './History'

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
            historyView: false,
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
            History = History.splice(0, History.length);
            this.setState({
                registration: true,
                email: '',
                password: '',
                historyView: false,

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
        if (name === 'confirm') {
            let date = Date()
              
            const card = this.state.cards[this.state.id]
            card.time = date
            History.push(card)
        }

        if (name === 'history') {
            this.setState(state => {
                return {
                    historyView: !state.historyView
                }

            })
        }

        if (id) {
            this.setState({
                id: id - 1
            })
        }
    }


    OrdersContainer = () => {

        const CardContext = this.state.historyView ? History : this.state.cards
        return CardContext.map((el) => {
            return <>
                <Col>
                    <CardContainer
                        className='cards'
                        id={el.id}
                        title={el.title}
                        text={el.text}
                        time={el.time}
                        handleChange={this.handleChange}
                        registration={this.state.registration}
                        historyView={this.state.historyView}

                    />
                </Col></>

        })
    }



    render() {

        console.log(`id = ${this.state.id}   
       history =${this.state.history}
      history type = ${typeof this.state.history}
      cards type = ${typeof this.state.cards}
        
       `

        )

        let addModalClose = () => this.setState({
            setModalShow: false,
            order: false
        })

        return (
            <>
                <header><InputPanel
                    handleChange={this.handleChange}
                    email={this.state.email}
                    registration={this.state.registration}
                />
                </header>

                <Container>
                    <Row>
                        {
                            (this.state.order) ?
                                <OrderCall
                                    id={this.state.cards[this.state.id].id}
                                    title={this.state.cards[this.state.id].title}
                                    text={this.state.cards[this.state.id].text}
                                    show={this.state.setModalShow}
                                    onHide={addModalClose}
                                    handleChange={this.handleChange}
                                /> :
                                this.OrdersContainer()


                        }
                    </Row>
                </Container>
                <footer className="Footer">

                </footer>
            </>
        )
    }

}
export default MainComponent;