import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import CResearch from './Pages/CResearch'
import Research from './Pages/Research'




export default function App() {
  return (
    <BrowserRouter>

    <Header/>

    <Routes>

      <Route path='/CResearch' element={<CResearch/>}/>
      <Route path='/Research' element={<Research/>}/>
    
    </Routes>
    </BrowserRouter>
  )
}

