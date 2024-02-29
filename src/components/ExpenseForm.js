//import React, { Component } from 'react'
import {MdSend} from 'react-icons/md'
import './ExpenseForm.css';
/////////////react hook 방식////////////////////
const ExpenseForm = (props) => {
  return (
    <form onSubmit={(e) => {props.handleSubmit(e)}}>
      <div className='form-center'>
          <div className='form-group'>
              <label htmlFor='charge'>지출 항목</label>
              <input type='text' className='form-control' id='charge' name='charge' placeholder='예) 렌트비' value={props.charge} onChange={(e) => {props.handleCharge(e)}} ></input>
          </div>
          <div className='form-group'>
          <label htmlFor='amount'>비용</label>
              <input type='number' className='form-control' id='amount' name='amount' placeholder='비용' value={props.amount} onChange={(e) => {props.handleAmount(e)}} ></input>
          </div>
      </div>
      <button type='submit' className='btn'>
            {props.edit ? '수정' : '제출'}
            <MdSend className='btn-icon' />
      </button>
    </form>
  )
}


////////////////클래스방식////////////////////
// class ExpenseForm extends Component {
//   render() {
//     return (
//       <form>
//         <div className='form-center'>
//             <div className='form-group'>
//                 <label htmlFor='charge'>지출 항목</label>
//                 <input type='text' className='form-control' id='charge' name='charge' placeholder='예) 렌트비' ></input>
//             </div>
//             <div className='form-group'>
//             <label htmlFor='amount'>비용</label>
//                 <input type='number' className='form-control' id='amount' name='amount' placeholder='비용' ></input>
//             </div>
//         </div>
//         <button type='submit' className='btn'>
//             제출
//             <MdSend className='btn-icon' />
//         </button>
//       </form>
//     )
//   }
// }

export default ExpenseForm;