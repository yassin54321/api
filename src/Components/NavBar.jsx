import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
              <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home" ><img src="https://play-lh.googleusercontent.com/vC3cgFnGDBuEiQ70UK9wXfWBxoGa4gJVPMeZh2yZhHu-rCEIDeXPc6g6JnHWG3qCiw" alt="ops" style={{width:'40px',height:'40px'}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to={'/'}>Home</Link> </Nav.Link>
            <Nav.Link href="#features"><Link to={"/card/"}>football video match⚽</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to={'/Footer/'}> flashscore mobile 2023&copy;</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar