

function TableRowExpenses(props) {

    return (
        <tr>
            <td>{props.expenseData.id}</td>
            <td>{props.expenseData.expense}</td>
            <td>{props.expenseData.roommate}</td>
            <td>${props.expenseData.price}</td>
            <td>{props.expenseData.date}</td>
        </tr>
    )
}

export default TableRowExpenses