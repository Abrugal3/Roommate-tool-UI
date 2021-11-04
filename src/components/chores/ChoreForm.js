import React, {useState} from 'react';
import {Button, Modal, Form} from "react-bootstrap";


function ChoreForm (props) {

    const [choreName, setChoreName] = useState(props.update ? props.choreData.choreName : "")
    const [roommate, setRoommate] = useState(props.update ? props.choreData.roommate : "")
    const [date, setDate] = useState(props.update ? props.choreData.date : "")

    const newChore = async () => {
        const chore = {choreName, roommate, date}
        await fetch("/chores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chore)
        })
    }

    const updateChore =  async () => {
        const chore = {choreName, roommate, date}
        await fetch("/chores/" + props.choreId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chore)
        })
    }
        console.log(props.update)
        return (
            <div>

                <Modal.Header closeButton>
                    <Modal.Title>{props.update ? 'Update Chore' : 'Add a Chore'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formChoreName">
                            <Form.Label className="label">Chore Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Chore"
                              value={choreName}
                              onChange={e => setChoreName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRoommate">
                            <Form.Label className="label">Roommate</Form.Label>
                            <Form.Control type="text" placeholder="Enter Roommate"
                              value={roommate}
                              onChange={e => setRoommate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label className="label">Date</Form.Label>
                            <Form.Control type="date" placeholder="MM-DD-YYYY"
                              value={date}
                              onChange={e => setDate(e.target.value)}
                            />
                        </Form.Group>
                        {props.update ?
                            <Button variant="primary" onClick={updateChore}>
                                Update
                            </Button>
                            :
                            <Button variant="primary" onClick={newChore}>
                            Submit
                        </Button>
                        }
                    </Form>
                </Modal.Body>
            </div>
        )
}
export default ChoreForm
