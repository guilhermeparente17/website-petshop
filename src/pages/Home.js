import React from 'react'
import Logo from '../components/Logo'
import { GlobalStyle } from '../globalStyles'
import Image from '../components/Image'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <Image />
            <Navbar />
        </div>
    )
}

export default Home
