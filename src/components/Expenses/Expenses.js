import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from "../Card";
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    // const expenses = [
    //     {
    //         id: 'e1',
    //         title: "Car insurance",
    //         ammount: 294.11,
    //         date: new Date(2021, 2, 12),
    //     },
    //     {
    //         id: 'e2',
    //         title: "Paper",
    //         ammount: 29.11,
    //         date: new Date(2021, 5, 12),
    //     },
    //     {
    //         id: 'e3',
    //         title: "TV",
    //         ammount: 2999.11,
    //         date: new Date(2021, 6, 12),
    //     },
    //     {
    //         id: 'e3',
    //         title: "TV",
    //         ammount: 2999.11,
    //         date: new Date(2021, 7, 12),
    //     }
    // ];
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
                onChangeFilter={filterChangeHandler} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
}
export default Expenses;