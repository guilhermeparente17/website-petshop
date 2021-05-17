import styled from "styled-components";

export const Notice = styled.div`
    width: 100%;
    height: 650px;
    display: flex;
    align-items: center;
    flex-flow: wrap column;
    text-align:center;
`
export const NoticeTitle = styled.h1`
    margin: 0px 0 10px;
    font-family: 'Roboto', sans-serif;
    color: #fa5348;

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
        max-width: 300px;
    }
`
export const NoticeSubTitle = styled.h2`
    margin: 20px 0 10px;
    font-family: 'Noto Sans TC', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 1rem;
        max-width: 300px;
    }
`
export const NoticeP = styled.p`
    margin: 20px 0 10px;
    font-family: 'Roboto', sans-serif;
    max-width: 700px;
    text-align:center;

    @media screen and (max-width: 768px){
        margin: 0 20px 0;
    }
`
export const NoticeButtom = styled.button`
    width: 100px;
    height: 40px;
    background: #fa5348;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.6s ease;
    font-family: 'Noto Sans TC', sans-serif;
    margin-top: 20px;

    &:hover{
        background: #AD2A21;
        transition: 0.6s ease;
    }

`
export const NoticeImg = styled.img`
    width: 550px;
    height: 290px;
    margin: 20px 0 0px;

    @media screen and (max-width: 768px){
        width: 300px;
        height: 190px;
    }
`