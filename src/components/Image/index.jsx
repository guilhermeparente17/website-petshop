import React from 'react'
import {
    ImagemContainer,
    FotoBg,
    Foto,
    ImageContent,
    ImageTitle,
    ImageP

} from './ImageElements'

import Imagem from '../../images/dog1.jpg'

const index = () => {
    return (
        <div>
            <ImagemContainer>
                <FotoBg>
                    <Foto src={Imagem} />
                </FotoBg>
                <ImageContent>
                    <ImageTitle>Uma casa com um cachorro é como um jardim com flores!</ImageTitle>
                    <ImageP>Entre em contato e reserve um dia para conhecer nossos pets</ImageP>
                </ImageContent>
            </ImagemContainer>
        </div>
    )
}

export default index
