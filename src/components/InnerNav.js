// SEARCH AND MUST LOGIN+SIGNUP ON LANDING PAGE - INNER NAV FOR SIGN UP/LOG OUT ONLY
// NEED TO BE LOGGED IN TO LEAVE A REVIEW, NOT TO SEARCH
import React from 'react'
import logo from '../images/logo.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export function InnerNav () {
    return (
        <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
          <Button variant="outline-success">Log Out</Button>
          <Button variant="outline-success">Sign Up</Button>
          <NavDropdown title="Reviews" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                Reviews
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Write a Review
              </NavDropdown.Item>
            </NavDropdown>
            <img className={styles.img} src={logo} alt='logo'/>
        </div>
    );
}

const styles = {
    img: {
        
    }

}