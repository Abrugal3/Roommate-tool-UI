import React, { useEffect, useState } from 'react';
import {Button, Modal, Table} from "react-bootstrap";
import ExpenseForm from './ExpenseForm';
import TableRowExpenses from './TableRowExpenses';

function Expenses () {

    const [expenses, setExpenses] = useState([]);    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        fetch("/expenses")
            .then(response => response.json())
            .then(data => setExpenses(data));
    });

    const expenseRows = expenses.map(expense => <TableRowExpenses key={expense.id.toString()} expenseData={expense}/>);

    return(
        <div className="Expenses">
            <h1 className="Header">Expenses</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Expense</th>
                    <th>Assigned To</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {expenseRows}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <ExpenseForm create={true} closeModal={handleClose}/>
            </Modal>
            <Button variant="success" onClick={handleShow}>Add Expense</Button>
        </div>
    )
}

export default Expenses
