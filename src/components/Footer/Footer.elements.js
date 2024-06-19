import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #a40606;
  background-image: linear-gradient(315deg, #a40606 0%, #d98324 74%);
  color: white;
  padding: 2rem 0;
  text-align: center;
`;

export const FooterNav = styled.nav`
  margin: 0;
`;

export const FooterNavList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

export const FooterNavItem = styled.li`
  margin: 0.5rem;
`;

export const FooterNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: #d83e3e;
    transition: 0.3s ease-out;
  }
`;

export const FooterHr = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(to right, #FFA500, #FFFF00);
  margin: 2rem 0;
`;

export const FooterContactContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

export const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  align-items: center;
`;

export const FooterInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const FooterTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const FooterButton = styled.button`
  background: black;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #FF8000, #FFD700);
  }
`;

export const FooterCopyRight = styled.p`
  font-size: 0.875rem;
  margin-top: 1rem;
`;