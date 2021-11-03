import React from 'react';

function TableRows (props) {
    console.log(props)
    return(
        <tr>
            <td>{props.choreData.id}</td>
            <td>{props.choreData.choreName}</td>
            <td>{props.choreData.date}</td>
            <td>{props.choreData.roommate}</td>
        </tr>
    )
}

export default TableRows
