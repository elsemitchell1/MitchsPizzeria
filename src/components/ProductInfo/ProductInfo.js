import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import {
  ProductInfoSection,
  ProductInfoWrapper,
  ProductHeading,
  ProductInfoContainer,
  ProductInfoCard,
  ProductInfoCardInfo,
  ProductInfoCardImg,
  ProductImg,
  ProductInfoCardHeading,
  ProductInfoCardCost,
  ProductInfoCardQuantity,
  ProductInfoCardFeatures,
  ProductInfoCardFeature,
  ProductInfoCardCostContainer,
  CartButtonWrapper
} from './ProductInfo.element';
import QuantityButton from '../QuantityButton/QuantityButton';
import { useSelector } from 'react-redux';

function ProductInfo() {
  const [queryParameters] = useSearchParams();
  const name = queryParameters.get('name');
  const products = useSelector((state) => state.products.products);
  const product = products.find((item) => item.name === name);

  const [total, setTotal] = useState(product.quantity ? product.price * product.quantity : 0);

  useEffect(() => {
    setTotal(product.price * product.quantity);
  }, [product.quantity, product.price]);
  return (
    <ProductInfoSection>
      <ProductInfoWrapper>
        <ProductHeading>{product.name}</ProductHeading>
        <ProductInfoContainer>
            <ProductInfoCard>
              <ProductInfoCardInfo>
                <ProductInfoCardImg>
                  <ProductImg src={product.image} alt={product.name}/>
                </ProductInfoCardImg>
              </ProductInfoCardInfo>
              <ProductInfoCardInfo>
                {product.productType === 'Pizza' &&
                <ProductInfoCardFeatures>
                    <ProductInfoCardHeading>Description:</ProductInfoCardHeading>
                      <ProductInfoCardFeature>{product.description}</ProductInfoCardFeature>
                </ProductInfoCardFeatures>}
                <ProductInfoCardCostContainer>
                    <ProductInfoCardCost>Price: {product.price.toLocaleString("en-CA", {style:"currency", currency:"CAD"})}</ProductInfoCardCost>
                    <ProductInfoCardQuantity>
                        Quantity: <QuantityButton product={product} />
                    </ProductInfoCardQuantity>
                    <CartButtonWrapper>
                        <ProductInfoCardCost>Total: {total.toLocaleString("en-CA", {style:"currency", currency:"CAD"})}</ProductInfoCardCost>
                        <CartButton product={product}>Add to Cart</CartButton>
                    </CartButtonWrapper>
                </ProductInfoCardCostContainer>
              </ProductInfoCardInfo>
            </ProductInfoCard>
        </ProductInfoContainer>
      </ProductInfoWrapper>
    </ProductInfoSection>
  );
}
export default ProductInfo;