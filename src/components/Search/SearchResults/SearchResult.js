// Will host/display one individual search result
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from 'react-rating'


export function SearchResult () {
    return (
        <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" /> 
      <Card.Body>
        <Card.Title>Truck/shop name</Card.Title>
        <Card.Text>
         Truck/shop description
         <br />
         Address {/* Google maps API for address? */}
         <br />
         <Rating />
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Card>
        </div>
    );
}

