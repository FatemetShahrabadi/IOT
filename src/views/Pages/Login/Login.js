import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                  <CardBody className="p-4 text-center">
                    <Form>
                      <h1>ورود</h1>
                      <p className="text-muted text-center">وارد حساب کاربری خود شوید</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="نام کاربری" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="گذرواژه" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="4">
                          <Button color="primary" className="px-4">ورود</Button>
                        </Col>
                        <Col xs="4">
                          <Button
                            color="primary"
                            onClick={() => window.location = '#/register'}
                            block>ثبت نام</Button>
                        </Col>
                        <Col xs="4" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>

                      </Row>
                    </Form>
                  </CardBody>
                </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
