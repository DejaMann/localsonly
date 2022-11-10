import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



export function SearchBar() {
    return (
        <div>
            <InputGroup className={"mb-3"}>
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                    <Form.Control
                        placeholder="Hidalgo, Cortes .."
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
        </div>

    )
}

