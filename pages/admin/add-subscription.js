import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col, Button,
} from "reactstrap";
import Admin from "layouts/Admin.js";
import {prevent} from "../../utils/utils";

const initialFormState = {
  user: '',
  plan: '',
  app: '',
  active: false
}

function AddSubscription() {

  const [formState, setFormState] = useState(initialFormState);

  const handleOnChange = (key, event) => {
    setFormState(currentState => {
      const newState = { ...currentState };
      newState[key] = event.target.value;
      console.log('handleOnChange: newState: ', newState)
      return newState;
    })
  }

  const handleFormSubmit = (event) => {
    console.log('handleFormSubmit: ', formState);
    if (!formState?.plan) {
      alert('Plan is required')
    }
    if (!formState?.app) {
      alert('App is required')
    }
    prevent(event);
    return false;
  }

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "200px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-default opacity-8" />
      </div>
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Add Subscription</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="subscription-user">User</label>
                          <Input id="subscription-user" type="select"
                                 value={formState?.user}
                                 onChange={(event) => handleOnChange('user', event)}>
                            <option value=''>Select User</option>
                            <option>1</option>
                            <option>2</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="subscription-plan">Plan</label>
                          <Input id="subscription-plan" type="select"
                                 value={formState?.plan}
                                 onChange={(event) => handleOnChange('plan', event)}>
                            <option value=''>Select Plan</option>
                            <option>1</option>
                            <option>2</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="subscription-app">App</label>
                          <Input id="subscription-app" type="select"
                                 value={formState?.app}
                                 onChange={(event) => handleOnChange('app', event)}>
                            <option value=''>Select App</option>
                            <option>1</option>
                            <option>2</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center">
                    <Button color="primary" type={"submit"}>
                      Save
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

AddSubscription.layout = Admin;

export default AddSubscription;
