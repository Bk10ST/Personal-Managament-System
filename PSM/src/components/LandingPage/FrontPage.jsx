import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"
import React from 'react'

const FrontPage = () => {
  return (
    <div>
     
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">OrganiMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">s
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Guide</Nav.Link>
           <div className="auth-btn">
           <Button variant="primary">Primary</Button>{" "}
            <Button variant="primary">Primary</Button>
           </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default FrontPage

