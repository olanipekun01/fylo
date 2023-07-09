import React from 'react'
import { StyledProfileIMG, StyledProfileTitle, 
    StyledProfileWorkTitle, StyledTestimonialDivCard, 
    StyledTestimonialDivCardP, StyledTestimonialDivCardProfile,
    StyledProfileNameTitle } from '../Hero/Hero.styles'

export default function TestimonialDiv(props) {
  return (
    <StyledTestimonialDivCard>
        <StyledTestimonialDivCardP>
            {props.content}
        </StyledTestimonialDivCardP>

        <StyledTestimonialDivCardProfile>
            <StyledProfileIMG src={props.imageUrl} />
            <StyledProfileTitle>
                <StyledProfileNameTitle>{props.profileName}</StyledProfileNameTitle>
                <StyledProfileWorkTitle>{props.workTitle}</StyledProfileWorkTitle>
            </StyledProfileTitle>
        </StyledTestimonialDivCardProfile>
    </StyledTestimonialDivCard>
  )
}
