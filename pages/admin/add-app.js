import React, {useState} from "react";

import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import Admin from "layouts/Admin.js";
import {prevent} from "../../utils/utils";
import { createNewApp } from 'services/app-service';

const initialFormState = {
  name: '',
  type: undefined,
  framework: undefined,
  domain_name: '',
  user: '',
  description: ''
}

function AddApp() {

  const [formState, setFormState] = useState(initialFormState);

  const handleOnChange = (key, event) => {
    setFormState(currentState => {
      const newState = { ...currentState };
      newState[key] = event.target.value;
      return newState;
    })
  }

  const handleFormSubmit = async (event) => {
    prevent(event);
    const isValid = validateFormData();
    if (!isValid) return false;
    const response = await createNewApp(formState);
    if (!response) {
      console.log('Failed to create new app');
    }
    return false;
  }

  const validateFormData = () => {
    if (!formState?.name) {
      alert('Name is required');
      return false;
    }
    if (!formState?.type) {
      alert('Name is required');
      return false;
    }
    if (!formState?.framework) {
      alert('Name is required');
      return false;
    }
    return true;
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
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Add App</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="app-name"
                          >
                            Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="app-name"
                            placeholder="App Name"
                            type="text"
                            value={formState?.name}
                            required
                            onChange={(event) => handleOnChange('name', event)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="app-type">Type</label>
                          <Input id="app-type" type="select" required value={formState?.type}
                                 onChange={(event) => handleOnChange('type', event)}>
                            <option value="">Select Type</option>
                            <option>Web</option>
                            <option>Mobile</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="app-framework">Framework</label>
                          <Input id="app-framework" type="select" required value={formState?.framework}
                                 onChange={(event) => handleOnChange('framework', event)}>
                            <option value="">Select Framework</option>
                            <option value="Django">Django</option>
                            <option value="React Native">React Native</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="app-domain"
                          >
                            Domain
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="app-domain"
                            placeholder="Domain"
                            type="text"
                            value={formState?.domain}
                            onChange={(event) => handleOnChange('domain_name', event)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="app-user">User</label>
                          <Input id="app-user" type="select" value={formState?.user}
                                 onChange={(event) => handleOnChange('user', event)}>
                            <option value="">Select User</option>
                            <option>1</option>
                            <option>2</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Description</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about your app ..."
                        rows="4"
                        type="textarea"
                        value={formState?.description}
                        onChange={(event) => handleOnChange('description', event)}
                      />
                    </FormGroup>
                  </div>
                  <div className="text-center">
                    <Button color="primary" type="submit">
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

AddApp.layout = Admin;

export default AddApp;
