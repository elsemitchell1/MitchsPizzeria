import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductTileSection = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #242424;
`;

export const ProductTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;

  @media screen and (max-width: 960px) {
    font-size: 35px;
  }
`;

export const ProductTileContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ProductTileCard = styled(Link)`
  background-color: #a40606;
  background-image: linear-gradient(270deg, #a40606 0%, #d98324 74%);
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  display: flex;
  max-width: 280px;
  margin: 12px;
  float: left;
  height: auto;
  text-decoration: none;
  border-radius: 4px;
  justify-content: center;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    &:hover {
      transform: none;
    }
  }
`;

export const ProductTileCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ProductTileCardImg = styled.div`
  margin-bottom: 24px;
  height: 200px;
  width: 240px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProductImg = styled.img`
  border-radius: 10px;
  display: flex;
`

export const ProductTileCardHeading = styled.h3`
  margin-bottom: 5px;
  font-size: 30px;
`;

export const ProductTileCardCost = styled.h4`
  font-size: 25px;
`;

export const ProductTileCardQuantity = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 16px;
`;

export const ProductTileCardFeatures = styled.div`
  margin: 0 auto 15px auto;
  align-items: center;
  text-align: center;
  color: #fff;
`;

export const ProductTileCardFeature = styled.p`
  margin: 10px auto;
  text-align: center;
  height: 80px;
`;