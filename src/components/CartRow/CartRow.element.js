import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartRowContainer = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #242424;
`;

export const CartRowBubbleHeading = styled.div`
  background-color: #a40606;
  background-image: linear-gradient(90deg, #a40606 0%, #d98324 74%);
  height: 100px;
  display: flex;
  border-radius: 10px;
  margin: 10px 20px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const CartRowBubble = styled.div`
  background-color: #a40606;
  background-image: linear-gradient(90deg, #a40606 0%, #d98324 74%);
  height: 100px;
  display: flex;
  border-radius: 10px;
  margin: 10px 20px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: auto;
  }
`;

export const CartRowInfoContainer = styled.div`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 960px) {
    height: 25%;
    width: 90%;
    justify-content: right;
  }
`;

export const CartRowInfoHeading = styled.h2`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    margin: auto auto auto 10px;
  }
`;

export const CartRowImg = styled.img`
  width: auto;
  height: 90%;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const CartRowInfo = styled.h2`
  text-align: center;
  padding: 10px;
`

export const CheckOutButtonContainer = styled.div`
  display: flex;
  margin: 20px;
  justify-content: right;
`;

export const CheckOutTotal = styled.h1`
  color: #fff;
  margin-right: 50px;

  @media screen and (max-width: 960px) {
    font-size: 1.6rem;
    margin: auto 20px;
    align-items: middle;
  }
`;

export const CheckOutButton = styled(Link)`
  border-radius: 4px;
  background: #141414;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;

  &:hover {
      transition: all 0.3s ease-out;
      background: #ff4500;
  }
`;