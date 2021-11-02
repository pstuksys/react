import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmmount, setEnteredAmmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    }
    const ammountChangeHandler = (event) => {
        setEnteredAmmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmmount: event.target.value,
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            ammount: enteredAmmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData)
        setEnteredTitle('');
        setEnteredAmmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Ammount</label>
                    <input type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmmount}
                        onChange={ammountChangeHandler} />
                </div>
            </div>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date"
                        min="2021-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;