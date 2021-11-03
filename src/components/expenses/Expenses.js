import React, { useEffect, useState } from 'react';
import {Table} from "react-bootstrap";
import TableRowExpenses from './TableRowExpenses';

function Expenses () {

    const[expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetch("/expenses")
            .then(response => response.json())
            .then(data => setExpenses(data));
    });

    const expenseRows = expenses.map(expense => <TableRowExpenses expenseData={expense}/>);

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
                </tr>
                </thead>
                <tbody>
                    {expenseRows}
                </tbody>
            </Table>
        </div>
    )
}

export default Expenses
