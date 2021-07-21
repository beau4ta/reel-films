import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import './login.css'

const Login = (props) => {
  return (
    <div>
      <Form className="login-form">
          <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <div className='button-div d-flex flex-column'>
      <Button className="btn-lg btn-block btn-dark">Login</Button>
      <a href='/signup' className='sign-up'>Don't have an account? Sign up.</a>
      </div>
        </Form>
        </div>
  );
};

export default Login;
