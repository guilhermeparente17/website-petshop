import styled from "styled-components";

export const Welcome = styled.div`
    width: 100%;
    height: 380px;
    display:flex;
    flex-direction: column;
    align-items:center;
    background: #fff;
    text-align:center;
    
`
export const WelcomeTitle = styled.h2`
    margin: 60px 0px 20px;
    font-family: 'Roboto',sans-serif;
    font-size: 2.5rem;
    

    @media screen and (max-width: 600px){
        font-size: 1.5rem;
    }
`
export const WelcomeSubTitle = styled.h3`
    margin: 10px 0px 30px;
    font-family: 'Noto Sans TC', sans-serif;
    color: #fa5348;
    text-align: center;
    max-width: 900px;

    @media screen and (max-width: 600px){
        font-size: 0.8rem;
        max-width: 300px;
    }
`
export const WelcomeP = styled.p`
    font-family: 'Roboto',sans-serif;
    max-width: 700px;
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.2rem;
    margin: 0 20px 40px;
    

    @media screen and (max-width: 600px){
        font-size: 0.8rem;
        max-width: 300px;
    }
`
export const WelcomeButton = styled.button`
    width: 100px;
    height: 40px;
    background: #000;
    color: #fff;
    font-family: 'Roboto',sans-serif;
    font-size: 15px;
    cursor: pointer;

    &:hover{
        background: #1C1C1C;
    }

    @media screen and (max-width: 600px){
        width: 90px;
        height: 35px;
        font-size: 10px;
    }
`