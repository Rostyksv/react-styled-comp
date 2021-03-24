import React from 'react';
import { Footerbg, FooterContainer, FooterP, FooterLinks, FooterLink } from './FooterElements';
import { 
    AiOutlineFacebook, 
    AiOutlineInstagram, 
    AiOutlineYoutube, 
    AiFillTwitterCircle, 
    AiOutlineLinkedin 
} from 'react-icons/ai';
const Footer = () => {
    return (
        <Footerbg>
            <FooterContainer>
                <FooterP to='#top'>Pizza</FooterP>
                <FooterLinks>
                    <FooterLink href='http://facebook.com' target='_blank'>
                        <AiOutlineFacebook />
                    </FooterLink>
                    <FooterLink href='/' target='_blank'>
                        <AiOutlineInstagram />
                    </FooterLink>
                    <FooterLink href='/' target='_blank'>
                        <AiOutlineYoutube />
                    </FooterLink>
                    <FooterLink href='/' target='_blank'>
                        <AiFillTwitterCircle />
                    </FooterLink>
                    <FooterLink href='/' target='_blank'>
                        <AiOutlineLinkedin />
                    </FooterLink>
                </FooterLinks>
            </FooterContainer>
        </Footerbg>
    )
}

export default Footer
