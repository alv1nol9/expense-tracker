import React, { useState } from 'react'
import { expenses } from '../data/expenses'

const SearchBar = () => {
const items = expenses
const [searchTerm, setSearchTerm] = useState("")

function handleSearch(e){
e.preventDefault()
setSearchTerm(e.target.value)
}  
    
    const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )


  return (

    <div>
       <input type="text" 
              placeholder=''
              value={searchTerm}
              onChange={handleSearch }/> 
    </div>
  )
}

export default SearchBar