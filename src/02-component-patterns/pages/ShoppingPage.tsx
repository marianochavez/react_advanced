import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";


const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Patterns</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          quantity: 5,
          maxQuantity: 10,
        }}
      >
        {
          ({ counter, increaseBy, reset, isMaxQuantityReached, maxQuantity }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </div>
  );
};
