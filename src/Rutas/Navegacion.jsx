import React from 'react'
import{BrowserRouter,Route,Routes,Navigate, NavLink} from "react-router-dom"
import{Home}from"../componentes/Home"
import{Dashboard}from"../componentes/Dashboard"
import{About}from"../componentes/About"
import{Header}from"../componentes/Header"
function Navegacion() {

  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <NavLink to="Home">
                    Home 
                </NavLink>
            </li>
            <li>
                 <NavLink to="About">
                    About 
                </NavLink>
            </li>
            <li>
                <NavLink to="Dashboard">
                    About 
                </NavLink>
            </li>
            <li>
                <NavLink to="Header">
                    Header
                </NavLink>
            </li>
        </ul>
    </nav>
    <Routes>
    <Route path='Home' element={<Home/>}/> 
    <Route path='About' element={<About/>}/> 
    <Route path='Dashboard' element={<Dashboard/>}/> 
    <Route path='Header' element={<Header/>}/> 


    
    </Routes>
    </BrowserRouter>



  )


}




export {Navegacion}
