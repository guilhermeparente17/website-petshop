import React from 'react'
import Logo from '../components/Logo'
import { GlobalStyle } from '../globalStyles'
import Image from '../components/Image'

const Home = () => {
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <Image />
        </div>
    )
}

export default Home
