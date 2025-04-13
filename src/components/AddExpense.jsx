import React from 'react'


const AddExpense = () => {


  return (
    <div>
      <form className='add-expenses'>
        <input type="text" placeholder='Add expense here!' />
        <input type="text" placeholder='Add description here!' />
        <input type="number"  placeholder='Add! price here'/>
      <button>Sumbit</button>
      </form>
    </div>
  )
}

export default AddExpense