import React from 'react'
import { StyledHeader, StyledHeaderLogo, StyledLi, StyledNavbar, StyledUl } from './Header.styles'

export default function Header() {
  return (
    <StyledHeader>
        <StyledHeaderLogo src="./logo.svg" />
        <StyledNavbar>
            <StyledUl>
                <StyledLi>Features</StyledLi>
                <StyledLi>Team</StyledLi>
                <StyledLi>Sign In</StyledLi>
            </StyledUl>
        </StyledNavbar>
    </StyledHeader>
  )
}
