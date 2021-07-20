import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import '../Login/login.css'

const Signup = (props) => {
  return (
    <Form className="signup-form">
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
      <Button className="btn-lg btn-block btn-dark">Sign up</Button>
      <a href='/' className='log-in'>Have an account already? Log in.</a>
      </div>
    </Form>
  );
};

export default Signup;
