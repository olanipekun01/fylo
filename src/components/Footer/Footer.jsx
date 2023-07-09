import React from 'react'
import { StyledDivCard, StyledFlexWrapper, StyledFooter, StyledItemImg, StyledItemText, StyledItemWrapper, StyledLogo, StyledSignUpButton, StyledSignUpDiv, StyledSignUpFieldset, StyledSignUpHeader, StyledSignUpInput, StyledSignUpParagraph } from './Footer.styles'

export default function Footer() {
  return (
    <StyledFooter>
        <StyledSignUpDiv>
            <StyledSignUpHeader>Get early access today</StyledSignUpHeader>
            <StyledSignUpParagraph>
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.</StyledSignUpParagraph>
            <StyledSignUpFieldset>
                <StyledSignUpInput placeholder="email@example.com" />
                <StyledSignUpButton>Get Started For Free</StyledSignUpButton>
            </StyledSignUpFieldset>
        </StyledSignUpDiv>

        <StyledLogo src="./logo.svg" />

        <StyledFlexWrapper>
            <StyledDivCard>
                <StyledItemWrapper>
                    <StyledItemImg src="./icon-location.svg" />
                    <StyledItemText width="270px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua
                    </StyledItemText>
                </StyledItemWrapper>

            </StyledDivCard>

            <StyledDivCard>
                <StyledItemWrapper>
                    <StyledItemImg src="./icon-phone.svg" />
                    <StyledItemText width="270px">
                        +1-543-123-4567
                    </StyledItemText>
                </StyledItemWrapper>

                <StyledItemWrapper>
                    <StyledItemImg src="./icon-email.svg" />
                    <StyledItemText width="270px">
                        example@fylo.com
                    </StyledItemText>
                </StyledItemWrapper>

            </StyledDivCard>


            <StyledDivCard className="others">
                <StyledItemWrapper>
                    <StyledItemText width="270px">
                        About Us
                    </StyledItemText>
                </StyledItemWrapper>

                <StyledItemWrapper>
                    <StyledItemText width="270px">
                        Jobs
                    </StyledItemText>
                </StyledItemWrapper>

                <StyledItemWrapper>
                    <StyledItemText width="270px">
                        Press
                    </StyledItemText>
                </StyledItemWrapper>

                <StyledItemWrapper>
                    <StyledItemText width="270px">
                        Blog
                    </StyledItemText>
                </StyledItemWrapper>

            </StyledDivCard>

            <StyledDivCard className="contact">
                <StyledItemWrapper>
                    <StyledItemText width="270px">
                        Contact Us
                    </StyledItemText>
                </StyledItemWrapper>

                <StyledItemWrapper>
                    <StyledItemText width="270px">
                        Terms
                    </StyledItemText>
                </StyledItemWrapper>

                <StyledItemWrapper>
                    <StyledItemText width="270px">
                        Privacy
                    </StyledItemText>
                </StyledItemWrapper>

                

            </StyledDivCard>


            <StyledDivCard>
                <StyledItemWrapper className="social_icons">
                    <StyledItemImg className="social_icons_img" src="./icon-facebook.svg" />
                    <StyledItemImg className="social_icons_img" src="./icon-twitter.svg" />
                    <StyledItemImg className="social_icons_img" src="./icon-instagram.svg" />
                </StyledItemWrapper>

            </StyledDivCard>



        </StyledFlexWrapper>
    </StyledFooter>
  )
}
