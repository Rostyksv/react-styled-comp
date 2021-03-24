import styled from 'styled-components';
import { Link} from 'react-router-dom';

export const SidebarContainer = styled.div`
    position: fixed;
    width: 400px;
    height: 100%;
    background: #e9ba23;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.5s ease-in-out;
    right: ${({showSidebar}) => (showSidebar ? '0' : '-1000px')};
    display()

    @media screen and (max-width: 450px) {
        width: 100%;
    }
`
export const Icon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;
`
export const SidebarLink = styled(Link)`
    color: black;
    font-size: 40px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarRoute = styled(Link)`
    color: white;
    cursor: pointer;
    outline: none;
    background: red;
    text-decoration: none;
    padding: 15px 60px;
    transition: all 0.3s;

    &:hover{
        background: #e9ba23;
        color: black;
        cursor: pointer;
    }
`