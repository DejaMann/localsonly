import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// TOP NAV ON LANDING PAGE - DO NOT HAVE TO BE LOGGED IN JUST TO SEARCH

const LandingNav = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">LOCALS ONLY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Cities</Nav.Link>
            <Nav.Link href="#action2">Trucks</Nav.Link>
            <Nav.Link href="#action3">Reviews</Nav.Link>
            <Button variant="outline-success">Login</Button>
            <Button variant="outline-success">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default LandingNav