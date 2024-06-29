import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import AddTodos from '../components/AddTodos'
import EditTodos from '../components/EditTodos'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-todos' element={<AddTodos />} />
        <Route path='/edit-todos/:id' element={<EditTodos /> } />
        {/* <Route path='*' element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default Routers
