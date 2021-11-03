import React from 'react';
import {Button, Form} from "react-bootstrap";

function ChoreForm () {
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formChoreName">
                <Form.Label className="label">Chore Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Chore" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRoommate">
                <Form.Label className="label">Roommate</Form.Label>
                <Form.Control type="text" placeholder="Enter Roommate" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label className="label">Date</Form.Label>
                <Form.Control type="text" placeholder="MM-DD-YYYY" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ChoreForm
