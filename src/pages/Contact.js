import React from "react";

import { Button, Form, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Contact = () => {

    const handleSubmit = () =>{
        console.log('SUBMIT');
    };

    console.log('SE MONTA EL COMPONENTE CONTACT');

    return (
        <div className="contact">
            <h2>Contact</h2>
            <Row>
                <Col>
                    <div className="contact-form">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="validationName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type="text" placeholder="Type your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="Type your Email" />
                                <Form.Text className="text-muted">
                                   I'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control required as="textarea" placeholder="Type your message..." />
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I acept recieve emails from you" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Send!
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <div className="contact-data">
                        <p>If you want email me and tell me about your project, feel you free to send a message to marceloagoston91@gmail.com</p>

                        <p>I can help you to design new your website, software, improve an existing one using the best practices and with a strong process focusing in your needs and the comunication.</p>

                        <p>Currently based in Argentina and avaible for a remote friendly work</p>

                        <p>Do you want to checkout my repos or my linkedin?</p>

                        <p>
                            <ListGroup horizontal>
                                <ListGroupItem><a href="https://www.linkedin.com/in/marcelo-agoston/">LinkedIn</a></ListGroupItem>
                                <ListGroupItem><a href="https://github.com/marceloagoston/">GitHub</a></ListGroupItem>
                                <ListGroupItem><a href="https://gitlab.com/marceloagoston">GitLab</a></ListGroupItem>
                            </ListGroup>
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
      );
};

export default Contact;