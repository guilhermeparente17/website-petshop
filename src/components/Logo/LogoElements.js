import styled from 'styled-components'

export const Nav = styled.nav`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height: 80px;
    width: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
`

export const NavLogo = styled.img`
    width: 180px;
    height: 50px;
    position: absolute;
    left: 180px;

    @media screen and (max-width: 768px){
        left: 30px;
    }
`