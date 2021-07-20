import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = (props) => {
  return (
    <Form className="signup-form">
      <h1>
        <span className="font-weight-bold">Reel-Films</span>
      </h1>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <Button className="btn-lg btn-block btn-dark">Sign up</Button>
    </Form>
  );
};

export default Login;
