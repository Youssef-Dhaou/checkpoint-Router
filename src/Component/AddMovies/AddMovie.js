import React, { useState } from "react";

import { Button, Modal, Form } from "react-bootstrap";
import   {Link, useNavigate} from "react-router-dom"



const AddMovie = ({addCard}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [newMovies, setNewMovies]=useState({   
title : "",
posterURL : "",
description : "",
rating : "",
year : "",
genre:"",
time:"",
actor:"",

})
  const handleChange=(e)=>{
    setNewMovies({...newMovies, [e.target.name]: e.target.value})
}
const navigate = useNavigate()
const mySubmitHandler = (event) => {
  event.preventDefault();
  addCard(newMovies)
  setNewMovies({
    title : "",
    posterURL : "",
    description : "",
    rating : "",
    year : "",
    genre:"",
    time:"",
    actor:"",
  })
  handleClose();
  navigate('/')
}


  return (
    <>
       <Button variant="primary" onClick= {handleShow}>
        Add Movie Card
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" onChange={handleChange} type="text" placeholder="Movie Name" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> posterURL </Form.Label>
              <Form.Control
              name="posterURL"
              onChange={handleChange} 
                type="url"
                placeholder="https://pluspng.com/img-png/aquaman-png-aquaman-png-clipart-666.png"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> description </Form.Label>
              <Form.Control
              name="description"
              onChange={handleChange} 
                type="text"
                placeholder="Set the Movie's description here"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> rating/10 </Form.Label>
              <Form.Control
               name="rating"
              onChange={handleChange} 
                type="url"
                placeholder="Please rate the movie"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> genre </Form.Label>
              <Form.Control
              name="genre"
              onChange={handleChange} 
                type="text"
                placeholder="type of movie"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Actor </Form.Label>
              <Form.Control
               name="actor"
              onChange={handleChange} 
                type="text"
                placeholder="Set the Actor's Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>year</Form.Label>
              <Form.Control  name="year"  onChange={handleChange}  type="text" placeholder="Year" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>time</Form.Label>
              <Form.Control  name="time"  onChange={handleChange}  type="text" placeholder="how long the movie last" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={mySubmitHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
