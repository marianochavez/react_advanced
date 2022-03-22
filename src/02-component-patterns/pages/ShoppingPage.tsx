import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from '../interfaces/interfaces';

import "../styles/custom-styles.css";
import { useState } from 'react';

const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  quantity: number;
}

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductQuantityChange = ({ quantity, product }: { quantity: number, product: Product }) => {
    // console.log(quantity, product);
    
    quantity === 0 ? setShoppingCart(shoppingCart => {
      const newShoppingCart = { ...shoppingCart };
      delete newShoppingCart[product.id];
      return newShoppingCart;
    }) : setShoppingCart(shoppingCart => {
      const newShoppingCart = { ...shoppingCart };
      newShoppingCart[product.id] = { ...product, quantity };
      return newShoppingCart;
    });
    
  };

  return (
    <div>
      <h1>Patterns</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductQuantityChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{ width: "100px", }}
        // onChange={() => onProductQuantityChange(product)}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product1} className="bg-dark text-white" style={{
          width: "100px",
        }}>
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>

      <div>
        <code>
          {JSON.stringify(shoppingCart, null, 2)}
        </code>
      </div>
    </div>
  );
};
