import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import {
  FooterContainer,
  FooterNav,
  FooterNavList,
  FooterNavItem,
  FooterNavLink,
  FooterHr,
  FooterContactContainer,
  FooterForm,
  FooterInput,
  FooterTextarea,
  FooterButton,
  FooterCopyRight
} from "./Footer.elements";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your message has been forwarded to me. I will get back to you as soon as possible! \n\nThanks, \nMitch");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <FooterContainer>
      <FooterNav>
        <FooterNavList>
          <FooterNavItem>
            <FooterNavLink to="/" exact>
              Home
            </FooterNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterNavLink to="/Pizza">
              Pizza
            </FooterNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterNavLink to="/Drinks">
              Drinks
            </FooterNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterNavLink to="/Desserts">
              Desserts
            </FooterNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterNavLink to="/Facts">
              Facts
            </FooterNavLink>
          </FooterNavItem>
        </FooterNavList>
      </FooterNav>

      <FooterHr />

      <FooterContactContainer>
        <h2>Contact Us</h2>
        <FooterForm ref={form} onSubmit={sendEmail}>
          <FooterInput name="user_name" type="text" placeholder="Your Name" required />
          <FooterInput name="user_email" type="email" placeholder="Your Email" required />
          <FooterTextarea name="message" rows="3" placeholder="Your Message" required />
          <FooterButton type="submit">Send Message</FooterButton>
        </FooterForm>
      </FooterContactContainer>

      <FooterHr />

      <FooterCopyRight>
        &copy; 2024 Mitch's Pizzeria. All rights reserved.
      </FooterCopyRight>
    </FooterContainer>
  );
};

export default Footer;