import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviesContextProvider from './Context/movieContextProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Components/Movies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoviesPage from './Pages/MoviesPage'
import MovieDetail from './Components/MovieDetail'
import NavBar from "./Components/NavBar"
import About from './Pages/about'
import Contact from './Pages/contact'
function App() {
 

  return (
    <>
    <MoviesContextProvider>
    <BrowserRouter>
   <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Movies></Movies>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
     <Route path="/movies/:id" element={<MovieDetail />} /> 
     </Routes>
    </BrowserRouter>
     </MoviesContextProvider>
    </>
  )
}

export default App
