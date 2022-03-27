import React, { useState } from "react";
import Link from 'next/link';
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
import { useRouter } from "next/router";
import { prevent } from "../../utils/utils";
import { login } from "../../services/user-service";

const initialFormState = {
  email: '',
  password: ''
}

function Login() {

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
      const response = await login(formState);
      if (response) {
        setFormState(initialFormState);
        await router.push('/admin/dashboard')
      }
    }
    return false;
  }

  const validateFormData = () => {
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
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form onSubmit={handleFormSubmit} role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
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
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <Link
              className="text-light"
              href="/auth/forgot-password"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </Link>
          </Col>
          <Col className="text-right" xs="6">
            <Link
              className="text-light"
              href="/auth/register"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
