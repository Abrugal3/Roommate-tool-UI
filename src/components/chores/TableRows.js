import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import ChoreForm from "./ChoreForm";

function TableRows (props) {



    return(
        <tr>
            <td>{props.choreData.id}</td>
            <td>{props.choreData.choreName}</td>
            <td>{props.choreData.date}</td>
            <td>{props.choreData.roommate}</td>
            <td>
                <Button variant="info" type="submit" className="button-margin">
                    <FontAwesomeIcon icon={faEdit}/>
                </Button>
                <Button variant="danger" type="submit">
                    <FontAwesomeIcon icon={faTrash}/>
                </Button>
            </td>
        </tr>
    )
}

export default TableRows
