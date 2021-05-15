import React from 'react'
import {
    Welcome,
    WelcomeTitle,
    WelcomeSubTitle,
    WelcomeP,
    WelcomeButton
} from './WelcomeElements'

const index = () => {
    return (
        <>
            <Welcome>
                <WelcomeTitle>Bem vindo ao PetShop!!</WelcomeTitle>
                <WelcomeSubTitle>Somos uma empresa especifica em animais de estimação.</WelcomeSubTitle>
                <WelcomeP>Temos diversos conteúdos para alegrar o seu pet! Como acessórios, ração, biscoitos caninos, coleiras personalziadas e
                    entre outros. Venha conferir!
                </WelcomeP>
                <WelcomeButton>Saiba Mais</WelcomeButton>
            </Welcome>
        </>
    )
}

export default index
