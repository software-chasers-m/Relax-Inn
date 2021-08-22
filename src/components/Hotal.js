import React, { Component } from 'react'
import { CardGroup, Card, Container, Row, Col, Button, ButtonToolbar, ButtonGroup, } from 'react-bootstrap'
export class Hotal extends Component {
    render() {
        
        return (
            <div>
                <Container>
                    <Row  >
                        <CardGroup>

                            {
                                this.props.data.map(item => {
                                    return (
                                        <Col xs={6} md={4}>
                                            <Card>
                                                <Card.Body>
                                                    
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Img variant="top" src={item.img} style={{ 'height': '370px' }} />

                                                    <Card.Text>
                                                        {item.address}
                                                        <br />
                                                        <Button variant="danger">price</Button>
                                                        </Card.Text>
                                                        <Card.Text>
                                                        {/* {item.price.current} */}
                                                        <Button variant="danger" style={{ 'width': '200px' }} >Book now </Button>
                                                        </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>)

                                })}
                        </CardGroup>
                    </Row>

                </Container>
                <div >
                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups"
                        style={{ 'justify-content': 'space-around' }}>
                        <ButtonGroup className="me-2" aria-label="First group"  >
                            <Button variant="secondary">1</Button>{' '}
                            <Button variant="secondary">2</Button>{' '}
                            <Button variant="secondary">3</Button>{' '}
                            <Button variant="secondary">4</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

export default Hotal
