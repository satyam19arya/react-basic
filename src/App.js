import './App.css';
import Expenses from './components/Expenses';

function App(){
    let expenses = [   // we have made an array of objects
    {
      id: 'e1',
      title: 'school fee',
      amount: 900,
      date: new Date(2021,5 ,7)
    },
    {
      id: 'e2',
      title: 'car fee',
      amount: 500,
      date: new Date(2022,2 ,7)
    },
    {
      id: 'e3',
      title: 'bus fee',
      amount: 800,
      date: new Date(2021,3 ,7)
    },
    {
      id: 'e4',
      title: 'food fee',
      amount: 100,
      date: new Date(2022,4 ,7)
    }
  ];

  return (
    <div className="app-container">
      <h3>Expense notepad</h3>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;