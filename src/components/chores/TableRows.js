import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import ChoreForm from "./ChoreForm";

function TableRows (props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteChore = async () => {
        await fetch("/chores/" + props.choreData.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
    }

        return(
        <tr>
            <Modal show={show} onHide={handleClose}>
                <ChoreForm  update={true} choreId={props.choreData.id} choreData={props.choreData}/>
            </Modal>
            <td>{props.choreData.id}</td>
            <td>{props.choreData.choreName}</td>
            <td>{props.choreData.date}</td>
            <td>{props.choreData.roommate}</td>
            <td>
                <Button variant="info" className="button-margin" onClick={handleShow}>
                    <FontAwesomeIcon icon={faEdit}/>
                </Button>
                <Button variant="danger" onClick={deleteChore}>
                    <FontAwesomeIcon icon={faTrash}/>
                </Button>
            </td>
        </tr>
    )
}

export default TableRows
