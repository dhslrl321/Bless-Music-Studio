import React from "react";
import { FaInstagram, FaFacebook, FaBlog } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinksTitle,
  FooterLink,
  SocialIconLink,
  SocialLogo,
  SocialMediaWrap,
  SocialIcons,
  SocialMedia,
  WebsiteRights,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/">Information</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle>Information</FooterLinksTitle>
              <FooterLink to="/tour">Interior</FooterLink>
              <FooterLink to="/tour">Location</FooterLink>
              <FooterLink to="/tour">Address</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle>Pricing</FooterLinksTitle>
              <FooterLink to="/pricing">Resevation</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/pricing">Refund Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>Bless Music studio</SocialLogo>
            <WebsiteRights>
              블레스 뮤직 {new Date().getFullYear()} Copyright ⓒ Jangwonik All
              rights reserved.
            </WebsiteRights>
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
  );
};

export default Footer;
