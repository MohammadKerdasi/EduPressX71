// nahla
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// ----------------------------------------

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LoginRegister.css"
// import React from 'react';

 export default  function Login() {
// nahla
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
// -------------------------------
  const [result, setResult] = React.useState("");
  const [result2, setResult2] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "339a9583-099a-4b84-a332-e4ed1657cbd2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const onSubmit2 = async (event) => {
    event.preventDefault();
    setResult2("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "339a9583-099a-4b84-a332-e4ed1657cbd2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult2("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult2(data.message);
    }
  };

  return (
 <>
 <section>
 <Container  className='d-flex   nz-c1'>
    <Container className='nz-d1'  data-aos="zoom-out-right">  
      <Form className='nz-f1' onSubmit={onSubmit}>
    <h1 className='nz-h1'>login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Email or username*" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className='nz-check' type="checkbox" label="Remember me" />
      </Form.Group>
      <Button className='nz-but NA-btn-effect'  type="submit">
        Login
      </Button>
      <Form.Text className="text-muted">
          Lost your password?
        </Form.Text>
        <span>{result}</span>
    </Form>
    
    </Container>
    <Container className='nz-d1' data-aos="zoom-out-left">  
      <Form className='nz-f1' onSubmit={onSubmit2}>
    <h1 className='nz-h1'>Register</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Email*" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        
        <Form.Control type="email" placeholder="Username*" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      
      <Button className='nz-but NA-btn-effect' type="submit">
        Register
      </Button>
      <span>{result2}</span>
    </Form>
  
    
    </Container>
    </Container>
    </section>
 
 </>
  );
}
