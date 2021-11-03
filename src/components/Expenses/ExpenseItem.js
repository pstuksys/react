import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Card';
// import React, { useState } from 'react';

function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('updated!');
    //     console.log(title);
    // };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item_description">
                    <h2>{props.title}</h2>
                    <div className="expense-item_price">${props.ammount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;