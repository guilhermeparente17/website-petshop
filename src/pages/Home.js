import React from 'react'
import Logo from '../components/Logo'
import { GlobalStyle } from '../globalStyles'
import Image from '../components/Image'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Services from '../components/Services'

const Home = () => {
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <Image />
            <Navbar />
            <Welcome />
            <Services />
        </div>
    )
}

export default Home
