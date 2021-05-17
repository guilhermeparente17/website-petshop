import styled from "styled-components";

export const Events = styled.div`
    width: 100%;
    height: 600px;
    background: #323232;
    display:flex;
    align-items:center;
    flex-flow: wrap column;
    border-bottom: 13px solid #fa5348;
    flex-wrap: wrap;

    @media screen and (max-width: 770px){
        height: 1400px;
    }
`
export const EventsTitle = styled.h1`
    margin: 80px 0 30px;
    color: #fff;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 770px){
        text-align:center;
    }
`
export const EventsSubTitle = styled.h2`
    margin: 0px 0 40px;
    color: #fff;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    text-align:center;
    
`
export const EventsWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;

    @media screen and (max-width: 770px){
        flex-flow: wrap column;
    }
`
export const EventsCard = styled.div`
    width: 250px;
    height: 350px;
    padding: 20px;
    color: #fff;
    
`
export const EventsData = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-flow: wrap column;
    margin-bottom: 50px;
    border-top: 1px solid #fff;
    margin: 30px 0 20px;
    color: #fa5348;
`
export const DataDay = styled.h1`
    margin-top: 40px;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 2.2rem;

`
export const DataMonth = styled.h2`
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 1.8rem;
`
export const CardTitle = styled.h1`
    font-size: 1.2rem;
    
`
export const CardP = styled.p`
    font-size: 1rem;
    margin: 10px 0 20px;
`
export const CardButtom = styled.button`
    width: 110px;
    height: 40px;
    background: #fff;
    color: #000;
    border: none;
    cursor: pointer;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: bold;

    transition: 0.4s ease;

    &:hover{
        background: #fa5348;
        transition: 0.4s ease;
        color: white;
    }
`