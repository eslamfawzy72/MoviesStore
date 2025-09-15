import React, { useContext, useState } from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesContext } from '../Context/movieContextProvider'

function NavScrollExample() {
  const { searchTerm, setSearchTerm, searchMovies } = useContext(moviesContext); 

  const handleSearch = (event) => {
    event.preventDefault();
    searchMovies(searchTerm); // Use the search function from context
  }

  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Movies Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;