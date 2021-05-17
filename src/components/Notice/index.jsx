import React from 'react'
import {
    Notice,
    NoticeTitle,
    NoticeSubTitle,
    NoticeP,
    NoticeButtom,
    NoticeImg
} from './NoticeElements'

import Imagem from '../../images/dogs2.png'

const index = () => {
    return (
        <>
            <Notice>
                <NoticeImg src={Imagem} />
                <NoticeTitle>Acompanhe todas as noticias no nosso blog!</NoticeTitle>
                <NoticeSubTitle>Dedicamos uma pagina especialmente para seu pet</NoticeSubTitle>
                <NoticeP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
                </NoticeP>
                <NoticeButtom>Saiba Mais</NoticeButtom>
            </Notice>
        </>
    )
}

export default index
