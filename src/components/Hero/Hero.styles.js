import styled from 'styled-components'
import { devices } from '../devices/Devices'

export const StyledFirstSection = styled.section`
    margin-top: -16px;
    background: hsl(217, 28%, 15%);
    /* background: #fff; */
    text-align: center;
    padding: 23px 11px;
    /* position: relative; */
    z-index: -1;

    @media ${devices.laptop}{
        padding: 53px 50px;
        margin-top: -35px;
    }
`

export const StyledFirstSectionFigure = styled.figure`
    
`

export const StyledFirstSectionIMG = styled.img`
    width: 320px;
    margin-left: -15px;
    @media ${devices.laptop} {
        width: 640px;
    }
`

export const StyledFirstSectionH1 = styled.h1`
    color: hsl(0, 0%, 100%);
    width: 350px;
    font-size: 25px;
    text-align: center;
    position: relative;
    /* z-index: 3 !important; */
    display: block;
    @media ${devices.laptop} {
        width: 640px;
        font-size:36px;
        margin: 0 auto;
        z-index: 9999;
        position: relative;
    }
`

export const StyledFirstSectionP = styled.p`
    color: hsl(0, 2%, 88%);
    width: 320px;
    text-align: center;
    align-items: center;
    margin: 20px auto;
    z-index: 999;
    
    @media ${devices.laptop} {
        width: 530px;
        font-size: 18px;
        margin-top: 40px;
        position: relative;
    }
`

export const StyledFirstSectionButton = styled.button`
    color: hsl(0, 0%, 100%);
    font-weight: 700;
    font-size: 17px;
    background:  hsl(198, 60%, 50%);
    padding: 12px 80px;
    border-radius: 40px;
    border-color: hsl(198, 60%, 50%);
    margin-top: 30px;
    z-index: 999;

    @media ${devices.laptop} {
        padding: 12px 60px;
        margin-top: 10px;
        position: relative;
    }
`

export const StyledbackgroundImage = styled.img`
     display: none;
    @media ${devices.laptop} {
        display: block;
        width: 100%;
        position: absolute;
        bottom: -440px;
        left: 0;
        z-index: 2;
    }
`

export const StyledMobilebackgroundImage = styled.img`
    width: 100%;
    position: absolute;
    bottom: 190px;
    left: 0;
    @media ${devices.laptop} {
        
        display: none;
    }
`


//second section

export const StyledSecondSection = styled.section`
    text-align: center;
    background:  hsl(218, 28%, 13%);
    color: hsl(218, 28%, 13%);
    
`

export const StyledDivWrapper = styled.div`
    background:  hsl(218, 28%, 13%);
    padding: 23px 20px;
    @media ${devices.laptop} {
        padding: 23px 140px;
        display: inline-block;
        /* flex-direction: row;
        justify-content: space-between; */
        width: 100%;
        /* float: left; */
    }
`

export const StyledDivCard = styled.div`
    margin-top: 93px;
    background:  hsl(218, 28%, 13%);
    @media ${devices.laptop} {
        text-align: center;
        width: 330px;
        height: 200px;
        margin-top: 30px;
        margin-left: 35px;
        float: left;
    }
`

export const StyledDivCardIMG = styled.img`
    width: 50px;
    @media ${devices.laptop} {
        width: 40px;
    }
`

export const StyledDivCardH1 = styled(StyledFirstSectionH1)`
    font-size: 20px;
    @media ${devices.laptop} {
        font-size: 18px;
        text-align: center;
        margin-left: -155px;
        margin-right: 0px;
    }
`

export const StyledDivCardP = styled(StyledFirstSectionP)`
     @media ${devices.laptop} {
        width: 235px;
        font-size: 9px;
        margin-top: 0px;
    }
`


// third section

export const StyledThirdSection = styled(StyledFirstSection)`
    margin-top: 0px;
    background: hsl(218, 28%, 13%);
    text-align: center;
    padding: 23px 25px 23px 11px;
    clear: both;
    @media ${devices.laptop} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
`

export const StyledThirdSectionFigure = styled(StyledFirstSectionFigure)`
    
`

export const StyledThirdSectionIMG = styled(StyledFirstSectionIMG)`
    width: 320px;
    margin-left: -20px;
    @media ${devices.laptop} {
        width: 450px;
        margin-left: 0px;
    }
`
export const StyledThirdSectionDivWrapper = styled.div`
    @media ${devices.laptop} {
        text-align: left;
        padding: 0;
    }
`

export const StyledThirdSectionH1 = styled(StyledFirstSectionH1)`
    color: hsl(0, 0%, 100%);
    width: 350px;
    font-size: 19px;
    text-align: center;
    @media ${devices.laptop} {
        width: 170px;
        text-align: left;
        margin-left: 0px;
    }
`

export const StyledThirdSectionP = styled(StyledFirstSectionP)`
    color: hsl(0, 2%, 88%);
    width: 305px;
    text-align: left;
    align-items: center;
    margin: 20px auto;
    font-size: 14px;
    @media ${devices.laptop} {
        width: 470px;
    }
`
export const StyledCallToActionDiv = styled.div`
    text-decoration: underline;
    color: hsl(176, 68%, 64%);
    margin-left: -165px;

    @media ${devices.laptop} {
     margin-left: 0;
    }
    
`



export const StyledCallToActionSpan = styled.span`
    color: hsl(176, 68%, 64%);
    font-size: 14px;
    text-align: left;
    
`

export const StyledCallToActionIcon = styled.img`
    margin-bottom: -5px;
    margin-left: 5px;
`


export const StyledFourthSection = styled(StyledSecondSection)`
    padding: 63px 40px;
    position: relative;
    height: 850px;
    
    align-items: center;
    z-index: 333;
    @media ${devices.laptop} {
        padding: 63px 40px 250px 40px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        height: auto;
    }
`

export const StyledQuoteIcon = styled.img`
    width: 20px;
    position: absolute;
    left: 44px;
    top: 45px;
`

export const StyledTestimonialDivCard = styled.div`
    background: hsl(219, 30%, 18%);
    padding: 20px 15px;
    width: 260px;
    margin-bottom: 30px;
`


export const StyledTestimonialDivCardP = styled(StyledFirstSectionP)`
    color: hsl(0, 2%, 88%);
    width: 270px;
    text-align: left;
    font-size: 12px;
    align-items: center;
    margin: 0px 0;
`

export const StyledTestimonialDivCardProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 140px;
    margin-top: 10px;
`

export const StyledProfileIMG = styled.img`
    width: 35px;
    border-radius: 50%
`
export const StyledProfileTitle = styled.div`
    font-size: 12px;
    text-align: left;
    color: hsl(0, 0%, 100%);
`

export const StyledProfileNameTitle = styled.span`
    display: block;
`

export const StyledProfileWorkTitle = styled.span`
    color: hsl(0, 2%, 88%);
    font-size: 8px;
`
