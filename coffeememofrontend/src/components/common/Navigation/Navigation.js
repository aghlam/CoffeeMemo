import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import logo from '../../../coffememo_logo.png'

function Navigation() {
    return (
        <Container>
            <Navbar bg="dark" className='text-light'>
                <Navbar.Brand href='/' className='text-light'>
                    <img 
                        alt='' 
                        src={logo}
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                    />{' '}
                    Coffee Memo
                </Navbar.Brand>
                <Nav.Link href='/' className='text-light'>Home</Nav.Link>
                <Nav.Link href='/about' className='text-light'>About</Nav.Link>
            </Navbar>
        </Container>
    )
}

export default Navigation
