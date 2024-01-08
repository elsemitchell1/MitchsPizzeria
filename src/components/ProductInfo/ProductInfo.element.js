import styled from 'styled-components';

export const ProductInfoSection = styled.div`
  display: flex;
  justify-content: center;
  background: #242424;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;

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
  margin: 24px;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ProductInfoCard = styled.div`
  background-color: #a40606;
  background-image: linear-gradient(270deg, #a40606 0%, #d98324 74%);
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 12px;
  height: auto;
  text-decoration: none;
  border-radius: 4px;

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductInfoCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: auto;
  width: 50%;
  padding: 24px;
  color: #fff;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    width: 100%;
  }
`;

export const ProductInfoCardImg = styled.div`
  width: 100%;
  margin: auto;
`;

export const ProductImg = styled.img`
  width: 100%;
  border-radius: 10px;
`

export const ProductInfoCardHeading = styled.h3`
  margin-bottom: 5px;
  font-size: 30px;
`;

export const ProductInfoCardCostContainer = styled.div`
  margin: auto 0;
`;

export const ProductInfoCardCost = styled.h4`
  font-size: 25px;
  margin: auto 20px;
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const ProductInfoCardQuantity = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  font-size: 16px;
`;

export const ProductInfoCardFeatures = styled.div`
  margin: auto 0 0;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const ProductInfoCardFeature = styled.p`
  margin: 10px 0;
`;

export const CartButtonWrapper = styled.div`
  display: flex;
  align-items: middle;
`;