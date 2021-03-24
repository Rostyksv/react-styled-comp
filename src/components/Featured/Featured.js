import styled from 'styled-components';

export const FeaturedContainer = styled.div`
    height: 100vh;
    max-height: 800px;
    background: url(${props => props.bg});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    
    h3{
        font-size: clamp(4rem, 5.5vw, 6rem);
    }
    p{
        font-size: clamp(1.5rem, 2.5vw, 3rem);
        margin-bottom: 1rem;
    }
`
export const FeaturedBtn = styled.button`
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

export const BtnsContainer = styled.div`
    position: absolute;
    width: 95%;
    display: flex;
    justify-content: space-between;
    z-index: 10;
`
export const SliderBtn = styled.button`
    background: none;
    border: none;
    outline: none;
    color: red;
    opacity: 0.5;
    font-size: 2rem;
    cursor: pointer;
`