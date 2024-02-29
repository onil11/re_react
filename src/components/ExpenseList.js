//import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';
import {MdDelete} from 'react-icons/md'

/////////////함수형방식/////////////////
const ExpenseList = (props) => {
  //console.log(props)
  return (
      <>
        <ul className='list'>
            {/*expense item */}
            {props.initialExpenses.map(expense => 
                <ExpenseItem expense={expense} 
                             key={expense.id}
                             handleDelete={props.handleDelete}
                             handleEdit={props.handleEdit}
                />
            )}
        </ul>
        { props.initialExpenses.length > 0 ?
          <button className='btn' onClick={() => props.clearItems() }>
              목록 지우기
              <MdDelete />
          </button>
          : 
          null
        }
      </>
  )
}


///////////////클래스방식///////////////
// class ExpenseList extends Component {
//   render() {
//     return (
//       <>
//         <ul className='list'>
//             {/*expense item */}
//             {this.props.initialExpenses.map(expense => 
//                 <ExpenseItem expense={expense} key={expense.id}
//                              handleDelete={this.props.handleDelete}
//                 />
//             )}
//         </ul>
//         <button className='btn' onClick={() => {this.props.handleDelete()}}>
//             목록 지우기
//             <MdDelete />
//         </button>
//       </>
//     )
//   }
// }

export default ExpenseList