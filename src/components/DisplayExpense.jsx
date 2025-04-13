import React, { useState } from 'react'
import AddExpense from './AddExpense'

const DisplayExpense = () => {

    const [items, setItems] = useState(["Expense","Description","Price"])

  return (
    <div>
        <h2>Your expenses</h2>
       <table>
        <thead>
            <tr>
                {items.map((item, index)=>
                <th key={index}>{item}</th> )}
            </tr>
        </thead>
        <tbody>
            {/*map expenses here*/}
        </tbody>
       </table>
    </div>
  )
}

export default DisplayExpense