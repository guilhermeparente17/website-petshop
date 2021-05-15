import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 80px;
    background: #fa5348;
`

export const NavMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    color: #fff;
`

export const NavItem = styled.li`
    margin: 0 40px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.1rem;

    
`

export const NavLink = styled.a`
    cursor: pointer;

    &:hover{
        border-bottom: 2px solid #fff;
    }
`