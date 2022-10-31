import React, {useState//, useEffect
} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


let DUMMY_EXPENSE = [   // we have made an array of objects
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

const App = () =>{

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  // useEffect(()=>{
  //   fetch('').then(            ----> make this fetchData function   async await
  //     response => {
  //       return response.json();
  //     }
  //   ).then(
  //     data => {
  //       console.log(data);
  //     }
  //   );                         -------
  // },[]);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  // For sending data to database via API
  // const addExpenseHandler = (expense) => {
  //   fetch('', {
  //     method: 'POST',
  //     body: JSON.stringify(expense),
  //     headers: {
  //           'content-Type' : 'application/json'
  //     }
  //   }).then(
  //     response =>{
  //       fetchData();
  //     }
  //   );
  // };

  return (
    <div>
      <h3>Personal Expense Notepad</h3>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;