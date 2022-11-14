// SEARCH AND LOGIN/SIGNUP ONCE PAST THE LANDING PAGE
// ONLY NEED TO BE LOGGED IN TO LEAVE A REVIEW, NOT TO SEARCH

import React from 'react'
import logo from '../images/logo.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



export function InnerNav () {
    return (
        <div>
            <img style={styles.img} src={logo} alt='logo'/>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
          <Button variant="outline-success">Login</Button>
          <Button variant="outline-success">Sign Up</Button>
        </div>
    );
}

const styles = {
    img: {
        width: '10px',
    }

}