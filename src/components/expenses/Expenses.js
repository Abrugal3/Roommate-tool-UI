import React from 'react';
import {Button, Table} from "react-bootstrap";



function Expenses () {

    async function fetchExpenses(){
        fetch("/expenses")
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return(
        <div className="Expenses">
            <h1 className="Header">Expenses</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Chore</th>
                    <th>Assigned To</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                </tbody>
            </Table>
            <Button className="expense-btn" variant="dark" onClick={() => fetchExpenses()}><h1>Expenses</h1></Button>
        </div>
    )
}

export default Expenses
