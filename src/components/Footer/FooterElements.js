import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footerbg = styled.div`
    background-color: rgb(31, 26, 26);
    min-height: 100px;
    display: flex;
    align-items: center;
`
export const FooterContainer = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 620px) {
        display: flex;
        flex-direction: column;
    }
`
export const FooterP = styled(Link)`
    font-size: clamp(2rem, 2.5vw, 3rem);
    color: white;
    text-decoration: none;
`
export const FooterLinks = styled.div`
font-size: clamp(2rem, 2.5vw, 3rem);
    color: white;
`
export const FooterLink = styled.a`
    color: white;
    margin-right: 1rem;
    &:last-child{
        margin-right: 0;
    }
`