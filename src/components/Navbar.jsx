import React,{useContext,useEffect} from 'react'
import '../css/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import ContextApi from '../context/ContextApi';
export default function NavigateBar() {
  const { totalPrice} = useContext(ContextApi);

  const setActiveClass = ({ isActive }) =>(
    isActive ?  "active text-decoration-none": "not-active text-decoration-none"
    )
  useEffect(()=>{

  },[totalPrice])
  // 
  return (
    <Navbar className='navbar-main' bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink end className={setActiveClass} to='/'><h5 className='nav-title'></h5>
            </NavLink>
          </Nav>
          <Nav className="ms-auto">
            <NavLink className={ setActiveClass } to='/carrito'><h6>🛒 ${ totalPrice.toLocaleString("es-CL")}</h6></NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}
