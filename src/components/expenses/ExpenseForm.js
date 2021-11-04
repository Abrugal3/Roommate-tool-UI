import React, {useState} from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import { propTypes } from 'react-bootstrap/esm/Image';
import TableRowExpenses from './TableRowExpenses';


function ExpenseForm (props) {

    const [expense, setExpense] = useState(props.create?"":props.data.expense);
    const [roommate, setRoommate] = useState(props.create?"":props.data.roommate);
    const [price, setPrice] = useState(props.create?"":props.data.price);
    const [date, setDate] = useState(props.create?"":props.data.date);


    const createExpense = async () => {
        //Expense data object to be inserted
        const newExpense = {expense, roommate, price, date}
        await fetch("/expenses", {                       
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newExpense)
        })
        props.closeModal();
    }

    const updateExpense = async () => {
        //Expense data object to be inserted
        const newExpense = {expense, roommate, price, date}
        await fetch("/expenses/" + props.data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newExpense)
        })
        props.closeModal();
    }

    return(
        <div>
            <Modal.Header closeButton>
                <Modal.Title>{!props.create?"Update Expense":"Enter Expense"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formChoreName">
                        <Form.Label className="label">Expense Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Expense" 
                            value={expense}
                            onChange={e => setExpense(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRoommate">
                        <Form.Label className="label">Roommate</Form.Label>  
                        <Form.Control 
                            type="text" 
                            placeholder="Enter roommate name" 
                            value={roommate}
                            onChange={e => setRoommate(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label className="label">Price</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter price amount" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label className="label">Date</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="MM/DD/YYYY" 
                            value={date}
                            onChange={e => setDate(e.target.value)}/>
                    </Form.Group>
                    {props.create?
                        <Button variant="success" onClick={createExpense}>
                            Submit
                        </Button>
                        :
                        <Button variant="info" onClick={updateExpense}>
                            Update
                        </Button>
                    }
                </Form>
            </Modal.Body>
        </div>
    )
}

export default ExpenseForm
