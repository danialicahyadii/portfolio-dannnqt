import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import {navLinks} from '../data/index';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false)

  const changeBgColor = () => {
    if (window.scrollY > 10){
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }

  useEffect(()=>{
    changeBgColor();
    window.addEventListener('scroll', changeBgColor);
  })

  const toast = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      showCloseButton: true,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "info",
      title: "On Development"
    });
  }

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">Portofolio.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((nav, index)=> {
              return(
                <div className="nav-link" key={index}>
                  <NavLink className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                      } to={nav.path} end>
                      {nav.text}
                  </NavLink>
                  {/* <Nav.Link lassName={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                      } href={`#${nav.path}`} end>{nav.text}</Nav.Link> */}
                </div>
              )
            })}
          </Nav>
          <div className="text-center">
            {/* <button onClick={() => toast()} className="btn btn-outline-danger rounded-1 me-1">Join with us</button> */}
            <button onClick={() => toast()} className="btn btn-danger rounded-1 me-1">Login</button>
            {/* <button className="btn btn-outline-warning rounded-1">Register</button> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent