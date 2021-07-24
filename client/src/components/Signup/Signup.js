import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../Login/login.css";
import API from '../../utils/API';

const Signup = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = event => {
    event.preventDefault();
    API.createUser({
      username: username,
      password: password
    })
    .then(res => {console.log(res)})
    .catch(err => console.log(err))
  }


  return (
    <div>
      <Form className="signup-form">
        <h2 className="text-center">Signup</h2>
        <FormGroup>
          <Label>Username</Label>
          <Input 
          type="username" 
          placeholder="Username" 
          onChange={(e) => setUsername(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}/>
        </FormGroup>
        <div className="button-div d-flex flex-column">
          <Button 
          className="btn-lg btn-block btn-dark"
          onClick={handleSignUp}
          >Sign up</Button>
          <a href="/" className="log-in">
            Have an account already? Log in.
          </a>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
