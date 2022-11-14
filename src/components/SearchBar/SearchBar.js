// THIS IS THE SEARCH BAR ON THE LANDING PAGE - DO NOT HAVE TO BE LOGGED IN TO SEARCH

import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



export function SearchBar() {
    return (
        <div>
            <InputGroup className={"mb-3"}>
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                    <Form.Control
                        placeholder="Tacos Las Dos Hermanas, El Asadero ..."
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
        </div>

    )
}

const styles = {

}
