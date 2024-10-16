import React from 'react';
import { Navbar, Nav, Container, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1>Welcome to React Bootstrap</h1>
        <Button variant="primary">Click Me</Button>

        <Card style={{ width: '18rem', marginTop: '20px' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              This is a simple card using React Bootstrap.
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;