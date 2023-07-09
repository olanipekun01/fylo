import React, { useEffect } from 'react';
import { StyledButton } from '../Button/Button.styles';
import Card from '../CardDiv/Card';
import TestimonialDiv from '../TestimonialDiv/TestimonialDiv';

import { StyledFirstSection, StyledFirstSectionFigure, 
  StyledFirstSectionH1, StyledFirstSectionIMG, 
  StyledFirstSectionP, StyledFirstSectionButton, 
  StyledSecondSection, StyledThirdSection, 
  StyledThirdSectionFigure, StyledThirdSectionH1, 
  StyledThirdSectionIMG, StyledThirdSectionP, 
  StyledCallToActionSpan, StyledCallToActionIcon,
  StyledCallToActionDiv, 
  StyledFourthSection,
  StyledQuoteIcon,
  StyledbackgroundImage,
  StyledDivWrapper,
  StyledThirdSectionDivWrapper,
  StyledMobilebackgroundImage} from './Hero.styles';



function Hero() {

  const cardData = [
    {
      id: 0,
      imageUrl: "./icon-access-anywhere.svg",
      headerText: "Access your files, anywhere",
      content: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."    
    },
    {
      id: 1,
      imageUrl: "./icon-security.svg",
      headerText: "Security you can trust",
      content: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."    
    },
    {
      id: 2,
      imageUrl: "./icon-collaboration.svg",
      headerText: "Real-time collaboration",
      content: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
      id: 3,
      imageUrl: "./icon-any-file.svg",
      headerText: "Store any type of file",
      content: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    },
  ]


  const testimonialData = [
    {
      id: 0,
      content: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      imageUrl: "./profile-1.jpg",
      profileName: "Satish Patel",
      workTitle: "Founder & CEO, Huddle"
    },
    {
      id: 1,
      content: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      imageUrl: "./profile-2.jpg",
      profileName: "Bruce McKenzie",
      workTitle: "Founder & CEO, Huddle"
    },
    {
      id: 2,
      content: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      imageUrl: "./profile-3.jpg",
      profileName: "Iva Boyd",
      workTitle: "Founder & CEO, Huddle"
    },
  ]
  return (
    <React.Fragment>
      <StyledFirstSection>
          <StyledFirstSectionFigure>
              <StyledFirstSectionIMG src="./illustration-intro.png"/>
          </StyledFirstSectionFigure>
          <StyledFirstSectionH1 style={{zIndex: '8'}}>
              All your files in one secure location, accessible anywhere.
          </StyledFirstSectionH1>

          <StyledFirstSectionP>
              Fylo stores all your most important files in one secure location. Access them wherever 
              you need, share and collaborate with friends family, and co-workers.
          </StyledFirstSectionP>
          <StyledFirstSectionButton>Get Started</StyledFirstSectionButton>
          
      </StyledFirstSection>
      <StyledbackgroundImage src="./bg-curvy-desktop.svg" />

      <StyledMobilebackgroundImage style={{zIndex: '3'}} src="./bg-curvy-mobile.svg"/>


      <StyledSecondSection>
        <StyledDivWrapper>
          {cardData.map(card => {
            return (<Card 
              key={card.id}
              imageUrl={card.imageUrl}
              headerText={card.headerText}
              content={card.content}
            />)
          })}
          </StyledDivWrapper>
      </StyledSecondSection>


      <StyledThirdSection>
          <StyledThirdSectionFigure>
              <StyledThirdSectionIMG src="./illustration-stay-productive.png"/>
          </StyledThirdSectionFigure>
          <StyledThirdSectionDivWrapper>
          <StyledThirdSectionH1>
            Stay productive, wherever you are
          </StyledThirdSectionH1>

          <div>
          <StyledThirdSectionP>
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
            storage needs.
          </StyledThirdSectionP>
          <StyledThirdSectionP>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email 
            attachments required.
          </StyledThirdSectionP>
          </div>
          <StyledCallToActionDiv>
            <StyledCallToActionSpan>
              See how Fylo works
            </StyledCallToActionSpan>
            <StyledCallToActionIcon src="./icon-arrow.svg"/>
          </StyledCallToActionDiv>
          </StyledThirdSectionDivWrapper>
          
      </StyledThirdSection>

      <StyledFourthSection>
        <StyledQuoteIcon src="./bg-quotes.png"/>
        {testimonialData.map( town => {
          return (
            <TestimonialDiv 
              key={town.id}
              content={town.content}
              imageUrl={town.imageUrl}
              profileName={town.profileName}
              workTitle={town.workTitle}
            />
          )
        }
        )}
        
          
      </StyledFourthSection>

    </React.Fragment>
  )
}


export default Hero; 