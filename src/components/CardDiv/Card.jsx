import React from 'react'
import { StyledDivCard, StyledDivCardH1, StyledDivCardIMG, StyledDivCardP, StyledFirstSectionFigure } from '../Hero/Hero.styles'

export default function Card(props) {
  return (
    <StyledDivCard>
        <StyledFirstSectionFigure>
            <StyledDivCardIMG src={props.imageUrl} />
        </StyledFirstSectionFigure>
        <StyledDivCardH1>{props.headerText}</StyledDivCardH1>
        <StyledDivCardP>{props.content}</StyledDivCardP>
    </StyledDivCard>
  )
}
