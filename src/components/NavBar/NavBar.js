import React, { useState } from 'react';
import { Button, Container, Form, InputGroup, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import AddMovie from '../AddMovie/AddMovie';

const NavBar = ({
  setRatingChange,
   setSearchInput,
   ratingChange, 
  newMovie,
  setNewMovie,
  handleSave, handleClose, show, setShow
}) => {
 
  const ratingChanged = (rating) =>{
    setRatingChange(rating);
  };
  const handleChange = (e)=>{
    setSearchInput(e.target.value)
  };

  
  const handleShow = () => setShow(true);

  
  return (
    <>
   
    <Navbar bg="dark align-items-baseline" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movie APP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Button variant="light" onClick={handleShow} >Add New Movies</Button>{' '}

        </Nav>
        </Container>

       
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Search
        </InputGroup.Text>
        <Form.Control
        onChange={handleChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
         <ReactStars
          count={5}
          value={ratingChange}
         onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          edit={true}
         
        />
      </InputGroup>{" "}
     
    </Navbar>
    <AddMovie
     show={show} 
    handleClose={handleClose}
    newMovie={newMovie} 
    setNewMovie={setNewMovie}
    handleSave={handleSave} />
   
  </>
  )
}

export default NavBar