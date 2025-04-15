import React, { useState } from 'react'
import { expenses } from '../data/expenses'

const DisplayExpense = () => {
  const [items, setItems] = useState(expenses)
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")

  const addExpenses = (e) => {
    e.preventDefault()

    const newExpense = {
      title,
      description,
      price
    }

    setItems([...items, newExpense])

    setTitle("")
    setDescription("")
    setPrice("")
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className="form" onSubmit={addExpenses}>
        <input
          id="title"
          type="text"
          placeholder="Expense"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          id="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <input
          id="price"
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  )
}

export default DisplayExpense
