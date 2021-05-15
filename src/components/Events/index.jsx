import React from 'react'
import {
    Events,
    EventsTitle,
    EventsSubTitle,
    EventsWrapper,
    EventsCard,
    EventsData,
    DataDay,
    DataMonth,
    CardTitle,
    CardP,
    CardButtom
} from './EventsElements'

const index = () => {
    return (
        <>
            <Events>
                <EventsTitle>Novidades e Eventos</EventsTitle>
                <EventsSubTitle>Descubra nosso calendario de eventos e traga seu pet!</EventsSubTitle>
                <EventsWrapper>
                    <EventsCard>
                        <EventsData>
                            <DataDay>21</DataDay>
                            <DataMonth>Maio</DataMonth>
                        </EventsData>
                        <CardTitle>Competicao de Beleza</CardTitle>
                        <CardP>Traga seu caozinho e o mais lindo vai ganhar um premio muito especial!</CardP>
                        <CardButtom>Saiba mais</CardButtom>
                    </EventsCard>

                    <EventsCard>
                        <EventsData>
                            <DataDay>26</DataDay>
                            <DataMonth>Maio</DataMonth>
                        </EventsData>
                        <CardTitle>Promoção</CardTitle>
                        <CardP>Dia de promoções para nossos serviços, muita coisa boa e finji q tem mais coisa boa ai</CardP>
                        <CardButtom>Saiba mais</CardButtom>
                    </EventsCard>

                    <EventsCard>
                        <EventsData>
                            <DataDay>1</DataDay>
                            <DataMonth>Junho</DataMonth>
                        </EventsData>
                        <CardTitle>Dia da Ração</CardTitle>
                        <CardP>
                            Doamos várias rações neste dia, traga seu pet que ele não vai se arrepender!
                        </CardP>
                        <CardButtom>Saiba mais</CardButtom>
                    </EventsCard>
                </EventsWrapper>
            </Events>
        </>
    )
}

export default index
