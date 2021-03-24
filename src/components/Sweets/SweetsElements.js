import styled from 'styled-components';

export const SweetsContainer = styled.div`
    background-color: black;
    min-height: 100vh;
`
export const SweetsH2 = styled.h2`
    padding-top: 3rem;
    text-align: center;
    color: white;
    font-size: 3rem;
    margin-bottom: 5rem;
`
export const SweetsContent = styled.div`
    max-width: 80%;
    margin: 0 auto;
    color: white;
    display: grid;
    grid-template-columns: repeat(3, auto);

    @media screen and (max-width: 1500px) {
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, auto);
        justify-content: center;
    }
`
export const SweetsElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
`
export const SweetsImg = styled.img`
    width: 70%;
    min-width: 350px;
    height: 350px;
    box-shadow: 8px 12px #e9ba23;
    margin-bottom: 2rem;
`
export const SweetsTextCont = styled.div`
    width: 80%;
`
export const SweetsTextHeader = styled.h4`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 1rem;
`
export const SweetsTextInfo = styled.p`
    font-size: clamp(1rem, 1.5vw, 2rem);
    margin-bottom: 1rem;
`
export const SweetsPrice = styled.p`
    font-size: 2rem;
    margin-bottom: 1rem;
`
export const SweetsBtn = styled.button`
    font-size: 1rem;
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
                                    