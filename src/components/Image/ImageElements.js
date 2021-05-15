import styled from 'styled-components'

export const ImagemContainer = styled.div`
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

export const ImageContent = styled.div`
   background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%,
   rgba(0,0,0,0.6) 100%),
   linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
   width: 100%;
   height: 30%;
   position: absolute;
   top: 420px;
   left: 0;
   z-index: 999;
   color: #fff;
   display: flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
`

export const ImageTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 2rem;
    text-align:center;
    font-family: 'Roboto',sans-serif;
`

export const ImageP = styled.p`
    font-size:1.5rem;
    font-family: 'Pacifico', cursive;
`

