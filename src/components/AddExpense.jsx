import React, { useState } from 'react'


const AddExpense = () => {
 
  const [expense, setExpense]=useState("")
  const [price, setPrice]=useState("")
  const [description, setDescription]=useState("")

  function handleClick(e) {
    e.preventDefault(); 

    const newExpense = {
      expense,
      description,
      price,
    };

    onAddExpense(newExpense)

    setExpense('');
    setDescription('');
    setPrice('');
  }

  return (
    <div>
      <form className='add-expenses'>
        <input type="text" placeholder='Add expense here!' onChange={(e)=>setExpense(e.target.value)}/>
        <input type="text" placeholder='Add description here!' onChange={(e)=>setDescription(e.target.value)}/>
        <input type="number"  placeholder='Add! price here'onChange={(e)=>setPrice(e.target.value)}/>
      <button onClick={handleClick}>Sumbit</button>
      </form>
    </div>
  )
}

export default AddExpense