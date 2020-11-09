import React from 'react'
import { FaInstagram, FaFacebook, FaBlog } from 'react-icons/fa'
import {
  FooterContainer, FooterWrap, FooterLinksContainer,
  FooterLinksWrapper, FooterLinkItems, FooterLinksTitle,
  FooterLink, SocialIconLink, SocialLogo, SocialMediaWrap,
  SocialIcons, SocialMedia, WebsiteRights
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink to="#">정보</FooterLink>
              <FooterLink to="#">업적</FooterLink>
              <FooterLink to="#">위치</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>Bless Music studio</SocialLogo>
            <WebsiteRights>블레스 뮤직 {new Date().getFullYear()} Copyright ⓒ Jangwonik All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Blog">
                <FaBlog />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
