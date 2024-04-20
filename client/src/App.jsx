import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import CResearch from './Pages/CResearch'
import UResearch from './Pages/UResearch'
import Research from './Pages/Research'
import RHeader from './components/HeaderResearch'
import RResearch from './Pages/RResearch'
import PProduct from './Pages/PProduct'
import RproductsHeader from './components/RproductsHeader'
import Footer from './components/Footer'






export default function App() {
  return (
    <BrowserRouter>

    <Header/>
    <Routes>

      <Route path='/CResearch' element={(
       <>
         <RHeader/>
         <CResearch/>
       </>
       
      )}

      />
      <Route path='/UResearch' element={(
        <>
          <RHeader/>
          <UResearch/>
        </>
        
       )}

      />

<Route path='/RResearch' element={(
        <>
          <RHeader/>
          <RResearch/>
        </>
        
       )}

      />

<Route path='/Research' element={(
        <>
          <RproductsHeader/>
          <Research/>
          <br/><br/>
          <Footer/>
        </>
        
       )}

      />

<Route path='/PProduct' element={(
        <>
          <RproductsHeader/>
          <PProduct/>
          <br/><br/>
          <Footer/>
        </>
        
       )}

      />    
    </Routes>
   


    </BrowserRouter>
  )
}

