import React from 'react'
import {
    Comments,
    CommentsBg,
    CommentsFoto,
    CommentsContainer,
    CommentsCard,
    CommentsPerfil,
    CommentsName,
    CommentsP,
    CommentsData
} from './CommentsElements'
import Imagem from '../../images/dogs3.jpg'
import Perfil from '../../images/perfil1.jpg'
import Perfil2 from '../../images/perfil2.jpg'

const index = () => {
    return (
        <div>
            <Comments>
                <CommentsBg>
                    <CommentsFoto src={Imagem} />
                </CommentsBg>

                <CommentsContainer>
                    <CommentsCard>
                        <CommentsPerfil src={Perfil} />
                        <CommentsData>
                            <CommentsName>Elizabeth</CommentsName>
                            <CommentsP>Amei o atendimento. Super indico!</CommentsP>
                        </CommentsData>
                    </CommentsCard>

                    <CommentsCard>
                        <CommentsPerfil src={Perfil2} />
                        <CommentsData>
                            <CommentsName>Joana</CommentsName>
                            <CommentsP>Cuidaram muito bem do meu gato!</CommentsP>
                        </CommentsData>
                    </CommentsCard>
                </CommentsContainer>
            </Comments>
        </div>
    )
}

export default index
