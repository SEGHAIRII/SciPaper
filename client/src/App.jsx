import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage'
import ResultsPage from './pages/ResultsPage'
import { useSelector } from 'react-redux';
import ArticlePage from './pages/ArticlePage'
import ProfilePage from './pages/ProfilePage';
import FavouritesPage from './pages/FavouritesPage';


function App() {
  
  const user =useSelector(state=>state.data.user.user)
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route index element={user?<SearchPage/>:<HomePage/>}></Route>
          <Route path='/search' element={<ResultsPage/>}></Route>
          <Route path='article/:id' element={<ArticlePage/>}></Route>
          <Route path='profile' element={<ProfilePage/>}></Route>
          <Route path='favourites' element={<FavouritesPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
