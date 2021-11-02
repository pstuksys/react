import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from "../Card";

function Expenses(props) {
    const expenses = [
        {
            id: 'e1',
            title: "Car insurance",
            ammount: 294.11,
            date: new Date(2021, 2, 12),
        },
        {
            id: 'e2',
            title: "Paper",
            ammount: 29.11,
            date: new Date(2021, 5, 12),
        },
        {
            id: 'e3',
            title: "TV",
            ammount: 2999.11,
            date: new Date(2021, 6, 12),
        },
        {
            id: 'e3',
            title: "TV",
            ammount: 2999.11,
            date: new Date(2021, 7, 12),
        }
    ];
    return (
        <Card className="expenses">
            <ExpenseItem title={expenses[0].title}
                ammount={expenses[0].ammount}
                date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title}
                ammount={expenses[1].ammount}
                date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title}
                ammount={expenses[2].ammount}
                date={expenses[2].date} />
            <ExpenseItem title={expenses[3].title}
                ammount={expenses[3].ammount}
                date={expenses[3].date} />
        </Card>
    )
}
export default Expenses;