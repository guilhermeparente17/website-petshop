import styled from "styled-components";
import { FaDog } from 'react-icons/fa'

export const Services = styled.div`
    display: flex;
    justify-content:center;
    padding: 0 30px;
    height:660px;
    width: 100%;
    position: relative;
    z-index:1;

    @media screen and (max-width: 1070px){
        height: 1000px;
    }

    &:before {
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%,
        rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } 
`

export const FotoBg = styled.div`
    position: absolute;
    top:0;
    right: 0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Foto = styled.img`
    width: 100%;
    height:100%;
    -o-object-fit:cover;
    object-fit: cover;
    background: #232a34;
`

export const ServicesContent = styled.div`
    position: absolute;
    z-index: 999;
    color: #fff;
`
export const ServicesTitle = styled.h1`
    text-align: center;
    margin: 80px 0 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;

    @media screen and (max-width: 780px){
        margin: 40px 0 20px;
    }
    
`
export const ServicesSubTitle = styled.h2`
    margin: 0 0 50px;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    font-size: 1.5rem;

    @media screen and (max-width: 780px){
        margin: 0 0 10px;
    }

    
`
export const ServicesWrapper = styled.div`
    display: flex;
    flex-flow: wrap row;
    justify-content:center;
    align-items:center;

    
`
export const ServicesCard = styled.div`
    background: transparent;
    padding: 10px;
    width: 350px;
    height: 360px;
    border: 1px solid #fff;
    display: flex;
    flex-flow: wrap column;
    align-items:center;

    @media screen and (max-width: 780px){
        width: 250px;
        height: 260px;
        padding: 0;
    }
    
`
export const CardTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    text-align:center;

`
export const CardContent = styled.p`
    margin: 20px 0 0;
    font-family: 'Roboto', sans-serif;
    text-align:center;

    @media screen and (max-width: 780px){
        font-size: 0.7rem;
        margin: 0px 0 0;
    }
`
export const CardButtom = styled.button`
    margin: 20px 0 30px;
    width: 100px;
    height: 40px;
    background: #1C1C1C;
    border:none;
    color: #fff;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover{
        background: #363636;
        transition: 0.4s ease;
    }

    @media screen and (max-width: 780px){
        width: 80px;
    }
`
export const ServicesImg = styled.img`
    
`
export const Icon = styled(FaDog)`
    width: 30px;
    height: 30px;
    margin: 20px 0 50px;

    @media screen and (max-width: 780px){
        margin: 20px 0 20px;
    }
    
`