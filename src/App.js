//import { Component, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from './components/ExpenseList'
import Alert from "./components/Alert"
import "./App.css";
import {useState} from 'react'



 const App = () => {

  const [charge,setCharge] = useState('');

  const [amount, setAmount] = useState(0);

  const [alert, setAlert] = useState({show: false, type:'', text:''});

  const [id, setId] = useState('');
  const [edit, setEdit] = useState(false);

  const [expenses, setExpenses] = useState([
    {id: 1, charge: "렌트비", amount: 1600},
    {id: 2, charge: "교통비", amount: 2000},
    {id: 3, charge: "식비", amount: 400}
  ]);

  const handleCharge = (e) => {
    //console.log(e.target.value);
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    //console.log(e.target.value);
    setAmount(e.target.valueAsNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount !== "") {
      if(edit) {
        const newExpense = expenses.map(item => {
          return item.id === id ? {id: item.id, charge: charge, amount: amount} : item ;
        })
        setExpenses(newExpense);
      }else {
        const newExpense = {id: crypto.randomUUID(), charge:charge, amount:amount}
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
      }
      setCharge('');
      setAmount('');
      handleAlert({type:'success', text: '아이템이 생성되었습니다.'})
      setEdit(false);
    }else {
      console.log('error');
      handleAlert({type:'danger', text:'charge는 빈값이 아니며 , amout는 0보다 커야 됩니다.'});
    }
  }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => { 
      return expense.id !== id;
    })
    setExpenses(newExpenses);
    handleAlert({type:'success', text: '아이템이 삭제되었습니다.'})
  }

  const clearItems = () => {
    setExpenses([]);
  }

  const handleAlert = (alert) => {
    console.log({...alert})
    setAlert({show:true, ...alert});
    setTimeout(() => {
      setAlert({show: false});
    }, 7000);
  }

  const handleEdit = (id) => {
    const expense = expenses.find(item => {
      return item.id === id;
    })
    //console.log(id);
    const {charge, amount} = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  }
  return (
      <main className="main-container">
        {alert.show ? <Alert alert={alert} /> : null}
        <h1>예산 계산기</h1>
        <div style={{width:'100%', backgroundColor: 'white', padding: '1rem'}}>
            {/*extense form*/}
            <ExpenseForm handleCharge={handleCharge} 
                         handleAmount={handleAmount} 
                         charge={charge} 
                         amount={amount} 
                         handleSubmit={handleSubmit}
                         edit={edit}/>
        </div>
        <div style={{width:'100%', backgroundColor: 'white', padding: '1rem'}}>
            {/*extense list*/}
            <ExpenseList initialExpenses={expenses}
                         handleDelete={handleDelete}
                         handleEdit={handleEdit}
                         clearItems={clearItems}/>
        </div>
        <div style={{display:'flex', justifyContent:'end', marginTop:'1rem'}}>
          <p style={{fontSize:'2rem'}}>
            총지출: 
            <span>
              {expenses.reduce((acc,cur) => {
                return (acc + cur.amount);
              },0)}
              원
            </span>
          </p>
        </div>
      </main>
  )
}

export default App;

// class App extends Component {

//   constructor(props) {
//     super(props);
//     //랜더링을 감지하기 위해 상태관리하는방법
//     this.state = {
//       expenses: [
//         {id: 1, charge: "렌트비", amount: 1600},
//         {id: 2, charge: "교통비", amount: 2000},
//         {id: 3, charge: "식비", amount: 400}
//       ]
//     }
//   }

//   handleDelete = (id) => {
//     let newExpenses = [];
//     if(!id) {
//     }else {
//       newExpenses = this.state.expenses.filter(expense => {
//         return expense.id !== id; 
//       })
//     }
    
//     console.log(newExpenses);
//     //state변경
//     this.setState({expenses: [...newExpenses]});
    
//   }

//   render() {
//     return (
//       <main className="main-container">
//         <h1>예산 계산기</h1>
//         <div style={{width:'100%', backgroundColor: 'white', padding: '1rem'}}>
//             {/*extense form*/}
//             <ExpenseForm />
//         </div>
//         <div style={{width:'100%', backgroundColor: 'white', padding: '1rem'}}>
//             {/*extense list*/}
//             <ExpenseList initialExpenses={this.state.expenses}
//                          handleDelete={this.handleDelete}/>
//         </div>
//         <div style={{display:'flex', justifyContent:'end', marginTop:'1rem'}}>
//           <p style={{fontSize:'2rem'}}>
//             총지출:
//               <span>원</span>
//           </p>
//         </div>
//       </main>
//     )
//   }
// }