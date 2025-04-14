import React, { useState } from 'react'
import AddExpense from './AddExpense'

const DisplayExpense = () => {

    function AddNewExpense(newExpense){
        const [items, setItems]= useState([{expense:"Expense",description:"Description",price:"Price"}])
    }

  return (
    <div>
        <h2>Your expenses</h2>
       <table>
        <thead>
            <tr>
                <th>Expense</th>
                <th>Descripton</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, index)=>
             <tr key={index}>
          <td>{item.expense}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
             </tr>
            
            )}
        </tbody>
       </table>
       <AddExpense onAddExpense={addNewExpense} />
    </div>
  )
}

export default DisplayExpense