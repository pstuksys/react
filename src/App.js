import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';




function App() {
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

  const addExpenseHandler = expense => {
    console.log('in app.js');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;


