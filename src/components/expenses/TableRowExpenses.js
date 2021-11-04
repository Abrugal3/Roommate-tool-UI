import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import ExpenseForm from './ExpenseForm';

function TableRowExpenses(props) {
    
    const [showEdit, setShowEdit] = useState(false);
    const handleEditClose = () => setShowEdit(false);
    const handleEditShow = () => setShowEdit(true);
    const [showDel, setShowDel] = useState(false);
    const handleDelClose = () => setShowDel(false);
    const handleDelShow = () => setShowDel(true);

    return (
        <tr>
            <td>{props.expenseData.id}</td>
            <td>{props.expenseData.expense}</td>
            <td>{props.expenseData.roommate}</td>
            <td>${props.expenseData.price}</td>
            <td>{props.expenseData.date}</td>
            <td>
                <Button variant="info" className="button-margin" onClick={() => handleEditShow()}>
                    <FontAwesomeIcon icon={faEdit}/>
                </Button> 
                <Modal show={showEdit} onHide={() => handleEditClose()}>
                    <ExpenseForm create={false} data={props.expenseData} closeModal={handleEditClose}/>
                </Modal>

                <Button variant="danger" className="button-margin" onClick={() => handleDelShow()}>
                    <FontAwesomeIcon icon={faTrash}/>
                </Button> 
                <Modal show={showDel} onHide={() => handleDelClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Delete this expense?</h4>
                    <Button variant="danger" className="button-margin" onClick={ async () => {
                        await fetch("/expenses/" + props.expenseData.id, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            }
                    })
                    handleDelClose()
                    }}>
                        Delete
                    </Button> 
                    <Button variant="secondary" className="button-margin" onClick={() => handleDelClose()}>
                        Cancel
                    </Button>
                </Modal.Body>
                </Modal>
            </td>
        </tr>
    )
}

export default TableRowExpenses