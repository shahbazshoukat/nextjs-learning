import React, { useState } from "react";
import { useRouter } from 'next/router'
import { registerNewUser } from 'services/user-service';
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import Auth from "layouts/Auth.js";
import Link from "next/link";
import { prevent } from "../../utils/utils";

const initialFormState = {
  name: '',
  email: '',
  password: ''
}

function Register() {

  const router = useRouter()
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
    if (isValid) {
      const response = await registerNewUser(formState);
      if (response) {
        setFormState(initialFormState);
        await router.push('/auth/login')
      }
    }
    return false;
  }

  const validateFormData = () => {
    if (!formState?.name) {
      alert('Name is required');
      return false;
    }
    if (!formState?.email) {
      alert('Email is required');
      return false;
    }
    if (!formState?.password) {
      alert('Password is required');
      return false;
    }
    return true;
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form onSubmit={handleFormSubmit} role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name"
                    type="text"
                    value={formState?.name}
                    onChange={(event) => handleOnChange('name', event)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={formState?.email}
                    onChange={(event) => handleOnChange('email', event)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={formState?.password}
                    onChange={(event) => handleOnChange('password', event)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <Link
              className="text-light"
              href="/auth/login"
              onClick={(e) => e.preventDefault()}
            >
              <small>Already have an account?</small>
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
}

Register.layout = Auth;

export default Register;
