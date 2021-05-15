import React from 'react'
import {
    Nav,
    NavMenu,
    NavItem,
    NavLink
} from './NavbarElements'

const index = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavItem><NavLink>Home</NavLink></NavItem>
                    <NavItem><NavLink>Products</NavLink></NavItem>
                    <NavItem><NavLink>Services</NavLink></NavItem>
                    <NavItem><NavLink>Contact</NavLink></NavItem>
                </NavMenu>
            </Nav>
        </>
    )
}

export default index
