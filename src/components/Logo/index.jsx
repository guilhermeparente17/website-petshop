import React from 'react'
import {
    Nav, 
    NavLogo
} from './LogoElements'

import Imagem from '../../images/logo.png'

const index = () => {
    return (
        <>
            <Nav>
                <NavLogo src={Imagem} />
            </Nav>
        </>
    )
}

export default index
