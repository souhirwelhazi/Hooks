
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovie = ( {show,handleClose,
newMovie,setNewMovie,handleSave}) => {
 
   
 const handleChange =(e) => {
    setNewMovie({
        ...newMovie,
        [e.target.name] : e.target.value,
    });
 };
 
  return (
   
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" 
        placeholder="Put your Title Here..." 
        onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" 
        rows={3} 
        onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>PosterUrl</Form.Label>
        <Form.Control type="text"  
        name="posterUrl"
        placeholder="Put your Poster Url Here..." 
        onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" 
        name="rating"
        placeholder="Put your rating Here..." 
        onChange={handleChange}
        />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
  )
}

export default AddMovie


