import React from 'react'
import {
    Services,
    FotoBg,
    Foto,
    ServicesContent,
    ServicesTitle,
    ServicesSubTitle,
    ServicesWrapper,
    ServicesCard,
    CardTitle,
    CardContent,
    CardButtom,
    Icon
} from './ServicesElements'
import Imagem from '../../images/dogs.jpg'


const index = () => {
    return (
        <>
            <Services>
                <FotoBg>
                    <Foto src={Imagem} />
                </FotoBg>
                <ServicesContent>
                    <ServicesTitle>Serviços</ServicesTitle>
                    <ServicesSubTitle>Conheca nossos serviços e venha conferir nosso atendimento</ServicesSubTitle>
                    <ServicesWrapper>
                        <ServicesCard>
                            <Icon />
                            <CardTitle>Banho</CardTitle>
                            <CardContent>Saiba mais sobre nossos banhos para cachorros e gatos. 
                                Cuidamos de cada um com muito carinho, se eles me morderem, ai eu cobro mais caro</CardContent>
                            <CardButtom>Saiba mais</CardButtom>
                        </ServicesCard>

                        <ServicesCard>
                            <Icon />
                            <CardTitle>Vacinação</CardTitle>
                            <CardContent>Vacinamos seus pets, vacina com validade mais caro, vacina vencida é mais barato.
                                Venha conferir nossa produção de vacina vencida!
                            </CardContent>
                            <CardButtom>Saiba mais</CardButtom>
                        </ServicesCard>

                        <ServicesCard>
                            <Icon />
                            <CardTitle>Dog Driver</CardTitle>
                            <CardContent>temos uma novidade, é o uber dog, saiba mais para mais informações.
                                Obs: se ele cagar ou mijar no carro, quem vai limpar é você! 😁
                            </CardContent>
                            <CardButtom>Saiba mais</CardButtom>
                        </ServicesCard>
                    </ServicesWrapper>
                </ServicesContent>
            </Services>
        </>
    )
}

export default index
