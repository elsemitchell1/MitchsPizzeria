import React from 'react';
import { useSelector } from 'react-redux';
import CartButton from '../CartButton/CartButton';
import {
  ProductTileSection,
  ProductTileWrapper,
  ProductHeading,
  ProductTileContainer,
  ProductTileCard,
  ProductTileCardInfo,
  ProductTileCardImg,
  ProductImg,
  ProductTileCardHeading,
  ProductTileCardCost,
  ProductTileCardQuantity,
  ProductTileCardFeatures,
  ProductTileCardFeature
} from './ProductTile.element';
import QuantityButton from '../QuantityButton/QuantityButton';

function ProductTile({productType}) {
  const products = useSelector((state) => state.products.products);
  const handleClick = (e) => {
    if(e.target.tagName === 'BUTTON' || e.target.tagName === 'A'){ 
      e.preventDefault();
    }
  };

  return (
    <ProductTileSection>
      <ProductTileWrapper>
        <ProductHeading>{productType} Options</ProductHeading>
        <ProductTileContainer>
          {products.map((product) => (
            product.productType === productType && (
              <ProductTileCard key={product.id} to={`/ProductInfo?name=${product.name}`} onClick={handleClick}>
                  <ProductTileCardInfo>
                      <ProductTileCardImg>
                          <ProductImg src={product.image} alt={`${product.name}`}/>
                      </ProductTileCardImg>
                      <ProductTileCardHeading>{product.name}</ProductTileCardHeading>
                      <ProductTileCardCost>{product.price.toLocaleString("en-CA", {style:"currency", currency:"CAD"})}</ProductTileCardCost>
                      <ProductTileCardQuantity>
                        Quantity: <QuantityButton product={product}/>
                      </ProductTileCardQuantity>
                      {product.productType === 'Pizza' &&
                        <ProductTileCardFeatures>
                            <ProductTileCardHeading>Description:</ProductTileCardHeading>
                                <ProductTileCardFeature>{product.description}</ProductTileCardFeature>
                        </ProductTileCardFeatures>}
                      <CartButton product={product}>Add to Cart</CartButton>
                </ProductTileCardInfo>
              </ProductTileCard>
            )
          ))}
        </ProductTileContainer>
      </ProductTileWrapper>
    </ProductTileSection>
  );
}
export default ProductTile;