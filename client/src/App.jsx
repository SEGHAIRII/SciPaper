import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage'
import { useSelector } from 'react-redux';


function App() {
  
  const user =useSelector(state=>state.data.user.user)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={user?<SearchPage/>:<HomePage/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
