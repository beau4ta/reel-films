import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  BrowserRouter as 
  Link,
  useHistory
} from "react-router-dom";
import './login.css'
import API from '../../utils/API';



const Login = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  let history = useHistory();

  const handleLogin = event => {
    API.signIn({
      username: username,
      password: password
    })
    .then(res => {
      console.log(res)
      window.location.replace("/home")
    })
    .then(alert(`Hello ${username}`))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <Form className="login-form">
          <h2 className="text-center">Welcome back!</h2>
      <FormGroup>
        <Label>Username</Label>
        <Input
         type="username" 
         placeholder="Username"
         onChange={(e) => setUsername(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input 
        type="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />
      </FormGroup>
        <div className='button-div d-flex flex-column'>
          <br></br>
      <Button 
      className="btn-lg btn-block btn-dark"
      onClick={handleLogin}
      >Login</Button>
      <a href='/signup' className='sign-up'>Don't have an account? Sign up.</a>
      </div>
        </Form>
        </div>
  );
};

export default Login;
