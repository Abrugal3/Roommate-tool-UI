import React, {useEffect, useState} from 'react';
import {Button, Modal, Table} from "react-bootstrap";
import TableRows from "./TableRows";
import ChoreForm from "./ChoreForm";

function Chores () {

    const [choreData, setChoreData] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch("/chores")
            .then(response => response.json())
            .then(response => setChoreData(response));
    });

    const choreRow = choreData.map(choreData => <TableRows choreData={choreData} />)
    return(
        <div className="Chore">
            <h1 className="Header">Chores</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Chore</th>
                    <th>Date</th>
                    <th>Assigned To</th>
                    <th>Changes</th>
                </tr>
                </thead>
                <tbody>
                    {choreRow}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <ChoreForm />
            </Modal>
            <Button onClick={handleShow} />
        </div>
    )
}

export default Chores
