import styled from 'styled-components'
import { devices } from '../devices/Devices'

export const StyledHeader = styled.header`
    padding: 23px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(217, 28%, 15%);
    margin-bottom: 0;


    @media ${devices.laptop}{
        padding: 53px 50px 0px 50px;
    }

    
`

export const StyledHeaderLogo = styled.img`
    width: 90px;

    @media ${devices.laptop}{
        width: 120px
    }
`

export const StyledNavbar = styled.nav``

export const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    font-size: 10px;
    list-style: none;
    @media ${devices.laptop} {
        width: 180px;
    }
`

export const StyledLi = styled.li`
    color: rgb(199, 196, 196);

`