import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "./Login.css";


const Login = () => {
   const navigate = useNavigate();
  const [user, setUser] = useState({
    username:"",
    password:""
  });
  
 

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  };

  
  const handleSubmit = async(e) => {
    e.preventDefault();
   
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: user.email, password: user.password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          // Save the auth token and redirect
         
          navigate("/");

      }
      else{
          alert("Invalid user");
      }
  
 
  }

  return (

    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                  <p className=" mb-3">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={user.username} name="username" onChange={handleChange} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={user.password} name="password" onChange={handleChange} />
                      </Form.Group>
                      <Button variant="primary" type="submit">Login</Button>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
  }
export default Login;
