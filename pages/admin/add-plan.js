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
  Col, Button,
} from "reactstrap";
import Admin from "layouts/Admin.js";
import { prevent } from "utils/utils";
import { PRICING_PLANS } from 'constants/constants';

const initialFormState = {
  name: '',
  price: PRICING_PLANS?.FREE?.price,
  description: ''
}

function AddPlan() {

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
    if (!formState?.name) {
      alert('Name is required')
    }
    if (!formState?.description) {
      alert('Description is required')
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
                    <h3 className="mb-0">Add Plan</h3>
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
                            htmlFor="plan-name"
                          >
                            Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="plan-name"
                            placeholder="Plan Name"
                            type="text"
                            value={formState.name}
                            minLength={1}
                            maxLength={20}
                            required
                            onChange={(event) => handleOnChange('name', event)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="plan-price">Price</label>
                          <Input id="plan-price" type="select" value={formState?.price}
                                 onChange={(event) => handleOnChange('price', event)}
                          >
                            {
                              Object.values(PRICING_PLANS)?.map(pricingPlan => {
                                return <option value={pricingPlan.price}>{pricingPlan?.name} (${pricingPlan?.price})</option>;
                              })
                            }
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
                        placeholder="A few words about your plan ..."
                        rows="4"
                        type="textarea"
                        value={formState?.description}
                        minLength={1}
                        required
                        onChange={(event) => handleOnChange('description', event)}
                      />
                    </FormGroup>
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

AddPlan.layout = Admin;

export default AddPlan;
