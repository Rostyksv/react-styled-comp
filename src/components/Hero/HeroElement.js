import styled from 'styled-components';
import ImgBg from '../../images/pizza-3.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`
export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 10vw;
    padding: 0rem calc((100vw - 1300px)/2);
`
export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    text-transform: uppercase;
    color: white;
    line-heigth: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`
export const HeroH1 = styled.h1`
    font-size: clamp(3.5rem, 10vw, 5rem);
    margin-bootom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;
`

export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`
export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: red;
    color: white;
    transition: all 0.3s;

    &:hover{
        background: #e9ba23;
        color: black;
        cursor: pointer;
    }
`