import { StyledFirstSectionButton, StyledFirstSectionH1, StyledFirstSectionP } from "../Hero/Hero.styles"
import styled from 'styled-components'
import { StyledHeaderLogo } from "../Header/Header.styles"
import { devices } from "../devices/Devices"

export const StyledFooter = styled.footer`
    background: hsl(216, 53%, 9%);
    /* height: 650px; */
    margin-top: -17px;
    padding: 0 18px;
    overflow: visible;
    position: relative;

`

export const StyledSignUpDiv = styled.div`
    background: hsl(217, 28%, 15%);
    width: 320px;
    border-radius: 12px;
    padding: 44px 11px;
    text-align: center;
    margin-top: -150px;
    z-index: 999;
    position: absolute;
    top: -40px;
    @media ${devices.laptop} {
       width: 530px;
       top: -100px;
       margin: 0 220px;
    }

`

export const StyledSignUpHeader = styled(StyledFirstSectionH1)`
    font-size: 20px;
    width: 100%;
`

export const StyledSignUpParagraph = styled(StyledFirstSectionP)`
    width: 270px;
    font-size: 14px;
    @media ${devices.laptop} {
        width: 470px;
        font-size: 11px;
    }
`

export const StyledSignUpFieldset = styled.fieldset`
    border: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    @media ${devices.laptop} {
        width: 95%;
        height: 37px;
        flex-direction: row;
    }

`

export const StyledSignUpInput = styled.input`
    width: 85%;
    height: 50px;
    border-radius: 50px;
    border: none;
    padding-left: 40px;
    font-size: 10px;
    @media ${devices.laptop} {
        width: 55%;
        height: 37px;
        margin-top: 10px;
    }
`

export const StyledSignUpButton = styled(StyledFirstSectionButton)`
    height: 50px;
    width: 100%;
    font-size: 13px;
    font-weight: 700;
    border: none;
    @media ${devices.laptop} {
        width: 35%;
        height: 40px;
        font-size: 9px;
    }
`

export const StyledLogo = styled(StyledHeaderLogo)`
    margin-top: 285px;
    width: 170px;
    float: left;
    margin-left: 20px;
    margin-bottom: 40px;
`

export const StyledFlexWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    clear: both;
    align-items: center;
    @media ${devices.laptop} {
        flex-direction: row;
        width: 1300px;
        align-items: flex-start;
    }
    
`

export const StyledDivCard = styled.div`
     &.others {
        margin-top: 50px;
        margin-left: -60px;
        @media ${devices.laptop} {
        margin-top: 0;
        }
    }
    &.contact {
        margin-top: 20px;
        margin-left: -60px;
        @media ${devices.laptop} {
        margin-top: 0;
        }
    }
`

export const StyledItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &.social_icons {
        width: 80px;
        margin-bottom: 30px;
    }
`

export const StyledItemImg= styled.img`
    height: 20px;
    margin-top: 20px;
    /* &.social_icons_img {
        border: 1px solid hsl(0, 0%, 100%);
        padding: 4px;
        border-radius: 50%;
    } */

`

export const StyledItemText= styled.p`
    width: ${(props) => props.width};
    /* width: 270px; */
    color: hsl(0, 0%, 100%);
    text-align: left;
    margin-left: 20px;
`

