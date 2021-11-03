import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
const ExpensesList = (props) => {

    let expensesContent = <p>No expenses found.</p>

    if (props.expenses.length === 0) {
        return <h2 className="expenses-list_fallback">Found no expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map((expenses) => (
                <ExpenseItem
                    key={expenses.id}
                    title={expenses.title}
                    ammount={expenses.ammount}
                    date={expenses.date}
                />))}
        </ul>
    )
}
export default ExpensesList