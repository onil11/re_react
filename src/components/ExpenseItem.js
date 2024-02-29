//import React, { Component } from 'react'
import './ExpenseItem.css'
import {MdEdit} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'

////////////////////////함수//////////////////////

const ExpenseItem = (props) => {
  return (
        <li className='item'>
          <div className='info'>
              <span className='expense'>{props.expense.charge}</span>
              <span className='amount'>{props.expense.amount}</span>
          </div>
          <div>
              <button className='edit-btn' onClick={() => props.handleEdit(props.expense.id)}><MdEdit /></button>
              <button className='clear-btn' onClick={() => props.handleDelete(props.expense.id)}><MdDelete /></button>
          </div>
        </li>
  )
}

///////////////////클래스//////////////////////
// class ExpenseItem extends Component {
//   render() {
//     return (
//         <li className='item'>
//             <div className='info'>
//                 <span className='expense'>{this.props.expense.charge}</span>
//                 <span className='amount'>{this.props.expense.amount}</span>
//             </div>
//             <div>
//                 <button className='edit-btn'><MdEdit /></button>
//                 <button className='clear-btn' onClick={() => this.props.handleDelete(this.props.expense.id)}><MdDelete /></button>
//             </div>
//         </li>
//     )
//   }
// }

export default ExpenseItem