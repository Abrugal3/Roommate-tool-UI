import React from 'react';
import {Table} from "react-bootstrap";

function Chores () {
    return(
        <div className="Chore">
            <h1 className="Header">Chores</h1>
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
        </div>
    )
}

export default Chores
