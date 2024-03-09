import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SectionText } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <SectionText>
        Contact Me:
      </SectionText>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:rgoenka2@illinois.edu">rgoenka2@illinois.edu</LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan>Thank you for visiting my website! <br /> Have a nice day! •‿• <br /> <i>Last updated on March 9, 2024</i></Slogan>
      </CompanyContainer>
      <SectionText>
      </SectionText>
    </FooterWrapper>
  );
};

export default Footer;
