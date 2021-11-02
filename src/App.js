import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


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
function App() {
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;


