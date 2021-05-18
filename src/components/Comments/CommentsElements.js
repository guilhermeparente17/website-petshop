import styled from "styled-components";

export const Comments = styled.div`
    background: #000;
    display: flex;
    justify-content:none;
    align-items:none;
    padding: 0 30px;
    height:600px;
    width: 100%;
    position: relative;
    z-index:1;
    

    @media screen and (max-width: 768px){
        justify-content:center;
    }
`

export const CommentsBg = styled.div`
    position: absolute;
    top:0;
    right: 0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`

export const CommentsFoto = styled.img`
    width: 100%;
    height:100%;
    -o-object-fit:cover;
    object-fit: cover;
    background: #232a34;
    border-bottom: 12px solid  #fa5348;
`

export const CommentsContainer = styled.div`
    display: flex;
    flex-flow: wrap column;
    position: absolute;
    top: 110px;
    left: 150px;

    @media screen and (max-width: 500px){
        justify-content:center;
        text-align:center;
        left: 40px;
    }
`
export const CommentsCard = styled.div`
    width: 480px;
    height:180px;
    max-width: 1100px;
    background: #fff;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow: wrap row;
    margin: 10px 0 10px;

    @media screen and (max-width: 768px){
        width: 280px;
        height:180px;
    }
`
export const CommentsPerfil = styled.img`
    width:130px;
    height:130px;
    border-radius: 50%;
    margin: 10px 20px 0;

    @media screen and (max-width: 768px){
        width:80px;
        height:80px;
    }
`

export const CommentsData = styled.div`
    margin: 0 20px 0;
    display: flex;
    flex-flow: wrap column;
`
export const CommentsName = styled.h2`
    margin: 0 0 20px;
    font-family: 'Noto Sans TC', sans-serif;
    color: #fa5348;

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`
export const CommentsP = styled.p`
    font-size: 1.1rem;

    @media screen and (max-width: 768px){
        font-size: 1rem;
        margin-bottom: 20px;
    }
`
