import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Patterns</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          quantity: 5,
          maxQuantity: 10,
        }}
      >
        {
          ({ counter, increaseBy, reset, isMaxQuantityReached, maxQuantity }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              {
                counter !== 0 && (
                  <button onClick={() => increaseBy(-2)}>-2</button>
                )
              }
              {
                !isMaxQuantityReached && (
                  <button onClick={() => increaseBy(2)}>+2</button>
                )
              }

              <span>{counter} - {maxQuantity}</span>
            </>
          )
        }
      </ProductCard>
    </div>
  );
};
